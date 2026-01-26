import { Shield, Users, Phone, AlertTriangle, CheckCircle } from 'lucide-react';
import AnimateOnScroll from '../components/AnimateOnScroll';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

export default function Safeguarding() {
  return (
    <>
      <SEO
        title="Safeguarding"
        description="Learn about our commitment to child protection and safeguarding at Unique Golden Stars Schools."
      />

      {/* Page Header */}
      <section className="py-20 bg-muted/30">
        <div className="section-padding">
          <div className="container-wide">
            <Breadcrumbs items={[{ label: 'About', href: '/about' }, { label: 'Safeguarding' }]} className="mb-6" />
            <h1 className="text-4xl font-bold text-slate mb-4">
              Safeguarding & Child Protection
            </h1>
            <p className="text-lg text-slate-light max-w-2xl">
              The safety and well-being of our students is our highest priority. Learn about our 
              comprehensive safeguarding policies and procedures.
            </p>
          </div>
        </div>
      </section>

      {/* Safeguarding Commitment */}
      <section className="py-20 bg-slate text-white">
        <div className="section-padding">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto text-center">
              <AnimateOnScroll animation="fade-up" delay={100}>
                <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Shield className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Our Commitment to Child Safety
                </h2>
                <p className="text-slate-400 text-lg mb-8">
                  Golden Stars Schools is committed to safeguarding and promoting the welfare of all children 
                  and young people in our care. We believe that every child deserves to be safe, protected 
                  from harm, and able to develop to their full potential in a secure and nurturing environment.
                </p>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Key Principles */}
      <section className="py-20 bg-white">
        <div className="section-padding">
          <div className="container-wide">
            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate mb-4">
                  Safeguarding Principles
                </h2>
                <p className="text-slate-light max-w-2xl mx-auto">
                  Our approach to safeguarding is guided by these core principles.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Child-Centered Approach',
                  description: 'The welfare of the child is paramount in all our decisions and actions.',
                  icon: Users,
                },
                {
                  title: 'Zero Tolerance',
                  description: 'We maintain a zero-tolerance policy towards any form of abuse or neglect.',
                  icon: AlertTriangle,
                },
                {
                  title: 'Safe Recruitment',
                  description: 'All staff undergo comprehensive background checks and safeguarding training.',
                  icon: CheckCircle,
                },
                {
                  title: 'Confidential Reporting',
                  description: 'We provide safe channels for reporting concerns without fear of retaliation.',
                  icon: Phone,
                },
                {
                  title: 'Partnership',
                  description: 'We work in partnership with parents, students, and external agencies.',
                  icon: Users,
                },
                {
                  title: 'Continuous Improvement',
                  description: 'We regularly review and update our safeguarding policies and practices.',
                  icon: CheckCircle,
                },
              ].map((principle, index) => (
                <AnimateOnScroll key={principle.title} animation="fade-up" delay={(index + 1) * 100}>
                  <div className="bg-muted/30 rounded-2xl p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                      <principle.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-slate mb-2">{principle.title}</h3>
                    <p className="text-slate-light text-sm">{principle.description}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reporting Concerns */}
      <section className="py-20 bg-muted/30">
        <div className="section-padding">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto">
              <AnimateOnScroll animation="fade-up" delay={100}>
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-card">
                  <h2 className="text-2xl font-bold text-slate mb-6 text-center">
                    Reporting Concerns
                  </h2>
                  <p className="text-slate-light text-center mb-8">
                    If you have any concerns about a child's safety or well-being, please report it 
                    immediately. All reports will be taken seriously and handled confidentially.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="p-6 bg-primary/10 rounded-2xl">
                      <h3 className="text-lg font-bold text-slate mb-4">Contact Our Safeguarding Team</h3>
                      <div className="space-y-3">
                        <a
                          href="tel:+2349063135544"
                          className="flex items-center gap-3 text-slate hover:text-blue transition-colors"
                        >
                          <Phone className="w-5 h-5 text-primary" />
                          +234 906 313 5544
                        </a>
                        <a
                          href="mailto:safeguarding@uniquegoldenstars.edu.ng"
                          className="flex items-center gap-3 text-slate hover:text-blue transition-colors"
                        >
                          <Shield className="w-5 h-5 text-primary" />
                          safeguarding@uniquegoldenstars.edu.ng
                        </a>
                      </div>
                    </div>

                    <div className="p-6 bg-blue/10 rounded-2xl">
                      <h3 className="text-lg font-bold text-slate mb-4">Emergency Contacts</h3>
                      <div className="space-y-3">
                        <a
                          href="tel:112"
                          className="flex items-center gap-3 text-slate hover:text-blue transition-colors"
                        >
                          <AlertTriangle className="w-5 h-5 text-blue" />
                          Emergency Services: 112
                        </a>
                        <a
                          href="tel:08001234567"
                          className="flex items-center gap-3 text-slate hover:text-blue transition-colors"
                        >
                          <AlertTriangle className="w-5 h-5 text-blue" />
                          Child Protection Hotline: 0800-123-4567
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Policies & Training */}
      <section className="py-20 bg-white">
        <div className="section-padding">
          <div className="container-wide">
            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate mb-4">
                  Our Safeguarding Framework
                </h2>
                <p className="text-slate-light max-w-2xl mx-auto">
                  Our comprehensive safeguarding framework includes clear policies, regular training, 
                  and robust procedures to ensure the highest standards of child protection.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 gap-8">
              <AnimateOnScroll animation="fade-right" delay={100}>
                <div className="bg-white rounded-2xl p-6 shadow-soft">
                  <h3 className="text-xl font-bold text-slate mb-4">Staff Training</h3>
                  <ul className="space-y-3">
                    {[
                      'Annual safeguarding training for all staff',
                      'Specialized training for designated safeguarding leads',
                      'Regular updates on legislation and best practices',
                      'Safeguarding induction for new staff',
                      'Ongoing professional development',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-slate-light">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-left" delay={100}>
                <div className="bg-white rounded-2xl p-6 shadow-soft">
                  <h3 className="text-xl font-bold text-slate mb-4">Student Education</h3>
                  <ul className="space-y-3">
                    {[
                      'Age-appropriate personal safety education',
                      'Anti-bullying and harassment programs',
                      'Digital citizenship and online safety',
                      'Peer support and mentoring systems',
                      'Regular assemblies on safeguarding topics',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-slate-light">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
