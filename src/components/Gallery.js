import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Masonry from "react-masonry-css";
import "../styles/Gallery.css"; // Make sure this path is correct

const Gallery = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = "https://65a6ae9974cf4207b4f0a100.mockapi.io/collections";
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setCollections(data);
      } catch (error) {
        console.error("Failed to fetch collections: ", error);
      }
    };

    fetchData();
  }, []);

  // Breakpoint columns configuration
  const breakpointColumnsObj = {
    default: 4, // Default number of columns
    1100: 3, // 3 columns when the viewport is 1100px or greater
    700: 2, // 2 columns when the viewport is 700px or greater
    500: 1, // 1 column when the viewport is 500px or greater
  };

  return (
    <div className="collection-container">
      <h1 className="centered-heading">Collections</h1>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {collections.map((collection) => (
          <div key={collection.id} className="collection-item">
            <a
              href={collection.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LazyLoadImage
                src={collection.imgUrl}
                alt={collection.title}
                effect="blur"
                className="collection-image"
              />
              <h3 className="collection-title">{collection.title}</h3>
            </a>
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default Gallery;
