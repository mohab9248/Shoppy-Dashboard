import { Delete } from "@mui/icons-material";

function DeleteBotton({onClick}) {
    return (
        <div
            className="p-1 px-4 rounded-sm transition-all text-yellow-950 hover:text-primary bg-primary bg-opacity-70 hover:bg-yellow-950"
            onClick={onClick}
        >
            <Delete className=" p-[2px] " />
        </div>
    );
}

export default DeleteBotton;
