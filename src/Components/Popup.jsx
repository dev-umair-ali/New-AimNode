import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import "../styles/Popup.css"

const Popup = ({ isOpen, onClose, item }) => {
  const overlayRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const categoryRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    let animation;

    if (isOpen && item) {
      // Ensure all refs are available before animating
      if (overlayRef.current && contentRef.current && imageRef.current && 
          titleRef.current && categoryRef.current && descriptionRef.current) {
        
        // Open animation
        animation = gsap.timeline()
          .to(overlayRef.current, { duration: 0.3, opacity: 1, visibility: 'visible', ease: 'power2.out' })
          .to(contentRef.current, { duration: 0.5, scale: 1, opacity: 1, ease: 'back.out(1.7)' }, '-=0.2')
          .to(imageRef.current, { duration: 0.5, scale: 1, opacity: 1, ease: 'power2.out' }, '-=0.3')
          .to([titleRef.current, categoryRef.current, descriptionRef.current], {
            duration: 0.5,
            y: 0,
            opacity: 1,
            stagger: 0.1,
            ease: 'power2.out'
          }, '-=0.3');
      }
    } else if (!isOpen && overlayRef.current) {
      // Close animation
      animation = gsap.timeline()
        .to([titleRef.current, categoryRef.current, descriptionRef.current], {
          duration: 0.3,
          y: 20,
          opacity: 0,
          stagger: 0.05,
          ease: 'power2.in'
        })
        .to(imageRef.current, { duration: 0.3, scale: 0.9, opacity: 0, ease: 'power2.in' }, '-=0.2')
        .to(contentRef.current, { duration: 0.3, scale: 0.8, opacity: 0, ease: 'power2.in' }, '-=0.2')
        .to(overlayRef.current, { 
          duration: 0.3, 
          opacity: 0, 
          ease: 'power2.in', 
          onComplete: () => {
            gsap.set(overlayRef.current, { visibility: 'hidden' });
          }
        }, '-=0.2');
    }

    return () => {
      if (animation) {
        animation.kill();
      }
    };
  }, [isOpen, item]);

  if (!item) return null;

  return (
    <div ref={overlayRef} className="popup-overlay" onClick={onClose}>
      <div ref={contentRef} className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose}>
          &times;
        </button>
        <div className="popup-image-container">
          <img ref={imageRef} src={item.imageUrl} alt={item.title} className="popup-image" />
        </div>
        <h3 ref={titleRef} className="popup-title">{item.title}</h3>
        <p ref={categoryRef} className="popup-category">{item.category}</p>
        <p ref={descriptionRef} className="popup-description">{item.description}</p>
      </div>
    </div>
  );
};

export default Popup;

