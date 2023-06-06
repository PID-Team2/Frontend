import axios from "axios";

export async function getAllUsers() {
  try {
    const response = await axios.get(process.env.REACT_APP_API_URL+"user/");

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