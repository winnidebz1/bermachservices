import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3>BEMACH</h3>
                        <p className="footer-tagline">Your Trusted Travel Partner in Ghana.</p>
                        <div className="social-links" style={{ display: 'flex', gap: '16px' }}>
                            {/* Placeholders for now */}
                            <a href="#"><Facebook size={20} /></a>
                            <a href="#"><Instagram size={20} /></a>
                            <a href="#"><Twitter size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-heading">Quick Links</h4>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-heading">Services</h4>
                        <ul className="footer-links">
                            <li><Link to="/services">Airline Ticketing</Link></li>
                            <li><Link to="/services">Hotel Reservations</Link></li>
                            <li><Link to="/services">Passport Services</Link></li>
                            <li><Link to="/services">Travel Consultation</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-heading">Contact Us</h4>
                        <ul className="footer-contact">
                            <li>
                                <MapPin size={18} />
                                <span>Suame, Kumasi, Ghana</span>
                            </li>
                            <li>
                                <Phone size={18} />
                                <span>+233 XX XXX XXXX</span>
                            </li>
                            <li>
                                <Mail size={18} />
                                <span>info@bemachtravel.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Bemach Travel & Tour. All rights reserved.</p>
                    <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>Website concept designed by Branded By Winni.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
