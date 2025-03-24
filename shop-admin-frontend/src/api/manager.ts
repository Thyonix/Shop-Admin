import instance from "../utils/request";

// 登录
export function login(username: string,password: string) {
    return instance.post('/admin/login', {
        username,
        password
    })
}

// 获取用户信息
export function getInfo(){
    return instance.post('/admin/getinfo')
}

// 退出登录
export function logout(){
    return instance.post('/admin/logout')
}

// 修改密码
export function changePassword(data: Object){
    return instance.post('/admin/updatepassword', data)
}