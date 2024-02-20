import React, { useState, useEffect } from "react";

import { fetchArtItems } from "../services/apiService";

const Gallery = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedItems = await fetchArtItems();
        setItems(fetchedItems);
      } catch (error) {
        console.error("Failed to fetch gallery items: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Art Gallery</h1>
      <p>Explore a selection of my latest work.</p>
      <div>
        {items.map((item) => (
          <div key={item.id} style={{ marginBottom: "20px" }}>
            <img
              src={item.imageUrl || "https://via.placeholder.com/150"}
              alt={item.title}
              style={{ width: "100%", height: "auto" }}
            />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
