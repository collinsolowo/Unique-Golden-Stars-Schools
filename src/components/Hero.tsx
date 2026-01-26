import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Play, GraduationCap } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax effect on scroll
    const handleScroll = () => {
      if (!heroRef.current || !imageRef.current) return;
      
      const scrollY = window.scrollY;
      const heroHeight = heroRef.current.offsetHeight;
      
      if (scrollY < heroHeight) {
        const parallaxValue = scrollY * 0.5;
        imageRef.current.style.transform = `translateY(${parallaxValue}px) scale(${1 + scrollY * 0.0002})`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <div
          ref={imageRef}
          className="absolute inset-0 transition-transform duration-100 ease-out"
        >
          <img
            src="/images/hero/hero-bg.jpg"
            alt="Golden Stars Students"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full section-padding pt-32 pb-20">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="max-w-2xl">
              {/* Badge */}
              <AnimateOnScroll animation="fade-up" delay={100}>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm font-medium text-slate">
                    Excellence in Education Since 2000
                  </span>
                </div>
              </AnimateOnScroll>

              {/* Headline */}
              <AnimateOnScroll animation="fade-up" delay={200}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate leading-tight mb-6">
                  Where Young
                  <span className="block text-blue">Minds</span>
                  <span className="block">
                    <span className="text-primary">Soar</span>
                  </span>
                </h1>
              </AnimateOnScroll>

              {/* Subheadline */}
              <AnimateOnScroll animation="fade-up" delay={300}>
                <p className="text-lg text-slate-light mb-8 max-w-lg">
                  Fostering academic excellence, creativity, and character in a nurturing 
                  environment. Join us in shaping the leaders of tomorrow.
                </p>
              </AnimateOnScroll>

              {/* CTA Buttons */}
              <AnimateOnScroll animation="fade-up" delay={400}>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/admissions/process"
                    className="btn-primary inline-flex items-center gap-2 group"
                  >
                    Apply Now
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    to="#"
                    onClick={(e) => {
                      e.preventDefault();
                      alert('E-brochure download coming soon!');
                    }}
                    className="btn-outline inline-flex items-center gap-2 group"
                  >
                    <Download className="w-5 h-5" />
                    Download E-brochure
                  </Link>
                  <button
                    onClick={() => alert('Virtual tour coming soon!')}
                    className="flex items-center gap-2 px-6 py-3 text-slate font-medium hover:text-blue transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-blue/10 flex items-center justify-center group-hover:bg-blue/20 transition-colors">
                      <Play className="w-4 h-4 text-blue" />
                    </div>
                    Virtual Tour
                  </button>
                </div>
              </AnimateOnScroll>

              {/* Stats */}
              <AnimateOnScroll animation="fade-up" delay={500}>
                <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-slate/10">
                  <div>
                    <div className="text-3xl font-bold text-slate">25+</div>
                    <div className="text-sm text-slate-muted">Years of Excellence</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-slate">7</div>
                    <div className="text-sm text-slate-muted">Campuses</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-slate">5K+</div>
                    <div className="text-sm text-slate-muted">Students</div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Visual Element */}
            <div className="hidden lg:block">
              <AnimateOnScroll animation="fade-left" delay={300}>
                <div className="relative">
                  {/* Floating Cards */}
                  <div className="absolute top-0 right-0 w-64 p-6 bg-white rounded-2xl shadow-card transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate">100%</div>
                        <div className="text-sm text-slate-muted">University Placement</div>
                      </div>
                    </div>
                    <p className="text-sm text-slate-light">
                      Our students gain admission to top universities worldwide
                    </p>
                  </div>

                  <div className="absolute bottom-20 left-0 w-56 p-5 bg-white rounded-2xl shadow-card transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-blue/20 flex items-center justify-center">
                        <Play className="w-5 h-5 text-blue" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate">50+</div>
                        <div className="text-xs text-slate-muted">Clubs & Activities</div>
                      </div>
                    </div>
                    <p className="text-xs text-slate-light">
                      Diverse extracurricular opportunities
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}
