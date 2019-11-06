<template>
    <div class="article-manage">
        <AdminHeader></AdminHeader>
        <el-card class="box-card card article-container" :body-style="{ padding: '0px'}">
            <div class="topbar clearfix" align="left">
                <el-button plain icon="el-icon-edit" size="mini">编辑</el-button>
                <el-button plain icon="el-icon-delete" size="mini">删除</el-button>
                <label class="topbar-item">分类：</label>
                <el-select
                    v-model="classifySelect"
                    placeholder="请选择类别"
                    size="mini"
                    class="classify-select"
                >
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    ></el-option>
                </el-select>
                <label class="topbar-item">搜索：</label>
                <el-input
                    placeholder="请输入文章名称"
                    size="mini"
                    v-model="searchText"
                    class="article-search"
                >
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
                <el-button type="primary" icon="el-icon-plus" size="mini" class="float-right">添加文章</el-button>
            </div>
            <el-table :data="tableData" size="small" style="width: 100%;">
                <el-table-column type="selection" align="center" width="30"></el-table-column>
                <el-table-column align="center" prop="imgUrl" width="90">
                    <template slot="header" slot-scope="scope">封面图</template>
                    <template slot-scope="scope">
                        <el-image
                            style="margin-top: 4px;width: 60px; height: 60px"
                            :src="scope.row.imgUrl"
                            fit="cover"
                        ></el-image>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="articleName"
                    :show-overflow-tooltip="true"
                    label="文章名"
                    align="center"
                    sortable
                    width="180"
                ></el-table-column>
                <el-table-column prop="classify" align="center" sortable>
                    <template slot="header" slot-scope="scope">类别</template>
                    <template slot-scope="scope">
                        <el-tag
                            type="info"
                            class="tag-icon"
                            size="mini"
                            v-for="item in scope.row.classify"
                        >{{ item }}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="time" align="center" label="发布时间" sortable></el-table-column>
                <el-table-column prop="author" align="center" label="作者" sortable></el-table-column>
                <el-table-column prop="zan" align="center" label="喜爱" sortable></el-table-column>
                <el-table-column prop="commit" align="center" label="谈论" sortable></el-table-column>
                <el-table-column align="center" width="120px" prop="aid">
                    <template slot="header" slot-scope="scope">操作</template>
                    <template slot-scope="scope">
                        <i
                            class="el-icon-edit icon-btn"
                            @click="handleEdit(scope.$index, scope.row.aid)"
                        ></i>
                        <i class="el-icon-delete icon-btn" @click="handleDelete(scope.row.aid)"></i>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页 -->
            <el-pagination background class="page-wrap" layout="prev, pager, next" :total="1000"></el-pagination>
        </el-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            allChecked: false,
            classifySelect: "全部",
            searchText: "", //搜索内容
            options: [
                {
                    value: "选项1",
                    label: "JavaScript"
                },
                {
                    value: "选项2",
                    label: "前端"
                }
            ],
            tableData: [
                {
                    aid: "1234",
                    imgUrl: "",
                    articleName: "理解JavaScript执行上下文",
                    classify: ["JavaScript", "前端"],
                    time: "2019-11-05",
                    author: "叫我院长",
                    zan: "520",
                    commit: "999"
                }
            ]
        };
    },
    mounted() {},
    methods: {
        handleEdit(index, aid) {
            console.log(`编辑${aid}`);
        },
        //删除文章
        handleDelete(aid) {
            this.$confirm("确认要删除此篇文章吗？", "警告！", {
                distinguishCancelAndClose: true,
                confirmButtonText: "确认删除",
                cancelButtonText: "取消"
            })
                .then(() => {
                    this.$message({
                        type: "info",
                        message: "删除成功！"
                    });
                })
                .catch(action => {
                    this.$message({
                        type: "info",
                        message: "已取消删除操作！"
                    });
                });
        }
    }
};
</script>

<style scoped>
.topbar {
    padding: 12px 0;
    border-bottom: 1px solid #ebeef5;
}
.topbar-item {
    margin-left: 10px;
}
.classify-select {
    width: 110px;
}
.topbar-btn {
    width: auto !important;
    height: 15px;
}
.article-container {
    margin-top: 12px;
    padding: 0 24px;
}
.page-wrap {
    padding: 12px 0;
}
.icon-btn {
    margin: 0 3px;
    padding: 5px;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
}
.icon-btn:hover {
    transform: scale(1.2);
}
.tag-icon {
    margin: 2px;
}
.article-search {
    width: 200px;
}
</style>