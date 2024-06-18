import React, { useRef, useEffect } from "react";
import styles from "./gallery.module.css";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

function Gallery({ dogs, open, onFullScreenToggle }) {
  const gallery = useRef();
  const images = dogs.map((dog) => {
    return { original: dog.img, thumbnail: dog.img };
  });

  useEffect(() => {
    if (gallery.current && open) {
      gallery.current.toggleFullScreen();
    }
  }, [open]);

  return (
    <div className={`${styles.gallery} ${open ? "" : styles.hidden}`}>
      <ImageGallery
        ref={gallery}
        items={images}
        useBrowserFullscreen={false}
        onScreenChange={onFullScreenToggle}
      />
    </div>
  );
}

export default Gallery;
