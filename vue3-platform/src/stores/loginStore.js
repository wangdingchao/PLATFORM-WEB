import { defineStore } from "pinia"

export const useLoginStore = defineStore("login", {
    state: () =>{
        return {
            token: "",
            mobile: "",
            vaild: ""
        } 
    },
    // 本地持久化存储
    persist: {
        enabled: true,
        strategies: [
            {
                key: "login", // 自定义的 key
                storage: localStorage, // 选择存储方式
            }
        ]
    }
})