import { request } from "@/utils/service"
import type * as allpoint from "./types/all-query"
export function AllPoints() {
  return request({
    url: "show_all_locationss",
    method: "post"
  })
}
export function Data_query(data: allpoint.IAllQueryRequestData) {
  return request({
    url: "init_chart_data",
    method: "post",
    data
  })
}
