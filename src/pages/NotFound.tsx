import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30">
      <div className="text-center px-4">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-slate mb-4">404</h1>
          <h2 className="text-3xl font-bold text-slate mb-4">Page Not Found</h2>
          <p className="text-slate-light max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved. 
            Don't worry, we'll help you find your way back.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="btn-primary inline-flex items-center gap-2 group"
          >
            <Home className="w-5 h-5" />
            Go to Homepage
          </Link>
          <Link
            to="/"
            onClick={() => window.history.back()}
            className="btn-outline inline-flex items-center gap-2 group"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </Link>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-muted text-sm">
            Or explore our main sections:
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <Link to="/about" className="text-blue hover:underline">About Us</Link>
            <Link to="/schools" className="text-blue hover:underline">Our Schools</Link>
            <Link to="/academics" className="text-blue hover:underline">Academics</Link>
            <Link to="/admissions" className="text-blue hover:underline">Admissions</Link>
            <Link to="/contact" className="text-blue hover:underline">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
