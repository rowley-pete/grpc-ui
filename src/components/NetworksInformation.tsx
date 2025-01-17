import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { Container, Grid2, Typography, useTheme } from '@mui/material';
import { GrpcClientContext } from '../providers/GrpcClientContextProvider';
import { ConnectedNetwork } from '../generated/network';
import { Empty } from '../generated/google/protobuf/empty';
import { useStreamingSubscription } from '../hooks/useStreamingSubscription';
import FlashingNetwork from './FlashingNetwork';
import SubscriptionStatus from './SubscriptionStatus';

const NetworksInformation: React.FC = () => {
  const theme = useTheme();
  const grpcClients = useContext(GrpcClientContext);
  const { subscribe } = useStreamingSubscription();

  const [networks, setNetworks] = useState<ConnectedNetwork[]>([]);
  const networksRef = useRef<ConnectedNetwork[]>(networks);
  const [networkUpdates, setNetworkUpdates] = useState<Record<string, number>>({});

  useEffect(() => {
    networksRef.current = networks;
  }, [networks]);

  const handleMessage = (network: ConnectedNetwork) => {
    const networkName = networksRef.current.find(i => i.name === network.name);
    if (!networkName) {
      setNetworks(prev => [...prev, network]);
    }
    setNetworkUpdates(prev => ({ ...prev, [network.name]: Date.now() }));

    console.log('Received network update:', network);
  }

  const subscribeFn = useCallback((signal: AbortSignal) => {
    if (!grpcClients?.networkClient) {
      throw new Error('Network client is not available.');
    }
    return grpcClients.networkClient.subscribeNetwork({}, { abort: signal });
  }, [grpcClients]);

  const { isSubscribed } = subscribe<Empty, ConnectedNetwork>({
    subscribeFn,
    handleMessage,
    retryDelay: 1000,
    alwaysRetry: true
  });

  return (
    <Container>
      <Grid2 container>
        <Grid2>
          <Typography gutterBottom variant='h4' component="div" color={theme.palette.primary.dark}>
            Networks <SubscriptionStatus isSubscribed={isSubscribed} tooltip='Network subscription status' />
          </Typography>
        </Grid2>
      </Grid2>
      <Grid2 container>
        <Grid2 size={{ xs: 12 }}>
          {networks.map((network: ConnectedNetwork) => (
            <FlashingNetwork key={network.name} network={network} updateTime={networkUpdates[network.name]} />
          ))}
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default NetworksInformation;