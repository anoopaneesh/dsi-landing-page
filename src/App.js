import './App.css';
import Contact from './components/Contact';
import Details from './components/Details';
import Footer from './components/Footer';
import Header from './components/Header';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <Header />
      <Details />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
