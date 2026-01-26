import { Link, useParams } from 'react-router-dom';
import { ChevronRight, Users, Trophy, Heart, UserCircle, ArrowRight, Calendar } from 'lucide-react';
import AnimateOnScroll from '../components/AnimateOnScroll';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import studentLifeData from '../data/student-life.json';

interface StudentLifeProps {
  section?: string;
}

export default function StudentLife({ section = 'main' }: StudentLifeProps) {
  const { section: urlSection } = useParams<{ section?: string }>();
  const activeSection = urlSection || section;

  const renderContent = () => {
    switch (activeSection) {
      case 'clubs':
        return <ClubsSection />;
      case 'athletics':
        return <AthleticsSection />;
      case 'community':
        return <CommunitySection />;
      case 'support':
        return <SupportSection />;
      default:
        return <MainStudentLifeSection />;
    }
  };

  const getTitle = () => {
    switch (activeSection) {
      case 'clubs':
        return 'Clubs & Co-curricular Activities';
      case 'athletics':
        return 'Athletics & Sports';
      case 'community':
        return 'Community Service';
      case 'support':
        return 'Student Support Services';
      default:
        return 'Student Life';
    }
  };

  const getBreadcrumbs = () => {
    const baseItems = [{ label: 'Student Life', href: '/student-life' }];
    
    switch (activeSection) {
      case 'clubs':
        return [...baseItems, { label: 'Clubs & Co-curricular' }];
      case 'athletics':
        return [...baseItems, { label: 'Athletics' }];
      case 'community':
        return [...baseItems, { label: 'Community Service' }];
      case 'support':
        return [...baseItems, { label: 'Student Support' }];
      default:
        return [{ label: 'Student Life' }];
    }
  };

  return (
    <>
      <SEO
        title={getTitle()}
        description={`Discover ${getTitle()} at Unique Golden Stars Schools - where students grow beyond the classroom.`}
      />

      {/* Page Header */}
      <section className="py-20 bg-muted/30">
        <div className="section-padding">
          <div className="container-wide">
            <Breadcrumbs items={getBreadcrumbs()} className="mb-6" />
            <h1 className="text-4xl font-bold text-slate mb-4">{getTitle()}</h1>
            <p className="text-lg text-slate-light max-w-2xl">
              At Golden Stars, education extends beyond the classroom. Our students engage in diverse 
              activities that nurture their talents and develop their character.
            </p>
          </div>
        </div>
      </section>

      {/* Section Tabs */}
      <section className="py-8 bg-white border-b border-muted">
        <div className="section-padding">
          <div className="container-wide">
            <div className="flex flex-wrap gap-2">
              <Link
                to="/student-life"
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === 'main'
                    ? 'bg-primary text-slate'
                    : 'bg-muted text-slate hover:bg-muted/80'
                }`}
              >
                Overview
              </Link>
              <Link
                to="/student-life/clubs"
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === 'clubs'
                    ? 'bg-primary text-slate'
                    : 'bg-muted text-slate hover:bg-muted/80'
                }`}
              >
                Clubs & Co-curricular
              </Link>
              <Link
                to="/student-life/athletics"
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === 'athletics'
                    ? 'bg-primary text-slate'
                    : 'bg-muted text-slate hover:bg-muted/80'
                }`}
              >
                Athletics
              </Link>
              <Link
                to="/student-life/community"
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === 'community'
                    ? 'bg-primary text-slate'
                    : 'bg-muted text-slate hover:bg-muted/80'
                }`}
              >
                Community Service
              </Link>
              <Link
                to="/student-life/support"
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === 'support'
                    ? 'bg-primary text-slate'
                    : 'bg-muted text-slate hover:bg-muted/80'
                }`}
              >
                Student Support
              </Link>
            </div>
          </div>
        </div>
      </section>

      {renderContent()}
    </>
  );
}

function MainStudentLifeSection() {
  return (
    <div className="py-20">
      <div className="section-padding">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <AnimateOnScroll animation="fade-up" delay={100}>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Beyond the Classroom
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate mt-4 mb-6">
                A Vibrant Student Community
              </h2>
              <p className="text-slate-light">
                At Golden Stars, student life is rich with opportunities for growth, learning, 
                and fun. Our students engage in diverse activities that complement their academic journey.
              </p>
            </AnimateOnScroll>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                title: 'Clubs & Co-curricular',
                description: 'Over 50 clubs and activities for every interest',
                icon: Users,
                href: '/student-life/clubs',
                color: 'primary',
              },
              {
                title: 'Athletics & Sports',
                description: 'State-of-the-art sports facilities and programs',
                icon: Trophy,
                href: '/student-life/athletics',
                color: 'blue',
              },
              {
                title: 'Community Service',
                description: 'Making a difference in our community',
                icon: Heart,
                href: '/student-life/community',
                color: 'primary',
              },
              {
                title: 'Student Support',
                description: 'Comprehensive support for every student',
                icon: UserCircle,
                href: '/student-life/support',
                color: 'blue',
              },
            ].map((item, index) => (
              <AnimateOnScroll key={item.title} animation="fade-up" delay={(index + 1) * 100}>
                <Link
                  to={item.href}
                  className="block bg-white rounded-2xl p-8 shadow-soft hover:shadow-hover hover:-translate-y-2 transition-all duration-300"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-${item.color}/20 flex items-center justify-center mb-6`}>
                    <item.icon className={`w-8 h-8 text-${item.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-slate mb-3">{item.title}</h3>
                  <p className="text-slate-light mb-6">{item.description}</p>
                  <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                    Explore
                    <ChevronRight className="w-5 h-5" />
                  </span>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll animation="fade-up" delay={500}>
            <div className="bg-slate rounded-3xl p-8 md:p-12 text-white">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">
                    Join the Golden Stars Community
                  </h2>
                  <p className="text-slate-400 mb-8">
                    Experience a vibrant student life filled with opportunities for growth, 
                    friendship, and discovery. Our students develop lifelong skills and memories.
                  </p>
                  <Link
                    to="/admissions/process"
                    className="inline-flex items-center gap-2 bg-primary text-slate px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors group"
                  >
                    Start Your Journey
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white/10 rounded-2xl">
                    <div className="text-3xl font-bold text-primary mb-2">50+</div>
                    <div className="text-sm text-slate-400">Clubs & Activities</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-2xl">
                    <div className="text-3xl font-bold text-primary mb-2">15</div>
                    <div className="text-sm text-slate-400">Sports Teams</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-2xl">
                    <div className="text-3xl font-bold text-primary mb-2">100+</div>
                    <div className="text-sm text-slate-400">Events Annually</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-2xl">
                    <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-sm text-slate-400">Student Support</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
}

function ClubsSection() {
  return (
    <div className="py-20">
      <div className="section-padding">
        <div className="container-wide">
          <div className="max-w-5xl mx-auto">
            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate mb-4">
                  Clubs & Co-curricular Activities
                </h2>
                <p className="text-slate-light max-w-2xl mx-auto">
                  With over 50 clubs and activities, there's something for every student at Golden Stars. 
                  Our co-curricular programs complement academic learning and help students discover their passions.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 gap-8">
              {studentLifeData.clubs.map((club, index) => (
                <AnimateOnScroll key={club.name} animation="fade-up" delay={(index + 1) * 100}>
                  <div className="bg-white rounded-2xl p-6 shadow-soft">
                    <h3 className="text-xl font-bold text-slate mb-3">{club.name}</h3>
                    <p className="text-slate-light mb-4">{club.description}</p>
                    <div className="space-y-2 mb-4">
                      <p className="text-sm font-semibold text-slate">Activities:</p>
                      <ul className="text-sm text-slate-light space-y-1">
                        {club.activities.map((activity) => (
                          <li key={activity} className="flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-primary" />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-muted">
                      <Calendar className="w-4 h-4" />
                      {club.meeting}
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AthleticsSection() {
  return (
    <div className="py-20">
      <div className="section-padding">
        <div className="container-wide">
          <div className="max-w-5xl mx-auto">
            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate mb-4">
                  Athletics & Sports
                </h2>
                <p className="text-slate-light max-w-2xl mx-auto">
                  Our comprehensive sports program develops physical fitness, teamwork, and competitive spirit. 
                  With state-of-the-art facilities and expert coaches, we nurture athletic excellence.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {studentLifeData.sports.map((sport, index) => (
                <AnimateOnScroll key={sport.name} animation="fade-up" delay={(index + 1) * 100}>
                  <div className="bg-white rounded-2xl p-6 shadow-soft">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                        <Trophy className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate">{sport.name}</h3>
                        <p className="text-sm text-slate-muted">{sport.season}</p>
                      </div>
                    </div>
                    <p className="text-slate-light text-sm mb-4">{sport.description}</p>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-slate">Coach: {sport.coach}</p>
                      <div className="space-y-1">
                        {sport.facilities.map((facility) => (
                          <div key={facility} className="flex items-center gap-2 text-xs text-slate-light">
                            <span className="w-1 h-1 rounded-full bg-primary" />
                            {facility}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CommunitySection() {
  return (
    <div className="py-20">
      <div className="section-padding">
        <div className="container-wide">
          <div className="max-w-5xl mx-auto">
            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate mb-4">
                  Community Service
                </h2>
                <p className="text-slate-light max-w-2xl mx-auto">
                  We believe in giving back to our community. Our students participate in various 
                  outreach programs that develop empathy, leadership, and social responsibility.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 gap-8">
              {studentLifeData.community.map((program, index) => (
                <AnimateOnScroll key={program.title} animation="fade-up" delay={(index + 1) * 100}>
                  <div className="bg-white rounded-2xl p-6 shadow-soft">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                        <Heart className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-slate">{program.title}</h3>
                    </div>
                    <p className="text-slate-light mb-4">{program.description}</p>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-slate">Activities:</p>
                      <ul className="text-sm text-slate-light space-y-1">
                        {program.activities.map((activity) => (
                          <li key={activity} className="flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-primary" />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SupportSection() {
  return (
    <div className="py-20">
      <div className="section-padding">
        <div className="container-wide">
          <div className="max-w-5xl mx-auto">
            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate mb-4">
                  Student Support Services
                </h2>
                <p className="text-slate-light max-w-2xl mx-auto">
                  We provide comprehensive support to ensure every student thrives. Our dedicated team 
                  offers academic, emotional, and personal support services.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {studentLifeData.support.map((service, index) => (
                <AnimateOnScroll key={service.service} animation="fade-up" delay={(index + 1) * 100}>
                  <div className="bg-white rounded-2xl p-6 shadow-soft">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                        <UserCircle className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold text-slate">{service.service}</h3>
                    </div>
                    <p className="text-slate-light text-sm">{service.description}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
