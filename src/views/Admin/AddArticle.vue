<template>
    <div class="text-left addarticle-con">
        <AdminHeader :pathList="pathList"></AdminHeader>
        <el-card class="box-card card panel-container" :body-style="{ padding: '0px'}">
            <div class="input-title">
                <el-input v-model="title" size="medium" placeholder="请输入文章标题"></el-input>
            </div>
            <Editor :catchData="catchData"></Editor>
            <div class="classify-select">
                <el-select v-model="classify" placeholder="请选择">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    ></el-option>
                </el-select>
            </div>
            <el-button type="primary" icon="el-icon-plus" class="release-btn" @click="release">发布</el-button>
        </el-card>
    </div>
</template>

<script>
import editorDefault from "@/assets/js/editor/editor_default.js";
export default {
    data() {
        return {
            //面包屑路径
            pathList: [
                {
                    path: "/blogListPanel",
                    name: "文章列表"
                },
                {
                    path: "/addArticle",
                    name: "文章发布"
                }
            ],
            options: [
                {
                    value: "1",
                    label: "JavaScript"
                },
                {
                    value: "2",
                    label: "前端"
                },
                {
                    value: "3",
                    label: "生活"
                }
            ],
            title: "",
            content: editorDefault,
            classify: "请选择文章分类..."
        };
    },
    mounted() {
        console.log(this.$route.params);
    },
    methods: {
        catchData(value) {
            console.log(value);
            this.content = value;
        },
        release() {
            this.$confirm("确认要发布此篇文章吗？", "提示！", {
                distinguishCancelAndClose: true,
                confirmButtonText: "确认发布",
                cancelButtonText: "继续编辑"
            }).then(() => {
                this.$message({
                    type: "success",
                    message: "发布成功！"
                });
            });
        }
    }
};
</script>

<style scoped>
.input-title {
    margin: 24px 0 12px;
}
.classify-select,
.release-btn {
    margin-top: 12px;
}
.release-btn {
    margin-bottom: 24px;
}
.wangeditor {
    height: 640px;
}
</style>