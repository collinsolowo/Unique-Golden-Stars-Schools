import { Link, useParams } from 'react-router-dom';
import { ChevronRight, BookOpen, Calendar, FileText, Award } from 'lucide-react';
import AnimateOnScroll from '../components/AnimateOnScroll';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import academicsData from '../data/academics.json';

interface AcademicsProps {
  section?: string;
}

export default function Academics({ section = 'main' }: AcademicsProps) {
  const { section: urlSection } = useParams<{ section?: string }>();
  const activeSection = urlSection || section;

  const renderContent = () => {
    switch (activeSection) {
      case 'curriculum':
        return <CurriculumSection />;
      case 'brief':
        return <AcademicBriefSection />;
      case 'nursery':
        return <NurserySection />;
      case 'primary':
        return <PrimarySection />;
      case 'secondary':
        return <SecondarySection />;
      case 'sixthform':
        return <SixthFormSection />;
      case 'calendar':
        return <CalendarSection />;
      case 'registrar':
        return <RegistrarSection />;
      default:
        return <MainAcademicsSection />;
    }
  };

  const getTitle = () => {
    switch (activeSection) {
      case 'curriculum':
        return 'Curriculum Overview';
      case 'brief':
        return 'Academic Brief';
      case 'nursery':
        return 'Nursery Program';
      case 'primary':
        return 'Primary Program';
      case 'secondary':
        return 'Secondary Program';
      case 'sixthform':
        return 'Sixth Form Program';
      case 'calendar':
        return 'Academic Calendar';
      case 'registrar':
        return "Registrar's Office";
      default:
        return 'Academics';
    }
  };

  const getBreadcrumbs = () => {
    const baseItems = [{ label: 'Academics', href: '/academics' }];
    
    switch (activeSection) {
      case 'curriculum':
        return [...baseItems, { label: 'Curriculum Overview' }];
      case 'brief':
        return [...baseItems, { label: 'Academic Brief' }];
      case 'nursery':
        return [...baseItems, { label: 'Nursery' }];
      case 'primary':
        return [...baseItems, { label: 'Primary' }];
      case 'secondary':
        return [...baseItems, { label: 'Secondary' }];
      case 'sixthform':
        return [...baseItems, { label: 'Sixth Form' }];
      case 'calendar':
        return [...baseItems, { label: 'Calendar' }];
      case 'registrar':
        return [...baseItems, { label: "Registrar's Office" }];
      default:
        return [{ label: 'Academics' }];
    }
  };

  return (
    <>
      <SEO
        title={getTitle()}
        description={`Learn about ${getTitle()} at Unique Golden Stars Schools - our curriculum, programs, and academic excellence.`}
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

      {/* Section Tabs */}
      <section className="py-8 bg-white border-b border-muted">
        <div className="section-padding">
          <div className="container-wide">
            <div className="flex flex-wrap gap-2">
              <Link
                to="/academics"
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === 'main'
                    ? 'bg-primary text-slate'
                    : 'bg-muted text-slate hover:bg-muted/80'
                }`}
              >
                Overview
              </Link>
              <Link
                to="/academics/curriculum"
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === 'curriculum'
                    ? 'bg-primary text-slate'
                    : 'bg-muted text-slate hover:bg-muted/80'
                }`}
              >
                Curriculum
              </Link>
              <Link
                to="/academics/nursery"
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === 'nursery'
                    ? 'bg-primary text-slate'
                    : 'bg-muted text-slate hover:bg-muted/80'
                }`}
              >
                Nursery
              </Link>
              <Link
                to="/academics/primary"
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === 'primary'
                    ? 'bg-primary text-slate'
                    : 'bg-muted text-slate hover:bg-muted/80'
                }`}
              >
                Primary
              </Link>
              <Link
                to="/academics/secondary"
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === 'secondary'
                    ? 'bg-primary text-slate'
                    : 'bg-muted text-slate hover:bg-muted/80'
                }`}
              >
                Secondary
              </Link>
              <Link
                to="/academics/sixthform"
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === 'sixthform'
                    ? 'bg-primary text-slate'
                    : 'bg-muted text-slate hover:bg-muted/80'
                }`}
              >
                Sixth Form
              </Link>
              <Link
                to="/academics/calendar"
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === 'calendar'
                    ? 'bg-primary text-slate'
                    : 'bg-muted text-slate hover:bg-muted/80'
                }`}
              >
                Calendar
              </Link>
              <Link
                to="/academics/registrar"
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === 'registrar'
                    ? 'bg-primary text-slate'
                    : 'bg-muted text-slate hover:bg-muted/80'
                }`}
              >
                Registrar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {renderContent()}
    </>
  );
}

function MainAcademicsSection() {
  return (
    <div className="py-20">
      <div className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <AnimateOnScroll animation="fade-right" delay={200}>
              <div>
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                  Our Approach
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate mt-4 mb-6">
                  Dual Curriculum Excellence
                </h2>
                <p className="text-slate-light mb-6">
                  We operate a dual curriculum system, combining the Nigerian national curriculum 
                  with the British curriculum. This approach ensures our students receive a 
                  well-rounded education that prepares them for both local and international opportunities.
                </p>
                <p className="text-slate-light mb-8">
                  Our academic programs are designed to challenge students while providing the 
                  support they need to excel. From early childhood through pre-university, we 
                  maintain high standards of teaching and learning.
                </p>
                <Link
                  to="/academics/curriculum"
                  className="inline-flex items-center gap-2 text-blue font-semibold hover:gap-3 transition-all"
                >
                  Learn About Our Curriculum
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-left" delay={200}>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-6 shadow-soft">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-slate mb-2">Nigerian Curriculum</h3>
                  <p className="text-sm text-slate-light">
                    Strong foundation in national values and educational standards
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-soft mt-8">
                  <div className="w-12 h-12 rounded-xl bg-blue/20 flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-blue" />
                  </div>
                  <h3 className="text-lg font-bold text-slate mb-2">British Curriculum</h3>
                  <p className="text-sm text-slate-light">
                    International perspective with critical thinking focus
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Academic Programs */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {academicsData.levels.map((level, index) => (
              <AnimateOnScroll key={level.id} animation="fade-up" delay={(index + 1) * 100}>
                <Link
                  to={`/academics/${level.id}`}
                  className="block bg-white rounded-2xl p-6 shadow-soft hover:shadow-hover hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-slate mb-2">{level.title}</h3>
                  <p className="text-sm text-slate-light mb-4 line-clamp-2">
                    {level.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Learn More
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

function CurriculumSection() {
  return (
    <div className="py-20">
      <div className="section-padding">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-card mb-12">
                <h2 className="text-2xl font-bold text-slate mb-6">Our Dual Curriculum Approach</h2>
                <p className="text-slate-light mb-8">
                  {academicsData.curriculum.overview}
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-primary/5 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-slate mb-4">
                      {academicsData.curriculum.nigerian.title}
                    </h3>
                    <p className="text-slate-light mb-4">
                      {academicsData.curriculum.nigerian.description}
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-slate">Key Subjects:</p>
                      <ul className="text-sm text-slate-light space-y-1">
                        {academicsData.curriculum.nigerian.subjects.slice(0, 6).map((subject) => (
                          <li key={subject} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {subject}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue/5 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-slate mb-4">
                      {academicsData.curriculum.british.title}
                    </h3>
                    <p className="text-slate-light mb-4">
                      {academicsData.curriculum.british.description}
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-slate">Key Subjects:</p>
                      <ul className="text-sm text-slate-light space-y-1">
                        {academicsData.curriculum.british.subjects.slice(0, 6).map((subject) => (
                          <li key={subject} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue" />
                            {subject}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={200}>
              <div className="bg-muted/30 rounded-3xl p-8">
                <h3 className="text-xl font-bold text-slate mb-4">Assessment & Evaluation</h3>
                <p className="text-slate-light mb-4">
                  We use a comprehensive assessment system that includes continuous assessment, 
                  regular testing, and external examinations. Our students sit for:
                </p>
                <ul className="grid md:grid-cols-2 gap-4">
                  {[
                    'Continuous Assessment Tests (CATs)',
                    'Terminal Examinations',
                    'BECE (Junior Secondary)',
                    'WASSCE/IGCSE (Senior Secondary)',
                    'Cambridge Checkpoint',
                    'SAT/TOEFL/IELTS',
                  ].map((exam) => (
                    <li key={exam} className="flex items-center gap-2 text-slate-light">
                      <Award className="w-4 h-4 text-primary" />
                      {exam}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
}

function AcademicBriefSection() {
  return (
    <div className="py-20">
      <div className="section-padding">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-card">
                <h2 className="text-2xl font-bold text-slate mb-6">Academic Excellence</h2>
                <p className="text-slate-light mb-6">
                  Unique Golden Stars Schools has consistently maintained a reputation for academic 
                  excellence. Our students consistently achieve outstanding results in both national 
                  and international examinations, with a 100% pass rate in WASSCE and an average of 
                  85% scoring credits and above.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-6 bg-primary/10 rounded-2xl">
                    <div className="text-3xl font-bold text-slate mb-2">100%</div>
                    <div className="text-sm text-slate-muted">WASSCE Pass Rate</div>
                  </div>
                  <div className="text-center p-6 bg-blue/10 rounded-2xl">
                    <div className="text-3xl font-bold text-slate mb-2">95%</div>
                    <div className="text-sm text-slate-muted">University Admission Rate</div>
                  </div>
                  <div className="text-center p-6 bg-primary/10 rounded-2xl">
                    <div className="text-3xl font-bold text-slate mb-2">50+</div>
                    <div className="text-sm text-slate-muted">Awards Won Annually</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate mb-4">Our Academic Achievements</h3>
                <div className="space-y-4">
                  {[
                    'Best WAEC Candidate in Lagos State (2024)',
                    'British Council Outstanding Cambridge Learners Award',
                    'Multiple National Science Competition Winners',
                    'Top Performance in International Mathematics Olympiads',
                    'Excellence in Creative Writing and Arts Competitions',
                  ].map((achievement) => (
                    <div key={achievement} className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                      <Award className="w-5 h-5 text-primary" />
                      <span className="text-slate">{achievement}</span>
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

function NurserySection() {
  return <ProgramSection level={academicsData.levels[0]} image="/images/nursery-program.jpg" />;
}

function PrimarySection() {
  return <ProgramSection level={academicsData.levels[1]} image="/images/primary-program.jpg" />;
}

function SecondarySection() {
  return <ProgramSection level={academicsData.levels[2]} image="/images/secondary-program.jpg" />;
}

function SixthFormSection() {
  return <ProgramSection level={academicsData.levels[3]} image="/images/predegree-program.jpg" />;
}

interface ProgramSectionProps {
  level: typeof academicsData.levels[0];
  image: string;
}

function ProgramSection({ level, image }: ProgramSectionProps) {
  return (
    <div className="py-20">
      <div className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <AnimateOnScroll animation="fade-right" delay={100}>
              <div>
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                  {level.id.charAt(0).toUpperCase() + level.id.slice(1)} Program
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate mt-4 mb-6">
                  {level.title}
                </h2>
                <p className="text-slate-light mb-6">
                  {level.description}
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate mb-2">Teaching Approach</h4>
                    <p className="text-slate-light">{level.approach}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate mb-2">Admission Age</h4>
                    <p className="text-slate-light">{level.admissionAge}</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-left" delay={100}>
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-card">
                <img
                  src={image}
                  alt={level.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll animation="fade-up" delay={200}>
            <div className="bg-white rounded-3xl p-8 shadow-card">
              <h3 className="text-xl font-bold text-slate mb-6">Key Learning Areas</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {level.keyAreas.map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-slate">{area}</span>
                  </div>
                ))}
              </div>
              {'exams' in level && level.exams && (
                <div className="mt-8 pt-8 border-t border-muted">
                  <h4 className="font-semibold text-slate mb-4">External Examinations</h4>
                  <div className="flex flex-wrap gap-3">
                    {level.exams.map((exam) => (
                      <span
                        key={exam}
                        className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium"
                      >
                        {exam}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
}

function CalendarSection() {
  const upcomingEvents = academicsData.calendar.keyDates
    .filter(event => new Date(event.date) >= new Date())
    .slice(0, 6);

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'term':
        return 'bg-primary/10 text-primary';
      case 'exam':
        return 'bg-red-500/10 text-red-600';
      case 'holiday':
        return 'bg-green-500/10 text-green-600';
      case 'event':
        return 'bg-blue/10 text-blue';
      default:
        return 'bg-muted text-slate';
    }
  };

  return (
    <div className="py-20">
      <div className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <AnimateOnScroll animation="fade-up" delay={100}>
                <div className="bg-white rounded-3xl p-8 shadow-card">
                  <h2 className="text-2xl font-bold text-slate mb-6">Academic Terms</h2>
                  <div className="space-y-6">
                    {academicsData.calendar.terms.map((term) => (
                      <div key={term.name} className="p-6 bg-muted/30 rounded-2xl">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-bold text-slate">{term.name}</h3>
                          <span className="text-sm text-slate-muted">{term.period}</span>
                        </div>
                        <div className="space-y-2">
                          {term.activities.map((activity) => (
                            <div key={activity} className="flex items-center gap-2 text-slate-light">
                              <Calendar className="w-4 h-4 text-primary" />
                              {activity}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            <div>
              <AnimateOnScroll animation="fade-left" delay={100}>
                <div className="bg-white rounded-3xl p-6 shadow-card">
                  <h3 className="text-lg font-bold text-slate mb-4">Upcoming Events</h3>
                  <div className="space-y-4">
                    {upcomingEvents.length > 0 ? (
                      upcomingEvents.map((event) => (
                        <div key={event.date} className="p-4 bg-muted/30 rounded-xl">
                          <div className="flex items-center justify-between mb-2">
                            <span className={`text-xs font-medium px-2 py-1 rounded ${getEventTypeColor(event.type)}`}>
                              {event.type}
                            </span>
                            <span className="text-xs text-slate-muted">
                              {new Date(event.date).toLocaleDateString('en-US', { 
                                month: 'short', 
                                day: 'numeric' 
                              })}
                            </span>
                          </div>
                          <p className="font-medium text-slate">{event.event}</p>
                        </div>
                      ))
                    ) : (
                      <p className="text-slate-light text-sm">No upcoming events.</p>
                    )}
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RegistrarSection() {
  return (
    <div className="py-20">
      <div className="section-padding">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-card">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <FileText className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate">Registrar's Office</h2>
                    <p className="text-slate-muted">Academic Records & Transcripts</p>
                  </div>
                </div>

                <p className="text-slate-light mb-8">
                  The Registrar's Office is responsible for maintaining all academic records, 
                  processing transcript requests, and managing student information. We are 
                  committed to providing efficient and confidential services to our students, 
                  alumni, and stakeholders.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-bold text-slate mb-4">Services Offered</h3>
                    <ul className="space-y-3">
                      {[
                        'Academic Transcripts',
                        'Student Records',
                        'Graduation Verification',
                        'Certificate Replacement',
                        'Academic Counseling',
                        'University Application Support',
                      ].map((service) => (
                        <li key={service} className="flex items-center gap-2 text-slate-light">
                          <FileText className="w-4 h-4 text-primary" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate mb-4">Request a Transcript</h3>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        alert('Transcript request submitted! We will contact you shortly.');
                      }}
                      className="space-y-4"
                    >
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full px-4 py-3 rounded-xl border border-muted focus:border-primary focus:outline-none transition-colors"
                        required
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full px-4 py-3 rounded-xl border border-muted focus:border-primary focus:outline-none transition-colors"
                        required
                      />
                      <input
                        type="text"
                        placeholder="Student ID (if known)"
                        className="w-full px-4 py-3 rounded-xl border border-muted focus:border-primary focus:outline-none transition-colors"
                      />
                      <select
                        className="w-full px-4 py-3 rounded-xl border border-muted focus:border-primary focus:outline-none transition-colors"
                        required
                      >
                        <option value="">Select Request Type</option>
                        <option value="transcript">Official Transcript</option>
                        <option value="verification">Graduation Verification</option>
                        <option value="certificate">Certificate Replacement</option>
                      </select>
                      <button
                        type="submit"
                        className="w-full btn-primary"
                      >
                        Submit Request
                      </button>
                    </form>
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
