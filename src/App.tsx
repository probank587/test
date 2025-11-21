import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import ApplicationForm from './components/ApplicationForm';
import HowItWorks from './components/HowItWorks';
import LoanConditions from './components/LoanConditions';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  const [showForm, setShowForm] = useState(false);

  const scrollToForm = () => {
    const formElement = document.getElementById('application-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onGetLoanClick={scrollToForm} />
      <Hero onGetLoanClick={scrollToForm} />
      <Benefits />
      <ApplicationForm />
      <HowItWorks />
      <LoanConditions onGetLoanClick={scrollToForm} />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
