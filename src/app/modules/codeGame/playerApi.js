import axios from "axios";

export async function getAllPlayers(user) {
    try {
      
      const response = await axios.get(process.env.REACT_APP_API_URL+"player/user/"+user.id);
      
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
export async function createPlayer(data) {
    try {
      
      const config = {
        headers: {
          Authorization: `Bearer ${data.user.accessToken}`,
        },
      }
      const req = {
        name: data.name,
        userId: data.user.id
      }

      const response = await axios.post(process.env.REACT_APP_API_URL+"player/", req, config);
  
      if (response.status === 200) {
        const responseData = await axios.get(process.env.REACT_APP_API_URL+"player/"+response.data.id);
        return responseData.data;
      } else {
        throw new Error('Error en la respuesta de la API');
      }
    } catch (error) {
      throw error;
    }
}
export async function updatePlayer(data) {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${data.user.accessToken}`,
        },
      }
      const response = await axios.put(process.env.REACT_APP_API_URL+"player/"+data.player.id, data.player, config);
  
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
export async function getPlayer(id) {
    try {
      const response = await axios.get(process.env.REACT_APP_API_URL+"player/"+id);
  
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

export async function deletePlayer(data) {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${data.user.accessToken}`,
      },
    }
    const response = await axios.delete(process.env.REACT_APP_API_URL+"player/"+data.player.id, config);

    if (response.status === 200) {
      const responseData = {
        response: response.data,
        player: data.player
      };
      return responseData;
    } else {
      throw new Error('Error en la respuesta de la API');
    }
  } catch (error) {
    throw error;
  }
}
