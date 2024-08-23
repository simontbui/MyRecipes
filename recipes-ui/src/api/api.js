import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000/api"

const reponseBody = (response) => response.data

export const getUserData = async () => {
  try {
    const data = await axios.get("user/")
    return reponseBody(data)
  } catch (e) {
    console.log(e.message)
  }
}

export const getRecipesData = async () => {
    try {
      const data = await axios.get("recipes/")
      return reponseBody(data)
    } catch (e) {
        console.log(e.message)
    }
}