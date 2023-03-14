import axios from "axios"

const HttpService = axios.create({
  baseURL: "https://fakestoreapi.com",
})

HttpService.interceptors.request.use((config: any) => {
  return config
})

HttpService.interceptors.response.use(function (response: any) {
  switch (response.status) {
    case 201:
    case "SUCCESS":
      break
    case 204:
    case "SUCCESS":
      break
    default:
      break
  }
  return response.data
})

export { HttpService }
