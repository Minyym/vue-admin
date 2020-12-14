import request from "@/utils/request";
const API_NAME = "/admin/product/baseTrademark";

export default {
  
  /*
  获取订单分页列表(带搜索)
  */

  getPageList(page, limit) {
    return request({
      url: `${API_NAME}/${page}/${limit}`,
      method: "GET"
    });
  },

  /*
  添加数据
  */
  addTradeMarkList(data) {
    return request({
      url: `${API_NAME}/save`,
      method: "POST",
      data
    });
  },

  /*
  删除数据
  */
  deleteTradeMarkList(id) {
    return request({
      url: `${API_NAME}/remove/${id}`,
      method: "DELETE"
    });
  },
  /*、
  修改数据数据
  */
  updateTradeMarkList(data) {
    return request({
      url: `${API_NAME}/update`,
      method: "PUT",
      data
    });
  }
};
