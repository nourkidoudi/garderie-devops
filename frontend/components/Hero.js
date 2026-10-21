export default function Hero({
  titre = 'Ma Garderie',
  slogan = 'Un lieu sûr et joyeux pour vos enfants',
  description = 'Bienvenue dans notre garderie.'
}) {
  return (
    <header id="accueil" className="hero">
      <div className="hero-text">
        <h1>{titre || 'Ma Garderie'}</h1>
        <h2>{slogan}</h2>
        <p>{description}</p>
      </div>
      <img className="hero-img" src="/hero.svg" alt="Enfants qui jouent" />
    </header>
  );
}
