import axios from "axios"

const api = axios.create({
  baseURL: "https://dashboard.render.com/project/prj-d6iorgpdrdic73d6rvv0", // à adapter selon backend
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token")

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

export default api
