import { HttpService } from "./httpService"

const basePath = "/Products"

export const ProductsService = {
  getAll,
  getById,
}

async function getAll() {
  return HttpService.get(`${basePath}`)
}

async function getById(id?: number) {
  return HttpService.get(`${basePath}/${id}`)
}
