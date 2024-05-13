import Banner from "../components/Banner";
import Choose from "../components/Choose";
import Contact from "../components/Contact";
import Customers from "../components/Customers";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Newsroom from "../components/Newsroom";

function HomePage() {
    return (
        <>
            <Header />
            <Main />
            <Choose />
            <Banner />
            <Newsroom />
            <Customers />
            <Contact />
            <Footer />
        </>);
}

export default HomePage;
