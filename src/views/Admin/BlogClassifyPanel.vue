<template>
    <div class="comments-manage">
        <AdminHeader :pathList="pathList"></AdminHeader>
        <el-card class="box-card card panel-container" :body-style="{ padding: '0px'}">
            <div class="topbar clearfix" align="left">
                <el-button plain icon="el-icon-edit" size="mini">编辑</el-button>
                <el-button plain icon="el-icon-delete" size="mini">删除</el-button>
                <el-tooltip content="将所选分类下的文章迁移至其他分类" placement="top">
                    <el-button plain size="mini" @click="migrate()">
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
                <el-button
                    type="primary"
                    icon="el-icon-plus"
                    size="mini"
                    class="float-right"
                    @click="addClassify"
                >新增分类</el-button>
            </div>
            <el-table
                :data="classifyData"
                @selection-change="handleSelectionChange"
                size="small"
                style="width: 100%;"
            >
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
        <el-dialog title="迁移至" center :visible.sync="dialogClassifyVisible">
            <ul class="dialog-list">
                <li class="dialog-item" v-for="items in classifyData">
                    <el-radio
                        v-model="classifyRadio"
                        :label="items.cid"
                        :disabled="hasChecked(items.cid) > 0"
                    >{{ items.classifyName }}</el-radio>
                </li>
            </ul>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogClassifyVisible = false">取 消</el-button>
                <el-button type="primary" @click="migrateConfirm()">确 定</el-button>
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
            classifyData: [
                {
                    cid: "1234",
                    classifyName: "JavaScript",
                    articleNum: 12,
                    time: "2019-11-05"
                },
                {
                    cid: "1235",
                    classifyName: "Html",
                    articleNum: 15,
                    time: "2019-11-05"
                }
            ],
            multipleSelection: [],
            classifyRadio: 0,
            dialogClassifyVisible: false //迁移弹窗
        };
    },
    mounted() {},
    methods: {
        handleSelectionChange(val) {
            //勾选时更新选中数据
            this.multipleSelection = val;
        },
        migrate() {
            if (this.multipleSelection.length < 1)
                return this.$message("请勾选分类再进行迁移操作~");
            this.dialogClassifyVisible = true;
        },
        migrateConfirm() {
            this.$notify({
                title: "迁移成功",
                message: `${this.multipleSelection[0].classifyName}的文章已成功迁移`,
                type: "success"
            });
        },
        hasChecked(val) {
            let back = 0;
            for (let el of this.multipleSelection) {
                el.cid == val ? back++ : back;
            }
            return back;
        },
        addClassify() {
            this.$prompt("请输入分类名称", "提示", {
                confirmButtonText: "提交",
                cancelButtonText: "取消",
                inputPattern: /\S/,
                inputErrorMessage: "分类名称不能为空！"
            })
                .then(({ value }) => {
                    this.$message({
                        type: "success",
                        message: "提交成功！"
                    });
                })
                .catch(() => {
                    this.$message({
                        type: "info",
                        message: "已取消操作"
                    });
                });
        }
    }
};
</script>

<style scoped>
.dialog-list {
    margin: 0 20%;
    padding: 10px 20px;
    max-height: 200px;
    border: 1px solid #eee;
    border-radius: 2px;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
}
.dialog-item {
    padding: 5px 0;
}
</style>