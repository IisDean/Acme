<template>
    <div class="comments-manage">
        <AdminHeader :pathList="pathList"></AdminHeader>
        <el-card class="box-card card panel-container" :body-style="{ padding: '0px'}">
            <div class="topbar clearfix" align="left">
                <el-button plain icon="el-icon-edit" size="mini">编辑</el-button>
                <el-button plain icon="el-icon-delete" size="mini">删除</el-button>
                <el-tooltip content="将所选分类下的文章迁移至其他分类" placement="top">
                    <el-button plain size="mini" @click="dialogClassifyVisible = true">
                        <i class="icon icon-migration"></i>
                        <span>文章迁移</span>
                    </el-button>
                </el-tooltip>
                <label class="topbar-item">搜索：</label>
                <el-input
                    placeholder="请输入关键字"
                    size="mini"
                    v-model="searchText"
                    class="topbar-search"
                >
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
                <el-button type="primary" icon="el-icon-plus" size="mini" class="float-right">新增分类</el-button>
            </div>
            <el-table :data="tableData" size="small" style="width: 100%;">
                <el-table-column type="selection" align="center" width="42"></el-table-column>
                <el-table-column
                    prop="classifyName"
                    :show-overflow-tooltip="true"
                    label="分类名称"
                    align="center"
                    width="180"
                ></el-table-column>
                <el-table-column prop="articleNum" align="center" label="文章数量"></el-table-column>
                <el-table-column prop="time" align="center" label="创建时间"></el-table-column>
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
            <el-pagination background class="page-wrap" layout="prev, pager, next" :total="10"></el-pagination>
        </el-card>
        <el-dialog title="文章迁移" center :visible.sync="dialogClassifyVisible">
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogClassifyVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogClassifyVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pathList: [
                {
                    path: "/blogClassifyPanel",
                    name: "分类管理"
                }
            ],
            searchText: "", //搜索内容
            tableData: [
                {
                    cid: "1234",
                    classifyName: "JavaScript",
                    articleNum: 12,
                    time: "2019-11-05"
                }
            ],
            dialogClassifyVisible: false //迁移弹窗
        };
    }
};
</script>

<style scoped>
</style>