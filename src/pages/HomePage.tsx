import { useDynamicContext, useIsLoggedIn } from "@dynamic-labs/sdk-react-core";
import { Link } from "react-router-dom";
import "./Pages.css";

export default function HomePage() {
	const isLoggedIn = useIsLoggedIn();
	const { primaryWallet } = useDynamicContext();

	return (
		<div className="home">
			<h1>Explore Key Aspects of the Dynamic SDK</h1>

			<p className="lead">
				Sign in with an <strong>email</strong> or an existing <strong>wallet</strong>{" "}
				using the widget in the upper left.
				<br />
				No wallet? Dynamic automatically creates a embedded smart wallet for you.
			</p>
			<p className="tip">(Uses test networks only — no real funds required)</p>
			{isLoggedIn && primaryWallet && (
				<div className="welcome-message">
					<h3>You are logged in. Your account is {primaryWallet.address}.</h3>
				</div>
			)}

			<div className="features">
				<Feature
					title="NFT Minting"
					desc="Mint a demo NFT and watch the embedded wallet sign and pay gas."
					to="/mint"
				/>
				<Feature
					title="Multi-chain"
					desc="Switch networks to see the same flows on different chains."
					to="/chains"
				/>
				<Feature
					title="Account Abstraction"
					desc="Learn how gas is sponsored and transactions are bundled."
					to="/aa"
				/>
				<Feature
					title="Security & MFA"
					desc="Enable passkeys or TOTP to strengthen account access."
					to="/security"
				/>
				<Feature
					title="Send Money"
					desc="Try simple token transfers with clear fees or sponsored gas."
					to="/send"
				/>
			</div>
		</div>
	);
}

function Feature({ title, desc, to }: { title: string; desc: string; to: string }) {
	return (
		<Link to={to} className="featureCard">
			<h3 className="featureTitle">{title}</h3>
			<p className="featureDesc">{desc}</p>
		</Link>
	);
}
