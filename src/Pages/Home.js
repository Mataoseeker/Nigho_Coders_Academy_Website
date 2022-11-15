import "../Styles/Home.css";
import {Link} from "react-router-dom";
const Home = () => {
    return ( 
        <div>
            <nav className="navbar-container">
            <Link to="/" className="header-title">N.C.A</Link>

            <Link to="/" className="mid-header">Home</Link>
            <Link to="/services" className="mid-header">Services</Link>
            <Link to="/stories" className="mid-header">Stories</Link>

            <Link to="/signin" className="right-header">Sign In</Link>
            <Link to="/signup" className="right-headers">Create Account</Link>
            </nav>
            <section>
                <div className="home-container">
                    <div className="home-text">
                        <h1>Learn how to code</h1>
                        <p>We provide online tutorial on FrontEnd development <br />
                        languages like HTML, CSS and JavaScript. We also tutor <br />
                        on different JavaScript frameworks like ReactJs, jQuery, Vue etc.</p>

                        <div className="home-btn">
                            <Link to="/signup" className="btn">Learn More</Link>
                            <Link to="/signin" className="btn1">Sign In</Link>
                        </div>
                        </div>
                        <div className="block">
                            <img src = {require ("./image3.avif")} alt="work space" className="home-image"/>
                        </div>
                </div>
            </section>
            <footer className="footer-container">
                <p>&copy; Copyright Nigho Coders Academy || 2021</p>
            </footer>
        </div>
     );
}
 
export default Home;