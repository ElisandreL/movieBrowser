import logo from './logo-white.svg'; 

function Header() {
  return (
    <div className="title">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Movie </p>
        <p>Browser</p>
      </header>
    </div>
  );
}

export default Header;
