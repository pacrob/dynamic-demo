import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";

const environmentId = import.meta.env.VITE_DYNAMIC_ENV_ID;

const rootEl = document.getElementById("root");
if (!rootEl) {
	throw new Error("Missing #root element");
}
createRoot(rootEl).render(
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
);
