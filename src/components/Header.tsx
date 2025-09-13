import "./Header.css";
import { DynamicWidget } from "@dynamic-labs/sdk-react-core";

import Navigation from "./Navigation";

function Header() {
	return (
		<header>
			<DynamicWidget />
			<Navigation />
		</header>
	);
}

export default Header;
