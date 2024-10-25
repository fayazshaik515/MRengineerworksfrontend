// src/App.js
import './App.css';
import MyAppBar from './components/Appbar';
import HomePage from './components/HomePage';
import ContactForm from './components/ContactForm';
import AboutUs from './components/AboutUs';
import SimpleServicePage from './components/ServicePage';
import MyWorksPage from './components/MyWorks';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import routing components

function App() {
  return (
    <Router> {/* Wrap your app in Router */}
      <div className="App">
        <MyAppBar />
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Home Page */}
          <Route path="/about" element={<AboutUs />} /> {/* About Us Page */}
          <Route path="/services" element={<SimpleServicePage />} /> {/* Services Page */}
          <Route path="/my-works" element={<MyWorksPage />} /> {/* My Works Page */}
          <Route path="/contact" element={<ContactForm />} /> {/* Contact Form Page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
