import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

describe('Page d\'accueil Ma Garderie', () => {
  test('le Hero affiche le titre « Ma Garderie »', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { level: 1, name: 'Ma Garderie' })).toBeInTheDocument();
  });

  test('la Navbar affiche le nom « Ma Garderie »', () => {
    render(<Navbar />);
    expect(screen.getByText('Ma Garderie')).toBeInTheDocument();
  });
});
