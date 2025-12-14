import { Link } from 'react-router-dom';
import { Award, Globe, Tag, Heart, ShieldCheck } from 'lucide-react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    return (
        <div className="why-page">
            <header className="why-header">
                <h1>Why Choose Bermach Travel & Tour?</h1>
            </header>

            <section className="section">
                <div className="container">
                    <div className="reasons-grid">

                        <div className="reason-card">
                            <div className="reason-icon"><Award size={48} /></div>
                            <h3>Experienced</h3>
                            <p>Nearly 8 years of industry experience serving happy travelers.</p>
                        </div>

                        <div className="reason-card">
                            <div className="reason-icon"><Globe size={48} /></div>
                            <h3>Global Access</h3>
                            <p>Advanced global booking systems (Amadeus, Galileo, Travelport).</p>
                        </div>

                        <div className="reason-card">
                            <div className="reason-icon"><Tag size={48} /></div>
                            <h3>Best Value</h3>
                            <p>Competitive pricing on flights and hotels worldwide.</p>
                        </div>

                        <div className="reason-card">
                            <div className="reason-icon"><Heart size={48} /></div>
                            <h3>Personalized</h3>
                            <p>Dedicated customer service tailored to your unique needs.</p>
                        </div>

                        <div className="reason-card">
                            <div className="reason-icon"><ShieldCheck size={48} /></div>
                            <h3>Trusted</h3>
                            <p>Accredited operations and a solid reputation for reliability.</p>
                        </div>

                    </div>

                    <div className="highlight-section">
                        <h2 style={{ marginBottom: '30px' }}>“We handle all the details with expertise — so you can travel with peace of mind.”</h2>
                        <Link to="/contact" className="btn btn-outline" style={{ borderColor: 'white', color: 'white', marginTop: '20px' }}>
                            Start Your Journey
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhyChooseUs;
