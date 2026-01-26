import { useState } from 'react';
import { ChevronDown, FileText, Download } from 'lucide-react';
import AnimateOnScroll from '../components/AnimateOnScroll';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import policiesData from '../data/policies.json';

export default function Policies() {
  const [openPolicy, setOpenPolicy] = useState<string | null>(null);

  const togglePolicy = (title: string) => {
    setOpenPolicy(openPolicy === title ? null : title);
  };

  return (
    <>
      <SEO
        title="Codes & Policies"
        description="View our school policies, codes of conduct, and guidelines for students, parents, and staff."
      />

      {/* Page Header */}
      <section className="py-20 bg-muted/30">
        <div className="section-padding">
          <div className="container-wide">
            <Breadcrumbs items={[{ label: 'About', href: '/about' }, { label: 'Codes & Policies' }]} className="mb-6" />
            <h1 className="text-4xl font-bold text-slate mb-4">
              Codes & Policies
            </h1>
            <p className="text-lg text-slate-light max-w-2xl">
              Our policies ensure a safe, supportive, and effective learning environment for all members 
              of the Golden Stars community.
            </p>
          </div>
        </div>
      </section>

      {/* Policies List */}
      <section className="py-20 bg-white">
        <div className="section-padding">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto">
              {policiesData.policies.map((policy, index) => (
                <AnimateOnScroll key={policy.title} animation="fade-up" delay={(index + 1) * 100}>
                  <div className="mb-6 bg-white rounded-2xl border border-muted overflow-hidden">
                    <button
                      onClick={() => togglePolicy(policy.title)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/30 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                          <FileText className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="text-lg font-bold text-slate">{policy.title}</h3>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            alert('Download coming soon!');
                          }}
                          className="p-2 hover:bg-muted rounded-lg transition-colors"
                          aria-label="Download policy"
                        >
                          <Download className="w-5 h-5 text-slate-muted" />
                        </button>
                        <ChevronDown
                          className={`w-5 h-5 text-slate-muted transition-transform ${
                            openPolicy === policy.title ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openPolicy === policy.title ? 'max-h-[1000px]' : 'max-h-0'
                      }`}
                    >
                      <div className="px-6 pb-6">
                        <div className="prose prose-slate max-w-none">
                          {policy.content.split('\n\n').map((paragraph, index) => (
                            <p key={index} className="text-slate-light mb-4 whitespace-pre-line">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
