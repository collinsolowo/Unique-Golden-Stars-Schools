import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Calendar, User, Facebook, Twitter, Linkedin } from 'lucide-react';
import AnimateOnScroll from '../components/AnimateOnScroll';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import newsData from '../data/news.json';

export default function NewsArticle() {
  const { slug } = useParams<{ slug: string }>();
  const article = newsData.news.find(n => n.slug === slug);

  if (!article) {
    return (
      <div className="py-20">
        <div className="section-padding">
          <div className="container-wide text-center">
            <h1 className="text-3xl font-bold text-slate mb-4">Article Not Found</h1>
            <p className="text-slate-light mb-8">
              The article you're looking for doesn't exist or has been moved.
            </p>
            <Link to="/news" className="btn-primary">
              Back to News
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const relatedArticles = newsData.news
    .filter(n => n.id !== article.id && n.category === article.category)
    .slice(0, 3);

  return (
    <>
      <SEO
        title={article.title}
        description={article.excerpt}
      />

      {/* Page Header */}
      <section className="py-20 bg-muted/30">
        <div className="section-padding">
          <div className="container-wide">
            <Breadcrumbs
              items={[
                { label: 'News', href: '/news' },
                { label: article.title },
              ]}
              className="mb-6"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 bg-white">
        <div className="section-padding">
          <div className="container-wide">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Article */}
              <div className="lg:col-span-2">
                <AnimateOnScroll animation="fade-up" delay={100}>
                  <article>
                    {/* Article Header */}
                    <div className="mb-8">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full">
                          {article.category}
                        </span>
                        <span className="text-sm text-slate-muted flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(article.date).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </span>
                      </div>
                      <h1 className="text-3xl lg:text-4xl font-bold text-slate mb-4">
                        {article.title}
                      </h1>
                      <div className="flex items-center gap-2 text-sm text-slate-muted">
                        <User className="w-4 h-4" />
                        By {article.author}
                      </div>
                    </div>

                    {/* Featured Image */}
                    <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-8">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    {/* Article Content */}
                    <div className="prose prose-lg max-w-none mb-8">
                      {article.content.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="text-slate-light mb-4">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {/* Share Buttons */}
                    <div className="flex items-center gap-4 py-6 border-t border-b border-muted">
                      <span className="text-sm font-medium text-slate">Share this article:</span>
                      <div className="flex items-center gap-2">
                        <a
                          href={`https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-blue hover:text-white transition-colors"
                          aria-label="Share on Facebook"
                        >
                          <Facebook className="w-4 h-4" />
                        </a>
                        <a
                          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(article.title)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-blue hover:text-white transition-colors"
                          aria-label="Share on Twitter"
                        >
                          <Twitter className="w-4 h-4" />
                        </a>
                        <a
                          href={`https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-blue hover:text-white transition-colors"
                          aria-label="Share on LinkedIn"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </article>
                </AnimateOnScroll>

                {/* Back Button */}
                <Link
                  to="/news"
                  className="inline-flex items-center gap-2 text-blue font-semibold hover:gap-3 transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                  Back to News
                </Link>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Article Info */}
                <div className="bg-muted/30 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-slate mb-4">Article Info</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-slate-muted mb-1">Category</p>
                      <p className="font-medium text-slate">{article.category}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-muted mb-1">Published</p>
                      <p className="font-medium text-slate">
                        {new Date(article.date).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-muted mb-1">Author</p>
                      <p className="font-medium text-slate">{article.author}</p>
                    </div>
                  </div>
                </div>

                {/* Related Articles */}
                {relatedArticles.length > 0 && (
                  <div className="bg-muted/30 rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-slate mb-4">Related Articles</h3>
                    <div className="space-y-4">
                      {relatedArticles.map((related) => (
                        <Link
                          key={related.id}
                          to={`/news/${related.slug}`}
                          className="block group"
                        >
                          <div className="aspect-[16/10] rounded-xl overflow-hidden mb-3">
                            <img
                              src={related.image}
                              alt={related.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                            />
                          </div>
                          <h4 className="font-semibold text-slate group-hover:text-blue transition-colors line-clamp-2">
                            {related.title}
                          </h4>
                          <p className="text-sm text-slate-muted">
                            {new Date(related.date).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                            })}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
