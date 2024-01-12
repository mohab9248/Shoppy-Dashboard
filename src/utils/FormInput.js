import { apis } from "./Apis";

const getAllCategory = await apis.getAllCategory();
export const FormProduct = {
  inputs: [
    {
      label: "name",
      type: "text",
      name: "name",
      placeHolder: "",
    },
    {
      label: "description",
      type: "text",
      name: "description",
      placeHolder: "",
    },
    {
      label: "price",
      type: "number",
      name: "price",
      placeHolder: "",
    },
    {
      label: "image",
      type: "file",
      name: "image",
      placeHolder: "",
    },
  ],
  select: (onChange) => {
    return (
      <>
        <label className="my-2 font-bold text-yellow-900">Category</label>
        <select
          onChange={onChange}
          name="category_id"
          className=" h-10 rounded-md p-2 px-4 bg-white"
        >
          <option disabled selected>
            Select
          </option>
          {getAllCategory.map((option, index) => (
            <option key={index} value={option._id}>
              {option.name}
            </option>
          ))}
        </select>
      </>
    );
  },
};

export const FormCategory = {
  inputs: [
    {
      label: "name",
      type: "text",
      name: "name",
    },

    {
      label: "image",
      type: "file",
      name: "image",
    },
  ],
};

export const FormAdmin = {
  inputs: [
    {
      label: "User Name",
      type: "text",
      name: "userName",
    },

    {
      label: "Password",
      type: "password",
      name: "password",
    },
  ],
};

export const FormUser = {
  inputs: [
    {
      label: "firstName",
      type: "text",
      name: "firstName",
      placeHolder: "",
    },
    {
      label: "lastName",
      type: "text",
      name: "lastName",
      placeHolder: "",
    },
    {
      label: "email",
      type: "text",
      name: "email",
      placeHolder: "",
    },
    {
      label: "phoneNumber",
      type: "number",
      name: "phoneNumber",
      placeHolder: "",
    },
    {
      label: "password",
      type: "password",
      name: "password",
      placeHolder: "",
    },
  ],
  select: (onChange) => {
    return (
      <>
        <label className="my-2 font-bold text-yellow-900">Category</label>{" "}
        <select
          onChange={onChange}
          name="gender"
          className=" h-10 rounded-md p-2 px-4 bg-white"
        >
          <option value=" "> Choose Gender </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>{" "}
      </>
    );
  },
};
