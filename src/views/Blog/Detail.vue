<template>
    <div>
        <BlogHeader></BlogHeader>
        <div class="main">
            <el-row :gutter="12" class="mr-0">
                <el-col :xl='18' :lg="18" :md="16" :sm="24">
                    <el-card class="box-card text-left card" :body-style="{ padding: '0px'}">
                        <div class="article-wrap">
                            <h1 class="article-title-text">理解JavaScript执行上下文</h1>   
                            <div class="article-centent" v-html="defaultText"></div>
                            <Editor :catchData="catchData"></Editor>
                            <div class="editor-preview" v-html="content"></div>
                        </div>
                    </el-card>
                </el-col>
                <el-col :xl="6" :lg="6" :md="8" :sm="24">
                    <el-aside width="auto" class="card-list">
                        <el-card class="box-card card" :body-style="{ padding: '0px'}">
                            <div class="card-header clearfix">
                                <el-button type="text" class="article-nav-item float-left">
                                    <i class="el-icon-collection-tag"></i>
                                    <span>分类</span>
                                </el-button>                     
                            </div>
                        </el-card>
                        <el-card class="box-card card" :body-style="{ padding: '0px' }">
                            <div class="card-header clearfix">
                                <el-button type="text" class="article-nav-item float-left">
                                    <i class="el-icon-news"></i>
                                    <span>动态</span>
                                </el-button>                     
                            </div>
                        </el-card>
                        <el-card class="box-card card" :body-style="{ padding: '0px' }">
                            <div class="card-header clearfix">
                                <el-button type="text" class="article-nav-item float-left">
                                    <i class="el-icon-connection"></i>
                                    <span>友情链接</span>
                                </el-button>                     
                            </div>
                        </el-card>
                    </el-aside>
                </el-col>
            </el-row>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import BlogHeader from '@/components/Blog/BlogHeader';
import Editor from '@/components/Editor';
import editorDefault from '@/assets/js/editor/editor_default.js';
export default {
    data (){
        return {
            content: '',
            defaultText: editorDefault
        }
    },
    components: {
        BlogHeader,
        Editor
    },
    methods: {
        catchData(value) {
            console.log(value);
            this.content = value;
        }
    }
}
</script>

<style scope>
    .article-wrap {
        padding: 24px;
    }
    .article-title-text {
        font-size: 38px;
    }
</style>