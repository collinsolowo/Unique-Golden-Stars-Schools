import { useParams, Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Users, Calendar, BookOpen, ArrowRight } from 'lucide-react';
import AnimateOnScroll from '../components/AnimateOnScroll';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import campusesData from '../data/campuses.json';

export default function CampusDetail() {
  const { id } = useParams<{ id: string }>();
  const campus = campusesData.campuses.find(c => c.id === id);

  if (!campus) {
    return (
      <div className="py-20">
        <div className="section-padding">
          <div className="container-wide text-center">
            <h1 className="text-3xl font-bold text-slate mb-4">Campus Not Found</h1>
            <p className="text-slate-light mb-8">
              The campus you're looking for doesn't exist or has been moved.
            </p>
            <Link to="/schools" className="btn-primary">
              Back to Schools
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={campus.name}
        description={campus.description}
      />

      {/* Page Header */}
      <section className="py-20 bg-muted/30">
        <div className="section-padding">
          <div className="container-wide">
            <Breadcrumbs
              items={[
                { label: 'Schools', href: '/schools' },
                { label: campus.name },
              ]}
              className="mb-6"
            />
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full inline-block mb-4">
                  Established {campus.established}
                </span>
                <h1 className="text-4xl font-bold text-slate mb-4">
                  {campus.name}
                </h1>
                <p className="text-lg text-slate-light max-w-2xl">
                  {campus.description}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href={`tel:${campus.phone[0]}`}
                  className="btn-outline"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Us
                </a>
                <Link
                  to="/admissions/process"
                  className="btn-primary"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Image */}
      <section className="py-0">
        <div className="section-padding">
          <div className="container-wide">
            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="aspect-[21/9] rounded-3xl overflow-hidden shadow-card">
                <img
                  src={campus.image}
                  alt={campus.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Campus Info */}
      <section className="py-20">
        <div className="section-padding">
          <div className="container-wide">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Head Teacher's Note */}
                <AnimateOnScroll animation="fade-up" delay={100}>
                  <div className="bg-white rounded-3xl p-8 shadow-card">
                    <h2 className="text-2xl font-bold text-slate mb-6">From the Head Teacher's Desk</h2>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                        <Users className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate">{campus.headTeacher}</h3>
                        <p className="text-slate-muted">Head Teacher</p>
                      </div>
                    </div>
                    <p className="text-slate-light mb-4">
                      Welcome to {campus.name}. Our beautiful school is dedicated to providing 
                      high standards of education and exceptional child care. With the steadfast 
                      efforts of a team of professional staff, we impact a child-centred curriculum 
                      incorporating the British, Nigerian, and Montessori teaching methodologies.
                    </p>
                    <p className="text-slate-light">
                      Our aim is to enable each child to have an all-around education through learning 
                      that encourages the rapid development of their cognitive, affective, and psychomotor 
                      domains. At the end of your child's journey in our school, you can be assured that 
                      your child will have encountered an all-around education which will make them a total child.
                    </p>
                  </div>
                </AnimateOnScroll>

                {/* Facilities */}
                <AnimateOnScroll animation="fade-up" delay={200}>
                  <div>
                    <h2 className="text-2xl font-bold text-slate mb-6">Facilities</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {campus.facilities.map((facility) => (
                        <div
                          key={facility}
                          className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-soft"
                        >
                          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                            <BookOpen className="w-5 h-5 text-primary" />
                          </div>
                          <span className="font-medium text-slate">{facility}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimateOnScroll>

                {/* Photo Gallery */}
                <AnimateOnScroll animation="fade-up" delay={300}>
                  <div>
                    <h2 className="text-2xl font-bold text-slate mb-6">Photo Gallery</h2>
                    <div className="grid grid-cols-3 gap-4">
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div
                          key={i}
                          className="aspect-square rounded-xl overflow-hidden bg-muted"
                        >
                          <img
                            src={campus.image}
                            alt={`${campus.name} gallery ${i}`}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimateOnScroll>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Contact Info */}
                <AnimateOnScroll animation="fade-left" delay={200}>
                  <div className="bg-white rounded-3xl p-6 shadow-card">
                    <h3 className="text-lg font-bold text-slate mb-4">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-slate-light text-sm">{campus.address}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                        <div className="space-y-1">
                          {campus.phone.map((phone) => (
                            <a
                              key={phone}
                              href={`tel:${phone}`}
                              className="block text-slate-light text-sm hover:text-blue transition-colors"
                            >
                              {phone}
                            </a>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                        <a
                          href={`mailto:${campus.email}`}
                          className="text-slate-light text-sm hover:text-blue transition-colors"
                        >
                          {campus.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>

                {/* Quick Stats */}
                <AnimateOnScroll animation="fade-left" delay={300}>
                  <div className="bg-white rounded-3xl p-6 shadow-card">
                    <h3 className="text-lg font-bold text-slate mb-4">Quick Facts</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-primary" />
                          <span className="text-sm text-slate-light">Student Ratio</span>
                        </div>
                        <span className="font-semibold text-slate">{campus.stats.studentRatio}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-primary" />
                          <span className="text-sm text-slate-light">Student Population</span>
                        </div>
                        <span className="font-semibold text-slate">{campus.stats.studentPopulation}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span className="text-sm text-slate-light">Campus Size</span>
                        </div>
                        <span className="font-semibold text-slate">{campus.stats.campusSize}</span>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>

                {/* CTA */}
                <AnimateOnScroll animation="fade-left" delay={400}>
                  <Link
                    to="/admissions/process"
                    className="block w-full p-6 bg-primary rounded-2xl text-center group hover:bg-primary-dark transition-colors"
                  >
                    <span className="font-semibold text-slate">Ready to Apply?</span>
                    <p className="text-sm text-slate-light mt-1">
                      Start your application today
                    </p>
                    <ArrowRight className="w-5 h-5 text-slate mt-3 mx-auto group-hover:translate-x-1 transition-transform" />
                  </Link>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
