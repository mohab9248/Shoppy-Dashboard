import React, { useEffect, useState } from "react";
import { apis } from "../../utils/Apis";

function OrderTodayComponent() {
    const [dataOrderToday, setDataOrderToday] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getOrderToday();
    }, []);

    const getOrderToday = () => {
        apis.getOrderbyDate()
            .then((res) => {
                if (Array.isArray(res)) {
                    setDataOrderToday(res);
                } else {
                    setDataOrderToday([]);
                }
                setIsLoading(false);
            })
            .catch((err) => {
                setError(err);
                setIsLoading(false);
            });
    };

    return (
        <div className="h-full w-full p-4 bg-yellow-900 rounded-lg flex flex-col">
            <p className="text-white text-xl mb-3">
                Today Orders: {isLoading ? "Loading..." : dataOrderToday.length}
            </p>
            <div className="w-full h-[90%] bg-white flex flex-col rounded-md p-2">
                <div className="flex gap-2 p-2 bg-[#f5f5f5f5] rounded-md text-gray-800">
                    <div className="basis-1/5 p-[0.5px]">Full Name</div>
                    <div className="basis-1/5 p-[0.5px]">Phone Number</div>
                    <div className="basis-1/5 p-[0.5px]">Product</div>
                    <div className="basis-1/5 p-[0.5px]">Quantity</div>
                    <div className="basis-1/5 p-[0.5px]">Total</div>
                </div>
                {isLoading ? (
                    <div>Loading orders...</div>
                ) : error ? (
                    <div>Error loading orders: {error.message}</div>
                ) : dataOrderToday.length === 0 ? (
                    <div>No orders today.</div>
                ) : (
                    dataOrderToday.map((order, index) => (
                        <div
                            key={index}
                            className="flex gap-2 p-2 text-sm text-gray-700"
                        >
                            <div className="basis-1/5 p-[0.5px]">
                                {order.user_id?.firstName}{" "}
                                {order.user_id?.lastName}
                            </div>
                            <div className="basis-1/5 p-[0.5px]">
                                {order.user_id?.phoneNumber}
                            </div>
                            <div className="basis-1/5 p-[0.5px]">
                                {order.product_id?.name}
                            </div>
                            <div className="basis-1/5 p-[0.5px]">
                                {order.quantity} pieces
                            </div>
                            <div className="basis-1/5 p-[0.5px]">
                                {order.total} $
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default OrderTodayComponent;
