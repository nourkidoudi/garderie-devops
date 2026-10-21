const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/api/garderie', (req, res) => {
  res.json({
    nom: 'Ma Garderie',
    slogan: 'Un lieu sûr et joyeux pour vos enfants',
    description:
      'Ma Garderie accueille les enfants de 1 à 5 ans dans un cadre chaleureux, avec une équipe qualifiée et des activités adaptées à chaque âge.',
    adresse: 'Tozeur, Tunisie',
    telephone: '+216 00 000 000',
    email: 'contact@magarderie.tn',
    horaires: 'Du lundi au vendredi, 7h30 - 18h00'
  });
});

app.get('/api/services', (req, res) => {
  res.json([
    { id: 1, icone: '🏠', titre: 'Garde journalière', description: 'Accueil sécurisé de 7h30 à 18h00.' },
    { id: 2, icone: '🍎', titre: 'Repas équilibrés', description: 'Repas et goûters frais préparés chaque jour.' },
    { id: 3, icone: '🎨', titre: 'Éveil et jeux', description: 'Activités pédagogiques pour développer la créativité.' },
    { id: 4, icone: '😴', titre: 'Espace sieste', description: 'Un espace calme pour le repos des petits.' }
  ]);
});

app.get('/api/activites', (req, res) => {
  res.json([
    { id: 1, nom: 'Peinture et dessin', horaire: '09:00' },
    { id: 2, nom: 'Musique et chansons', horaire: '10:30' },
    { id: 3, nom: 'Jeux en plein air', horaire: '15:00' },
    { id: 4, nom: 'Contes et lecture', horaire: '16:30' }
  ]);
});

app.listen(PORT, '0.0.0.0', () => console.log(`API Ma Garderie sur le port ${PORT}`));
