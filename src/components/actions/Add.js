function AddBottom({ name ,onClick }) {
    return (
        <div className=" w-max cursor-pointer font-bold uppercase flex items-center justify-center rounded-md mb-2 px-6 py-2 bg-yellow-900 text-white hover:bg-primary transition-all"
        onClick={onClick}>
            <p>{name}</p>
        </div>
    );
}

export default AddBottom;
