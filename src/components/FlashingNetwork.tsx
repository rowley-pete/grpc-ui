import React, { useEffect, useState } from 'react';
import { ConnectedNetwork } from '../generated/network';

interface FlashingNetworkProps {
  network: ConnectedNetwork;
  updateTime?: number;
}

const FlashingNetwork: React.FC<FlashingNetworkProps> = ({ network, updateTime }) => {
  const [flashClass, setFlashClass] = useState('');

  useEffect(() => {
    if (updateTime) {
      setFlashClass(` flash-${updateTime}`);
      const timeout = setTimeout(() => setFlashClass(''), 500);
      return () => clearTimeout(timeout);
    }
  }, [updateTime]);

  return (
    <div className={`network${flashClass}`} title={network.ipAddresses.join('\n')}>
      {network.name} : {network.description} : {network.ipAddresses?.[0]}
    </div>
  );
};

export default FlashingNetwork;