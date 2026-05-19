
import React from "react";
import "./App.css";

function App() {
  const services = [
    {
      title: "Electrician",
      description: "Professional electrical repair and installation services.",
      image:
        "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Plumber",
      description: "Quick plumbing solutions for homes and offices.",
      image:
        "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Cleaner",
      description: "Trusted home and office cleaning services.",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "AC Technician",
      description: "AC installation and maintenance services.",
     image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">SmartServe</h1>
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Providers</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2>Find Trusted Local Services Near You</h2>
          <p>
            Book electricians, plumbers, cleaners, and more with SmartServe.
          </p>
          <button>Explore Services</button>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Popular Services</h2>

        <div className="service-container">
          {services.map((service, index) => (
            <div className="card" key={index}>
              <img src={service.image} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button>Book Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 SmartServe. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
