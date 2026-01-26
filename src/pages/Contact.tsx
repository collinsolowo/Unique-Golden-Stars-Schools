import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import AnimateOnScroll from '../components/AnimateOnScroll';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const campuses = [
    {
      name: 'Main Campus, Ikeja',
      address: '25 Unity Avenue, Ikeja, Lagos',
      phone: ['08037193587', '08023050901'],
      email: 'info@uniquegoldenstars.edu.ng',
    },
    {
      name: 'VGC Campus, Ajah',
      address: 'Road 12, Victoria Garden City (VGC), Ajah, Lagos',
      phone: ['08172013114', '08023421214'],
      email: 'vgc@uniquegoldenstars.edu.ng',
    },
    {
      name: 'Lekki Campus',
      address: 'Plot 105A, Hakeem Dickson Way, Lekki Phase 1, Lagos',
      phone: ['08172013127', '08023869783'],
      email: 'lekki@uniquegoldenstars.edu.ng',
    },
  ];

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Unique Golden Stars Schools. Find our locations, contact information, and send us a message."
      />

      {/* Page Header */}
      <section className="py-20 bg-muted/30">
        <div className="section-padding">
          <div className="container-wide">
            <Breadcrumbs items={[{ label: 'Contact Us' }]} className="mb-6" />
            <h1 className="text-4xl font-bold text-slate mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-slate-light max-w-2xl">
              We'd love to hear from you. Reach out to us through any of our channels or fill out 
              the contact form below.
            </p>
          </div>
        </div>
      </section>

      {/* Campus Locations */}
      <section className="py-20 bg-white">
        <div className="section-padding">
          <div className="container-wide">
            <AnimateOnScroll animation="fade-up" delay={100}>
              <h2 className="text-3xl font-bold text-slate mb-12 text-center">
                Our Campuses
              </h2>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {campuses.map((campus, index) => (
                <AnimateOnScroll key={campus.name} animation="fade-up" delay={(index + 1) * 100}>
                  <div className="bg-white rounded-2xl p-6 shadow-soft">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold text-slate">{campus.name}</h3>
                    </div>
                    <div className="space-y-3">
                      <p className="text-slate-light text-sm flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-slate-muted flex-shrink-0 mt-0.5" />
                        {campus.address}
                      </p>
                      <div className="space-y-1">
                        {campus.phone.map((phone) => (
                          <a
                            key={phone}
                            href={`tel:${phone}`}
                            className="text-slate-light text-sm flex items-center gap-2 hover:text-blue transition-colors"
                          >
                            <Phone className="w-4 h-4 text-slate-muted" />
                            {phone}
                          </a>
                        ))}
                      </div>
                      <a
                        href={`mailto:${campus.email}`}
                        className="text-slate-light text-sm flex items-center gap-2 hover:text-blue transition-colors"
                      >
                        <Mail className="w-4 h-4 text-slate-muted" />
                        {campus.email}
                      </a>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map and Contact Form */}
      <section className="py-20 bg-muted/30">
        <div className="section-padding">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Map Placeholder */}
              <AnimateOnScroll animation="fade-right" delay={100}>
                <div className="bg-white rounded-2xl p-6 shadow-soft">
                  <h3 className="text-xl font-bold text-slate mb-4">Find Us</h3>
                  <div className="aspect-[16/9] bg-muted rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-slate-muted mx-auto mb-4" />
                      <p className="text-slate-muted">Interactive map coming soon</p>
                      <p className="text-sm text-slate-light mt-2">
                        Visit our campuses at Ikeja, VGC, or Lekki
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-slate-light">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-sm">Mon - Fri: 8am - 5pm</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-light">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-sm">Sat: 9am - 2pm</span>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Contact Form */}
              <AnimateOnScroll animation="fade-left" delay={100}>
                <div className="bg-white rounded-2xl p-8 shadow-soft">
                  <h3 className="text-xl font-bold text-slate mb-6">Send Us a Message</h3>
                  
                  {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <p className="text-green-800">Thank you! Your message has been sent successfully.</p>
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3">
                      <AlertCircle className="w-5 h-5 text-red-600" />
                      <p className="text-red-800">Something went wrong. Please try again.</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        className="w-full px-4 py-3 rounded-xl border border-muted focus:border-primary focus:outline-none transition-colors"
                        required
                      />
                      <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        className="w-full px-4 py-3 rounded-xl border border-muted focus:border-primary focus:outline-none transition-colors"
                        required
                      />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 rounded-xl border border-muted focus:border-primary focus:outline-none transition-colors"
                    />
                    <select
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-muted focus:border-primary focus:outline-none transition-colors"
                      required
                    >
                      <option value="">Select Subject</option>
                      <option value="admissions">Admissions</option>
                      <option value="academics">Academics</option>
                      <option value="careers">Careers</option>
                      <option value="general">General Inquiry</option>
                      <option value="feedback">Feedback</option>
                    </select>
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-muted focus:border-primary focus:outline-none transition-colors resize-none"
                      required
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary inline-flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
