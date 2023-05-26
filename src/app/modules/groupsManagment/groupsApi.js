import axios from "axios";

export async function getAllGroups(user) {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      }

      const response = await axios.get(process.env.REACT_APP_API_URL+"group/admin/"+user.id, config);
      
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
export async function createGroup(data) {
    try {
      console.log("uesr",data.user)
      
      const config = {
        headers: {
          Authorization: `Bearer ${data.user.accessToken}`,
        },
      }
      const req = {
        ...data.group,
        userAdminId: data.user.id
      }
      console.log("req", req)

      const response = await axios.post(process.env.REACT_APP_API_URL+"group/", req, config);
  
      if (response.status === 200) {
        const responseData = await axios.get(process.env.REACT_APP_API_URL+"group/"+response.data.id);
        return responseData.data;
      } else {
        throw new Error('Error en la respuesta de la API');
      }
    } catch (error) {
      throw error;
    }
}
export async function updateGroup(data) {
    try {
      const response = await axios.put(process.env.REACT_APP_API_URL+"group/"+data.id, data);
  
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
export async function getGroup(id) {
    try {
      const response = await axios.get(process.env.REACT_APP_API_URL+"group/"+id);
  
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
export async function addUserToGroup(gid, user) {
  try {
    const data = {
      userId: user.id
    }
    const config = {
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    }
    const response = await axios.get(`${process.env.REACT_APP_API_URL}group/${gid}/user/`, data, config);

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