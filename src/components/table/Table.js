function Table({ data, customRender }) {
    const keys = Object.keys(data[0]);

    function checkTheData(element, column) {
        if (
            typeof element[column] === "string" ||
            typeof element[column] === "number"
        ) {
            return element[column];
        } else {
            const customCells = customRender.map(
                (ele) => element[ele.columne][ele.populate]
            );
            return <div>{customCells}</div>;
        }
    }
    return (
        <div className="overflow-x-auto w-full">
            <div className="my-4 flex justify-end">
                <button className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark">
                    Add Product
                </button>
            </div>
            <table className="w-full bg-white shadow-md border rounded-lg">
                <thead>
                    <tr className="bg-primary  text-white">
                        {keys.map((key, index) =>
                            key === "__v" ? undefined : (
                                <th key={index} className="py-2 uppercase">
                                    {key}
                                </th>
                            )
                        )}
                        <th className=" uppercase">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((element, index) => (
                        <tr
                            className="hover:bg-gray-100 text-center"
                            key={index}
                        >
                            {keys.map((key, innerIndex) =>
                                key === "__v" ? undefined : (
                                    <td
                                        key={innerIndex}
                                        className="border px-4 py-2"
                                    >
                                        {checkTheData(element, key)}
                                    </td>
                                )
                            )}

                            <td className="border px-4 py-2">
                                <button className="mr-2 bg-yellow-900 text-white py-1 px-2 rounded-lg hover:bg-yellow-800">
                                    Update
                                </button>
                                <button className="bg-red-500 text-white py-1 px-2 rounded-lg hover:bg-red-600">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;

function CustomCellRenderer({ data }) {
    return (
        <div>
            <span>{data.property1}</span>
        </div>
    );
}
