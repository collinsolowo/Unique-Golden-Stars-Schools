import { useState } from 'react';
import { ChevronRight, Briefcase, MapPin, DollarSign, ArrowRight, Upload, CheckCircle } from 'lucide-react';
import AnimateOnScroll from '../components/AnimateOnScroll';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import careersData from '../data/careers.json';

export default function Careers() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <>
      <SEO
        title="Careers"
        description="Join our team of dedicated educators and staff. Explore career opportunities at Unique Golden Stars Schools."
      />

      {/* Page Header */}
      <section className="py-20 bg-muted/30">
        <div className="section-padding">
          <div className="container-wide">
            <Breadcrumbs items={[{ label: 'Careers' }]} className="mb-6" />
            <h1 className="text-4xl font-bold text-slate mb-4">
              Careers at Golden Stars
            </h1>
            <p className="text-lg text-slate-light max-w-2xl">
              Join our team of passionate educators and staff dedicated to shaping the future of education. 
              We offer rewarding careers with opportunities for growth and development.
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
                  Launch Your Teaching Career with Golden Stars
                </h2>
                <p className="text-slate-400 text-lg mb-8">
                  Are you a passionate graduate eager to make a difference in education? Golden Stars Schools 
                  offers exciting opportunities for motivated and talented individuals to join our team.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={200}>
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  {careersData.benefits.slice(0, 3).map((benefit) => (
                    <div key={benefit} className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/20 flex items-center justify-center">
                        <Briefcase className="w-8 h-8 text-primary" />
                      </div>
                      <p className="text-slate-300">{benefit}</p>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 bg-white">
        <div className="section-padding">
          <div className="container-wide">
            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate mb-4">
                  Current Openings
                </h2>
                <p className="text-slate-light max-w-2xl mx-auto">
                  Explore our current job opportunities and find your perfect role at Golden Stars.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {careersData.opportunities
                .filter(job => job.active)
                .map((job, index) => (
                  <AnimateOnScroll key={job.id} animation="fade-up" delay={(index + 1) * 100}>
                    <div className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-hover hover:-translate-y-1 transition-all duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          job.type === 'Full-time' 
                            ? 'bg-primary/10 text-primary' 
                            : 'bg-blue/10 text-blue'
                        }`}>
                          {job.type}
                        </span>
                        <span className="text-xs text-slate-muted flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {job.location}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-slate mb-2">{job.title}</h3>
                      <p className="text-sm text-slate-muted mb-4">{job.department}</p>
                      <p className="text-slate-light text-sm mb-4 line-clamp-3">
                        {job.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-muted">
                          Deadline: {new Date(job.applicationDeadline).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                          })}
                        </span>
                        <button
                          onClick={() => alert(`Application for ${job.title} coming soon!`)}
                          className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all"
                        >
                          Apply Now
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </AnimateOnScroll>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-muted/30">
        <div className="section-padding">
          <div className="container-wide">
            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-slate mb-8 text-center">
                  How to Apply
                </h2>
                <div className="space-y-6">
                  {careersData.applicationProcess.map((step, index) => (
                    <div key={index} className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-slate font-bold text-lg">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-grow pb-6 border-b border-muted last:border-0">
                        <p className="text-slate-light">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
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
                  Why Work at Golden Stars?
                </h2>
                <p className="text-slate-light max-w-2xl mx-auto">
                  We offer a comprehensive benefits package and a supportive work environment 
                  that fosters professional growth and development.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {careersData.benefits.map((benefit, index) => (
                <AnimateOnScroll key={benefit} animation="fade-up" delay={(index + 1) * 100}>
                  <div className="p-6 bg-muted/30 rounded-2xl text-center">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/20 flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-slate font-medium">{benefit}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* General Application */}
      <section className="py-20 bg-primary">
        <div className="section-padding">
          <div className="container-wide">
            <div className="max-w-2xl mx-auto text-center">
              <AnimateOnScroll animation="fade-up" delay={100}>
                <h2 className="text-3xl font-bold text-slate mb-4">
                  Don't See a Suitable Position?
                </h2>
                <p className="text-slate-light mb-8">
                  Submit your resume for future opportunities. We're always looking for talented 
                  individuals to join our team.
                </p>

                {showSuccess ? (
                  <div className="bg-white/20 rounded-2xl p-6 text-center">
                    <CheckCircle className="w-12 h-12 text-white mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-slate mb-2">Application Submitted!</h3>
                    <p className="text-slate-light">We'll contact you when a suitable position becomes available.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-card">
                    <div className="space-y-4 mb-6">
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
                        placeholder="Phone Number"
                        className="w-full px-4 py-3 rounded-xl border border-muted focus:border-primary focus:outline-none transition-colors"
                      />
                      <select className="w-full px-4 py-3 rounded-xl border border-muted focus:border-primary focus:outline-none transition-colors">
                        <option value="">Preferred Department</option>
                        <option value="teaching">Teaching</option>
                        <option value="admin">Administration</option>
                        <option value="support">Support Staff</option>
                        <option value="sports">Sports & Athletics</option>
                      </select>
                    </div>
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-slate mb-2">
                        Upload CV/Resume
                      </label>
                      <div className="flex items-center gap-4">
                        <label className="flex items-center gap-2 px-4 py-3 bg-muted rounded-lg cursor-pointer hover:bg-muted/80 transition-colors">
                          <Upload className="w-4 h-4" />
                          <span className="text-sm">
                            {selectedFile ? selectedFile.name : 'Choose File'}
                          </span>
                          <input
                            type="file"
                            className="hidden"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                          />
                        </label>
                      </div>
                      <p className="text-xs text-slate-muted mt-2">
                        Max file size: 20 MB. Accepted formats: PDF, DOC, DOCX
                      </p>
                    </div>
                    <button
                      type="submit"
                      className="w-full btn-primary inline-flex items-center justify-center gap-2 group"
                    >
                      Submit Application
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </form>
                )}
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
