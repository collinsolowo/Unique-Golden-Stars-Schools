import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const footerLinks = {
  about: [
    { name: 'History', href: '/about/history' },
    { name: "Founder's Note", href: '/about/founders-note' },
    { name: "MD's Note", href: '/about/managing-directors-note' },
    { name: 'At a Glance', href: '/about/at-a-glance' },
  ],
  academics: [
    { name: 'Curriculum', href: '/academics/curriculum' },
    { name: 'Calendar', href: '/academics/calendar' },
    { name: "Registrar's Office", href: '/academics/registrar' },
    { name: 'Exam Results', href: '/admissions/exams' },
  ],
  admissions: [
    { name: 'Apply Now', href: '/admissions/process' },
    { name: 'Tuition & Fees', href: '/admissions/tuition' },
    { name: 'Scholarships', href: '/admissions/tuition' },
    { name: 'Visit Campus', href: '/contact' },
  ],
  resources: [
    { name: 'News', href: '/news' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Careers', href: '/careers' },
    { name: 'Alumni', href: '/alumni' },
  ],
};

const socialLinks = [
  { name: 'Facebook', href: 'https://facebook.com/uniquegoldenstars', icon: Facebook },
  { name: 'Twitter', href: 'https://twitter.com/uniquegoldenstars', icon: Twitter },
  { name: 'Instagram', href: 'https://instagram.com/uniquegoldenstars', icon: Instagram },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/uniquegoldenstars', icon: Linkedin },
  { name: 'YouTube', href: 'https://youtube.com/uniquegoldenstars', icon: Youtube },
];

export default function Footer() {
  return (
    <footer className="bg-slate text-white">
      {/* Main Footer */}
      <div className="section-padding py-16">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-4">
              <Link to="/" className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-slate" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-xl text-white">Unique Golden</span>
                  <span className="font-bold text-xl text-primary">Stars Schools</span>
                </div>
              </Link>
              <p className="text-slate-400 mb-6 max-w-sm">
                Empowering minds, inspiring excellence in an environment for high expectations. 
                Nurturing future leaders through innovative, holistic education.
              </p>
              <div className="space-y-3">
                <a
                  href="mailto:info@uniquegoldenstars.edu.ng"
                  className="flex items-center gap-3 text-slate-400 hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  info@uniquegoldenstars.edu.ng
                </a>
                <a
                  href="tel:+2349063135544"
                  className="flex items-center gap-3 text-slate-400 hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  +234 906 313 5544
                </a>
                <div className="flex items-start gap-3 text-slate-400">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>25 Unity Avenue, Ikeja, Lagos, Nigeria</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h4 className="font-semibold text-white mb-4">About</h4>
              <ul className="space-y-3">
                {footerLinks.about.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-slate-400 hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="font-semibold text-white mb-4">Academics</h4>
              <ul className="space-y-3">
                {footerLinks.academics.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-slate-400 hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="font-semibold text-white mb-4">Admissions</h4>
              <ul className="space-y-3">
                {footerLinks.admissions.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-slate-400 hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-slate-400 hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700">
        <div className="section-padding py-6">
          <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
              <Link to="/about/policies" className="hover:text-primary transition-colors">
                Codes & Policies
              </Link>
              <Link to="/faqs" className="hover:text-primary transition-colors">
                FAQs
              </Link>
              <Link to="/about/safeguarding" className="hover:text-primary transition-colors">
                Safeguarding
              </Link>
              <Link to="/contact" className="hover:text-primary transition-colors">
                Contact
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-slate transition-all duration-300 hover:rotate-[360deg]"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-700">
        <div className="section-padding py-4">
          <div className="container-wide text-center text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} Unique Golden Stars Schools. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
