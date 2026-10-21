'use client';

import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';

// Appels relatifs : Next.js relaie /api/* vers le backend Express (voir next.config.js).
const API = '';

export default function Home() {
  const [garderie, setGarderie] = useState(null);
  const [services, setServices] = useState([]);
  const [activites, setActivites] = useState([]);
  const [erreur, setErreur] = useState(null);

  useEffect(() => {
    async function charger() {
      try {
        const [g, s, a] = await Promise.all([
          fetch(`${API}/api/garderie`).then((r) => r.json()),
          fetch(`${API}/api/services`).then((r) => r.json()),
          fetch(`${API}/api/activites`).then((r) => r.json())
        ]);
        setGarderie(g);
        setServices(s);
        setActivites(a);
      } catch (e) {
        setErreur("Impossible de joindre l'API : " + e.message);
      }
    }
    charger();
  }, []);

  return (
    <>
      <Navbar nom={garderie?.nom} />
      <main>
        <Hero titre={garderie?.nom} description={garderie?.description} slogan={garderie?.slogan} />
        {erreur && <p className="erreur">{erreur}</p>}
        <Services services={services} />
        <section id="activites" className="section">
          <h2>Nos activités</h2>
          <ul className="activites">
            {activites.map((a) => (
              <li key={a.id}>
                <strong>{a.horaire}</strong> — {a.nom}
              </li>
            ))}
          </ul>
        </section>
      </main>
      <footer id="contact" className="footer">
        {garderie && (
          <p>
            {garderie.nom} · {garderie.adresse} · {garderie.telephone} · {garderie.horaires}
          </p>
        )}
      </footer>
    </>
  );
}
