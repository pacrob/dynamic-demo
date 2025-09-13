import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { DynamicContextProvider } from '@dynamic-labs/sdk-react-core';
import { EthereumWalletConnectors } from '@dynamic-labs/ethereum';
import App from './App.tsx'

const environmentId = import.meta.env.VITE_DYNAMIC_ENV_ID;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <DynamicContextProvider
          settings={{
            environmentId,
            walletConnectors: [EthereumWalletConnectors],
          }}
        >
        <App />
      </DynamicContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
