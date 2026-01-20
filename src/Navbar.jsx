function Navbar({ setPage }) {
  return (
    <nav className="dark-nav">
      <div className="nav-left">
        <span className="logo-text">ST-GYM</span>
      </div>

      <ul>
        <li><button onClick={() => setPage("home")}>Home</button></li>
        <li><button onClick={() => setPage("about")}>About</button></li>
        <li><button onClick={() => setPage("services")}>Services</button></li>
        <li><button onClick={() => setPage("contact")}>Contact</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
