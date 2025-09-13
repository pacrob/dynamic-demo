import { Link } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
	return (
		<nav className="main-nav">
			<Link to="/">Home</Link>
			<Link to="/mint">NFT Minting Demo</Link>
			<Link to="/chains">Supported Chains Demo</Link>
			<Link to="/aa">Account Abstraction Demo</Link>
			<Link to="/security">Security Demo</Link>
			<Link to="/send">Sending Money Demo</Link>
		</nav>
	);
}
