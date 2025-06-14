// 手动按需引入，VSCode提示不智能
import { useCookies } from "@vueuse/integrations/useCookies";

const TOKEN_KEY = 'admin-token';
const cookie = useCookies();

// 获取 Token
export function getToken(){
    return cookie.get(TOKEN_KEY);
}

// 设置 Token
export function setToken(token){
    return cookie.set(TOKEN_KEY, token);
}

// 删除 Token
export function removeToken(){
    return cookie.remove(TOKEN_KEY);
}