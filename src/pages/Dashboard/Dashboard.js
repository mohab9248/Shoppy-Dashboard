import { useEffect, useState } from "react";
import LargerCart from "../../components/dashboradComponent/LargerCart";
import OrderTodayComponent from "../../components/dashboradComponent/OrderTodayComponent";
import { apis } from "../../utils/Apis";

function Dashboard() {
    const [numberUser, setNumber] = useState(0);
    const [TotalProfitOrder, setTotal] = useState(0);

    console.log(numberUser);

    useEffect(() => {
        apis.getNumberUser().then((res) => setNumber(res.number));
        apis.getTotal().then((res) => setTotal(res.total));
    }, []);

    return (
        <div className=" flex flex-col w-full h-[calc(100vh-80px)]">
            <div className="basis-1/3 flex gap-5 p-4">
                <LargerCart title="Total Profit" number={TotalProfitOrder} />
                <LargerCart title="Number User" number={numberUser} />
            </div>
            <div className="basis-2/3 p-4">
                <OrderTodayComponent />
            </div>
        </div>
    );
}

export default Dashboard;
