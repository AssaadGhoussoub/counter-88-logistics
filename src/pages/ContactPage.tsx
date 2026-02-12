import { useState, useEffect } from 'react';
import { Phone, MapPin, CheckCircle, ShieldAlert } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const WHATSAPP_NUMBER = "96176985828";

const ContactPage = () => {
  const navigate = useNavigate();
  const hasCookieConsent = (() => {
    const consent = localStorage.getItem('counter88_cookie_consent');
    if (!consent) return false;
    try {
      const parsed = JSON.parse(consent);
      return parsed.necessary === true;
    } catch {
      return false;
    }
  })();
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', service: 'ocean', message: '',
    website_url: '', math_answer: ''
  });
  const [mathQuestion, setMathQuestion] = useState({ num1: 0, num2: 0 });
  const [errors, setErrors] = useState<Record<string, string | null>>({});
  const [submitted, setSubmitted] = useState(false);

  const generateMath = () => {
    setMathQuestion({ num1: Math.floor(Math.random() * 10) + 1, num2: Math.floor(Math.random() * 10) + 1 });
  };

  useEffect(() => { generateMath(); window.scrollTo(0, 0); }, []);

  useEffect(() => {
    document.title = 'Counter 88 Logistics | Contact Us';
    return () => { document.title = 'Counter 88 Logistics | Secure Shipping'; };
  }, []);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    else if (!/^[A-Za-z\s]+$/.test(formData.name)) newErrors.name = "Name must contain only letters";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email address";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.length < 10) newErrors.message = "Message must be at least 10 characters";
    if (parseInt(formData.math_answer) !== mathQuestion.num1 + mathQuestion.num2) newErrors.math = "Incorrect math answer";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.website_url) return;
    if (validate()) {
      const text = `👋 *New Inquiry from Website*\n\n👤 *Name:* ${formData.name}\n🏢 *Company:* ${formData.company || 'N/A'}\n📧 *Email:* ${formData.email}\n📦 *Service:* ${formData.service.toUpperCase()}\n\n📝 *Message:*\n${formData.message}`;
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
      setSubmitted(true);
    } else {
      generateMath();
      setFormData(prev => ({ ...prev, math_answer: '' }));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: null });
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 mb-4 sm:mb-6">Contact Secure Desk</h1>
          <p className="text-muted-foreground text-sm sm:text-lg max-w-2xl mx-auto">
            Our global team is available 24/7 to verify shipments and provide quotes.
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
                <a href="tel:+96176985828" className="text-base sm:text-lg md:text-xl font-bold text-foreground mt-1 hover:text-primary transition-colors">Call Us</a>
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
                  <h4 className="text-primary font-bold uppercase tracking-wider text-sm mb-2">Lebanon Office</h4>
                  <p className="text-muted-foreground text-sm sm:text-base mb-3">Elyssar Main Road - El Khoury Center<br />+961 76 98 58 28</p>
                  <div className="rounded-xl overflow-hidden h-40 sm:h-48 md:h-56 w-full border border-border">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1528.605116331826!2d35.622633884997484!3d33.92588720234621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f3f7e081d5191%3A0x372b72e99b85cb7e!2sCounter%2088!5e1!3m2!1sen!2sus!4v1767955146373!5m2!1sen!2sus" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Lebanon Office Map" />
                  </div>
                </div>
                <div>
                  <h4 className="text-primary font-bold uppercase tracking-wider text-sm mb-2">China Office</h4>
                  <p className="text-muted-foreground text-sm sm:text-base mb-3">Guangzhou, China</p>
                  <div className="rounded-xl overflow-hidden h-40 sm:h-48 md:h-56 w-full border border-border">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236154.56735818126!2d113.14749019822027!3d23.124991841243056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3402f895e36ea9d3%3A0xe3891b62529b073e!2sGuangzhou%2C%20Guangdong%20Province%2C%20China!5e0!3m2!1sen!2slb!4v1600000000000" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="China Office Map" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="glass-panel p-5 sm:p-8 md:p-10 rounded-3xl border-t-4 border-secondary relative h-fit">
            {!hasCookieConsent ? (
              <div className="text-center py-12 animate-fade-up">
                <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShieldAlert className="h-10 w-10 text-secondary" />
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-foreground mb-2">Cookie Consent Required</h4>
                <p className="text-muted-foreground mb-8 px-4">
                  Please accept the necessary cookies before contacting us. This ensures your data is handled securely.
                </p>
                <button
                  onClick={() => {
                    localStorage.removeItem('counter88_cookie_consent');
                    window.location.reload();
                  }}
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold uppercase tracking-wider hover:opacity-90 transition-colors shadow-lg"
                >
                  Open Cookie Settings
                </button>
              </div>
            ) : submitted ? (
              <div className="text-center py-12 animate-fade-up">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-green-500" />
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-foreground mb-2">Request Received</h4>
                <p className="text-muted-foreground mb-8 px-4">
                  Thank you! We have opened WhatsApp for you. We will contact you shortly.
                </p>
                <button onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', company: '', service: 'ocean', message: '', website_url: '', math_answer: '' }); generateMath(); }} className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold uppercase tracking-wider hover:opacity-90 transition-colors shadow-lg">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Secure Inquiry Form</h3>
                <div className="hidden"><input name="website_url" value={formData.website_url} onChange={handleChange} tabIndex={-1} autoComplete="off" /></div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2" htmlFor="name">Name <span className="text-secondary">*</span></label>
                    <input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className={inputClass('name')} />
                    {errors.name && <p className="text-secondary text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2" htmlFor="company">Company</label>
                    <input id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Company Name" className={inputClass('company')} />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2" htmlFor="email">Email <span className="text-secondary">*</span></label>
                    <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email Address" className={inputClass('email')} />
                    {errors.email && <p className="text-secondary text-xs mt-1">{errors.email}</p>}
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
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Describe your shipment needs..." rows={4} className={inputClass('message')} />
                  {errors.message && <p className="text-secondary text-xs mt-1">{errors.message}</p>}
                </div>
                <div>
                  <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
                    What is {mathQuestion.num1} + {mathQuestion.num2}? <span className="text-secondary">*</span>
                  </label>
                  <input name="math_answer" value={formData.math_answer} onChange={handleChange} placeholder="Your answer" type="number" className={inputClass('math')} />
                  {errors.math && <p className="text-secondary text-xs mt-1">{errors.math}</p>}
                </div>
                <button type="submit" className="w-full gradient-red text-secondary-foreground py-3 sm:py-4 rounded-xl font-bold uppercase tracking-wider hover:shadow-[0_0_30px_hsl(var(--red)/0.4)] transition-all text-sm sm:text-base">
                  Send Secure Inquiry
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
