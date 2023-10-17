<template>
    <div class="slider-navs" :style="{ width: menuStore.isCollapse ? '64px' : '210px'}">
        <div class="logo">{{ menuStore.isCollapse ? '赛事' : '赛事项目平台管理' }}</div>
        <el-menu
            background-color="#304156"
            text-color="#fff"
            active-text-color="#ffd04b"
            :default-active="active" 
            router
            :collapse="menuStore.isCollapse"
            class="el-menu-vertical-demo"
        >
            <el-menu-item index="/">
                <el-icon><HomeFilled /></el-icon>
                <span>首页</span>
            </el-menu-item>
            <el-menu-item index="/miniManage">
                <el-icon><ChatSquare /></el-icon>
                <span>小程序管理</span>
            </el-menu-item>
            <el-menu-item index="/bigScrManage">
                <el-icon><Monitor /></el-icon>
                <span>大屏管理</span>
            </el-menu-item>
            <el-menu-item index="/infoManage">
                <el-icon><Reading /></el-icon>
                <span>资讯管理</span>
            </el-menu-item>
            <el-menu-item index="/gameManage">
                <el-icon><Football /></el-icon>
                <span>赛事管理</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script setup>
import {ref} from "vue"
import { useMenuStore } from "@/stores/menuStore.js"


const active = ref("/")
const menuStore = useMenuStore()

// 将仓库拿到的路径给到 active，这样刷新就不会跳到默认首页了，高亮还在当前页面
if (localStorage.getItem("active")) {
    active.value = localStorage.getItem("active");
}

</script>

<style scoped>

.slider-navs{
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 210px;
    background-color: #304156;
    transition: 0.3s ease-in;
}

.logo{
    width: 100%;
    height: 60px;
    background-color: #364e6d;
    text-align: center;
    font-size: 25px;
    color: #fff;
    line-height: 60px;
}

</style>