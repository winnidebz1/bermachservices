import type { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="app-layout">
            <Navbar />
            <main style={{ minHeight: '100vh' }}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
