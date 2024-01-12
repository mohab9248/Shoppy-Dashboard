import MaterialReactTable from "material-react-table";
import { columnsAdmin } from "../../utils/TableColumns";
import { apis } from "../../utils/Apis";
import { useEffect, useState } from "react";
import EditButton from "../../components/actions/Edit";
import DeleteBotton from "../../components/actions/Delete";
import AddBottom from "../../components/actions/Add";
import Form from "../../components/forms/Form";
import { FormAdmin } from "../../utils/FormInput";

function Admin() {
    const [dataAdmin, setDataAdmin] = useState(null);
    const [showModalAdd, setShowModalAdd] = useState(false);
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [postAdmin, setPostAdmin] = useState("");
    const [editAdmin, setEditAdmin] = useState(null);
    const [placeHolder, setPlaceHolder] = useState(null);
    const [idEdit, setIdEdit] = useState(null);

    console.log(editAdmin)

    useEffect(() => {
        getData();
        if (!idEdit) {
        } else {
            apis.getAdminById(idEdit).then((res) => {
                setPlaceHolder(res);
            });
        }
    }, [editAdmin, idEdit]);

    const getData = () => {
        apis.getAllAdmin().then((res) => setDataAdmin(res));
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
        apis.addAdmin(postAdmin)
            .then((res) => {
                console.log(res);
                getData();
                setShowModalAdd(false);
            })
            .catch(handleError);
    };

    const handleSubmitedit = (e, id) => {
        e.preventDefault();
        apis.editAdmin(id, editAdmin)
            .then((res) => {
                getData();
                setShowModalEdit(false);
            })
            .catch(handleError);
    };

    const handleDelete = (id) => {
        apis.deletAdmin(id).then(getData).catch(handleError);
    };

    const handleError = (err) => {
        console.log(err);
    };

    if (!dataAdmin) return "Wait !!";
    return (
        <div className=" w-full">
            <AddBottom
                name="add Admin"
                onClick={() => {
                    setShowModalAdd(true);
                }}
            />
            <MaterialReactTable
                columns={columnsAdmin}
                data={dataAdmin}
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
                    inputsForm={FormAdmin}
                    hedear="edit product"
                    buttomName="Edit"
                    placeHolder={placeHolder}
                    onClick={() => setShowModalEdit(false)}
                    onSubmit={(e) => handleSubmitedit(e, idEdit)}
                    onChange={(e) => handleInputChange(e, setEditAdmin)}
                // selectOptionEnable
                />
            )}
            {showModalAdd && (
                <Form
                    inputsForm={FormAdmin}
                    hedear="add Admin"
                    buttomName="Add"
                    onClick={() => setShowModalAdd(false)}
                    onSubmit={handleSubmit}
                    onChange={(e) => handleInputChange(e, setPostAdmin)}
                />
            )}
        </div>
    );
}

export default Admin;
