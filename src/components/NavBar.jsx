import "./styles/NavBar.css"
import logo from "../assets/dynamacore_logo.PNG"

export default function NavBar(props) {
	return (
		<div className="main-nav-container">
			<nav className="main-nav">
				<div className="main-title">
					<img src={logo} alt="" />
					<h1 >Dynamacore</h1>
				</div>
				<ul className="main-nav-menu">
					<li>Home</li>
					<li>Gallery</li>
					<li>Services</li>
					<li>About</li>
				</ul>
			</nav>
		</div>
	)
}