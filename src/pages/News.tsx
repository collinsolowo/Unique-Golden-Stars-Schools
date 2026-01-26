import { Link } from 'react-router-dom';
import { ChevronRight, Calendar, User } from 'lucide-react';
import AnimateOnScroll from '../components/AnimateOnScroll';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import newsData from '../data/news.json';

export default function News() {
  return (
    <>
      <SEO
        title="News & Events"
        description="Stay updated with the latest news and events at Unique Golden Stars Schools."
      />

      {/* Page Header */}
      <section className="py-20 bg-muted/30">
        <div className="section-padding">
          <div className="container-wide">
            <Breadcrumbs items={[{ label: 'News & Events' }]} className="mb-6" />
            <h1 className="text-4xl font-bold text-slate mb-4">
              News & Events
            </h1>
            <p className="text-lg text-slate-light max-w-2xl">
              Stay informed about the latest happenings, achievements, and events at Unique Golden Stars Schools.
            </p>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 bg-white">
        <div className="section-padding">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsData.news.map((article, index) => (
                <AnimateOnScroll key={article.id} animation="fade-up" delay={(index + 1) * 100}>
                  <article className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-hover hover:-translate-y-2 transition-all duration-300">
                    <Link to={`/news/${article.slug}`}>
                      <div className="aspect-[16/10] overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                            {article.category}
                          </span>
                          <span className="text-xs text-slate-muted flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(article.date).toLocaleDateString('en-US', { 
                              month: 'short', 
                              day: 'numeric', 
                              year: 'numeric' 
                            })}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-slate mb-3 group-hover:text-blue transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-slate-light text-sm mb-4 line-clamp-2">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-slate-muted flex items-center gap-1">
                            <User className="w-3 h-3" />
                            By {article.author}
                          </span>
                          <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                            Read More
                            <ChevronRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </article>
                </AnimateOnScroll>
              ))}
            </div>

            {/* Load More - for future pagination */}
            <div className="text-center mt-12">
              <button
                onClick={() => alert('More articles coming soon!')}
                className="btn-outline"
              >
                Load More Articles
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
