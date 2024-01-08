import "./App.css";
import Map from "./components/Map";
import ContactSection from "./components/contact-section/ContactSection";
import Footer from "./components/footer/Footer";
import Intro from "./components/intro/Intro";



function App() {
  // Creating the location that we want to point to
  const location = {
    address: "1600 Amphitheatre Parkway, Mountain View, Abuja.",
    lat: 12.088469,
    lng: 4.483052,
  };
  return (
    <>
      {/* Calling the Map component that we created with its props */}
      <Intro />
      <ContactSection />
      <Map location={location} zoomLevel={14} />
      <Footer />
    </>
  );
}

export default App;
