import { render, screen, waitFor, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { SiteApp } from '@/App.tsx';

describe('site without optional trackers', () => {
  beforeEach(() => { vi.spyOn(window, 'scrollTo').mockImplementation(() => {}); });
  afterEach(() => { cleanup(); vi.restoreAllMocks(); });
  it('shows the existing homepage with crawlable contact links and no consent gate', async () => {
    render(<MemoryRouter><SiteApp /></MemoryRouter>);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Shipping from China to Lebanon');
    expect(screen.getAllByRole('link', { name: 'Contact Us' })[0]).toHaveAttribute('href', '/contact');
    await waitFor(() => expect(document.title).toBe('China to Lebanon Shipping & Logistics | Counter 88'));
    expect(screen.queryByText('Cookie Preferences')).not.toBeInTheDocument();
    expect(document.querySelector('script[src*="googletagmanager"]')).toBeNull();
  });
  it('makes the form available without storage consent and links map previews to the saved coordinates', () => {
    render(<MemoryRouter initialEntries={['/contact']}><SiteApp /></MemoryRouter>);
    expect(screen.getByRole('button', { name: 'Continue to WhatsApp' })).toBeInTheDocument();
    expect(document.querySelectorAll('iframe')).toHaveLength(2);
    expect(screen.getByTitle('Counter 88 Elissar office map preview')).toHaveAttribute('src', 'https://maps.google.com/maps?q=33.92636708425874%2C35.62379759104614&z=17&output=embed');
    expect(screen.getByRole('link', { name: 'Open Counter 88 Elissar office coordinates in Google Maps' })).toHaveAttribute('href', 'https://www.google.com/maps/search/?api=1&query=33.92636708425874%2C35.62379759104614');
    expect(screen.getByRole('link', { name: 'Open Guangzhou location coordinates in Google Maps' })).toHaveAttribute('href', 'https://www.google.com/maps/search/?api=1&query=23.124991841243056%2C113.14749019822027');
    expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute('href', 'https://counter-88.com/contact');
  });
});
