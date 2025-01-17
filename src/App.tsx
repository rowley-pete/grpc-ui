import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { VersionResponse } from './generated/api';
import { GrpcWebFetchTransport } from '@protobuf-ts/grpcweb-transport';
import { ApiServiceClient } from './generated/api.client';

function App() {

  const transport = new GrpcWebFetchTransport({
    baseUrl: "http://localhost:5241"
  });

  const [apiVersion, setApiVersion] = useState<VersionResponse | undefined>();

  const apiClient = new ApiServiceClient(transport);

  useEffect(() => {
    getVersions();
  }, []);

  const getVersions = async () => {
    if (apiClient) {
      const apiVersionRequest = await apiClient.getVersion({}, {});

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

export default App;
