import './App.css';
import Footer from './components/Footer';
import FurnitureContainer from './components/FurnitureContainer';
import HorizontalCarousel from './components/HorizontalCarousel';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />

      {/* Horizontal Carousel */}
      <HorizontalCarousel />

      {/* Furniture Container */}
      <FurnitureContainer />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
