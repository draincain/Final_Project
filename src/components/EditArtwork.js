import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/EditArtwork.css";

const EditArtwork = () => {
  // State for storing collections fetched from API.
  const [collections, setCollections] = useState([]);
  // State for handling new collection data input by the user.
  const [newCollectionData, setNewCollectionData] = useState({
    title: "",
    imgUrl: "",
    linkUrl: "",
  });
  // State for tracking the ID of the collection being edited.
  const [editCollectionId, setEditCollectionId] = useState(null);
  // State for handling changes to a collection being edited.
  const [editFormData, setEditFormData] = useState({
    title: "",
    imgUrl: "",
    linkUrl: "",
  });

  // Fetch collections from API on component mount.
  useEffect(() => {
    axios
      .get("https://65a6ae9974cf4207b4f0a100.mockapi.io/collections")
      .then((response) => {
        setCollections(response.data);
      })
      .catch((error) => {
        console.error("Error fetching collections:", error);
      });
  }, []);

  // Handle changes to the add new collection form inputs.
  const handleAddFormChange = (event) => {
    const { name, value } = event.target;
    setNewCollectionData({ ...newCollectionData, [name]: value });
  };

  // Handle the submission of the new collection form.
  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        "https://65a6ae9974cf4207b4f0a100.mockapi.io/collections",
        newCollectionData
      )
      .then((response) => {
        setCollections([...collections, response.data]);
        setNewCollectionData({
          title: "",
          imgUrl: "",
          linkUrl: "",
        });
      })
      .catch((error) => {
        console.error("Error adding new collection:", error);
      });
  };
  // Handle changes to the edit collection form inputs.
  const handleEditFormChange = (event) => {
    const { name, value } = event.target;
    setEditFormData({ ...editFormData, [name]: value });
  };
  // Set the current collection to be edited and populate the form with its data.
  const handleEditClick = (collection) => {
    setEditCollectionId(collection.id);
    const formValues = {
      title: collection.title,
      imgUrl: collection.imgUrl,
      linkUrl: collection.linkUrl,
    };
    setEditFormData(formValues);
  };
  // Reset edit mode and clear form when cancel is clicked.
  const handleCancelClick = () => {
    setEditCollectionId(null);
  };
  // Handle the save action after editing a collection.
  const handleSaveClick = (event) => {
    event.preventDefault();
    axios
      .put(
        `https://65a6ae9974cf4207b4f0a100.mockapi.io/collections/${editCollectionId}`,
        editFormData
      )
      .then((response) => {
        // Update the local state to reflect the changes made to the collection.
        const updatedCollections = collections.map((collection) => {
          if (collection.id === editCollectionId) {
            return { ...response.data };
          }
          return collection;
        });
        setCollections(updatedCollections);
        setEditCollectionId(null);
      })
      .catch((error) => {
        console.error("Error updating collection:", error);
      });
  };

  // Handle deletion of a collection.
  const handleDeleteClick = (collectionId) => {
    axios
      .delete(
        `https://65a6ae9974cf4207b4f0a100.mockapi.io/collections/${collectionId}`
      )
      .then(() => {
        const updatedCollections = collections.filter(
          (collection) => collection.id !== collectionId
        );
        setCollections(updatedCollections);
      })
      .catch((error) => {
        console.error("Error deleting collection:", error);
      });
  };

  // Render the component UI.
  return (
    <div className="edit-artwork-container">
      <h2 className="edit-artwork-title">Edit Artwork</h2>

      {/* Add Artwork Form */}
      <form onSubmit={handleAddFormSubmit} className="add-artwork-form">
        <input
          type="text"
          name="title"
          required
          placeholder="Title"
          value={newCollectionData.title}
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="imgUrl"
          required
          placeholder="Image URL"
          value={newCollectionData.imgUrl}
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="linkUrl"
          required
          placeholder="Link URL"
          value={newCollectionData.linkUrl}
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>

      {/* Collection Display and Edit Form */}
      {collections.map((collection) => (
        <div key={collection.id} className="collection-item">
          {editCollectionId === collection.id ? (
            <form onSubmit={handleSaveClick}>
              <input
                type="text"
                name="title"
                value={editFormData.title}
                onChange={handleEditFormChange}
              />
              <input
                type="text"
                name="imgUrl"
                value={editFormData.imgUrl}
                onChange={handleEditFormChange}
              />
              <input
                type="text"
                name="linkUrl"
                value={editFormData.linkUrl}
                onChange={handleEditFormChange}
              />
              <button type="submit">Save</button>
              <button type="button" onClick={handleCancelClick}>
                Cancel
              </button>
            </form>
          ) : (
            <div className="collection-display">
              <h3>{collection.title}</h3>
              <img src={collection.imgUrl} alt={collection.title} />
              <p>{collection.linkUrl}</p>
              <button onClick={() => handleEditClick(collection)}>Edit</button>
              <button onClick={() => handleDeleteClick(collection.id)}>
                Delete
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default EditArtwork;
