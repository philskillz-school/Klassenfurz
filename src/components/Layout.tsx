import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div id="page" className="bg-gradient-to-r from-sky-500 to-indigo-500">
            <Navigation />
            <div className="content">
                {children}
            </div>
            <Footer />
        </div>
    );
}