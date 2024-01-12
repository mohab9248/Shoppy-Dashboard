import { Edit } from "@mui/icons-material";

function EditButton({onClick}) {
    return (
        <div
            className="p-1 px-4 rounded-sm transition-all bg-primary bg-opacity-70 hover:bg-yellow-950 text-yellow-950 hover:text-primary"
            onClick={onClick}
        >
            <Edit className=" p-[2px]  " />
        </div>
    );
}

export default EditButton;
