import { fireEvent, render, screen, cleanup, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, describe, expect, it, vi } from 'vitest';
import Navigation from '@/components/Navigation';
import RouteScroll from '@/components/RouteScroll';

afterEach(() => { cleanup(); vi.restoreAllMocks(); });
describe('navigation edge cases', () => {
  it('does not throw when the URL fragment contains malformed escapes', () => {
    expect(() => render(<MemoryRouter initialEntries={['/#%E0%A4%A']}><RouteScroll /></MemoryRouter>)).not.toThrow();
  });
  it('opens an accessible modal and restores focus when closed', async () => {
    render(<MemoryRouter><Navigation /></MemoryRouter>);
    const trigger = screen.getByRole('button', { name: 'Toggle menu' });
    trigger.focus(); fireEvent.click(trigger);
    expect(await screen.findByRole('dialog', { name: 'Main navigation' })).toBeInTheDocument();
    fireEvent.keyDown(document.activeElement!, { key: 'Escape' });
    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
    expect(trigger).toHaveFocus();
  });
});
