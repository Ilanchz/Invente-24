import React, { useRef,useState } from 'react';
import './Gallery.css'; // Import custom CSS
import Navelement from '../Navelement';
import Footer from '../Footer';

const invent_gallery = [
  { id: 1, src: 'https://images.squarespace-cdn.com/content/v1/55c37beae4b0336075603f86/1443039469134-E9SLQBQ2OW1Y69KPKFDO/image-asset.jpeg?format=2500w', alt: 'Image 1' },
  { id: 2, src: 'https://www.madebywifi.com/wp-content/uploads/2018/01/internet-for-hackatons-1024x480.jpg', alt: 'Image 2' },
  { id: 3, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1uPOiymiz06sFd0b6uU1tHCnLUf8aKP27Hw&s', alt: 'Image 3' },
  { id: 4, src: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202304/itgd_dalle-1681805013-image-sixteen_nine-_3.jpg?VersionId=ZoCbwr3MD6f.9kDyfzRcI4.C3EgJVlWP&size=690:388', alt: 'Image 4' },
  // Add more images as needed
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