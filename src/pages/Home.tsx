import  { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Calendar, Users, BookOpen, Award, Play, ChevronRight } from 'lucide-react';
import AnimateOnScroll from '../components/AnimateOnScroll';
import SEO from '../components/SEO';
import newsData from '../data/news.json';
import galleryData from '../data/gallery.json';

export default function Home() {
  const featuredNews = newsData.news.slice(0, 3);
  const galleryImages = galleryData.gallery.slice(0, 6);

  // Video playback handling (attempt autoplay with sound; if blocked, show play overlay)
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isAutoplayBlocked, setIsAutoplayBlocked] = useState(false);
  const [, setIsPlaying] = useState(false); // skip unused state variable to avoid TS6133

  useEffect(() => {
    // Try to play the video with sound automatically.
    // Many browsers will block autoplay with sound — if that happens, we catch the error
    // and show a big play overlay so user can enable sound with a tap.
    const tryPlay = async () => {
      const v = videoRef.current;
      if (!v) return;

      // Ensure it's ready
      try {
        await v.play();
        setIsPlaying(!v.paused);
        setIsAutoplayBlocked(false);
      } catch (err) {
        // Autoplay blocked (likely due to sound). Show overlay to let user start playback.
        setIsAutoplayBlocked(true);
        setIsPlaying(false);
      }
    };

    tryPlay();

    // Optional: when user navigates away/unmount, pause
    return () => {
      const v = videoRef.current;
      if (v && !v.paused) v.pause();
    };
  }, []);

  const handlePlayWithSound = async () => {
    const v = videoRef.current;
    if (!v) return;
    try {
      await v.play();
      setIsAutoplayBlocked(false);
      setIsPlaying(true);
    } catch (err) {
      // If still fails, keep overlay visible (rare)
      setIsAutoplayBlocked(true);
      setIsPlaying(false);
    }
  };

  const handleToggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    // Update playing state if needed
    setIsPlaying(!v.paused);
  };

  return (
    <>
      <SEO
        title="Welcome"
        description="Unique Golden Stars Schools - Empowering minds, inspiring excellence in an environment for high expectations. Leading private education in Lagos, Nigeria."
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero/hero-bg.jpg"
            alt="Golden Stars Students"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full section-padding pt-32 pb-20">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="max-w-2xl">
                <AnimateOnScroll animation="fade-up" delay={100}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-sm font-medium text-slate">
                      Excellence in Education Since 2000
                    </span>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-up" delay={200}>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate leading-tight mb-6">
                    Where Young
                    <span className="block text-blue">Minds</span>
                    <span className="block">
                      <span className="text-primary">Soar</span>
                    </span>
                  </h1>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-up" delay={300}>
                  <p className="text-lg text-slate-light mb-8 max-w-lg">
                    Fostering academic excellence, creativity, and character in a nurturing 
                    environment. Join us in shaping the leaders of tomorrow.
                  </p>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-up" delay={400}>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      to="/admissions/process"
                      className="btn-primary inline-flex items-center gap-2 group"
                    >
                      Apply Now
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <button
                      onClick={() => alert('E-brochure download coming soon!')}
                      className="btn-outline inline-flex items-center gap-2 group"
                    >
                      <Download className="w-5 h-5" />
                      E-brochure
                    </button>
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
            </div>
          </div>
        </div>
      </section>

      {/* Chairman Video Section (new) */}
      <section className="py-12 bg-white">
        <div className="section-padding">
          <div className="container-wide">
            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="text-center max-w-3xl mx-auto mb-6">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                  Message from the Chairman
                </span>
                <h2 className="text-2xl lg:text-3xl font-bold text-slate mt-3">
                  A Word About Our School
                </h2>
                <p className="text-slate-light mt-3">
                  Hear directly from our chairman about the school's vision, values, and what makes us unique.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {/* 
                NOTE: Replace '/videos/chairman.mp4' below with your actual video path or import.
                The element is set to autoPlay and loop. Many browsers block autoplay with sound;
                the code below attempts to play programmatically and will reveal a single-button overlay
                if autoplay with sound is blocked — users can tap "Play with sound" to start audio.
              */}
              <video
                ref={videoRef}
                className="w-full h-64 md:h-[480px] object-cover"
                playsInline
                autoPlay
                loop
                // intentionally omitted muted attribute to allow unmuted playback; note browsers may block autoplay with sound.
                controls
                aria-label="Chairman message about Unique Golden Stars Schools"
              >
                <source src="/videos/chairman.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Overlay shown when autoplay with sound is blocked */}
              {isAutoplayBlocked && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-white text-lg font-bold">Play Chairman's Message</h3>
                    <p className="text-white/80 text-sm mt-2">Tap to start the video with sound.</p>
                  </div>
                  <div className="flex gap-4">
                    <button
                      onClick={handlePlayWithSound}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-2xl shadow-lg hover:scale-105 transition-transform"
                    >
                      Play with sound
                    </button>
                    <button
                      onClick={handleToggleMute}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-2xl border border-white/20 hover:scale-105 transition-transform"
                    >
                      Toggle Mute
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center justify-center gap-4 mt-6">
              <span className="text-xs text-slate-muted">Tip:</span>
              <span className="text-sm text-slate-light">If your browser blocks autoplay, tap the button to play with sound.</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-primary">
        <div className="section-padding">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimateOnScroll animation="fade-right" delay={200}>
                <div className="relative">
                  <img
                    src="/images/hero/hero-bg.jpeg"
                    alt="Student studying"
                    className="rounded-3xl shadow-card w-full max-w-md"
                    loading="lazy"
                  />
                  <div className="absolute -bottom-6 -right-6 w-48 p-5 bg-white rounded-2xl shadow-card">
                    <div className="flex items-center gap-3 mb-2">
                      <Award className="w-6 h-6 text-primary" />
                      <span className="font-bold text-slate">Excellence</span>
                    </div>
                    <p className="text-sm text-slate-light">
                      Award-winning educational institution
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-left" delay={200}>
                <div className="max-w-xl">
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                    About Us
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-bold text-slate mt-4 mb-6">
                    Dedicated To Excellence
                  </h2>
                  <p className="text-slate-light mb-6">
                    We believe in nurturing the whole child - academically, socially, emotionally, 
                    and physically. Our holistic approach to education ensures that every student 
                    receives personalized attention and support to reach their full potential.
                  </p>
                  <p className="text-slate-light mb-8">
                    With over 25 years of experience, we have consistently produced outstanding 
                    results, with our students gaining admission to top universities worldwide.
                  </p>
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 text-blue font-semibold hover:gap-3 transition-all"
                  >
                    Read Our Story
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Schools Section */}
      <section className="py-20 bg-muted/30">
        <div className="section-padding">
          <div className="container-wide">
            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                  Our Schools
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate mt-4 mb-6">
                  Explore Our Programs
                </h2>
                <p className="text-slate-light">
                  From early childhood to pre-university, we offer comprehensive programs 
                  designed to meet the unique needs of each developmental stage.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Nursery',
                  age: '6 months - 5 years',
                  image: '/images/nursery-program.jpg',
                  description: 'Nurturing early development through play-based learning',
                  href: '/schools/nursery-primary',
                },
                {
                  title: 'Primary',
                  age: '5 - 11 years',
                  image: '/images/primary-program.jpeg',
                  description: 'Building strong foundations in literacy and numeracy',
                  href: '/schools/nursery-primary',
                },
                {
                  title: 'Secondary',
                  age: '11 - 17 years',
                  image: '/images/secondary-program.jpeg',
                  description: 'Preparing students for university and beyond',
                  href: '/schools/secondary',
                },
                {
                  title: 'Pre-Degree',
                  age: '16 - 19 years',
                  image: '/images/predegree-program.jpg',
                  description: 'Intensive preparation for university entrance',
                  href: '/schools/predegree',
                },
              ].map((program, index) => (
                <AnimateOnScroll key={program.title} animation="fade-up" delay={(index + 1) * 100}>
                  <Link
                    to={program.href}
                    className="group block bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-hover hover:-translate-y-2 transition-all duration-300"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-xs font-medium text-blue bg-blue/10 px-3 py-1 rounded-full">
                        {program.age}
                      </span>
                      <h3 className="text-xl font-bold text-slate mt-3 mb-2">
                        {program.title}
                      </h3>
                      <p className="text-sm text-slate-light mb-4">
                        {program.description}
                      </p>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                        Learn More
                        <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate text-white">
        <div className="section-padding">
          <div className="container-wide">
            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                  Why Choose Us
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mt-4 mb-6">
                  Why Unique Golden Stars?
                </h2>
                <p className="text-slate-400">
                  Discover what sets us apart and makes us the preferred choice 
                  for quality education in Lagos.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Users,
                  title: 'Expert Teachers',
                  description: 'Highly qualified and experienced educators dedicated to student success',
                },
                {
                  icon: BookOpen,
                  title: 'Holistic Development',
                  description: 'Nurturing academic, social, emotional, and physical growth',
                },
                {
                  icon: Award,
                  title: 'Excellent Results',
                  description: 'Consistently outstanding academic performance in national and international exams',
                },
                {
                  icon: Calendar,
                  title: 'Modern Facilities',
                  description: 'State-of-the-art learning environments with cutting-edge technology',
                },
              ].map((feature, index) => (
                <AnimateOnScroll key={feature.title} animation="fade-up" delay={(index + 1) * 100}>
                  <div className="text-center group">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-slate-400 text-sm">{feature.description}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-primary">
        <div className="section-padding">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <AnimateOnScroll animation="fade-up" delay={100}>
                <div>
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                    Latest News
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-bold text-slate mt-4">
                    What's Happening
                  </h2>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-up" delay={200}>
                <Link
                  to="/news"
                  className="inline-flex items-center gap-2 text-blue font-semibold hover:gap-3 transition-all"
                >
                  View All News
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </AnimateOnScroll>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredNews.map((article, index) => (
                <AnimateOnScroll key={article.id} animation="fade-up" delay={(index + 1) * 100}>
                  <article className="group">
                    <Link to={`/news/${article.slug}`} className="block">
                      <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-5">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {article.category}
                        </span>
                        <span className="text-xs text-slate-muted">
                          {new Date(article.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric', 
                            year: 'numeric' 
                          })}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-slate mb-3 group-hover:text-blue transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-slate-light text-sm line-clamp-2">
                        {article.excerpt}
                      </p>
                    </Link>
                  </article>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-20 bg-white">
        <div className="section-padding">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <AnimateOnScroll animation="fade-up" delay={100}>
                <div>
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                    Gallery
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-bold text-slate mt-4">
                    Campus Life
                  </h2>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-up" delay={200}>
                <Link
                  to="/gallery"
                  className="inline-flex items-center gap-2 text-blue font-semibold hover:gap-3 transition-all"
                >
                  View All Gallery
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </AnimateOnScroll>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {galleryImages.map((image, index) => (
                <AnimateOnScroll key={image.id} animation="fade-up" delay={(index + 1) * 50}>
                  <Link to="/gallery" className="group block aspect-square rounded-xl overflow-hidden">
                    <img
                      src={image.image}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-slate/0 group-hover:bg-slate/40 transition-colors flex items-center justify-center">
                      <Play className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </Link>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="section-padding relative z-10">
          <div className="container-wide">
            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate mb-6">
                  Ready to Join Us?
                </h2>
                <p className="text-slate-light mb-8">
                  Take the first step towards an exceptional education for your child. 
                  Schedule a campus visit or start your application today.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    to="/admissions/process"
                    className="btn-secondary inline-flex items-center gap-2 group"
                  >
                    Start Application
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    to="/contact"
                    className="btn-outline border-slate text-slate hover:bg-slate hover:text-white inline-flex items-center gap-2"
                  >
                    Schedule a Visit
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
