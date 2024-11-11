import ListProduct from "./ListProduct.jsx";
import { db } from "../../../firebaseConfig.js";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ListProductContainer = () => {
  const [items, setItems] = useState([]);
  const [message, setMessage] = useState("");
  const [key, setKey] = useState("");
  const [param, setParam] = useState("");
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const loadProductList = () => {
      const collectionRef = collection(db, "products");
      const consulta =
        key && param
          ? query(collection, where(key, "==", param))
          : collectionRef;

      getDocs(consulta)
        .then((res) => {
          let newArray = res.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });

          setItems(newArray);
        })
        .catch((error) => {
          setMessage(error);
        });
    };
    loadProductList();
  }, [key, param]);

  const handleClose = () => setShow(false);

  const handleShow = (item) => {
    setSelectedItem(item);
    setShow(true);
  };

  const updateProduct = (id, newData) => {
    try {
      const docRef = doc(db, "products", id);
      update(docRef.newData);
    } catch (error) {
      setMessage(error);
    }
  };

  const deleteProductById = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          const docRef = doc(db, "products", id);
          deleteDoc(docRef);

          const newArray = items.filter((product) => product.id !== id);
          setItems(newArray);

          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        } catch (error) {
          setMessage("Error: " + error);
        }
      }
    });
  };

  let data = {
    items,
    message,
    show,
    selectedItem,
    setSelectedItem,
    deleteProductById,
    updateProduct,
    setShow,
    setItems,
    handleClose,
    handleShow,
  };

  return (
    <>
      <ListProduct data={data} />
    </>
  );
};

export default ListProductContainer;
