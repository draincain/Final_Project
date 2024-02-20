import React, { useEffect, useState } from "react";
import { fetchArtItems } from "../services/apiService";

const Store = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedItems = await fetchArtItems();
        setItems(fetchedItems);
      } catch (error) {
        console.error("Failed to fetch items: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Art Store</h1>
      <p>Discover and purchase my unique digital art pieces.</p>
      <div>
        {items.map((item) => (
          <div key={item.id}>
            <img src={item.imageUrl} alt={item.title} />
            <p>{item.title}</p>
            <p>Price: {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
