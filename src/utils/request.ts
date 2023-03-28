import { request } from "umi";
import { getCookie } from "./utils";

const commonReq = (url: string, params: any) => {
  const paramsData = { ...params, 'token': getCookie('token') };
  const data = {
    'clientstr': JSON.stringify(paramsData),
    'oldUrlFix': url,
    'enabled': 0
  }
  // const data = {
  //   'clientstr': baseHeader.enabled != 1 ? JSON.stringify(paramsData) : encrypt(paramsData),
  //   'oldUrlFix': baseHeader.enabled != 1 ? url : encrypt(url),
  //   'enabled': baseHeader.enabled
  // }

  return request("/iaweb/forword/all", {
    method: 'POST',
    requestType: 'form',
    data
  });
}

export {
  commonReq
}