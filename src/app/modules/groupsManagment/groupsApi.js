import axios from "axios";

export async function getAllGroups(user) {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    };

    const response = await axios.get(
      process.env.REACT_APP_API_URL + "group/admin/" + user.id,
      config
    );
    const allresponse = await axios.get(
      process.env.REACT_APP_API_URL + "group/",
      config
    );
    const aux = allresponse.data?.filter((it) =>
      it.users?.find((x) => x.id == user.id)
    );

    if (response.status === 200) {
      const responseData = response.data;
      return responseData.concat(aux);
    } else {
      throw new Error("Error en la respuesta de la API");
    }
  } catch (error) {
    throw error;
  }
}
export async function createGroup(data) {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${data.user.accessToken}`,
      },
    };
    const req = {
      ...data.group,
      userAdminId: data.user.id,
    };

    const response = await axios.post(
      process.env.REACT_APP_API_URL + "group/",
      req,
      config
    );

    if (response.status === 200) {
      const responseData = await axios.get(
        process.env.REACT_APP_API_URL + "group/" + response.data.id
      );
      return responseData.data;
    } else {
      throw new Error("Error en la respuesta de la API");
    }
  } catch (error) {
    throw error;
  }
}
export async function updateGroup(data) {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${data.user.accessToken}`,
      },
    };
    const response = await axios.put(
      process.env.REACT_APP_API_URL + "group/" + data.group.id,
      data.group,
      config
    );

    if (response.status === 200) {
      const responseData = response.data;
      //console.log(responseData)
      return responseData;
    } else {
      throw new Error("Error en la respuesta de la API");
    }
  } catch (error) {
    throw error;
  }
}
export async function getGroup(id) {
  try {
    const response = await axios.get(
      process.env.REACT_APP_API_URL + "group/" + id
    );

    if (response.status === 200) {
      const responseData = response.data;
      return responseData;
    } else {
      throw new Error("Error en la respuesta de la API");
    }
  } catch (error) {
    throw error;
  }
}
export async function deleteGroup(data) {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${data.user.accessToken}`,
      },
    };
    const response = await axios.delete(
      process.env.REACT_APP_API_URL + "group/" + data.group.id,
      config
    );

    if (response.status === 200) {
      const responseData = {
        response: response.data,
        group: data.group,
      };
      return responseData;
    } else {
      throw new Error("Error en la respuesta de la API");
    }
  } catch (error) {
    throw error;
  }
}
export async function addUserToGroup(data) {
  try {
    const gid = data.group.id;
    const dta = {
      userId: data.user.id,
    };
    const config = {
      headers: {
        Authorization: `Bearer ${data.auth.accessToken}`,
      },
    };
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}group/${gid}/user/`,
      dta,
      config
    );

    if (response.status === 200) {
      const responseData = {
        response: response.data,
        groupId: gid,
        user: data.user,
      };
      return responseData;
    } else {
      throw new Error("Error en la respuesta de la API");
    }
  } catch (error) {
    throw error;
  }
}
