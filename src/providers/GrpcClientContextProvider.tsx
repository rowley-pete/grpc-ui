import { createContext, ReactNode, useMemo } from 'react';
import { ApiServiceClient } from '../generated/api.client';
import { GrpcWebFetchTransport } from '@protobuf-ts/grpcweb-transport';

interface GrpcClients {
  apiClient: ApiServiceClient | undefined;
}

interface GrpcClientProviderProps {
  children: ReactNode;
}

const GrpcClientContext = createContext<GrpcClients | undefined>(undefined);

const GrpcClientContextProvider: React.FC<GrpcClientProviderProps> = ({ children }) => {

  const transport = new GrpcWebFetchTransport({
    baseUrl: import.meta.env.VITE_GRPC_API_URL
  });

  const contextValue = useMemo(
    () => ({
      apiClient: new ApiServiceClient(transport),
    }),
    []
  );

  return <GrpcClientContext.Provider value={contextValue}>{children}</GrpcClientContext.Provider>;
};

export { GrpcClientContextProvider, GrpcClientContext };