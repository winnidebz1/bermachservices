import { Link } from 'react-router-dom';
import { Plane, Hotel, FileText, Map } from 'lucide-react';
import './Services.css';

const Services = () => {
    return (
        <div className="services-page">
            <header className="services-header">
                <h1>Our Services</h1>
            </header>

            <section className="section">
                <div className="container">
                    <div className="services-list">

                        <div className="service-item">
                            <div className="service-item-icon">
                                <Plane size={36} />
                            </div>
                            <div className="service-info">
                                <h3>Airline Fare Quotation & Ticketing</h3>
                                <p>
                                    We offer domestic and international flight bookings at competitive rates using advanced global distribution systems. Whether for business or leisure, we ensure you get the best route and price.
                                </p>
                                <Link to="/contact" className="btn btn-primary">Book a Flight</Link>
                            </div>
                        </div>

                        <div className="service-item">
                            <div className="service-item-icon">
                                <Hotel size={36} />
                            </div>
                            <div className="service-info">
                                <h3>Hotel Reservations</h3>
                                <p>
                                    Comfortable hotel bookings locally and internationally to suit your travel needs. We partner with top hotel chains and boutique accommodations to provide you with the perfect stay.
                                </p>
                                <Link to="/contact" className="btn btn-primary">Find a Hotel</Link>
                            </div>
                        </div>

                        <div className="service-item">
                            <div className="service-item-icon">
                                <FileText size={36} />
                            </div>
                            <div className="service-info">
                                <h3>Passport Application & Renewal</h3>
                                <p>
                                    Professional assistance with passport applications, renewals, and related documentation. We guide you through the process to ensure all requirements are met efficiently.
                                </p>
                                <Link to="/contact" className="btn btn-primary">Get Passport Help</Link>
                            </div>
                        </div>

                        <div className="service-item">
                            <div className="service-item-icon">
                                <Map size={36} />
                            </div>
                            <div className="service-info">
                                <h3>Travel Consultation</h3>
                                <p>
                                    Expert guidance for planning business trips, vacations, and special travel needs. Not sure where to go or how to plan? Let our experts design the perfect itinerary for you.
                                </p>
                                <Link to="/contact" className="btn btn-primary">Consult an Expert</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
