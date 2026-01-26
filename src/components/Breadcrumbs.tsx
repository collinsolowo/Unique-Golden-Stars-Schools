import { Link, useLocation } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items = [], className = '' }: BreadcrumbsProps) {
  const location = useLocation();
  
  // Generate breadcrumbs from current path if no items provided
  const pathItems: BreadcrumbItem[] = items.length > 0 
    ? items 
    : generateBreadcrumbsFromPath(location.pathname);

  return (
    <nav 
      className={`flex items-center gap-2 text-sm ${className}`}
      aria-label="Breadcrumb"
    >
      <Link
        to="/"
        className="flex items-center gap-1 text-slate-muted hover:text-blue transition-colors"
        aria-label="Home"
      >
        <Home className="w-4 h-4" />
        <span className="hidden sm:inline">Home</span>
      </Link>
      
      {pathItems.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <ChevronRight className="w-4 h-4 text-slate-muted" />
          {item.href ? (
            <Link
              to={item.href}
              className="text-slate-muted hover:text-blue transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-slate font-medium" aria-current="page">
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}

function generateBreadcrumbsFromPath(pathname: string): BreadcrumbItem[] {
  const segments = pathname.split('/').filter(Boolean);
  const items: BreadcrumbItem[] = [];
  
  // Define custom labels for common paths
  const labelMap: Record<string, string> = {
    'about': 'About Us',
    'history': 'History',
    'founders-note': "Founder's Note",
    'managing-directors-note': "MD's Note",
    'at-a-glance': 'At a Glance',
    'policies': 'Codes & Policies',
    'pledge-anthem': 'Pledge & Anthem',
    'schools': 'Schools',
    'nursery-primary': 'Nursery & Primary',
    'secondary': 'Secondary',
    'predegree': 'Pre-Degree',
    'academics': 'Academics',
    'curriculum': 'Curriculum',
    'brief': 'Academic Brief',
    'nursery': 'Nursery',
    'primary': 'Primary',
    'sixthform': 'Sixth Form',
    'calendar': 'Calendar',
    'registrar': "Registrar's Office",
    'admissions': 'Admissions',
    'tuition': 'Tuition & Scholarships',
    'process': 'Admission Process',
    'exams': 'Exams & Results',
    'student-life': 'Student Life',
    'clubs': 'Clubs & Co-curricular',
    'athletics': 'Athletics',
    'community': 'Community Service',
    'support': 'Student Support',
    'news': 'News',
    'gallery': 'Gallery',
    'alumni': 'Alumni',
    'careers': 'Careers',
    'contact': 'Contact Us',
    'faqs': 'FAQs',
    'safeguarding': 'Safeguarding',
  };
  
  let currentPath = '';
  
  segments.forEach((segment) => {
    currentPath += `/${segment}`;
    const label = labelMap[segment] || formatSegmentLabel(segment);
    
    // Only add href if it's not the last segment
    const isLast = segments.indexOf(segment) === segments.length - 1;
    
    items.push({
      label,
      href: isLast ? undefined : currentPath,
    });
  });
  
  return items;
}

function formatSegmentLabel(segment: string): string {
  // Convert kebab-case to readable format
  return segment
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
