import Logo from "../../../assets/Button-container.png"
import Style from "../Navbar/Navbar.module.css"

export default function Navbar() {

 return (
 <>

<nav className={Style.navbar}>
 <div className="container d-flex align-items-center justify-content-between ">

 <div>
 <img src={Logo} className={Style.navlogo} alt="logo" />
 </div>

 <ul className={`d-flex list-unstyled gap-4 mb-0 ms-auto me-5 ${Style.links}`}>
 <li><a className={`${Style.link} ${Style.activeLink}`} href="/">Home</a></li>
 <li><a href="#">Find Jobs</a></li>
 <li><a href="#">About Us</a></li>
 <li><a href="#">Contact</a></li>
 </ul>

 <div className="d-flex gap-3 align-items-center">
 <button className={Style.register}>Register</button>
 <button className={Style.signup}>Sign Up</button>
 </div>

 </div>
</nav>

 </>
 )
}