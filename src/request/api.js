// 这份文件我要导出每个api的请求
import request from "./request";

// 首页数据请求
export const HomeApi = () => request.get("/index/index");
export const PopupApi = () => request.get("/search/index");
export const SearchHelperApi = (params) => request.get("/search/helper", { params });
export const BrandDetail = (params) => request.get("/brand/detail", { params });
export const ProductsSearchApi = (params) => request.get("/goods/list", { params });
export const ClearHistoryApi = () => request.post("/search/clearhistory");
export const TopicList = (params) => request.get("/topic/list", { params });
export const CatalogIndex = () => request.get("/catalog/index");
export const CatalogCurrent = (params) => request.get("/catalog/current", { params });
export const LoginApi = (params) => request.post("/auth/loginByWeb", params)
export const GoodDetailApi = (params) => request.get("/goods/detail", { params })
export const GoodsRelated = (params) => request.get("/goods/related", { params })
export const GoodsCategory = (params) => request.get("/goods/category", { params })
export const GoodsListApi = (params) => request.get("/goods/list", { params })
export const CartGoodsNumApi = () => request.get("/cart/goodscount");
export const CartAddApi = (params) => request.post("/cart/add", params)
export const CartIndexApi = () => request.get("/cart/index");
export const GoodsSelectApi = (params) => request.post("/cart/checked", params);
export const DeleteGoodsApi = (params) => request.post("/cart/delete", params);