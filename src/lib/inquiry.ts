export interface Inquiry { name: string; email: string; company: string; service: string; message: string; math_answer: string; website_url: string }
export function validateInquiry(data: Inquiry, answer: number) {
  const errors: Record<string, string> = {};
  if (!data.name.trim()) errors.name = 'Name is required';
  else if (data.name.trim().length > 100) errors.name = 'Name must be at most 100 characters';
  if (!data.email.trim()) errors.email = 'Email is required';
  else if (data.email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) errors.email = 'Enter a valid email address';
  if (data.company.length > 100) errors.company = 'Company must be at most 100 characters';
  if (data.message.trim().length < 10) errors.message = 'Message must be at least 10 characters';
  else if (data.message.length > 1000) errors.message = 'Message must be at most 1,000 characters';
  if (!['ocean', 'air', 'road', 'custom'].includes(data.service)) errors.service = 'Choose a valid service';
  if (!/^\d+$/.test(data.math_answer.trim()) || Number(data.math_answer) !== answer || answer < 2) errors.math = 'Incorrect math answer';
  return errors;
}
export function inquiryUrl(data: Inquiry) {
  const text = 'New website inquiry\n\nName: ' + data.name.trim() + '\nCompany: ' + (data.company.trim() || 'N/A') + '\nEmail: ' + data.email.trim() + '\nService: ' + data.service.toUpperCase() + '\n\nMessage:\n' + data.message.trim();
  return 'https://wa.me/96176985828?text=' + encodeURIComponent(text);
}
