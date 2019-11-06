<template>
    <el-card style="margin-top: 12px;" class="el-card card" :body-style="{ padding: '0px'}">
        <div class="admin-header clearfix">
            <div class="float-left crumbs-wrap">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item :to="{ path: '/admin' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item
                        v-for="item in pathList"
                        :to="{ path: item.path }"
                    >{{ item.name }}</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="float-right" style="margin-right: 10px;">
                <el-input
                    placeholder="请输入内容"
                    size="small"
                    v-model="searchText"
                    class="admin-search"
                >
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </div>
        </div>
    </el-card>
</template>

<script>
export default {
    name: "AdminHeader",
    data() {
        return {
            searchText: ""
        };
    },
    props: ["pathList"]
};
</script>

<style scope>
.admin-header {
    height: 50px;
}
.crumbs-wrap .el-breadcrumb {
    margin-left: 24px;
    line-height: 50px;
}
.admin-search.el-input-group {
    margin-top: 10px;
    box-sizing: border-box;
}
</style>