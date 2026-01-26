import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import AnimateOnScroll from '../components/AnimateOnScroll';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import faqsData from '../data/faqs.json';

export default function FAQs() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  const toggleQuestion = (question: string) => {
    setOpenQuestion(openQuestion === question ? null : question);
  };

  return (
    <>
      <SEO
        title="FAQs"
        description="Find answers to frequently asked questions about Unique Golden Stars Schools."
      />

      {/* Page Header */}
      <section className="py-20 bg-muted/30">
        <div className="section-padding">
          <div className="container-wide">
            <Breadcrumbs items={[{ label: 'FAQs' }]} className="mb-6" />
            <h1 className="text-4xl font-bold text-slate mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-slate-light max-w-2xl">
              Find answers to common questions about our school, admissions, academics, and more.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-white">
        <div className="section-padding">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto">
              {faqsData.faqs.map((category) => (
                <div key={category.category} className="mb-8">
                  <AnimateOnScroll animation="fade-up" delay={100}>
                    <button
                      onClick={() => toggleCategory(category.category)}
                      className="w-full flex items-center justify-between p-6 bg-muted/30 rounded-2xl hover:bg-muted/50 transition-colors"
                    >
                      <h2 className="text-xl font-bold text-slate">{category.category}</h2>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-muted transition-transform ${
                          openCategory === category.category ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </AnimateOnScroll>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openCategory === category.category ? 'max-h-[1000px] mt-4' : 'max-h-0'
                    }`}
                  >
                    <div className="space-y-4">
                      {category.questions.map((qa) => (
                        <div
                          key={qa.question}
                          className="bg-white rounded-xl border border-muted overflow-hidden"
                        >
                          <button
                            onClick={() => toggleQuestion(qa.question)}
                            className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/30 transition-colors"
                          >
                            <h3 className="font-semibold text-slate pr-4">{qa.question}</h3>
                            <ChevronDown
                              className={`w-5 h-5 text-slate-muted flex-shrink-0 transition-transform ${
                                openQuestion === qa.question ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          <div
                            className={`overflow-hidden transition-all duration-300 ${
                              openQuestion === qa.question ? 'max-h-[500px]' : 'max-h-0'
                            }`}
                          >
                            <p className="px-5 pb-5 text-slate-light">
                              {qa.answer}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-primary">
        <div className="section-padding">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto text-center">
              <AnimateOnScroll animation="fade-up" delay={100}>
                <h2 className="text-3xl font-bold text-slate mb-4">
                  Still Have Questions?
                </h2>
                <p className="text-slate-light mb-8">
                  Can't find the answer you're looking for? Our admissions team is here to help.
                </p>
                <a
                  href="/contact"
                  className="btn-secondary inline-flex items-center gap-2 group"
                >
                  Contact Us
                  <ChevronDown className="w-5 h-5 rotate-[-90deg] transition-transform group-hover:translate-x-1" />
                </a>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
