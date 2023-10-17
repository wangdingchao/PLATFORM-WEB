module.exports = {
    menus: [
        {
            path: "/",
            name: "首页",
            icon: "Document"
        },
        {
            path: "/miniManage",
            name: "小程序管理",
            icon: "Discount",
            children: [
                {
                    path: "/miniUpload",
                    name: "小程序发布"
                },
                {
                    path: "/miniList",
                    name: "小程序列表"
                }
            ]
        },
        {
            path: "/infoManage",
            name: "资讯管理",
            icon: "Picture",
            children: [
                {
                    path: "/newTitle",  
                    name: "新闻标题" 
                },
                {
                    path: "/newContenet",
                    name: "新闻内容"
                }
            ]

        },
        {
            path: "/bigScrManage",
            name: "大屏管理",
            icon: "IceCreamRound"
        },
        {
            path: "/gameManage",
            name: "赛事管理",
            icon: "Filter",
            children:[
                {
                    path: "/gameBasicInfo",
                    name: "赛事基本信息"
                },
                {
                    path: "/athleteManage",
                    name: "运动员管理"
                },
                {
                    path: "/volunteerManage",
                    name: "志愿者管理"
                }
            ]
        }
    ]
}