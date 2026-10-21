export default function Services({ services = [] }) {
  return (
    <section id="services" className="section">
      <h2>Nos services</h2>
      <div className="grid">
        {services.map((s) => (
          <article key={s.id} className="card">
            <div className="icone">{s.icone}</div>
            <h3>{s.titre}</h3>
            <p>{s.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
