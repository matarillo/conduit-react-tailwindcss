import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Edit } from 'lucide-react';
import HomePage from './HomePage';
import ArticlePage from './ArticlePage';
import ProfilePage from './ProfilePage';
import EditorPage from './EditorPage';
import AuthPage from './AuthPage';
import SettingsPage from './SettingsPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="post" element={<ArticlePage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="editor" element={<EditorPage />} />
        <Route path="auth" element={<AuthPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

const NavBar = () => {
  return (
    <nav>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="logo-font text-2xl font-bold text-green-600">conduit</a>
          <div className="flex gap-6">
            <a href="/editor" className="text-gray-400 hover:text-gray-500 flex items-center gap-1">
              <Edit size={18} />
              New Post
            </a>
            <a href="/auth" className="text-gray-400 hover:text-gray-500">
              Sign up
            </a>
            <a href="/settings" className="text-gray-400 hover:text-gray-500">
              Settings
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

const Footer = () => {
  return (
    <footer className="mt-auto bg-gray-100 py-4">
      <div className="container mx-auto px-4 text-center">
        <a href="/" className="logo-font text-green-600 font-bold hover:underline focus:underline">conduit</a>
        <p className="text-gray-400 text-sm mt-2">
          An interactive learning project from <a href="https://thinkster.io" className="text-green-400 hover:underline focus:underline">Thinkster</a>. Code & design licensed under MIT.
        </p>
      </div>
    </footer>
  );
}

const App = () => {
  return (
    <>
      <NavBar />
      <Router />
      <Footer />
    </>
  )
};

export default App;