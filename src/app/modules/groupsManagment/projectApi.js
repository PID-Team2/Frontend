import axios from "axios";

export async function getAllProjects(user) {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    };

    const response = await axios.get(
      process.env.REACT_APP_API_URL + "project/",
      config
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
export async function createProject(data) {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${data.user.accessToken}`,
      },
    };
    const req = {
      ...data.project,
    };

    const response = await axios.post(
      process.env.REACT_APP_API_URL + "project/",
      req,
      config
    );

    if (response.status === 200) {
      const responseData = await axios.get(
        process.env.REACT_APP_API_URL + "project/"
      );
      return responseData.data;
    } else {
      throw new Error("Error en la respuesta de la API");
    }
  } catch (error) {
    throw error;
  }
}
export async function updateProject(data) {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${data.user.accessToken}`,
      },
    };
    const response = await axios.put(
      process.env.REACT_APP_API_URL + "project/" + data.project.id,
      data.project,
      config
    );

    if (response.status === 200) {
      const responseData = data.project;
      //console.log(responseData)
      return responseData;
    } else {
      throw new Error("Error en la respuesta de la API");
    }
  } catch (error) {
    throw error;
  }
}
export async function getProject(id) {
  try {
    const response = await axios.get(
      process.env.REACT_APP_API_URL + "project/" + id
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
export async function deleteProject(data) {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${data.user.accessToken}`,
      },
    };
    const response = await axios.delete(
      process.env.REACT_APP_API_URL + "project/" + data.project.id,
      config
    );

    if (response.status === 200) {
      const responseData = {
        response: response.data,
        project: data.project,
      };
      return responseData;
    } else {
      throw new Error("Error en la respuesta de la API");
    }
  } catch (error) {
    throw error;
  }
}
