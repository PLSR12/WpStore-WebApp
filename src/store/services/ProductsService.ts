import { HttpService } from "./httpService"

const basePath = "/Products"

export const ProductsService = {
  getAll,
  getById,
}

async function getAll() {
  return HttpService.get(`${basePath}`)
}

async function getById(id?: string) {
  return HttpService.get(`${basePath}/${id}`)
}
