import { useEffect, useState } from "react";

const images = [
    "/images/achievements/a0.jpg",
    "/images/achievements/a1.jpg",
    "/images/achievements/a2.jpg",
    "/images/achievements/a3.jpg"
];

/*function HomeHero() {

    const [index, setIndex] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 2000);

        return () => clearInterval(interval);

    }, []);

    return (
        <section
            className="hero"
            style={{
                backgroundImage: `url(${images[index]})`
            }}
        >

            <div className="hero-overlay">

                <div className="hero-text">
                    <h1>
                        UPSKILL. BUILD. SUCCEED.<br />
                    </h1>

                    <p>
                        Learn cutting-edge technologies with hands-on training and transform your future with real-world skill
                    </p>

                    <div className="hero-buttons">
                        <a href="#enroll">
                            <button className="enroll-btn">Enroll Now</button>
                        </a>

                        <button className="watch-btn">Watch Video</button>
                    </div>
                </div>

            </div>

        </section>
    );
}

export default HomeHero;*/
function HomeHero() {

    return (
        <section className="hero">

            {/* VIDEO BACKGROUND */}
            <video
                className="hero-video"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/images/achievements/hero.mp4" type="video/mp4" />
            </video>

            {/* OVERLAY CONTENT */}
            <div className="hero-overlay">

                <div className="hero-text">
                    <h1>
                        UPSKILL. <span className="highlight">BUILD</span>. SUCCEED.
                    </h1>

                    <p>
                        Learn cutting-edge technologies with hands-on training and transform your future with real-world skill
                    </p>

                    <div className="hero-buttons">
                        <a href="#enroll">
                            <button className="enroll-btn">Enroll Now</button>
                        </a>

                        <button className="watch-btn">Watch Video</button>
                    </div>
                </div>

            </div>

        </section>
    );
}

export default HomeHero;