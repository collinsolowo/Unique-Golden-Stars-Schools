import { Link, useParams } from 'react-router-dom';
import { ChevronRight, MapPin } from 'lucide-react';
import AnimateOnScroll from '../components/AnimateOnScroll';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import campusesData from '../data/campuses.json';

interface SchoolsProps {
  category?: string;
}

export default function Schools({ category = 'all' }: SchoolsProps) {
  const { category: urlCategory } = useParams<{ category?: string }>();
  const activeCategory = urlCategory || category;

  const getCategoryTitle = (cat: string) => {
    switch (cat) {
      case 'nursery-primary':
        return 'Nursery & Primary Schools';
      case 'secondary':
        return 'Secondary / High Schools';
      case 'predegree':
        return 'Pre-Degree / College';
      default:
        return 'Our Schools';
    }
  };

  const getCategoryDescription = (cat: string) => {
    switch (cat) {
      case 'nursery-primary':
        return 'Our nursery and primary schools provide a nurturing foundation for lifelong learning, focusing on holistic development from ages 6 months to 11 years.';
      case 'secondary':
        return 'Our secondary schools offer rigorous academic programs preparing students for university entrance and beyond, with specialized facilities and expert faculty.';
      case 'predegree':
        return 'Our pre-degree college provides intensive preparation for university entrance, with A-Level programs and foundation courses for both local and international universities.';
      default:
        return 'Discover our network of campuses across Lagos and beyond, each offering exceptional education tailored to different age groups and learning needs.';
    }
  };

  const filteredCampuses = activeCategory === 'all'
    ? campusesData.campuses
    : campusesData.campuses.filter(campus => campus.category === activeCategory);

  // Group campuses by category
  const campusesByCategory = {
    nursery: campusesData.campuses.filter(c => c.category === 'nursery'),
    primary: campusesData.campuses.filter(c => c.category === 'primary'),
    secondary: campusesData.campuses.filter(c => c.category === 'secondary'),
    predegree: campusesData.campuses.filter(c => c.category === 'predegree'),
  };

  return (
    <>
      <SEO
        title={getCategoryTitle(activeCategory)}
        description={getCategoryDescription(activeCategory)}
      />

      {/* Page Header */}
      <section className="py-20 bg-muted/30">
        <div className="section-padding">
          <div className="container-wide">
            <Breadcrumbs
              items={[
                { label: 'Schools', href: '/schools' },
                activeCategory !== 'all' && { label: getCategoryTitle(activeCategory) },
              ].filter(Boolean) as { label: string; href?: string }[]}
              className="mb-6"
            />
            <h1 className="text-4xl font-bold text-slate mb-4">
              {getCategoryTitle(activeCategory)}
            </h1>
            <p className="text-lg text-slate-light max-w-2xl">
              {getCategoryDescription(activeCategory)}
            </p>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 bg-white border-b border-muted">
        <div className="section-padding">
          <div className="container-wide">
            <div className="flex flex-wrap gap-2">
              <Link
                to="/schools"
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeCategory === 'all'
                    ? 'bg-primary text-slate'
                    : 'bg-muted text-slate hover:bg-muted/80'
                }`}
              >
                All Schools
              </Link>
              <Link
                to="/schools/nursery-primary"
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeCategory === 'nursery-primary'
                    ? 'bg-primary text-slate'
                    : 'bg-muted text-slate hover:bg-muted/80'
                }`}
              >
                Nursery & Primary
              </Link>
              <Link
                to="/schools/secondary"
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeCategory === 'secondary'
                    ? 'bg-primary text-slate'
                    : 'bg-muted text-slate hover:bg-muted/80'
                }`}
              >
                Secondary
              </Link>
              <Link
                to="/schools/predegree"
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeCategory === 'predegree'
                    ? 'bg-primary text-slate'
                    : 'bg-muted text-slate hover:bg-muted/80'
                }`}
              >
                Pre-Degree
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Campuses Grid */}
      <section className="py-20 bg-white">
        <div className="section-padding">
          <div className="container-wide">
            {activeCategory === 'all' ? (
              // Show all categories grouped
              <div className="space-y-16">
                {Object.entries(campusesByCategory).map(([category, campuses]) => (
                  campuses.length > 0 && (
                    <div key={category}>
                      <AnimateOnScroll animation="fade-up" delay={100}>
                        <h2 className="text-2xl font-bold text-slate mb-8 capitalize">
                          {category === 'nursery' && 'Nursery Schools'}
                          {category === 'primary' && 'Primary Schools'}
                          {category === 'secondary' && 'Secondary Schools'}
                          {category === 'predegree' && 'Pre-Degree Colleges'}
                        </h2>
                      </AnimateOnScroll>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {campuses.map((campus, index) => (
                          <CampusCard key={campus.id} campus={campus} delay={(index + 1) * 100} />
                        ))}
                      </div>
                    </div>
                  )
                ))}
              </div>
            ) : (
              // Show filtered campuses
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCampuses.map((campus, index) => (
                  <CampusCard key={campus.id} campus={campus} delay={(index + 1) * 100} />
                ))}
              </div>
            )}

            {filteredCampuses.length === 0 && (
              <AnimateOnScroll animation="fade-up" delay={100}>
                <div className="text-center py-16">
                  <p className="text-slate-light text-lg">
                    No campuses found in this category. Please check back later or explore other categories.
                  </p>
                </div>
              </AnimateOnScroll>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

interface Campus {
  id: string;
  name: string;
  category: string;
  established: string;
  address: string;
  phone: string[];
  email: string;
  image: string;
  headTeacher: string;
  description: string;
  facilities: string[];
  stats: {
    studentRatio: string;
    studentPopulation: string;
    campusSize: string;
  };
}

interface CampusCardProps {
  campus: Campus;
  delay?: number;
}

function CampusCard({ campus, delay = 100 }: CampusCardProps) {
  return (
    <AnimateOnScroll animation="fade-up" delay={delay}>
      <Link
        to={`/campus/${campus.id}`}
        className="group block bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-hover hover:-translate-y-2 transition-all duration-300"
      >
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={campus.image}
            alt={campus.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
        </div>
        <div className="p-6">
          <span className="text-xs font-medium text-blue bg-blue/10 px-3 py-1 rounded-full">
            Est. {campus.established}
          </span>
          <h3 className="text-xl font-bold text-slate mt-3 mb-2">
            {campus.name}
          </h3>
          <div className="flex items-center gap-1 text-sm text-slate-muted mb-3">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            <span className="truncate">{campus.address}</span>
          </div>
          <p className="text-sm text-slate-light mb-4 line-clamp-2">
            {campus.description}
          </p>
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
            View Campus
            <ChevronRight className="w-4 h-4" />
          </span>
        </div>
      </Link>
    </AnimateOnScroll>
  );
}
