const express = require("express");
const router = express.Router();
const url = require("url");
const SQLConnect = require("./SQLConnect.js");
const jwt = require("jsonwebtoken");
const jwtSecret = require("./jwtSecret.js"); 
const adminData = require("./data/admin.js");
const vipData = require("./data/vip.js");

// 添加接口
// 登录
router.post("/login", (req, res) =>{
    // 接收客户端的参数：mobile 和 password
    const { mobile, password } = req.body;
    const sql = "select * from user where mobile=? and password=?";
    SQLConnect(sql, [mobile, password], result =>{
        if (result.length > 0) {
            // 生成 token
            // 前后端在登录信息交互的时候，验证信息是否登录成功的一个字段。
            const token = jwt.sign({
                uid: result[0].uid,
                mobile: result[0].mobile,
                valid: result[0].valid
            }, jwtSecret.secret)

            res.send({
                status: 200,
                mobile: result[0].mobile,
                valid: result[0].valid,
                token
            })
        } 
        else {
            res.send({
                status: 500,
                msg: "用户名密码错误" 
            })
        }
    })
})


/**
 *  用户权限管理
 */
router.get("/router", (req, res) =>{
    const user = url.parse(req.url, true).query.user;
    switch(user) { 

        case "admin":
            res.send({
                status: 200,
                menuData: adminData
            })
            break;

        case "vip":
            res.send({
                status: 200,
                menuData: vipData
            })
            break;
        
        default:
            res.send({
                status: 200,
                menuData: vipData
            })
            break;
    }
})



router.get("/list", (req, res)=>{
    res.send({
        status: 200,
        message: "测试服务器"
    })
})

module.exports = router;

