import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <header className="contact-header">
                <h1>Contact Us</h1>
            </header>

            <section className="section">
                <div className="container">
                    <div className="contact-container">

                        <div className="contact-info">
                            <h3>Get in Touch</h3>
                            <p style={{ marginBottom: '30px', color: 'var(--text-medium)' }}>
                                Have questions or ready to plan your trip? Reach out to us via phone, email, or visit our office.
                            </p>

                            <div className="info-item">
                                <div className="info-icon"><MapPin size={24} /></div>
                                <div className="info-text">
                                    <h4>Visit Us</h4>
                                    <p>Suame, Kumasi, Ghana</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon"><Phone size={24} /></div>
                                <div className="info-text">
                                    <h4>Call Us</h4>
                                    <p>+233 XX XXX XXXX</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon"><Mail size={24} /></div>
                                <div className="info-text">
                                    <h4>Email Us</h4>
                                    <p>info@bermachtravel.com</p>
                                </div>
                            </div>

                            <a href="https://wa.me/233XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="btn whatsapp-btn">
                                <MessageCircle size={20} style={{ marginRight: '8px' }} />
                                Chat on WhatsApp
                            </a>
                        </div>

                        <div className="contact-form-wrapper">
                            <h3 style={{ marginBottom: '24px' }}>Send us a Message</h3>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="name" className="form-label">Full Name</label>
                                    <input type="text" id="name" className="form-input" placeholder="Your Name" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email" className="form-label">Email Address</label>
                                    <input type="email" id="email" className="form-input" placeholder="your@email.com" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone" className="form-label">Phone Number</label>
                                    <input type="tel" id="phone" className="form-input" placeholder="+233..." />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="service" className="form-label">Service Needed</label>
                                    <select id="service" className="form-select">
                                        <option value="">Select a Service</option>
                                        <option value="flight">Airline Ticket</option>
                                        <option value="hotel">Hotel Reservation</option>
                                        <option value="passport">Passport Assistance</option>
                                        <option value="consultation">General Consultation</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea id="message" className="form-textarea" placeholder="Tell us about your travel plans..."></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Submit Inquiry</button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
