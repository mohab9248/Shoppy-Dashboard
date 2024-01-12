import React, { useEffect, useState } from "react";
import { apis } from "../../utils/Apis";
import { columnsProduct } from "../../utils/TableColumns";
import { MaterialReactTable } from "material-react-table";
import EditButton from "../../components/actions/Edit";
import DeleteBotton from "../../components/actions/Delete";
import Form from "../../components/forms/Form";
import { FormProduct } from "../../utils/FormInput";
import AddBottom from "../../components/actions/Add";

function Product() {
  const [data, setData] = useState(null);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [placeHolder, setPlaceHolder] = useState(null);
  const [postProduct, setPostProduct] = useState("");
  const [editProduct, setEditProduct] = useState(null);
  const [idEdit, setIdEdit] = useState(null);

  useEffect(() => {
    getData();
    if (!idEdit) {
    } else {
      apis.getProductById(idEdit).then((res) => {
        setPlaceHolder(res);
      });
    }
  }, [editProduct, idEdit]);

  const getData = () => {
    apis.getAllProduct().then((res) => {
      setData(res);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = createFormData(postProduct);
    apis
      .AddProduct(formData)
      .then((res) => {
        getData();
        setShowModalAdd(false);
      })
      .catch(handleError);
  };

  const handleSubmitedit = (e, id) => {
    e.preventDefault();
    const formData = createFormData(editProduct);
    apis
      .editProduct(id, formData)
      .then((res) => {
        getData();
        console.log(res);
        setShowModalEdit(false);
      })
      .catch(handleError);
  };

  const handleDelete = (id) => {
    apis.deletProduct(id).then(getData).catch(handleError);
  };

  const handleInputChange = (e, setStateFunction) => {
    const { name, value } = e.target;
    setStateFunction((prevFormData) =>
      name === "image"
        ? {
            ...prevFormData,
            [name]: e.target.files[0],
          }
        : {
            ...prevFormData,
            [name]: value,
          }
    );
  };

  const createFormData = (productData) => {
    const formData = new FormData();
    formData.append("image", productData.image);
    formData.append("name", productData.name);
    formData.append("description", productData.description);
    formData.append("price", productData.price);
    formData.append("category_id", productData.category_id);
    return formData;
  };

  const handleError = (err) => {
    console.log(err);
  };

  if (!data) return <h1> hiii </h1>;

  return (
    <div className="w-full">
      <AddBottom
        name="add product"
        onClick={() => {
          setShowModalAdd(true);
        }}
      />
      <MaterialReactTable
        enableRowActions
        renderRowActions={({ row }) => (
          <div className="flex gap-5">
            <EditButton
              onClick={() => {
                setIdEdit(row.original._id);
                setShowModalEdit(true);
              }}
            />
            <DeleteBotton onClick={() => handleDelete(row.original._id)} />
          </div>
        )}
        columns={columnsProduct}
        data={data}
      />
      {showModalEdit && (
        <Form
          inputsForm={FormProduct}
          hedear="edit product"
          buttomName="Edit"
          placeHolder={placeHolder}
          onClick={() => setShowModalEdit(false)}
          onSubmit={(e) => handleSubmitedit(e, idEdit)}
          onChange={(e) => handleInputChange(e, setEditProduct)}
          selectOptionEnable
        />
      )}
      {showModalAdd && (
        <Form
          inputsForm={FormProduct}
          hedear="add product"
          buttomName="Add"
          onClick={() => setShowModalAdd(false)}
          onSubmit={handleSubmit}
          onChange={(e) => handleInputChange(e, setPostProduct)}
          selectOptionEnable
        />
      )}
    </div>
  );
}

export default Product;
