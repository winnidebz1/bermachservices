import { Link } from 'react-router-dom';
import { Plane, Hotel, FileText, Map, Globe, ShieldCheck } from 'lucide-react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content animate-fade-in">
                    <h1 className="hero-title">Your Trusted Travel Partner in Ghana</h1>
                    <p className="hero-subtitle">
                        Designing unforgettable journeys for leisure and business travelers.
                    </p>
                    <div className="hero-buttons">
                        <Link to="/contact" className="btn btn-primary">Request a Travel Quote</Link>
                        <Link to="/contact" className="btn btn-outline">Contact Us</Link>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="section">
                <div className="container">
                    <div className="section-title">
                        <h2>Welcome to Bermach Travel</h2>
                        <div style={{ width: '60px', height: '4px', background: '#FFA500', margin: '10px auto' }}></div>
                    </div>
                    <p className="intro-text">
                        Bermach Travel & Tour is a trusted travel partner based in Suame, Kumasi, Ghana. With nearly eight years of experience in the travel industry, we are dedicated to creating unique and memorable travel experiences while building lasting relationships with our clients.
                    </p>
                </div>
            </section>

            {/* Services Preview */}
            <section className="section" style={{ backgroundColor: 'var(--bg-body)' }}>
                <div className="container">
                    <div className="section-title">
                        <h2>Our Core Services</h2>
                        <p>We provide comprehensive travel solutions tailored to your needs.</p>
                    </div>

                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-icon"><Plane size={48} /></div>
                            <h3>Airline Fare Quotation</h3>
                            <p>Competitive fares and ticketing for both domestic and international flights.</p>
                        </div>

                        <div className="service-card">
                            <div className="service-icon"><Hotel size={48} /></div>
                            <h3>Hotel Reservations</h3>
                            <p>Comfortable stays booked locally and globally to suit your budget.</p>
                        </div>

                        <div className="service-card">
                            <div className="service-icon"><FileText size={48} /></div>
                            <h3>Passport Services</h3>
                            <p>Guidance and assistance with passport applications and renewals.</p>
                        </div>

                        <div className="service-card">
                            <div className="service-icon"><Map size={48} /></div>
                            <h3>Travel Consultation</h3>
                            <p>Expert planning for vacations, business trips, and tours.</p>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '50px' }}>
                        <Link to="/services" className="btn btn-secondary">View All Services</Link>
                    </div>
                </div>
            </section>

            {/* Technology & Trust */}
            <section className="section tech-section">
                <div className="container">
                    <div className="section-title">
                        <h2>Powered by Advanced Global Travel Systems</h2>
                        <p>
                            Our searches are powered by Amadeus, Galileo, and Travelport, enabling us to offer a wide range of airline options and competitive fares. We are also proudly accredited by Passion Air.
                        </p>
                    </div>

                    <div className="tech-logos">
                        {/* Text placeholders for logos to keep it simple but professional */}
                        <div className="tech-logo-text"><Globe size={24} style={{ marginRight: '8px' }} />Amadeus</div>
                        <div className="tech-logo-text"><Globe size={24} style={{ marginRight: '8px' }} />Galileo</div>
                        <div className="tech-logo-text"><Globe size={24} style={{ marginRight: '8px' }} />Travelport</div>
                        <div className="tech-logo-text"><ShieldCheck size={24} style={{ marginRight: '8px' }} />Passion Air Accredited</div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="section home-cta">
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'white' }}>Let’s plan your next journey with ease.</h2>
                    <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '30px', fontSize: '1.2rem' }}>Experience the difference with Bermach Travel & Tour.</p>
                    <Link to="/contact" className="btn btn-primary" style={{ padding: '15px 40px', fontSize: '1.1rem' }}>Get Started Today</Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
