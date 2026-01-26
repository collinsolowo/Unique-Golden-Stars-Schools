import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SEO from './components/SEO';
import { refreshAOS } from './components/AnimateOnScroll';

// Page imports
import Home from './pages/Home';
import About from './pages/About';
import Schools from './pages/Schools';
import CampusDetail from './pages/CampusDetail';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import StudentLife from './pages/StudentLife';
import News from './pages/News';
import NewsArticle from './pages/NewsArticle';
import Gallery from './pages/Gallery';
import Alumni from './pages/Alumni';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import FAQs from './pages/FAQs';
import Policies from './pages/Policies';
import Safeguarding from './pages/Safeguarding';
import NotFound from './pages/NotFound';

function App() {
  useEffect(() => {
    // Refresh AOS on route change
    refreshAOS();
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <SEO
          title="Welcome"
          description="Unique Golden Stars Schools - Empowering minds, inspiring excellence in an environment for high expectations. Leading private education in Lagos, Nigeria."
        />
        <Header />
        <main className='pt-5'>
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* About Routes */}
            <Route path="/about" element={<About />} />
            <Route path="/about/history" element={<About section="history" />} />
            <Route path="/about/founders-note" element={<About section="founders-note" />} />
            <Route path="/about/managing-directors-note" element={<About section="managing-directors-note" />} />
            <Route path="/about/at-a-glance" element={<About section="at-a-glance" />} />
            <Route path="/about/policies" element={<Policies />} />
            <Route path="/about/pledge-anthem" element={<About section="pledge-anthem" />} />
            
            {/* Schools Routes */}
            <Route path="/schools" element={<Schools />} />
            <Route path="/schools/nursery-primary" element={<Schools category="nursery-primary" />} />
            <Route path="/schools/secondary" element={<Schools category="secondary" />} />
            <Route path="/schools/predegree" element={<Schools category="predegree" />} />
            <Route path="/campus/:id" element={<CampusDetail />} />
            
            {/* Academics Routes */}
            <Route path="/academics" element={<Academics />} />
            <Route path="/academics/curriculum" element={<Academics section="curriculum" />} />
            <Route path="/academics/brief" element={<Academics section="brief" />} />
            <Route path="/academics/nursery" element={<Academics section="nursery" />} />
            <Route path="/academics/primary" element={<Academics section="primary" />} />
            <Route path="/academics/secondary" element={<Academics section="secondary" />} />
            <Route path="/academics/sixthform" element={<Academics section="sixthform" />} />
            <Route path="/academics/calendar" element={<Academics section="calendar" />} />
            <Route path="/academics/registrar" element={<Academics section="registrar" />} />
            
            {/* Admissions Routes */}
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/admissions/tuition" element={<Admissions section="tuition" />} />
            <Route path="/admissions/process" element={<Admissions section="process" />} />
            <Route path="/admissions/exams" element={<Admissions section="exams" />} />
            
            {/* Student Life Routes */}
            <Route path="/student-life" element={<StudentLife />} />
            <Route path="/student-life/clubs" element={<StudentLife section="clubs" />} />
            <Route path="/student-life/athletics" element={<StudentLife section="athletics" />} />
            <Route path="/student-life/community" element={<StudentLife section="community" />} />
            <Route path="/student-life/support" element={<StudentLife section="support" />} />
            
            {/* Other Routes */}
            <Route path="/news" element={<News />} />
            <Route path="/news/:slug" element={<NewsArticle />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/alumni" element={<Alumni />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/about/safeguarding" element={<Safeguarding />} />
            
            {/* 404 Page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
