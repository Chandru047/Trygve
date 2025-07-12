import React, {useState,useEffect} from 'react';
import '../styles/LandingPage.css';

// 
const LandingPage: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            background: '/1.png',
            title: 'TRYGVE',
            subtitle: 'Trusted Guardian of Life'
        },
        {
            background: '/2.png',
            title: 'Your Health, Our Priority',
            subtitle: 'Trusted doctors and care at your doorstep.'
        },
        {
            background: '/3.png',
            title: 'Seamless Care, Delivered',
            subtitle: 'Consult, treat, and heal—hassle-free.'
        },
        {
            background: '/4.png',
            title: 'Affordable Healthcare for Everyone',
            subtitle: 'Quality care for every budget.'
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    useEffect(() => {
        setTimeout(()=>setCurrentSlide(1), 3000);
    }, []);

    const lastSlide = () =>{
        setCurrentSlide((_) => slides.length -1 );
    }

    const handleGetStarted = () => {
        // Add your navigation logic here
        console.log('Get Started clicked - navigate to the next page');
    };
    
    return (
        <div className="slider-container">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`slide ${index === currentSlide ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${slide.background})` }}
                >
                    <div className="slide-content">
                        <h1 className="logo">{slide.title}</h1>
                        <p className="tagline">{slide.subtitle}</p>
                        {index === slides.length - 1 && (
                            <button className="get-started-btn" onClick={handleGetStarted}>
                                Get Started
                            </button>
                        )}
                    </div>
                </div>
            ))}
            
            {currentSlide !== 0 && currentSlide !== slides.length - 1 && (
                <div className="slider-controls">
                    <button className="skip-btn" onClick={lastSlide}>Skip</button>
                    <div className="dots">
                        {slides.map((_, index) => (
                            index!==0 && (  
                            <span
                                key={index}
                                className={`dot ${index === currentSlide ? 'active' : ''}`}
                                onClick={() => setCurrentSlide(index)}
                            ></span>
                        )))}
                    </div>
                    <button className="next-btn" onClick={nextSlide}>Next →</button>
                </div>
            )}
        </div>
    );
};

export default LandingPage;