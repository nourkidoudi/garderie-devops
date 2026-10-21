export default function Navbar({ nom = 'Ma Garderie' }) {
  return (
    <nav className="navbar">
      <div className="brand">
        <img src="/logo.svg" alt="Logo" width="36" height="36" />
        <span className="brand-name">{nom}</span>
      </div>
      <ul className="menu">
        <li><a href="#accueil">Accueil</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#activites">Activités</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
