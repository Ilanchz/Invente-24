import React, { useRef, useState, useEffect } from 'react';
import './Gallery.css'; // Import custom CSS
import Navelement from '../Navelement';
import Footer from '../Footer';

const invent_gallery = [
  { id: 1, src: './images/gallery/stage_image.jpeg', alt: 'Image 1' },
  { id: 2, src: './images/gallery/image1.jpeg', alt: 'Image 2' },
  { id: 3, src: './images/gallery/image2.jpeg', alt: 'Image 3' },
  { id: 4, src: './images/gallery/image3.jpeg', alt: 'Image 4' },
  { id: 5, src: './images/gallery/audience.jpeg', alt: 'Image 5' },
  // Add more images as needed
];

const SCROLL_INTERVAL = 3000; // Interval for auto-scrolling in milliseconds

function Gallery() {
    const galleryRef = useRef(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollLeft = () => {
        if (galleryRef.current) {
            galleryRef.current.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (galleryRef.current) {
            galleryRef.current.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const scrollGallery = () => {
            if (galleryRef.current) {
                const { scrollWidth, clientWidth, scrollLeft } = galleryRef.current;
                const maxScrollLeft = scrollWidth - clientWidth;

                // Adjust the scroll position to be close to the end
                if (Math.round(scrollLeft) >= Math.round(maxScrollLeft)) {
                    galleryRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    galleryRef.current.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
                }
            }
        };

        const interval = setInterval(scrollGallery, SCROLL_INTERVAL);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='flex flex-col justify-center items-center bg-starry-sky'>
            <Navelement menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

            <span className='font-dosis text-4xl text-white'>GALLERY</span>

            <div className="gallery-container md:p-24 p-5">
                <div className="gallery-background">
                    <div className="gallery-wrapper">
                        <div className="gallery-scroll" ref={galleryRef}>
                            {invent_gallery.map((item) => (
                                <div key={item.id} className="gallery-item">
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        className="gallery-image"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <button className="scroll-button left" onClick={scrollLeft}>
                        &#9664;
                    </button>
                    <button className="scroll-button right" onClick={scrollRight}>
                        &#9654;
                    </button>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Gallery;
