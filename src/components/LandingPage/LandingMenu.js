import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { firebaseAuth } from "../auth";

function LandingMenu({ name, url, url2, name2 }) {
	const [logged, setUser] = useState(null);

	function userCheck() {
		firebaseAuth().onAuthStateChanged((user) => {
			if (user) {
				setUser(true);
			} else {
				setUser(false);
			}
		});
	}

	userCheck();

	return (
		<nav className="header">
			<div className="header__logo">
			<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 width="200" height="30" viewBox="0 0 101.968 101.968">
<g>
	<g>
		<path d="M24.715,47.432L7.968,64.86v29.406c0,0.828,0.671,1.5,1.5,1.5h20.334c0.828,0,1.5-0.672,1.5-1.5V49.158l-4.69-1.726
			H24.715z"/>
		<path d="M66.135,61.1H45.801c-0.828,0-1.5,0.672-1.5,1.5v31.666c0,0.828,0.672,1.5,1.5,1.5h20.334c0.829,0,1.5-0.672,1.5-1.5V62.6
			C67.635,61.772,66.964,61.1,66.135,61.1z"/>
		<path d="M101.724,29.49c-0.777,0.406-1.652,0.621-2.53,0.621c-1.276,0-2.521-0.45-3.5-1.27l-3.694-3.088l-13.365,14.58v53.934
			c0,0.828,0.672,1.5,1.5,1.5h20.334c0.829,0,1.5-0.672,1.5-1.5v-64.93C101.885,29.387,101.81,29.445,101.724,29.49z"/>
		<path d="M57.797,54.094c1.144,0.419,2.424,0.108,3.248-0.788l30.839-33.643l7.217,6.032c0.353,0.294,0.847,0.349,1.254,0.136
			c0.407-0.214,0.646-0.648,0.605-1.107L99.396,7.235c-0.055-0.625-0.606-1.086-1.231-1.029l-17.49,1.563
			c-0.458,0.041-0.846,0.354-0.982,0.791C79.646,8.706,79.631,8.854,79.644,9c0.026,0.294,0.167,0.572,0.403,0.769l7.229,6.043
			L57.98,47.769L24.535,35.463c-1.118-0.41-2.373-0.121-3.198,0.735l-20.5,21.333c-1.148,1.195-1.11,3.095,0.084,4.242
			c0.583,0.561,1.332,0.837,2.079,0.837c0.788,0,1.574-0.309,2.164-0.921l19.141-19.92L57.797,54.094z"/>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>

				<h3>StalkStock</h3>
			</div>
			{logged === false ? (
				<ul className="header__menu">
					<Link to={url}>
						<li>
							<button
								type="submit"
								className="header__button-register"
							>
								{name}
							</button>
						</li>
					</Link>
					<Link to={url2}>
						<li>
							<button
								type="submit"
								className="header__button-register"
							>
								{name2}
							</button>
						</li>
					</Link>
				</ul>
			) : (
				<Link to="/dashboard">
					<button type="submit" className="header__button-register">
						DASHBOARD
					</button>
				</Link>
			)}
		</nav>
	);
}
LandingMenu.propTypes = {
	url: PropTypes.string,
	url2: PropTypes.string,
	name: PropTypes.string,
	name2: PropTypes.string,
};

export default LandingMenu;
