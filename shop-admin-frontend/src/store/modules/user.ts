import { defineStore } from "pinia";
import { getInfo, logout } from "../../api/manager";
import { removeToken } from "../../utils/auth";
import router,{ asyncRoutes } from "../../router";

const useUserStore = defineStore('user', {
    state: () => ({
        user: {},
        menus: [],
    }),

    actions: {
        getInfo(){
            return new Promise((resolve, reject) => {
                getInfo()
                    .then(res => {
                        this.user = res.data
                        this.menus = res.data.menus
                        resolve(res)
                    })
                    .catch(err => reject(err)) 
            })
        },
        logout(){
            return new Promise((resolve, reject) => {
                logout()
                    .then(res => {
                        // 清理token
                        removeToken()
                        // 清理用户数据
                        this.user = {}
                        resolve(res)
                    })
                    .catch(err => reject(err))
            })
        },
        // addRoutes(){
        //     let hasNewRoutes = false
        //     const addRoutesByMenus = (menus) => {
        //         menus.forEach(item => {
        //             let route = asyncRoutes.find(r => r.path == item.frontpath)
        //             if(route && !router.hasRoute(route.path)){
        //                 router.addRoute('Layout', route)
        //                 hasNewRoutes = true;
                        
        //             }
        //             if(item.child && item.child.length > 0){
        //                 addRoutesByMenus(item.child)
        //             }
        //         });
        //     }
        //     addRoutesByMenus(this.menus)
        //     return hasNewRoutes
        // }
    }

})

export default useUserStore;