import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import ContactPage from '@/pages/ContactPage';
import { validateInquiry } from '@/lib/inquiry';

afterEach(() => { cleanup(); vi.restoreAllMocks(); });
describe('inquiry failures and recovery', () => {
  it('accepts international names and rejects oversized or partial answers', () => {
    const data = { name: 'علي O’Connor', email: 'ali@example.com', company: '', service: 'ocean', message: 'Shipment information', math_answer: '2', website_url: '' };
    expect(validateInquiry(data, 2)).toEqual({});
    expect(validateInquiry({ ...data, math_answer: '2.1' }, 2).math).toBeDefined();
    expect(validateInquiry({ ...data, message: 'a'.repeat(1001) }, 2).message).toBeDefined();
    expect(validateInquiry({ ...data, company: 'a'.repeat(101) }, 2).company).toBeDefined();
  });
  it('associates errors with fields and focuses the first invalid field', async () => {
    vi.spyOn(window, 'scrollTo').mockImplementation(() => {});
    render(<ContactPage />);
    fireEvent.click(screen.getByRole('button', { name: 'Continue to WhatsApp' }));
    await waitFor(() => expect(screen.getByLabelText('Name *')).toHaveFocus());
    expect(screen.getByLabelText('Name *')).toHaveAttribute('aria-describedby', 'name-error');
    expect(screen.getByRole('alert')).toHaveTextContent('correct');
  });
  it('keeps a working draft link and entered data when a popup is blocked', async () => {
    vi.spyOn(window, 'scrollTo').mockImplementation(() => {});
    vi.spyOn(Math, 'random').mockReturnValue(0);
    const open = vi.spyOn(window, 'open').mockReturnValue(null);
    render(<ContactPage />);
    fireEvent.change(screen.getByLabelText('Name *'), { target: { value: 'علي' } });
    fireEvent.change(screen.getByLabelText('Email *'), { target: { value: 'ali@example.com' } });
    fireEvent.change(screen.getByLabelText('Message *'), { target: { value: 'Cargo from Guangzhou' } });
    fireEvent.change(screen.getByLabelText('What is 1 + 1? *'), { target: { value: '2' } });
    fireEvent.click(screen.getByRole('button', { name: 'Continue to WhatsApp' }));
    const link = await screen.findByRole('link', { name: 'Open your prepared inquiry in WhatsApp' });
    expect(link.getAttribute('href')).toContain('https://wa.me/96176985828?text=');
    expect(open).toHaveBeenCalledOnce();
    expect(screen.queryByText('Request Received')).toBeNull();
    fireEvent.click(screen.getByRole('button', { name: 'Edit inquiry' }));
    expect(screen.getByLabelText('Name *')).toHaveValue('علي');
  });
});
