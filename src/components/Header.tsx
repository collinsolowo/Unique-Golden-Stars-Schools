import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, GraduationCap } from 'lucide-react';

type NavLinkItem = {
  name: string;
  href: string;
  dropdown?: { name: string; href: string }[];
};

const NAV_LINKS: NavLinkItem[] = [
  { name: 'Home', href: '/' },
  {
    name: 'About',
    href: '/about',
    dropdown: [
      { name: 'History', href: '/about/history' },
      { name: "Founder's Note", href: '/about/founders-note' },
      { name: 'At a Glance', href: '/about/at-a-glance' },
    ],
  },
  {
    name: 'Schools',
    href: '/schools',
    dropdown: [
      { name: 'Nursery & Primary', href: '/schools/nursery-primary' },
      { name: 'Secondary', href: '/schools/secondary' },
    ],
  },
  { name: 'Academics', href: '/academics' },
  { name: 'Admissions', href: '/admissions' },
  { name: 'Student Life', href: '/student-life' },
  { name: 'News', href: '/news' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Careers', href: '/careers' },
];

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const [hoverDropdown, setHoverDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setOpenMobileDropdown(null);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-primary shadow-md' : 'bg-white/95 backdrop-blur-sm'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-sm">
                <img src="/images/logos/logo.jpeg" alt="" />
              </div>
              <div className="leading-tight">
                <div className="font-extrabold text-xs sm:text-sm md:text-base text-slate-800">
                  Unique Golden
                </div>
                <div className="font-extrabold text-xs sm:text-sm md:text-base text-blue-600">
                  Stars Schools
                </div>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => link.dropdown && setHoverDropdown(link.name)}
                    onMouseLeave={() => setHoverDropdown(null)}
                  >
                    <Link
                      to={link.href}
                      className={`inline-flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${isActive
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                        }`}
                    >
                      {link.name}
                      {link.dropdown && (
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${hoverDropdown === link.name ? 'rotate-180' : ''
                            }`}
                        />
                      )}
                    </Link>

                    {link.dropdown && hoverDropdown === link.name && (
                      <div className="absolute left-0 top-full mt-2 w-56 bg-primary rounded-xl shadow-xl border border-slate-100 overflow-hidden animate-fadeIn">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                to="/contact"
                className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-all"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden lg:inline">Contact</span>
              </Link>
              <Link
                to="/admissions"
                className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm hover:shadow transition-all"
              >
                Apply Now
              </Link>

              <button
                className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
                aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
                onClick={() => setIsMobileOpen(!isMobileOpen)}
              >
                {isMobileOpen ? (
                  <X className="w-6 h-6 text-slate-700" />
                ) : (
                  <Menu className="w-6 h-6 text-slate-700" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ${isMobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setIsMobileOpen(false)}
      />

      <aside
        className={`fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-50 lg:hidden transform transition-transform duration-300 ease-in-out shadow-2xl ${isMobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-between p-4 border-b border-slate-100">
            <Link
              to="/"
              className="flex items-center gap-2"
              onClick={() => setIsMobileOpen(false)}
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-sm">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div className="leading-tight">
                <div className="font-extrabold text-sm text-slate-800">Unique Golden</div>
                <div className="font-extrabold text-sm text-blue-600">Stars Schools</div>
              </div>
            </Link>
            <button
              className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
              onClick={() => setIsMobileOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-slate-700" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto py-4 px-2">
            {NAV_LINKS.map((link) => {
              const hasDropdown = !!link.dropdown;
              const isOpen = openMobileDropdown === link.name;
              const isActive = location.pathname === link.href;

              return (
                <div key={link.name} className="mb-1">
                  <div className="flex items-center">
                    <Link
                      to={link.href}
                      className={`flex-1 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${isActive
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-slate-700 hover:bg-slate-50'
                        }`}
                      onClick={() => !hasDropdown && setIsMobileOpen(false)}
                    >
                      {link.name}
                    </Link>
                    {hasDropdown && (
                      <button
                        className="p-3 rounded-lg hover:bg-slate-50 transition-colors"
                        onClick={() =>
                          setOpenMobileDropdown(isOpen ? null : link.name)
                        }
                        aria-expanded={isOpen}
                      >
                        <ChevronDown
                          className={`w-4 h-4 text-slate-600 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
                            }`}
                        />
                      </button>
                    )}
                  </div>

                  {hasDropdown && isOpen && (
                    <div className="mt-1 ml-4 space-y-1 animate-slideDown">
                      {link.dropdown!.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          className="block px-4 py-2.5 text-sm text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
                          onClick={() => setIsMobileOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="p-4 border-t border-slate-100 space-y-2">
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              onClick={() => setIsMobileOpen(false)}
            >
              <Phone className="w-4 h-4" />
              Contact Us
            </Link>
            <Link
              to="/admissions"
              onClick={() => setIsMobileOpen(false)}
              className=" btn-primary"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
