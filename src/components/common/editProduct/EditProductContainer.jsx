// EditProductContainer.js
import { useState } from "react";
import EditProduct from "./EditProduct.jsx";

const EditProductContainer = ({
  itemSelected,
  setSelectedItem,
  deleteProductById,
  updateProduct,
}) => {

  // Funciones para agregar elementos (Color, Tamaño, Foto, Categoría)
  const handleAddColor = () => {
    setSelectedItem((prev) => ({
      ...prev,
      colors: [...prev.colors, { color: "", sizes: [{ size: "", stock: "" }] }],
    }));
  };

  const handleAddSize = (colorIndex) => {
    const newColors = [...itemSelected.colors];
    newColors[colorIndex].sizes.push({ size: "", stock: "" });
    setSelectedItem((prev) => ({
      ...prev,
      colors: newColors,
    }));
  };

  const handleAddPhoto = () => {
    setSelectedItem((prev) => ({
      ...prev,
      photo: [...prev.photo, ""],
    }));
  };

  const handleDeletePhoto = (index) => {
    const newArray = 
    setSelectedItem((prev) => ({
      ...prev,
      photo: prev.photo.filter((i) => i !== index), 
    }));
    console.log(itemSelected);
  };

  const handleAddCategory = () => {
    setSelectedItem((prev) => ({
      ...prev,
      category: [...prev.category, ""],
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedItem((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <EditProduct
      itemSelected={itemSelected}
      deleteProductById={deleteProductById}
      updateProduct={updateProduct}
      handleChange={handleChange}
      handleAddColor={handleAddColor}
      handleDeletePhoto={handleDeletePhoto}
      handleAddSize={handleAddSize}
      handleAddPhoto={handleAddPhoto}
      handleAddCategory={handleAddCategory}
    />
  );
};

export default EditProductContainer;
