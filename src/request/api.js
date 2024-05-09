// 这份文件我要导出每个api的请求
import request from "./request";

// 首页数据请求
export const HomeApi = () => request.get("/index/index");