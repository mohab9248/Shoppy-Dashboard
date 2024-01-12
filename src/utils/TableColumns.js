export const columnsProduct = [
    { accessorKey: "_id", header: "id", size: 150 },
    {
        accessorKey: "name",
        header: "name",
        size: 150,
    },
    {
        accessorKey: "description",
        header: "Description",
        size: 500,
    },
    {
        accessorKey: "price",
        header: "Price",
        size: 150,
    },
    {
        accessorKey: "category_id.name",
        header: "Category",
        size: 150,
    },
    {
        accessorKey: "image",
        header: "Image",
        Cell: (row) => (
            <div className="flex items-center gap-2"><img src={`http://localhost:4000/${row.row.original.image}`} className=" w-10 h-10" alt=""/> <p>{row.row.original.image}</p></div>
        ),
        size: 300,
    },
    {
        accessorKey: "createdAt",
        header: "Created At",
    },
];

export const columnsCategory = [
    { accessorKey: "_id", header: "id" },
    {
        accessorKey: "name",
        header: "Name",
        size: 150,
    },
    {
        accessorKey: "image",
        header: "Image",
        size: 150,
    },
];


export const columnsAdmin = [
    { accessorKey: "_id", header: "id" },
    {
        accessorKey: "userName",
        header: "User Name",
        size: 150,
    },
    {
        accessorKey: "password",
        header: "Password",
        size: 150,
    },
];

export const columnsUser = [
    { accessorKey: "_id", header: "id", size: 150 },
    {
        accessorKey: "firstName",
        header: "First Name",
        size: 150,
    },
    {
        accessorKey: "lastName",
        header: "Last Name",
        size: 150,
    },
    {
        accessorKey: "phoneNumber",
        header: "Number Phone",
        size: 150,
    },
    {
        accessorKey: "email",
        header: "Email",
        size: 150,
    },
    {
        accessorKey: "password",
        header: "Password",
        size: 150,
    },
    {
        accessorKey: "gender",
        header: "Gender",
    },
];