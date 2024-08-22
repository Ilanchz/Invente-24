import React, { useRef,useState } from 'react';
import './Gallery.css'; // Import custom CSS
import Navelement from '../Navelement';
import Footer from '../Footer';

const invent_gallery = [
  { id: 1, src: '/gallery/photo1.jpg', alt: 'Image 1' },
  { id: 2, src: '/gallery/photo2.jpg', alt: 'Image 2' },
  { id: 3, src: '/gallery/photo3.jpg', alt: 'Image 3' },
  { id: 4, src: '/gallery/photo4.jpg', alt: 'Image 4' },
  { id: 5, src: '/gallery/photo5.jpg', alt: 'Image 5' },
  { id: 6, src: '/gallery/photo6.jpg', alt: 'Image 6' },
  { id: 7, src: '/gallery/photo7.jpg', alt: 'Image 7' },
  { id: 8, src: '/gallery/photo8.jpg', alt: 'Image 8' },
  { id: 9, src: '/gallery/photo9.jpg', alt: 'Image 9' },
];

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



    return (
        <div className='flex flex-col justify-center items-center bg-starry-sky'>

        <Navelement menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

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

        <Footer/>
        </div>
    );
}

export default Gallery;
