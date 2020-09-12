import request from "@/utils/request";
import { delay } from "dva/saga";

/**
 * 登录
 * @param {string} username 账号（必传）
 * @param {string} password 密码（必传）
 */
// export const login = (username, password) =>
//   request({
//     url: "/userManage/login",
//     method: "post",
//     data: { userName: username, password },
//   });

export const login = async () => {
  await delay(500);
  return {
    errorCode: 200,
    data: { id: 1, name: "andefine" },
    message: "success",
  };
};

/**
 * 查询用户的登录状态
 */
export const checkLoginStatus = () =>
  request({
    url: "/userManage/getManage",
  });
