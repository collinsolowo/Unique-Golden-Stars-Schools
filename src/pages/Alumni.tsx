import { Users, Award, Calendar, Heart, ArrowRight } from 'lucide-react';
import AnimateOnScroll from '../components/AnimateOnScroll';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import alumniData from '../data/alumni.json';

export default function Alumni() {
  return (
    <>
      <SEO
        title="Alumni"
        description="Join the Golden Stars Alumni Association and stay connected with your alma mater."
      />

      {/* Page Header */}
      <section className="py-20 bg-muted/30">
        <div className="section-padding">
          <div className="container-wide">
            <Breadcrumbs items={[{ label: 'Alumni' }]} className="mb-6" />
            <h1 className="text-4xl font-bold text-slate mb-4">
              Golden Stars Alumni
            </h1>
            <p className="text-lg text-slate-light max-w-2xl">
              The legacy continues. Join our global network of alumni who are making a difference 
              in their communities and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 bg-slate text-white">
        <div className="section-padding">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto text-center">
              <AnimateOnScroll animation="fade-up" delay={100}>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  The Legacy Continues
                </h2>
                <p className="text-slate-400 text-lg mb-8">
                  Since 2000, Golden Stars Schools has remained dedicated to academic excellence, 
                  athletic prowess, and vibrant extracurricular activities. Our alumni community 
                  plays a vital role in rekindling bonds and ensuring that the spirit of Golden Stars 
                  thrives for generations to come.
                </p>
                <a
                  href="https://forms.google.com/alumni-registration"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-slate px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors group mb-8"
                >
                  Join the Alumni Association
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={200}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">5,000+</div>
                    <div className="text-sm text-slate-400">Alumni Worldwide</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">25+</div>
                    <div className="text-sm text-slate-400">Years of Alumni Network</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">50+</div>
                    <div className="text-sm text-slate-400">Annual Events</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">100+</div>
                    <div className="text-sm text-slate-400">Countries Represented</div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="section-padding">
          <div className="container-wide">
            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate mb-4">
                  Alumni Benefits
                </h2>
                <p className="text-slate-light max-w-2xl mx-auto">
                  As a member of the Golden Stars Alumni Association, you enjoy exclusive benefits 
                  and opportunities to stay connected with your alma mater.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {alumniData.association.benefits.map((benefit, index) => (
                <AnimateOnScroll key={benefit} animation="fade-up" delay={(index + 1) * 100}>
                  <div className="flex items-start gap-4 p-6 bg-muted/30 rounded-2xl">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-slate">{benefit}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-muted/30">
        <div className="section-padding">
          <div className="container-wide">
            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate mb-4">
                  Alumni Events
                </h2>
                <p className="text-slate-light max-w-2xl mx-auto">
                  Join us for our annual events that bring alumni together from around the world.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 gap-8">
              {alumniData.association.events.map((event, index) => (
                <AnimateOnScroll key={event.title} animation="fade-up" delay={(index + 1) * 100}>
                  <div className="bg-white rounded-2xl p-6 shadow-soft">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate">{event.title}</h3>
                        <p className="text-sm text-slate-muted">{event.date}</p>
                      </div>
                    </div>
                    <p className="text-slate-light">{event.description}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Profiles */}
      <section className="py-20 bg-white">
        <div className="section-padding">
          <div className="container-wide">
            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate mb-4">
                  Distinguished Alumni
                </h2>
                <p className="text-slate-light max-w-2xl mx-auto">
                  Our alumni are making a difference in various fields around the world.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {alumniData.profiles.map((profile, index) => (
                <AnimateOnScroll key={profile.name} animation="fade-up" delay={(index + 1) * 100}>
                  <div className="bg-white rounded-2xl p-6 shadow-soft border border-muted">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                        <Award className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate">{profile.name}</h3>
                        <p className="text-sm text-slate-muted">Class of {profile.graduationYear}</p>
                      </div>
                    </div>
                    <p className="text-slate-light text-sm mb-3">{profile.achievement}</p>
                    <p className="text-slate-light text-sm mb-4">{profile.currentRole}</p>
                    <p className="text-sm text-slate italic">"{profile.quote}"</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Giving Section */}
      <section className="py-20 bg-slate text-white">
        <div className="section-padding">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto text-center">
              <AnimateOnScroll animation="fade-up" delay={100}>
                <h2 className="text-3xl font-bold mb-6">
                  Give Back to Golden Stars
                </h2>
                <p className="text-slate-400 text-lg mb-8">
                  {alumniData.giving.impact}
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  {alumniData.giving.waysToGive.map((method) => (
                    <div key={method.method} className="p-6 bg-white/10 rounded-2xl">
                      <h3 className="text-lg font-bold text-white mb-3">{method.method}</h3>
                      <p className="text-slate-400 text-sm">{method.description}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="mailto:alumni@uniquegoldenstars.edu.ng"
                    className="inline-flex items-center gap-2 bg-primary text-slate px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors group"
                  >
                    <Heart className="w-5 h-5" />
                    Make a Donation
                  </a>
                  <a
                    href={`mailto:${alumniData.giving.contact.email}`}
                    className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Contact Us
                  </a>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
