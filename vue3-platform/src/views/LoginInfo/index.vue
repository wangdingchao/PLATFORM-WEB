<template>
  <div class = "login-container"> 
    <el-form class = "user" size = "large" :model="user"> 
      <div class = "title-container">
        <h3 class = "title">体育赛事管理系统</h3>
      </div>
      <!-- 用户名 -->
      <el-form-item prop="mobile">
        <el-input :prefix-icon="User" v-model="user.mobile" type="text" placeholder="请输入用户名" name="mobile"></el-input>
      </el-form-item>
      <!-- 密码 -->
      <el-form-item prop="password">
         <el-input :prefix-icon="Lock" v-model="user.password" type="password" placeholder="请输入密码" name="password"></el-input>
      </el-form-item>
      <!-- 登录按钮 -->
      <el-button style="width: 100%;  margin-bottom:30px;" type="primary" @click.native.prevent="handleLogin">登录</el-button>
    </el-form>
  </div>
  
</template>

<script setup>

import { reactive } from 'vue';
import { User, Lock} from "@element-plus/icons-vue"
import api from "@/api/index.js";
import { useLoginStore } from "@/stores/loginStore.js";
// 通过路由进行页面跳转
import { useRouter  } from "vue-router";

// 登录仓库对象
const loginStore = useLoginStore()

// 获取路由对象
const router = useRouter()

// 声明用户信息
const user = reactive({
  mobile: "",
  password: ""
})

// 登录事件
const handleLogin = () =>{
    api.getLogin({
      mobile: user.mobile,
      password: user.password
    }).then(res =>{
        //console.log(res);
        console.log(res.data);
        // 如果登录成功，用 loginStore 存储信息
        if (res.data.status === 200) {
          loginStore.token = res.data.token;
          loginStore.valid = res.data.valid;
          loginStore.mobile = res.data.mobile;
          // 登录成功后跳转页面
          router.push("/");
        }
        else {
          // 失败给出用户提示
          ElMessage.error(res.data.msg);
        }
    })
}

</script>


<style scoped>

.login-container {
  width: 100%;
  height: 100%;
  background-color: #2d3a4b;
}

.user {
  position: relative;
  width: 400px;
  padding: 160px 35px 0 ;
  margin: 0 auto;
}

.title-container .title {
  font-size: 30px;
  color: #fff;
  text-align: center;
  margin: 20;
}
 
</style>