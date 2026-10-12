import { useState, useEffect } from 'react';
import { Phone, MapPin, CheckCircle } from 'lucide-react';
import { validateInquiry, inquiryUrl } from '@/lib/inquiry';



const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', service: 'ocean', message: '',
    website_url: '', math_answer: ''
  });
  const [mathQuestion, setMathQuestion] = useState({ num1: 0, num2: 0 });
  const [errors, setErrors] = useState<Record<string, string | null>>({});
  const [submitted, setSubmitted] = useState(false);
  const [draftUrl, setDraftUrl] = useState('');

  const generateMath = () => {
    setMathQuestion({ num1: Math.floor(Math.random() * 10) + 1, num2: Math.floor(Math.random() * 10) + 1 });
  };

  useEffect(() => { generateMath(); window.scrollTo(0, 0); }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (formData.website_url) return;
    const nextErrors = validateInquiry(formData, mathQuestion.num1 + mathQuestion.num2);
    setErrors(nextErrors);
    const first = Object.keys(nextErrors)[0];
    if (first) {
      document.getElementById(first === 'math' ? 'math_answer' : first)?.focus();
      return;
    }
    const url = inquiryUrl(formData);
    setDraftUrl(url);
    try { window.open(url, '_blank', 'noopener,noreferrer'); } catch { /* The visible draft link remains available. */ }
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    const field = e.target.name === 'math_answer' ? 'math' : e.target.name;
    if (errors[field]) setErrors({ ...errors, [field]: null });
  };

  const inputClass = (field: string) =>
    `w-full px-4 sm:px-6 py-3 sm:py-4 bg-background/50 rounded-xl border ${errors[field] ? 'border-secondary' : 'border-border'} text-foreground focus:border-primary outline-none transition-all placeholder-muted-foreground/40 text-sm sm:text-base`;

  return (
    <div className="min-h-screen bg-background pt-24 md:pt-32 pb-20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 sm:w-72 sm:h-72 bg-blue-600/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-20 right-10 w-80 h-80 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <span className="text-secondary font-bold uppercase tracking-widest text-sm">Get in Touch</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 mb-4 sm:mb-6">Contact Counter 88 Logistics</h1>
          <p className="text-muted-foreground text-sm sm:text-lg max-w-2xl mx-auto">
            Contact our Lebanon and Guangzhou teams for China to Lebanon shipping quotes. Share your goods, packed weight and dimensions, origin and destination.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-12">
          {/* Left: Contact info */}
          <div className="space-y-4 sm:space-y-8">
            <div className="glass-panel p-4 sm:p-6 rounded-2xl flex items-center group hover:bg-muted/50 transition-colors">
              <div className="p-3 sm:p-4 rounded-xl bg-navy-dark mr-4 sm:mr-6 border border-border text-primary group-hover:text-foreground transition-colors flex-shrink-0">
                <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest">24/7 Support</p>
                <a href="tel:+96176985828" className="text-base sm:text-lg md:text-xl font-bold text-foreground mt-1 hover:text-primary transition-colors">+961 76 98 58 28</a>
              </div>
            </div>

            <div className="glass-panel p-4 sm:p-6 md:p-8 rounded-2xl">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="p-3 sm:p-4 rounded-xl bg-navy-dark mr-4 sm:mr-6 border border-border text-secondary">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground">Headquarters</h3>
              </div>
              <div className="space-y-4 sm:space-y-8">
                <div>
                  <h4 className="text-primary font-bold uppercase tracking-wider text-sm mb-2">Elissar Office — Lebanon</h4>
                  <p className="text-muted-foreground text-sm sm:text-base mb-3">Elissar Main Road - El Khoury Center<br />+961 76 98 58 28</p>
                  <div className="rounded-xl overflow-hidden h-40 sm:h-48 md:h-56 w-full border border-border">
                    <a href="https://www.google.com/maps/search/?api=1&query=33.92636708425874%2C35.62379759104614" target="_blank" rel="noopener noreferrer" aria-label="Open Counter 88 Elissar office coordinates in Google Maps" className="relative block h-full w-full group"><iframe src="https://maps.google.com/maps?q=33.92636708425874%2C35.62379759104614&z=17&output=embed" title="Counter 88 Elissar office map preview" width="100%" height="100%" loading="lazy" tabIndex={-1} aria-hidden="true" referrerPolicy="no-referrer-when-downgrade" className="pointer-events-none border-0" /><span className="absolute bottom-0 inset-x-0 bg-background/90 text-primary text-sm font-semibold px-4 py-2 text-center group-hover:bg-background">Counter 88 — Elissar Office · Open in Google Maps</span></a>
                  </div>
                </div>
                <div>
                  <h4 className="text-primary font-bold uppercase tracking-wider text-sm mb-2">Guangzhou — General Location</h4>
                  <p className="text-muted-foreground text-sm sm:text-base mb-3">Guangzhou, China</p>
                  <div className="rounded-xl overflow-hidden h-40 sm:h-48 md:h-56 w-full border border-border">
                    <a href="https://www.google.com/maps/search/?api=1&query=23.124991841243056%2C113.14749019822027" target="_blank" rel="noopener noreferrer" aria-label="Open Guangzhou location coordinates in Google Maps" className="relative block h-full w-full group"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236154.56735818126!2d113.14749019822027!3d23.124991841243056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3402f895e36ea9d3%3A0xe3891b62529b073e!2sGuangzhou%2C%20Guangdong%20Province%2C%20China!5e0!3m2!1sen!2slb!4v1600000000000" title="Guangzhou location map preview" width="100%" height="100%" loading="lazy" tabIndex={-1} aria-hidden="true" referrerPolicy="no-referrer-when-downgrade" className="pointer-events-none border-0" /><span className="absolute bottom-0 inset-x-0 bg-background/90 text-primary text-sm font-semibold px-4 py-2 text-center group-hover:bg-background">Open in Google Maps</span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="glass-panel p-5 sm:p-8 md:p-10 rounded-3xl border-t-4 border-secondary relative h-fit">
            {submitted ? (
              <div className="text-center py-12 animate-fade-up">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-green-500" />
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-foreground mb-2">Continue in WhatsApp</h4>
                <p className="text-muted-foreground mb-8 px-4">
                  Your inquiry is prepared. Send it in WhatsApp to contact us. If no window opened, use the link below. Your message is not sent until you send it in WhatsApp.
                </p>
                <a href={draftUrl} target="_blank" rel="noopener noreferrer" className="inline-block text-primary underline font-bold mb-6">Open your prepared inquiry in WhatsApp</a>
                <button onClick={() => setSubmitted(false)} className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold uppercase tracking-wider hover:opacity-90 transition-colors shadow-lg">
                  Edit inquiry
                </button>
              </div>
            ) : (
              <form noValidate onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Prepare Your WhatsApp Inquiry</h3>
                {Object.values(errors).some(Boolean) && <p role="alert" className="text-secondary">Please correct the highlighted fields before continuing.</p>}
                <div className="hidden"><input name="website_url" value={formData.website_url} onChange={handleChange} tabIndex={-1} autoComplete="off" /></div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2" htmlFor="name">Name <span className="text-secondary">*</span></label>
                    <input id="name" maxLength={100} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} required name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className={inputClass('name')} />
                    {errors.name && <p id="name-error" className="text-secondary text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2" htmlFor="company">Company</label>
                    <input id="company" maxLength={100} aria-invalid={!!errors.company} aria-describedby={errors.company ? 'company-error' : undefined} name="company" value={formData.company} onChange={handleChange} placeholder="Company Name" className={inputClass('company')} />
                    {errors.company && <p id="company-error" className="text-secondary text-xs mt-1">{errors.company}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2" htmlFor="email">Email <span className="text-secondary">*</span></label>
                    <input id="email" maxLength={254} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined} required name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email Address" className={inputClass('email')} />
                    {errors.email && <p id="email-error" className="text-secondary text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2" htmlFor="service">Service</label>
                    <select id="service" name="service" value={formData.service} onChange={handleChange} className={`${inputClass('service')} appearance-none`}>
                      <option value="ocean">Ocean Freight</option>
                      <option value="air">Air Freight</option>
                      <option value="road">Road Transport</option>
                      <option value="custom">Custom Solution</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2" htmlFor="message">Message <span className="text-secondary">*</span></label>
                  <textarea id="message" maxLength={1000} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-error' : undefined} required name="message" value={formData.message} onChange={handleChange} placeholder="Describe your shipment needs..." rows={4} className={inputClass('message')} />
                  {errors.message && <p id="message-error" className="text-secondary text-xs mt-1">{errors.message}</p>}
                </div>
                <div>
                  <label htmlFor="math_answer" className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
                    What is {mathQuestion.num1} + {mathQuestion.num2}? <span className="text-secondary">*</span>
                  </label>
                  <input id="math_answer" maxLength={3} aria-invalid={!!errors.math} aria-describedby={errors.math ? 'math-error' : undefined} required name="math_answer" value={formData.math_answer} onChange={handleChange} placeholder="Your answer" type="text" inputMode="numeric" autoComplete="off" className={inputClass('math')} />
                  {errors.math && <p id="math-error" className="text-secondary text-xs mt-1">{errors.math}</p>}
                </div>
                <button type="submit" disabled={mathQuestion.num1 === 0} className="w-full gradient-red text-secondary-foreground py-3 sm:py-4 rounded-xl font-bold uppercase tracking-wider hover:shadow-[0_0_30px_hsl(var(--red)/0.4)] transition-all text-sm sm:text-base">
                  Continue to WhatsApp
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
