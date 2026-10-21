import './globals.css';

export const metadata = {
  title: 'Ma Garderie',
  description: 'Garderie pour enfants - accueil, repas, éveil et jeux'
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
