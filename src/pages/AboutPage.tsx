import React, { useContext, useEffect, useState } from 'react';
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import { GrpcClientContext } from '../providers/GrpcClientContextProvider';
import { VersionResponse } from '../generated/api';

const AboutPage: React.FC = () => {

  const grpcClients = useContext(GrpcClientContext);

  if (!grpcClients) {
    return <div>Loading...</div>;
  }

  const [apiVersion, setApiVersion] = useState<VersionResponse | undefined>();

  useEffect(() => {
    getVersions();
  }, []);

  const getVersions = async () => {
    if (grpcClients.apiClient) {
      const apiVersionRequest = await grpcClients.apiClient.getVersion({}, {});

      setApiVersion(apiVersionRequest.response);
    }
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + gRPC Web Server</h1>
      <p>gRPC Server API Version: {apiVersion?.version}</p>
    </>
  );
};

export default AboutPage;