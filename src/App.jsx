import './App.css';
import Home from './PortfolioContainer/Home';
import About from './PortfolioContainer/About';
import Service from './PortfolioContainer/Service';
import Project from './PortfolioContainer/Project';
import Contact from './PortfolioContainer/Contact';
import Footer from './PortfolioContainer/Footer';

function App() {
    return (
    <div className = "App" >
        <Home/>
        <About/>
        <Service/>
        <Project/>
        <Contact/>
        <Footer/>
        </div>
    )
}

export default App;