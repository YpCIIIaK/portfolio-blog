import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Components from './pages/Components.jsx';
import Component from './components/Component.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import ScriptLoader from './ScriptLoader';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="bg-primary min-h-screen text-textPrimary">
          <ScrollToTop />
          <Navbar />
          <ScriptLoader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/components" element={<Components />}>
              <Route index element={<Navigate to="button-link" />} />
              <Route path=":componentId" element={<Component />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
