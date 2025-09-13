import { Link } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
	return (
		<nav className="main-nav">
			<Link to="/">Home</Link>
			<Link to="/mint">NFT Minting</Link>
			<Link to="/chains">Multi-Chain</Link>
			<Link to="/aa">Account Abstraction</Link>
			<Link to="/security">Security</Link>
			<Link to="/send">Sending Funds</Link>
		</nav>
	);
}
