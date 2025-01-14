import "../Styles/Marquee.css";
import React, { useState, useEffect, useCallback } from "react";


function Marquee() {
  const [direction, setDirection] = useState("left");
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [loadedImages, setLoadedImages] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // To control pausing and resuming the animation

  useEffect(() => {
    const loadImages = async () => {
      try {
        const imageUrls = [
          "https://cdn.pixabay.com/photo/2023/07/19/23/10/ai-generated-8138068_640.png",
          "https://cdn.pixabay.com/photo/2023/07/13/06/36/ai-generated-8124007_640.png",
          "https://cdn.pixabay.com/photo/2024/06/18/00/04/cat-8836735_640.png",
          "https://cdn.pixabay.com/photo/2023/09/01/23/06/ai-generated-8227903_640.png",
          "https://cdn.pixabay.com/photo/2023/08/19/23/45/ai-generated-8201383_640.png",
          "https://cdn.pixabay.com/photo/2023/07/19/23/10/ai-generated-8138068_640.png",
          "https://cdn.pixabay.com/photo/2023/07/13/06/36/ai-generated-8124007_640.png",
          "https://cdn.pixabay.com/photo/2024/06/18/00/04/cat-8836735_640.png",
          "https://cdn.pixabay.com/photo/2023/09/01/23/06/ai-generated-8227903_640.png",
          "https://cdn.pixabay.com/photo/2023/08/19/23/45/ai-generated-8201383_640.png",
        ];

        // Preload images
        const imagePromises = imageUrls.map((url) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
              setLoadedImages((prev) => prev + 1);
              resolve(url);
            };
            img.onerror = () => reject(`Failed to load image: ${url}`);
            img.src = url;
          });
        });

        await Promise.all(imagePromises);
        setImages(imageUrls);
        setIsLoading(false);
      } catch (err) {
        setError("Failed to load one or more images");
        setIsLoading(false);
      }
    };

    loadImages();
  }, []);

  const toggleDirection = useCallback(() => {
    setDirection((prev) => (prev === "left" ? "right" : "left"));
  }, []);

  const handleMouseEnter = () => {
    setIsPaused(true); // Pause the marquee when mouse enters
  };

  const handleMouseLeave = () => {
    setIsPaused(false); // Resume the marquee when mouse leaves
  };

  const handleImageError = (index) => {
    console.error(`Image ${index + 1} failed to load`);
    // Replace failed image with placeholder
    const newImages = [...images];
    newImages[index] = "/placeholder.svg?height=200&width=200&text=Error";
    setImages(newImages);
  };

  if (error) {
    return <div className="text-red-500 text-center p-4">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 sm:px-12 py-8">
      <div className="relative">
        <div
          className="Marquee-slider"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {isLoading ? (
            <div className="Marquee-loading">
              <div className="Marquee-loading-spinner" />
              <div className="mt-2 text-sm text-gray-600">
                Loading images: {loadedImages}/{images.length}
              </div>
            </div>
          ) : (
            <div
              className={`Marquee-slide-track ${direction} ${isPaused ? "paused" : ""}`}
              style={{ animationDuration: `${30 / 1}s` }} // Adjust speed if necessary
            >
              {/* Original slides */}
              {images.map((imageUrl, index) => (
                <div
                  key={index}
                  className="Marquee-slide"
                  onClick={() => window.open(imageUrl, "_blank")}
                >
                  <img
                    src={imageUrl}
                    alt={`Slide ${index + 1}`}
                    onError={() => handleImageError(index)}
                    loading="lazy"
                  />
                </div>
              ))}
              {/* Duplicated slides */}
              {images.map((imageUrl, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="Marquee-slide"
                  onClick={() => window.open(imageUrl, "_blank")}
                >
                  <img
                    src={imageUrl}
                    alt={`Slide ${index + 1}`}
                    onError={() => handleImageError(index)}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="Marquee-controls">
          <button className="Marquee-control-button" onClick={toggleDirection}>
            {direction === "left" ? "← Left" : "Right →"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Marquee;
