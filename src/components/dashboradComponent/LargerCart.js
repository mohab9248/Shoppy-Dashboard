function LargerCart({title , number}) {
    return ( <div className=" w-full h-full bg-primary p-10 rounded-xl flex flex-col gap-4 ">
            <p className=" text-5xl font-bold text-white"> {title} </p>
            <p className=" text-2xl  text-white"> {number} $</p>
        </div> );
}

export default LargerCart;