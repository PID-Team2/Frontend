import axios from "axios";

export async function signin(data) {
    try {
      const response = await axios.post(process.env.REACT_APP_API_URL+"auth/signin/", data);
  
      if (response.status === 200) {
        const responseData = response.data;
        return responseData;
      } else {
        throw new Error('Error en la respuesta de la API');
      }
    } catch (error) {
      throw error;
    }
}
export async function signup(data) {
    try {
      const response = await axios.post(process.env.REACT_APP_API_URL+"auth/signup/", data);
  
      if (response.status === 200) {
        const responseData = response.data;
        return responseData;
      } else {
        throw new Error('Error en la respuesta de la API');
      }
    } catch (error) {
      throw error;
    }
}