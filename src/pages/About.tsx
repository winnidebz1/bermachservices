import './About.css';
import aboutTeamImg from '../assets/about_team.png';

const About = () => {
    return (
        <div className="about-page">
            <header className="page-header">
                <h1>About Bemach Travel & Tour</h1>
            </header>

            <section className="section">
                <div className="container">
                    <div className="about-content-wrapper">
                        <div className="about-text">
                            <h2 style={{ marginBottom: '20px', fontSize: '2rem' }}>Who We Are</h2>
                            <p style={{ marginBottom: '20px', color: 'var(--text-medium)' }}>
                                Bemach Travel & Tour, operating under Bemachard Services, is a travel agency located in Suame, Kumasi, Ghana. We have been operating in the travel industry for nearly eight years, serving both leisure and business travelers.
                            </p>
                            <p style={{ color: 'var(--text-medium)' }}>
                                Our mission is to design unforgettable journeys while offering exceptional customer service with efficiency and professionalism. We believe every client deserves personalized attention, reliable guidance, and seamless travel arrangements.
                            </p>
                        </div>
                        <div className="about-image">
                            <img src={aboutTeamImg} alt="Travel Planning Team" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" style={{ backgroundColor: 'var(--bg-light-blue)' }}>
                <div className="container">
                    <div className="section-title">
                        <h2>Our Business Pillars</h2>
                        <p>The core values that drive our service excellence.</p>
                    </div>

                    <div className="pillars-grid">
                        <div className="pillar-card">
                            <h3>Personalized Service</h3>
                            <p>Tailored travel solutions for every client. We listen to your needs and craft the perfect itinerary.</p>
                        </div>

                        <div className="pillar-card">
                            <h3>Efficiency & Expertise</h3>
                            <p>Fast, accurate bookings handled with professionalism. Our team knows the ins and outs of the industry.</p>
                        </div>

                        <div className="pillar-card">
                            <h3>Customer Satisfaction</h3>
                            <p>Long-term relationships built on trust and quality service. Your happiness is our priority.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
