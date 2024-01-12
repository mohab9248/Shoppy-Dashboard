function Form({
    onSubmit,
    hedear,
    inputsForm,
    onChange,
    buttomName,
    onClick,
    selectOptionEnable,
    placeHolder,
}) {
    return (
        <div className="w-screen h-screen flex items-center justify-center absolute top-0 left-0 z-10 bg-black bg-opacity-20">
            <form
                className=" w-[600px] gap-2 p-5 bg-primary rounded-md flex flex-col"
                onSubmit={onSubmit}
            >
                <div className=" flex items-center justify-between">
                    <p className="text-xl font-bold text-white uppercase">
                        {" "}
                        {hedear}{" "}
                    </p>
                    <span
                        className=" cursor-pointer text-xl px-3 py-1 rounded-sm  transition-all hover:bg-yellow-900 hover:text-white"
                        onClick={onClick}
                    >
                        {" "}
                        X{" "}
                    </span>
                </div>
                <div className="flex flex-col">
                    {inputsForm.inputs.map((input, index) => (
                        <div key={index} className="flex flex-col">
                            <label className="my-2 first-letter:uppercase font-bold text-yellow-900">
                                {input.label}
                            </label>
                            <input
                                type={input.type}
                                name={input.name}
                                placeholder={
                                    placeHolder && placeHolder[input.name]
                                        ?(input.name === "password" ? "" :placeHolder[input.name] )
                                        : ""
                                }
                                onChange={onChange}
                                className="h-10 rounded-md p-2 px-4"
                            />
                            
                        </div>
                    ))}

                    {selectOptionEnable && <>{inputsForm.select(onChange)}</>}
                </div>
                <button
                    className="mt-2 bg-white rounded-md uppercase  hover:bg-yellow-900 hover:text-white transition-all  font-bold text-yellow-900 h-12   "
                    type="submit"
                >
                    {" "}
                    {buttomName}{" "}
                </button>
            </form>
        </div>
    );
}

export default Form;
