import { useState } from "react";
import FormRegisterProduct from "./FormRegisterProduct.jsx";
import { db } from "../../../firebaseConfig.js";
import { addDoc, collection } from "firebase/firestore";
import Swal from "sweetalert2";
import { products } from "../../../data/productsMock.js";

const FormRegisterProductContainer = () => {
  // ---------- Variables y Estados----------
  const [message, setMessage] = useState("");
  const [switchColor, setSwitchColor] = useState(false); // Estado switch para habilitar colores
  const [switchSize, setSwitchSize] = useState(false); // Estado Switch para habilitar talla
  const [color, setColor] = useState(""); // Estado para manejar los colores
  const [size, setSize] = useState(""); // Estado para manejar las tallas
  const [stock, setStock] = useState(""); // Estado para manejar el stock
  const [photo, setPhoto] = useState(""); // Estado para manejar las fotos
  const [category, setCategory] = useState(""); // Estado para manejar las categorias
  const [hasSingleStock, setHasSingleStock] = useState(false);
  const currentDate = new Date();
  const [dateTime, setDateTime] = useState(
    currentDate.toLocaleDateString() + " " + currentDate.toLocaleTimeString()
  );
  const [product, setProduct] = useState({
    supplier: "",
    name: "",
    description: "",
    price: "",
    costPrice: "",
    discount: 0,
    colors: [],
    photo: [],
    category: [],
    sale: 0,
    active: true,
    minimumReplenishmentQuantity: "",
    ratings: [],
    registrationDate: dateTime,
    lastUpdateDate: dateTime,
  }); // recoleccion de datos que ingresaran a la coleccion

  // ----------Funciones----------

  const addProductToFirestore = async () => {
    try {
      const productsCollection = collection(db, "products");
      await addDoc(productsCollection, product);
      setMessage({
        title: "Good...",
        type: "success",
        text: "Product added successfully",
      });
    } catch (error) {
      setMessage({
        title: "Oops...",
        type: "error",
        text: "Error adding product: " + error.message,
      });
    }

    //restauramos los valores de los estados despues del registro
    setSwitchColor(false);
    setSwitchSize(false);
    setColor("");
    setSize("");
    setStock("");
    setPhoto("");
    setCategory("");
    0;
    setHasSingleStock(false);
    setProduct({
      supplier: "",
      name: "",
      description: "",
      price: "",
      costPrice: "",
      discount: 0,
      colors: [],
      photo: [],
      category: [],
      sale: 0,
      active: true,
      minimumReplenishmentQuantity: "",
      ratings: [],
      registrationDate: dateTime,
      lastUpdateDate: dateTime,
    });
  };

  // Funcion para guardar los datos ingresados al estado de product
  const handleSubmit = (e) => {
    e.preventDefault();
    addProductToFirestore();
  };

  // Validación en el método handleAddColor (cambia el estado para determinar si se mostrara o no el componente input color)
  const handleAddColor = () => {
    const upperCaseColor = color.toUpperCase();
    const upperCaseSize = size.toUpperCase();
    const newColors = [...product.colors];

    if (switchColor && switchSize && upperCaseColor && upperCaseSize && stock) {
      newColors.push({
        color: upperCaseColor,
        sizes: [{ size: upperCaseSize, stock }],
      });
    } else if (switchColor && upperCaseColor && stock) {
      newColors.push({
        color: upperCaseColor,
        sizes: [{ size: "N/A", stock }],
      });
    } else if (switchSize && upperCaseSize && stock) {
      newColors.push({
        color: "N/A",
        sizes: [{ size: upperCaseSize, stock }],
      });
      setSize((prevSizes) => [...prevSizes, { size: upperCaseSize, stock }]);
    } else if (!switchColor && !switchSize && stock && !hasSingleStock) {
      newColors.push({
        color: "N/A",
        sizes: [{ size: "N/A", stock }],
      });
      setHasSingleStock(true);
    }

    setProduct((prevProduct) => ({
      ...prevProduct,
      colors: newColors,
    }));

    setColor("");
    setSize("");
    setStock("");
    setHasSingleStock(false);
  };

  // Actualiza el estado para el switchColor
  const handleSelectionColor = () => {
    setSwitchColor(!switchColor);
    setColor("");
  };

  // Actualiza el estado para el SwitchSize
  const handleSelectionSize = () => {
    setSwitchSize(!switchSize);
    setSize("");
  };

  // elmina de la lista color yu size agregados en conjunto
  const handleDelete = (colorIndex, sizeIndex) => {
    setProduct((prevProduct) => {
      const updatedColors = [...prevProduct.colors];
      const colorItem = updatedColors[colorIndex];

      if (colorItem.sizes.length > 1) {
        colorItem.sizes.splice(sizeIndex, 1);
      } else {
        updatedColors.splice(colorIndex, 1);
      }

      return { ...prevProduct, colors: updatedColors };
    });
  };

  // Manejo de las fotos las guarda en el estado product
  const handleAddPhoto = () => {
    if (product.photo.length < 5 && photo) {
      setProduct((prevProduct) => ({
        ...prevProduct,
        photo: [...prevProduct.photo, photo],
      }));
      setPhoto("");
    }
  };

  // Funcion para eliminar foto de la lista
  const handleDeletePhoto = (index) => {
    setProduct((prevProduct) => {
      const updatedPhotos = [...prevProduct.photo];
      updatedPhotos.splice(index, 1);
      return { ...prevProduct, photo: updatedPhotos };
    });
  };

  // Manejo de las categorias las guarda en el estado product
  const handleAddCategory = () => {
    if (product.category.length < 5 && category) {
      setProduct((prevProduct) => ({
        ...prevProduct,
        category: [...prevProduct.category, category],
      }));
      setCategory("");
    }
  };

  // Funcion para eliminar categoria de la lista
  const handleDeleteCategory = (index) => {
    setProduct((prevProduct) => {
      const updatedCategory = [...prevProduct.category];
      updatedCategory.splice(index, 1);
      return { ...prevProduct, category: updatedCategory };
    });
  };

  // Objeto que contiene todas los estados y funciones que se pasaran al formulario de presentacion
  let data = {
    //Estados
    message,
    switchColor,
    switchSize,
    color,
    size,
    stock,
    photo,
    category,
    product,
    //Funciones de estados
    setMessage,
    setColor,
    setSize,
    setStock,
    setPhoto,
    setCategory,
    setProduct,
    //Funciones
    handleSubmit,
    handleAddColor,
    handleSelectionColor,
    handleSelectionSize,
    handleDelete,
    handleAddPhoto,
    handleDeletePhoto,
    handleAddCategory,
    handleDeleteCategory,
  };

  // const addProduct = () => {
  //   try {
  //     const colectionProduct = collection(db, "products");
  //     products.forEach((product) => addDoc(colectionProduct, product));
  //     console.log("Se agrego la coleccion correctamente");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // addProduct();

  return (
    <>
      <FormRegisterProduct data={data} />
    </>
  );
};

export default FormRegisterProductContainer;
