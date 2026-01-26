import { Link } from 'react-router-dom';
import { ChevronRight, Users, Award, BookOpen, Calendar } from 'lucide-react';
import AnimateOnScroll from '../components/AnimateOnScroll';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

interface AboutProps {
  section?: string;
}

export default function About({ section = 'main' }: AboutProps) {
  const renderContent = () => {
    switch (section) {
      case 'history':
        return <HistorySection />;
      case 'founders-note':
        return <FoundersNoteSection />;
      case 'managing-directors-note':
        return <MDsNoteSection />;
      case 'at-a-glance':
        return <AtAGlanceSection />;
      case 'pledge-anthem':
        return <PledgeAnthemSection />;
      default:
        return <MainAboutSection />;
    }
  };

  const getTitle = () => {
    switch (section) {
      case 'history':
        return 'Our History';
      case 'founders-note':
        return "Founder's Note";
      case 'managing-directors-note':
        return "Managing Director's Note";
      case 'at-a-glance':
        return 'At a Glance';
      case 'pledge-anthem':
        return 'School Pledge & Anthem';
      default:
        return 'About Us';
    }
  };

  const getBreadcrumbs = () => {
    const baseItems = [{ label: 'About Us', href: '/about' }];
    
    switch (section) {
      case 'history':
        return [...baseItems, { label: 'History' }];
      case 'founders-note':
        return [...baseItems, { label: "Founder's Note" }];
      case 'managing-directors-note':
        return [...baseItems, { label: "MD's Note" }];
      case 'at-a-glance':
        return [...baseItems, { label: 'At a Glance' }];
      case 'pledge-anthem':
        return [...baseItems, { label: 'Pledge & Anthem' }];
      default:
        return [{ label: 'About Us' }];
    }
  };

  return (
    <>
      <SEO
        title={getTitle()}
        description={`Learn more about ${getTitle()} at Unique Golden Stars Schools - Nigeria's leading private educational institution.`}
      />
      
      {/* Page Header */}
      <section className="py-20 bg-muted/30">
        <div className="section-padding">
          <div className="container-wide">
            <Breadcrumbs items={getBreadcrumbs()} className="mb-6" />
            <h1 className="text-4xl font-bold text-slate">{getTitle()}</h1>
          </div>
        </div>
      </section>

      {renderContent()}
    </>
  );
}

function MainAboutSection() {
  return (
    <div className="py-20">
      <div className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <AnimateOnScroll animation="fade-right" delay={200}>
              <div className="relative">
                <img
                  src="/images/about-main.jpg"
                  alt="Student studying at Golden Stars"
                  className="rounded-3xl shadow-card w-full"
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
                  Our Story
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate mt-4 mb-6">
                  A Legacy of Excellence
                </h2>
                <p className="text-slate-light mb-6">
                  Founded in 2000, Unique Golden Stars Schools has grown from a small nursery 
                  school to one of Lagos' most respected educational institutions. Our journey 
                  has been marked by a relentless commitment to excellence and innovation in education.
                </p>
                <p className="text-slate-light mb-8">
                  We believe in nurturing the whole child - academically, socially, emotionally, 
                  and physically. Our holistic approach ensures that every student receives 
                  personalized attention and support to reach their full potential.
                </p>
                <Link
                  to="/about/history"
                  className="inline-flex items-center gap-2 text-blue font-semibold hover:gap-3 transition-all"
                >
                  Read Our History
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Quick Links */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Founder's Note",
                description: "A message from our founder about our vision and commitment",
                href: '/about/founders-note',
                icon: Users,
              },
              {
                title: "MD's Note",
                description: "Welcome message from our Managing Director",
                href: '/about/managing-directors-note',
                icon: BookOpen,
              },
              {
                title: 'At a Glance',
                description: "Key facts and figures about our institution",
                href: '/about/at-a-glance',
                icon: Award,
              },
              {
                title: 'Policies',
                description: 'Our codes of conduct and school policies',
                href: '/about/policies',
                icon: Calendar,
              },
            ].map((link, index) => (
              <AnimateOnScroll key={link.title} animation="fade-up" delay={(index + 1) * 100}>
                <Link
                  to={link.href}
                  className="block p-6 bg-white rounded-2xl shadow-soft hover:shadow-hover hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                    <link.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-slate mb-2">{link.title}</h3>
                  <p className="text-sm text-slate-light mb-4">{link.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Read More
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function HistorySection() {
  return (
    <div className="py-20">
      <div className="section-padding">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-slate-light mb-6">
                  The story of Unique Golden Stars Schools began in 2000 with a simple yet powerful 
                  vision: to provide world-class education that nurtures the whole child and prepares 
                  them for global citizenship. What started as a small nursery school in Ikeja has 
                  grown into one of Lagos' most respected educational institutions.
                </p>
                
                <h3 className="text-2xl font-bold text-slate mb-4">The Beginning</h3>
                <p className="text-slate-light mb-6">
                  Mrs. Grace Adeyemi, our founder, established the first Golden Stars Nursery School 
                  with just 15 students in a modest building on Unity Avenue. Her vision was to create 
                  a learning environment where every child would be valued, nurtured, and empowered 
                  to reach their full potential.
                </p>
                
                <h3 className="text-2xl font-bold text-slate mb-4">Growth and Expansion</h3>
                <p className="text-slate-light mb-6">
                  By 2005, demand for our unique approach to education had grown so significantly that 
                  we expanded to include primary education. The success of our first graduating class 
                  in 2010, all of whom gained admission to top secondary schools, cemented our 
                  reputation for academic excellence.
                </p>
                
                <h3 className="text-2xl font-bold text-slate mb-4">Secondary School Launch</h3>
                <p className="text-slate-light mb-6">
                  In 2005, we launched our secondary school program, bringing our holistic education 
                  approach to older students. Our first set of WASSCE results in 2010 was outstanding, 
                  with a 100% pass rate and several students achieving straight A's.
                </p>
                
                <h3 className="text-2xl font-bold text-slate mb-4">Recent Developments</h3>
                <p className="text-slate-light mb-6">
                  Today, Unique Golden Stars Schools operates seven campuses across Lagos, serving 
                  over 5,000 students from nursery to pre-degree level. Our alumni have gone on to 
                  excel at universities worldwide, and our commitment to excellence remains unwavering.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
}

function FoundersNoteSection() {
  return (
    <div className="py-20">
      <div className="section-padding">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-card">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate">Mrs. Grace Adeyemi</h3>
                    <p className="text-slate-muted">Founder, Unique Golden Stars Schools</p>
                  </div>
                </div>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-slate-light mb-6 italic">
                    "Education is not just about acquiring knowledge; it's about shaping character, 
                    nurturing dreams, and preparing young minds to make a difference in the world."
                  </p>
                  
                  <p className="text-slate-light mb-6">
                    When I founded Unique Golden Stars Schools in 2000, I had a simple dream: to create 
                    a school where every child would be seen, valued, and empowered to reach their full 
                    potential. I wanted to build an institution that would not only produce excellent 
                    academic results but also nurture well-rounded individuals with strong character 
                    and a passion for making a difference.
                  </p>
                  
                  <p className="text-slate-light mb-6">
                    Over the years, I have watched with pride as our students have grown into confident, 
                    compassionate, and accomplished young people. Our alumni are making significant 
                    contributions in various fields, from medicine and engineering to arts and entrepreneurship. 
                    This is the true measure of our success.
                  </p>
                  
                  <p className="text-slate-light mb-6">
                    As we look to the future, our commitment to excellence remains unwavering. We continue 
                    to invest in our facilities, our teachers, and our programs to ensure that we provide 
                    the best possible education for our students. We are grateful for the trust that parents 
                    have placed in us, and we are dedicated to exceeding their expectations every day.
                  </p>
                  
                  <p className="text-slate-light">
                    Thank you for considering Unique Golden Stars Schools. We invite you to join our 
                    community and be part of our journey of excellence.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
}

function MDsNoteSection() {
  return (
    <div className="py-20">
      <div className="section-padding">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-card">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-full bg-blue/20 flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate">Mrs. Ibironke Adeyemi</h3>
                    <p className="text-slate-muted">Managing Director, Unique Golden Stars Schools</p>
                  </div>
                </div>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-slate-light mb-6 italic">
                    "What makes a Golden Stars student unique is not just their academic excellence, 
                    but their character, their compassion, and their commitment to making a difference."
                  </p>
                  
                  <p className="text-slate-light mb-6">
                    Welcome to Unique Golden Stars Schools, where excellence is not just a goal but a way of life. 
                    As Managing Director, I have the privilege of leading an institution that has been at the 
                    forefront of educational innovation in Lagos for over two decades.
                  </p>
                  
                  <p className="text-slate-light mb-6">
                    Our approach to education is holistic. We believe that every child is unique, with their own 
                    talents, interests, and learning style. Our dedicated teachers work tirelessly to ensure that 
                    each student receives personalized attention and support to help them discover and develop 
                    their God-given potential.
                  </p>
                  
                  <p className="text-slate-light mb-6">
                    In today's rapidly changing world, education must go beyond the traditional classroom. That 
                    is why we have invested heavily in technology, with our STEM Innovation Center providing 
                    students with hands-on experience in robotics, coding, and digital design. Our students are 
                    not just preparing for exams; they are preparing for the future.
                  </p>
                  
                  <p className="text-slate-light">
                    I invite you to visit our campuses and experience the Golden Stars difference for yourself. 
                    See our students in action, meet our dedicated staff, and discover why we are the preferred 
                    choice for quality education in Lagos.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
}

function AtAGlanceSection() {
  const stats = [
    { number: '25+', label: 'Years of Excellence', icon: Calendar },
    { number: '7', label: 'Campuses', icon: Users },
    { number: '5,000+', label: 'Students', icon: Users },
    { number: '500+', label: 'Staff', icon: Users },
    { number: '100%', label: 'University Placement', icon: Award },
    { number: '50+', label: 'Clubs & Activities', icon: BookOpen },
  ];

  return (
    <div className="py-20">
      <div className="section-padding">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate mb-4">At a Glance</h2>
                <p className="text-slate-light">
                  Key facts and figures about Unique Golden Stars Schools
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={200}>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/20 flex items-center justify-center">
                      <stat.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-slate mb-2">{stat.number}</div>
                    <div className="text-sm text-slate-muted">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={300}>
              <div className="bg-white rounded-3xl p-8 shadow-card">
                <h3 className="text-xl font-bold text-slate mb-6">Our Campuses</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { name: 'Main Campus, Ikeja', type: 'Nursery, Primary & Secondary' },
                    { name: 'VGC Campus, Ajah', type: 'Nursery & Primary' },
                    { name: 'Lekki Campus', type: 'Secondary & Pre-Degree' },
                    { name: 'Festac Campus', type: 'Nursery & Primary' },
                    { name: 'Abuja Campus', type: 'Nursery, Primary & Secondary' },
                    { name: 'Port Harcourt Campus', type: 'Nursery & Primary' },
                  ].map((campus) => (
                    <div key={campus.name} className="flex items-center justify-between p-4 bg-muted/50 rounded-xl">
                      <div>
                        <div className="font-semibold text-slate">{campus.name}</div>
                        <div className="text-sm text-slate-muted">{campus.type}</div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-slate-muted" />
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
}

function PledgeAnthemSection() {
  return (
    <div className="py-20">
      <div className="section-padding">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-card">
                <h2 className="text-2xl font-bold text-slate mb-8 text-center">School Pledge</h2>
                <div className="bg-primary/10 rounded-2xl p-8 mb-12">
                  <p className="text-lg text-slate leading-relaxed text-center italic">
                    "I pledge to be a true Golden Star,<br />
                    To shine with knowledge, wisdom, and character,<br />
                    To respect my teachers, honor my parents,<br />
                    And to always strive for excellence in all I do.<br />
                    I am a Golden Star, and I will shine bright!"
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-slate mb-8 text-center">School Anthem</h2>
                <div className="bg-slate/5 rounded-2xl p-8">
                  <div className="text-center">
                    <p className="text-slate-light mb-4 font-semibold">Verse 1:</p>
                    <p className="text-slate-light mb-6 leading-relaxed">
                      Golden Stars, our pride and joy,<br />
                      Shining bright for all to see,<br />
                      With knowledge, truth, and excellence,<br />
                      We build our future destiny.
                    </p>

                    <p className="text-slate-light mb-4 font-semibold">Chorus:</p>
                    <p className="text-slate-light mb-6 leading-relaxed">
                      Golden Stars, Golden Stars,<br />
                      Shining bright, reaching far,<br />
                      With honor and integrity,<br />
                      We stand for all that's good and right!
                    </p>

                    <p className="text-slate-light mb-4 font-semibold">Verse 2:</p>
                    <p className="text-slate-light leading-relaxed">
                      In unity we strive for greatness,<br />
                      Together we achieve our dreams,<br />
                      With wisdom, strength, and courage,<br />
                      We're building tomorrow's leaders.
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
}
