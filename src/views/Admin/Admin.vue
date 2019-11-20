<template>
    <el-container class="pa admin-container">
        <el-aside class="aside-container" style="width: 200px;">
            <el-card class="box-card card" :body-style="{ padding: '0px'}">
                <el-menu class="text-left aside-menu">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="icon icon-boke"></i>博客管理
                        </template>
                        <el-menu-item index="1-1" @click="toPage('/blogListPanel')">
                            <i class="icon icon-article"></i>文章列表
                        </el-menu-item>
                        <el-menu-item index="1-2" @click="toPage('/blogClassifyPanel')">
                            <i class="icon icon-fenlei"></i>分类管理
                        </el-menu-item>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="icon icon-commit"></i>评论管理
                        </template>
                        <el-menu-item index="2-1">
                            <i class="icon icon-article"></i>评论列表
                        </el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="icon icon-set"></i>面板设置
                        </template>
                        <el-menu-item index="3-1" @click="toPage('/admin')">
                            <i class="icon icon-user"></i>用户管理
                        </el-menu-item>
                        <el-menu-item index="3-2">
                            <i class="icon icon-quanx"></i>权限管理
                        </el-menu-item>
                    </el-submenu>
                    <el-menu-item index="4">
                        <i class="icon icon-logout"></i>退出登录
                    </el-menu-item>
                </el-menu>
            </el-card>
        </el-aside>
        <el-container>
            <el-main>
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import "@/assets/css/admin_common.css";
export default {
    name: "admin",
    data() {
        return {};
    },
    methods: {
        toPage(path) {
            this.$router.push(path);
        }
    }
};
</script>

<style scoped>
.admin-container {
    width: 100%;
    height: 100%;
}
.aside-menu {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background-color: transparent;
}
.aside-menu .icon {
    margin-right: 5px;
    vertical-align: top;
    font-size: 18px;
}
.el-header {
    background-color: #b3c0d1;
    color: #333;
    line-height: 60px;
}
.el-aside {
    color: #333;
}
.el-aside .el-card {
    margin: 12px;
}
.el-submenu .el-menu-item {
    min-width: auto;
}
.el-main {
    margin-right: 12px;
    padding: 0;
}
.el-main .el-card {
    margin: 12px 12px 0 0;
}
</style>