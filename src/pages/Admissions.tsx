import { Link, useParams } from 'react-router-dom';
import { ArrowRight, CheckCircle, Calendar, CreditCard, FileText } from 'lucide-react';
import AnimateOnScroll from '../components/AnimateOnScroll';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import admissionsData from '../data/admissions.json';

interface AdmissionsProps {
  section?: string;
}

export default function Admissions({ section = 'main' }: AdmissionsProps) {
  const { section: urlSection } = useParams<{ section?: string }>();
  const activeSection = urlSection || section;

  const renderContent = () => {
    switch (activeSection) {
      case 'tuition':
        return <TuitionSection />;
      case 'process':
        return <ProcessSection />;
      case 'exams':
        return <ExamsSection />;
      default:
        return <MainAdmissionsSection />;
    }
  };

  const getTitle = () => {
    switch (activeSection) {
      case 'tuition':
        return 'Tuition & Scholarships';
      case 'process':
        return 'Admission Process';
      case 'exams':
        return 'Admission Exams & Results';
      default:
        return 'Admissions';
    }
  };

  const getBreadcrumbs = () => {
    const baseItems = [{ label: 'Admissions', href: '/admissions' }];
    
    switch (activeSection) {
      case 'tuition':
        return [...baseItems, { label: 'Tuition & Scholarships' }];
      case 'process':
        return [...baseItems, { label: 'Admission Process' }];
      case 'exams':
        return [...baseItems, { label: 'Exams & Results' }];
      default:
        return [{ label: 'Admissions' }];
    }
  };

  return (
    <>
      <SEO
        title={getTitle()}
        description={`Learn about ${getTitle()} at Unique Golden Stars Schools - your pathway to quality education.`}
      />

      {/* Page Header */}
      <section className="py-20 bg-muted/30">
        <div className="section-padding">
          <div className="container-wide">
            <Breadcrumbs items={getBreadcrumbs()} className="mb-6" />
            <h1 className="text-4xl font-bold text-slate mb-4">{getTitle()}</h1>
            <p className="text-lg text-slate-light max-w-2xl">
              Join the Golden Stars family. Discover our admission process, fees, and scholarship opportunities.
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
                to="/admissions"
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeSection === 'main'
                    ? 'bg-primary text-slate'
                    : 'bg-muted text-slate hover:bg-muted/80'
                }`}
              >
                Overview
              </Link>
              <Link
                to="/admissions/tuition"
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeSection === 'tuition'
                    ? 'bg-primary text-slate'
                    : 'bg-muted text-slate hover:bg-muted/80'
                }`}
              >
                Tuition & Scholarships
              </Link>
              <Link
                to="/admissions/process"
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeSection === 'process'
                    ? 'bg-primary text-slate'
                    : 'bg-muted text-slate hover:bg-muted/80'
                }`}
              >
                Admission Process
              </Link>
              <Link
                to="/admissions/exams"
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeSection === 'exams'
                    ? 'bg-primary text-slate'
                    : 'bg-muted text-slate hover:bg-muted/80'
                }`}
              >
                Exams & Results
              </Link>
            </div>
          </div>
        </div>
      </section>

      {renderContent()}
    </>
  );
}

function MainAdmissionsSection() {
  return (
    <div className="py-20">
      <div className="section-padding">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <AnimateOnScroll animation="fade-up" delay={100}>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Welcome to Golden Stars
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate mt-4 mb-6">
                Your Journey Starts Here
              </h2>
              <p className="text-slate-light">
                We are delighted that you are considering Unique Golden Stars Schools for your child's education. 
                Our admission process is designed to be transparent, fair, and supportive.
              </p>
            </AnimateOnScroll>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: 'Tuition & Scholarships',
                description: 'Learn about our fee structure and available financial assistance',
                icon: CreditCard,
                href: '/admissions/tuition',
                color: 'primary',
              },
              {
                title: 'Admission Process',
                description: 'Step-by-step guide to joining the Golden Stars family',
                icon: FileText,
                href: '/admissions/process',
                color: 'blue',
              },
              {
                title: 'Exams & Results',
                description: 'Information about entrance examinations and results',
                icon: Calendar,
                href: '/admissions/exams',
                color: 'primary',
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
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll animation="fade-up" delay={400}>
            <div className="bg-primary rounded-3xl p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold text-slate mb-4">
                Ready to Apply?
              </h2>
              <p className="text-slate-light mb-8 max-w-2xl mx-auto">
                Start your application today and take the first step towards an exceptional education 
                for your child at Unique Golden Stars Schools.
              </p>
              <Link
                to="/admissions/process"
                className="btn-secondary inline-flex items-center gap-2 group"
              >
                Start Your Application
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
}

function TuitionSection() {
  return (
    <div className="py-20">
      <div className="section-padding">
        <div className="container-wide">
          <div className="max-w-5xl mx-auto">
            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-card mb-12">
                <h2 className="text-2xl font-bold text-slate mb-6">Tuition & Fees</h2>
                <p className="text-slate-light mb-8">
                  Our tuition fees reflect the quality of education and facilities we provide. 
                  We offer flexible payment options and scholarships to ensure that no deserving 
                  student is denied access to quality education due to financial constraints.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  {Object.entries(admissionsData.tuition).filter(([key]) => key !== 'payment').map(([level, data]) => {
                    const isString = typeof data === 'string';
                    return (
                      <div key={level} className="p-6 bg-muted/30 rounded-2xl">
                        <h3 className="text-lg font-bold text-slate mb-4 capitalize">
                          {level === 'boarding' ? 'Boarding Fees' : `${level} School`}
                        </h3>
                        <div className="text-3xl font-bold text-primary mb-4">
                          {isString ? data : typeof data === 'object' && 'annual' in data ? data.annual : 'N/A'}
                        </div>
                        {!isString && typeof data === 'object' && 'breakdown' in data && (
                          <div className="space-y-2">
                            {Object.entries(data.breakdown).map(([item, amount]) => (
                              <div key={item} className="flex justify-between text-sm">
                                <span className="text-slate-light capitalize">{item}</span>
                                <span className="text-slate font-medium">{amount}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 p-6 bg-blue/10 rounded-2xl">
                  <h4 className="font-semibold text-slate mb-3">Payment Options</h4>
                  <ul className="space-y-2">
                    {admissionsData.tuition.payment.map((option) => (
                      <li key={option} className="flex items-center gap-2 text-slate-light">
                        <CheckCircle className="w-4 h-4 text-blue" />
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={200}>
              <div className="bg-white rounded-3xl p-8 shadow-card">
                <h2 className="text-2xl font-bold text-slate mb-6">Scholarships</h2>
                <p className="text-slate-light mb-8">
                  We believe that financial constraints should not prevent talented students from 
                  accessing quality education. We offer various scholarship programs to support 
                  deserving students.
                </p>

                <div className="space-y-6">
                  {admissionsData.scholarships.map((scholarship) => (
                    <div key={scholarship.name} className="p-6 bg-muted/30 rounded-2xl">
                      <h3 className="text-lg font-bold text-slate mb-2">{scholarship.name}</h3>
                      <p className="text-slate-light mb-4">{scholarship.description}</p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-slate mb-2">Coverage</h4>
                          <ul className="space-y-1">
                            {scholarship.coverage.map((item) => (
                              <li key={item} className="text-sm text-slate-light flex items-center gap-2">
                                <CheckCircle className="w-3 h-3 text-primary" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate mb-2">Eligibility</h4>
                          <ul className="space-y-1">
                            {scholarship.eligibility.map((item) => (
                              <li key={item} className="text-sm text-slate-light flex items-center gap-2">
                                <CheckCircle className="w-3 h-3 text-primary" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
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

function ProcessSection() {
  return (
    <div className="py-20">
      <div className="section-padding">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate mb-4">
                  Admission Process
                </h2>
                <p className="text-slate-light max-w-2xl mx-auto">
                  Our admission process is designed to be straightforward and transparent. 
                  Follow these steps to join the Golden Stars family.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="space-y-8">
              {admissionsData.process.steps.map((step, index) => (
                <AnimateOnScroll key={step.number} animation="fade-up" delay={(index + 1) * 100}>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-slate font-bold text-lg">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-grow pb-8 border-b border-muted last:border-0">
                      <h3 className="text-xl font-bold text-slate mb-2">{step.title}</h3>
                      <p className="text-slate-light">{step.description}</p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            <AnimateOnScroll animation="fade-up" delay={700}>
              <div className="mt-12 p-8 bg-primary/10 rounded-3xl text-center">
                <h3 className="text-xl font-bold text-slate mb-4">
                  Ready to Start Your Application?
                </h3>
                <p className="text-slate-light mb-6">
                  Begin your journey to quality education at Unique Golden Stars Schools.
                </p>
                <button
                  onClick={() => alert('Online application portal coming soon!')}
                  className="btn-primary inline-flex items-center gap-2 group"
                >
                  Start Application
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExamsSection() {
  return (
    <div className="py-20">
      <div className="section-padding">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-card mb-12">
                <h2 className="text-2xl font-bold text-slate mb-6">Entrance Examination Schedule</h2>
                <p className="text-slate-light mb-8">
                  Our entrance examinations are designed to assess each applicant's readiness for 
                  our academic programs. The exams are held at various times throughout the year.
                </p>

                <div className="space-y-6">
                  {admissionsData.exams.schedule.map((exam, index) => (
                    <div key={index} className="p-6 bg-muted/30 rounded-2xl">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-bold text-slate">{exam.level}</h3>
                          <p className="text-slate-light">{exam.venue}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-slate">
                            {new Date(exam.date).toLocaleDateString('en-US', {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </p>
                          <p className="text-slate-muted">{exam.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={200}>
              <div className="bg-white rounded-3xl p-8 shadow-card">
                <h2 className="text-2xl font-bold text-slate mb-6">Examination Subjects</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {Object.entries(admissionsData.exams.subjects).map(([level, subjects]) => (
                    <div key={level}>
                      <h3 className="text-lg font-bold text-slate mb-4 capitalize">
                        {level === 'nursery' ? 'Nursery Assessment' : `${level} Entrance Exam`}
                      </h3>
                      <ul className="space-y-2">
                        {subjects.map((subject) => (
                          <li key={subject} className="flex items-center gap-2 text-slate-light">
                            <FileText className="w-4 h-4 text-primary" />
                            {subject}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-blue/10 rounded-2xl">
                  <h4 className="font-semibold text-slate mb-2">Results</h4>
                  <p className="text-slate-light">
                    {admissionsData.exams.results.announcement} {admissionsData.exams.results.check}
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
