import './App.css';
import Footer from './components/Footer';
import FurnitureContainer from './components/FurnitureContainer';
import HorizontalCarousel from './components/HorizontalCarousel';

function App() {
  return (
    <div className="App">
      
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
