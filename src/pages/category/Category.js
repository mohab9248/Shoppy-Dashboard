import MaterialReactTable from "material-react-table";
import { columnsCategory } from "../../utils/TableColumns";
import { apis } from "../../utils/Apis";
import { useEffect, useState } from "react";
import EditButton from "../../components/actions/Edit";
import DeleteBotton from "../../components/actions/Delete";
import AddBottom from "../../components/actions/Add";
import Form from "../../components/forms/Form";
import { FormCategory } from "../../utils/FormInput";

function Category() {
    const [dataCategory, setDataCategory] = useState(null);
    const [showModalAdd, setShowModalAdd] = useState(false);
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [postCategory, setPostCategory] = useState("");
    const [editCategory, setEditCategory] = useState(null);
    const [placeHolder, setPlaceHolder] = useState(null);
    const [idEdit, setIdEdit] = useState(null);

    useEffect(() => {
        getData();
        if (!idEdit) {
        } else {
            apis.getCategoryById(idEdit).then((res) => {
                setPlaceHolder(res);
            });
        }
    }, [editCategory, idEdit]);

    const getData = () => {
        apis.getAllCategory().then((res) => setDataCategory(res));
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

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = createFormData(postCategory);
        apis.addCategory(formData)
            .then((res) => {
                console.log(res);
                getData();
                setShowModalAdd(false);
            })
            .catch(handleError);
    };

    const handleSubmitedit = (e, id) => {
        e.preventDefault();
        const formData = createFormData(editCategory);
        apis.editCategory(id, formData)
            .then((res) => {
                getData();
                setShowModalEdit(false);
            })
            .catch(handleError);
    };

    const handleDelete = (id) => {
        apis.deletCategory(id).then(getData).catch(handleError);
    };

    const createFormData = (category) => {
        const formData = new FormData();
        formData.append("image", category.image);
        formData.append("name", category.name);
        return formData;
    };

    const handleError = (err) => {
        console.log(err);
    };

    if (!dataCategory) return "Wait !!";
    return (
        <div className=" w-full">
            <AddBottom
                name="add Category"
                onClick={() => {
                    setShowModalAdd(true);
                }}
            />
            <MaterialReactTable
                columns={columnsCategory}
                data={dataCategory}
                enableRowActions
                renderRowActions={({ row }) => (
                    <div className=" flex gap-5 ">
                        <EditButton
                            onClick={() => {
                                setShowModalEdit(true);
                                setIdEdit(row.original._id);
                            }}
                        />
                        <DeleteBotton
                            onClick={() => handleDelete(row.original._id)}
                        />
                    </div>
                )}
            />{" "}
            {showModalEdit && (
                <Form
                    inputsForm={FormCategory}
                    hedear="edit product"
                    buttomName="Edit"
                    placeHolder={placeHolder}
                    onClick={() => setShowModalEdit(false)}
                    onSubmit={(e) => handleSubmitedit(e, idEdit)}
                    onChange={(e) => handleInputChange(e, setEditCategory)}
                    // selectOptionEnable
                />
            )}
            {showModalAdd && (
                <Form
                    inputsForm={FormCategory}
                    hedear="add Category"
                    buttomName="Add"
                    onClick={() => setShowModalAdd(false)}
                    onSubmit={handleSubmit}
                    onChange={(e) => handleInputChange(e, setPostCategory)}
                />
            )}
        </div>
    );
}

export default Category;
