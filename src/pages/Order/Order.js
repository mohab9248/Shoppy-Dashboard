import MaterialReactTable from "material-react-table";
import { apis } from "../../utils/Apis";
import { useEffect, useState } from "react";
import axios from "axios";

function Order() {
    const [orderData, setOrderData] = useState(null);
    const getAllOrder = () => {
        apis.getAllOrder().then((res) => setOrderData(res));
    };
    useEffect(() => {
        getAllOrder();
    }, []);

    const columnsOrder = [
        { accessorKey: "_id", header: "id" },
        {
            accessorKey: `user_id.firstName`,
            header: "First Name",
            size: 150,
        },
        {
            accessorKey: `user_id.lastName`,
            header: "Last Name",
            size: 150,
        },
        {
            accessorKey: "user_id.phoneNumber",
            header: "Number Phone",
            size: 150,
        },
        {
            accessorKey: "product_id.name",
            header: "Product",
            size: 150,
        },
        {
            accessorKey: "quantity",
            header: "Quantity",
            size: 150,
        },
        {
            accessorKey: "createdAt",
            header: "Create At",
            Cell: (row) => (
                <>{row.row.original.createdAt.replace(/T|:\d+\.\d+Z/g, " ")} </>
            ),
            size: 200,
        },
        {
            accessorKey: "total",
            header: "Total",
            Cell: (row) => <>{row.row.original.total} $ </>,
            size: 150,
        },
        {
            accessorKey: "isStatus",
            Cell: (row) => {
                return (
                    <div className=" flex items-center gap-1">
                        <p className=" text-[10px]"> Pending</p>{" "}
                        <Toggel
                            status={row.row.original.isStatus}
                            data={row.row.orginal}
                            id={row.row.original._id}
                            changed={getAllOrder}
                        />{" "}
                        <p className=" text-[10px]"> Done </p>{" "}
                    </div>
                );
            },
            header: "Status of order",
            size: 150,
        },
    ];

    if (!orderData) return " wait !!";
    return (
        <div className="w-full">
            <MaterialReactTable columns={columnsOrder} data={orderData} />{" "}
        </div>
    );
}

export default Order;

function Toggel({ status, id, changed, data }) {
    const authToken = "5ec4a9d35df3c161df18d4483f00d79f";
    const fromNumber = "whatsapp:+14155238886";
    // const toNumber =``;
    const accountSid = "AC77e149f13c7e6ccba7b3bb6612310107"; // Replace with your Twilio Account SID

    const base64String = btoa(
        `AC77e149f13c7e6ccba7b3bb6612310107:${authToken}`
    );
    const headers = {
        Authorization: `Basic ${base64String}`,
        "Content-Type": "application/x-www-form-urlencoded",
    };

    const handleChangeStatus = (ID, Status) => {
        const data = { isStatus: !Status };
        apis.editOrder(ID, data).then((res) => {
            console.log(res);
            changed();
            if (res.isStatus === !true) {
                axios
                    .post(
                        `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
                        {
                            From: fromNumber,
                            To: `whatsapp:+${res.user_id.phoneNumber}`,
                            Body: `Hello ${res.user_id.firstName} your order is delevired , it will recived in 2 to 3 days  
                        information of order ,
                        product ${res.product_id.name}
                        quantity : ${res.quantity}
                        total : ${res.total} $ 
                        thank you ${res.user_id.firstName} for ur order i hope to be happy with it  `,
                        },
                        { headers }
                    )
                    .then((response) => {
                        console.log(response.data);
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            }
        });
    };

    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                checked={status}
                onChange={() => {
                    handleChangeStatus(id, status);
                }}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
    );
}
