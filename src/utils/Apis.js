import axios from "axios";

export const apis = {

      getAllProduct: async () => {
        const response = await axios.get(`http://localhost:4000/product`);
        return response.data;
      },
      AddProduct: async (data) => {
        const response = await axios.post(`http://localhost:4000/addProduct`,data);
        return response.data;
      },
      deletProduct: async (id) => {
        const response = await axios.delete(`http://localhost:4000/deleteProduct/${id}`);
        return response.data;
      },
      getProductById: async (id) => {
        const response = await axios.get(`http://localhost:4000/Product/${id}`);
        return response.data;
      },
      editProduct: async (id , data) => {
        const response = await axios.put(`http://localhost:4000/updateProduct/${id}`,data);
        return response.data;
      },

      getAllCategory: async () => {
        const response = await axios.get(`http://localhost:4000/getAllCategory`);
        return response.data;
      },
      addCategory: async (data) => {
        const response = await axios.post(`http://localhost:4000/addCategory`,data);
        return response.data;
      },
      deletCategory: async (id) => {
        const response = await axios.delete(`http://localhost:4000/deleteCategory/${id}`);
        return response.data;
      },
      editCategory: async (id , data) => {
        const response = await axios.put(`http://localhost:4000/updateCategory/${id}`,data);
        return response.data;
      },
      getCategoryById: async (id) => {
        const response = await axios.get(`http://localhost:4000/getCategoryById/${id}`);
        return response.data;
      },

      //order 
      getAllOrder: async () => {
        const response = await axios.get(`http://localhost:4000/getAllOrder`);
        return response.data;
      },
      editOrder: async (id , data) => {
        const response = await axios.put(`http://localhost:4000/updateOrder/${id}`,data);
        return response.data;
      },
      getOrderbyDate: async () => {
        const response = await axios.get(`http://localhost:4000/getOrderByDateNow`);
        return response.data;
      },
      //Admin
      getAllAdmin: async () => {
        const response = await axios.get(`http://localhost:4000/getAllAdmin`);
        return response.data;
      },
      addAdmin: async (data) => {
        const response = await axios.post(`http://localhost:4000/addAdmin`,data);
        return response.data;
      },
      deletAdmin: async (id) => {
        const response = await axios.delete(`http://localhost:4000/deleteAdmin/${id}`);
        return response.data;
      },
      editAdmin: async (id , data) => {
        const response = await axios.put(`http://localhost:4000/adminUpdate/${id}`,data);
        return response.data;
      },
      getAdminById: async (id) => {
        const response = await axios.get(`http://localhost:4000/getAdmin/${id}`);
        return response.data;
      },
      //users
      getAllUser: async () => {
        const response = await axios.get(`http://localhost:4000/user`);
        return response.data;
      },
      AddUser: async (data) => {
        const response = await axios.post(`http://localhost:4000/register`,data);
        return response.data;
      },
      deletUser: async (id) => {
        const response = await axios.delete(`http://localhost:4000/deleteUser/${id}`);
        return response.data;
      },
      getUserById: async (id) => {
        const response = await axios.get(`http://localhost:4000/user/${id}`);
        return response.data;
      },
      editUser: async (id , data) => {
        const response = await axios.put(`http://localhost:4000/userUpdate/${id}`,data);
        return response.data;
      },

      //dashborad 
      getNumberUser: async () => {
        const response = await axios.get(`http://localhost:4000/numberUser`);
        return response.data;
      },
      getTotal: async () => {
        const response = await axios.get(`http://localhost:4000/getTotal`);
        return response.data;
      },
}