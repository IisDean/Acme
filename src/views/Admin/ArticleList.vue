<template>
    <div class="article-manage">
        <AdminHeader></AdminHeader>
        <el-card class="box-card card article-container" :body-style="{ padding: '0px'}">
            <div class="topbar clearfix" align="left">
                <el-checkbox v-model="allChecked" class="topbar-item">全选</el-checkbox>
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
                <el-button type="primary" icon="el-icon-plus" size="mini" class="float-right">添加文章</el-button>
            </div>
            <el-table :data="tableData" style="width: 100%;">
                <el-table-column prop="aid" align="center" width="30">
                    <template slot="header" slot-scope="scope"></template>
                    <template slot-scope="scope">
                        <el-checkbox></el-checkbox>
                    </template>
                </el-table-column>
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
                    width="180"
                ></el-table-column>
                <el-table-column prop="classify" align="center" label="类别"></el-table-column>
                <el-table-column prop="time" align="center" label="发布时间"></el-table-column>
                <el-table-column prop="author" align="center" label="作者"></el-table-column>
                <el-table-column prop="zan" align="center" label="喜爱"></el-table-column>
                <el-table-column prop="commit" align="center" label="谈论"></el-table-column>
                <el-table-column align="center" width="120px" prop="aid">
                    <template slot="header" slot-scope="scope">操作</template>
                    <template slot-scope="scope">
                        <i
                            class="el-icon-edit icon-btn"
                            @click="handleEdit(scope.$index, scope.row.aid)"
                        ></i>
                        <i
                            class="el-icon-delete icon-btn"
                            @click="handleDelete(scope.$index, scope.row)"
                        ></i>
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
            classifySelect: " ",
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
                    classify: ["JavaScript", "前端"].join("，"),
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
            console.log("编辑" + aid);
        },
        handleDelete(index, row) {
            console.log("删除${index}");
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
</style>