function Navbar() {
    return(
        <nav className="navbar">
            <div className="nav-logo">
                <span className="logo-mark">X</span>
                <span>
                    <strong>NEXORA</strong>
                    <small>GAMING HUB</small>
                </span>
            </div>

            <div className="nav-links">
                <a href="#home">Home</a>
                <a href="#games">Games</a>
                <a href="#pricing">Pricing</a>
                <a href="#gallery">Gallery</a>
                <a href="#contact">Contact</a>
            </div>

            <a href="#booking" className="nav-button">BOOK NOW</a>
        </nav>
    );
}

export default Navbar;