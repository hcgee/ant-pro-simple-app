import CryptoJS from 'crypto-js'
let AuthTokenKey = CryptoJS.enc.Latin1.parse('12345645678iaweb'); //AES密钥
let AuthTokenIv = CryptoJS.enc.Latin1.parse('1234567812345678'); //AES向量
/*设置cookie*/
function setCookie(name, value, iDay) {
  var oDate = new Date();
  oDate.setDate(oDate.getDate() + iDay);
  document.cookie = name + '=' + value + ';expires=' + oDate;
};
/*使用方法：setCookie('user', 'simon', 11);*/
/*获取cookie*/
function getCookie(name) {
  var arr = document.cookie.split('; ');//多个cookie值是以; 分隔的，用split把cookie分割开并赋值给数组
  for (var i = 0; i < arr.length; i++) {//历遍数组
    var ars = arr[i].split('=');//原来割好的数组是：user=simon，再用split('=')分割成：user simon 这样可以通过arr2[0] arr2[1]来分别获取user和simon
    if (ars[0] == name) {//如果数组的属性名等于传进来的name
      return ars[1];//就返回属性名对应的值
    }
  }
  return ''; //没找到就返回空
}
/*使用方法：getCookie('user')*/
/*删除cookie*/
function removeCookie(name) {
  setCookie(name, 1, -1); //-1就是告诉系统已经过期，系统就会立刻去删除cookie
};
/*使用方法：removeCookie('user')*/
/*AES加密*/
const encrypt = (data) => {
  let dataStr = JSON.stringify(data);
  let encrypted = CryptoJS.AES.encrypt(dataStr, AuthTokenKey, {
    iv: AuthTokenIv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.ZeroPadding
  });
  return encrypted.toString();
}
/*AES解密*/
const decrypt = (data) => {
  try {
    let decrypted = CryptoJS.AES.decrypt(data, AuthTokenKey, {
      iv: AuthTokenIv,
      padding: CryptoJS.pad.ZeroPadding
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
  } catch (e) {
    return data;
  }

}

/**
 * 多维数组转化为一维数组
 * @param arr 菜单数组
 * @param childrenKey 子菜单的key
 * @returns 一维数组
 */
const menuFlat = (data, childrenKey) => {
  return [].concat(
    ...data.map((item) =>
      item[childrenKey]
        ? [].concat(item, ...menuFlat(item[childrenKey]))
        : [].concat(item),
    ),
  );
}

const filterMenu = (data) => {
  let menuFlatArr = menuFlat(data, 'children')
  let hasRoutes = []
  menuFlatArr.map((item) => {
    if (item.authorized) {
      hasRoutes.push(item.router);
    }
  });

  return hasRoutes
}

export {
  setCookie,
  getCookie,
  removeCookie,
  encrypt,
  decrypt,
  filterMenu
}