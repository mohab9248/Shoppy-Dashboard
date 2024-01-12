import React, { useEffect, useState } from "react";
import { apis } from "../../utils/Apis";
import { columnsUser } from "../../utils/TableColumns";
import { MaterialReactTable } from "material-react-table";
import EditButton from "../../components/actions/Edit";
import DeleteBotton from "../../components/actions/Delete";
import Form from "../../components/forms/Form";
import { FormUser } from "../../utils/FormInput";
import AddBottom from "../../components/actions/Add";

function Users() {
    const [data, setData] = useState(null);
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [showModalAdd, setShowModalAdd] = useState(false);
    const [placeHolder, setPlaceHolder] = useState(null);
    const [postUser, setPostUser] = useState("");
    const [editUser, setEditUser] = useState(null);
    const [idEdit, setIdEdit] = useState(null);

    useEffect(() => {
        getData();
        if(!idEdit){

        }else{
            apis.getUserById(idEdit).then((res)=>{
                setPlaceHolder(res)
            })
        }
    }, [editUser, idEdit]);

    const getData = () => {
        apis.getAllUser().then((res) => {
            setData(res);
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        apis.AddUser(postUser)
            .then((res) => {
                getData();
                setShowModalAdd(false);
            })
            .catch(handleError);
    };

    const handleSubmitedit = (e, id) => {
        e.preventDefault();
        apis.editUser(id, editUser)
            .then((res) => {
                getData();
                console.log(res);
                setShowModalEdit(false);
            })
            .catch(handleError);
    };

    const handleDelete = (id) => {
        apis.deletUser(id).then(getData).catch(handleError);
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

    // const createFormData = (userData) => {
    //     const formData = new FormData();
    //     formData.append("image", userData.image);
    //     formData.append("name", userData.name);
    //     formData.append("description", userData.description);
    //     formData.append("price", userData.price);
    //     formData.append("category_id", userData.category_id);
    //     formData.append("stockQuantity", userData.stockQuantity);
    //     return formData;
    // };

    const handleError = (err) => {
        console.log(err);
    };

    if (!data) return <h1> hiii </h1>;

    return (
        <div className="w-full">
            <AddBottom
                name="add user"
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
                        <DeleteBotton
                            onClick={() => handleDelete(row.original._id)}
                        />
                    </div>
                )}
                columns={columnsUser}
                data={data}
            />
            {showModalEdit && (
                <Form
                    inputsForm={FormUser}
                    hedear="edit user"
                    buttomName="Edit"
                    placeHolder ={placeHolder}
                    onClick={() => setShowModalEdit(false)}
                    onSubmit={(e) => handleSubmitedit(e, idEdit)}
                    onChange={(e) => handleInputChange(e, setEditUser)}
                    selectOptionEnable
                />
            )}
            {showModalAdd && (
                <Form
                    inputsForm={FormUser}
                    hedear="add user"
                    buttomName="Add"
                    onClick={() => setShowModalAdd(false)}
                    onSubmit={handleSubmit}
                    onChange={(e) => handleInputChange(e, setPostUser)}
                    selectOptionEnable
                />
            )}
        </div>
    );
}

export default Users;
