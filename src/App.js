import logo from './logo.svg';
// import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import WhyUsSection from './components/WhyUsSection';
import WithdrawlSection from './components/WithdrawlSection';
import SchemeSection from './components/SchemeSection';
import TestimonialSection from './components/TestimonialSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <AboutSection></AboutSection>
      <WhyUsSection></WhyUsSection>
      <WithdrawlSection></WithdrawlSection>
      <SchemeSection></SchemeSection>
      <TestimonialSection></TestimonialSection>
      <Footer></Footer>
    </div>
  );
}

export default App;
