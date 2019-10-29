<template>
    <div>
        <BlogHeader></BlogHeader>
        <div class="main">
            <el-row :gutter="12" class="mr-0">
                <el-col :xl='18' :lg="18" :md="16" :sm="24">
                    <el-card class="box-card text-left card" :body-style="{ padding: '0px'}">
                        <div class="article-wrap">
                            <!-- 文章标题 -->
                            <h1 class="article-title-text">理解JavaScript执行上下文</h1>
                            <ul class="article-msg-wrap clearfix">
                                <li class="float-left article-tag">
                                    <el-tag type="info">JavaScript</el-tag>
                                </li>
                                <li class="msg-label float-left">
                                    <i class="icon el-icon-user"></i>
                                    <span>IisDean</span>
                                </li>
                                <li class="msg-label float-left">
                                    <i class="icon el-icon-view"></i>
                                    <span>12</span>
                                </li>
                                <li class="msg-label float-left">
                                    <i class="el-icon-chat-dot-round"></i>
                                    <span>10</span>
                                </li>
                                <li class="msg-label float-left">
                                    <i class="el-icon-time"></i>
                                    <span>2019-10-29</span>
                                </li>
                            </ul>
                            <!-- 文章内容 -->
                            <div class="article-centent" v-html="defaultText"></div>
                            <!-- 评论列表 -->
                            <h2 class="section-title-text">2条评论</h2>
                            <ul class="comment-list">
                                <li class="comment-item clearfix">
                                    <div class="user-head float-left">
                                        <div></div>
                                    </div>
                                    <div class="comment-con-wrap float-left">
                                        <p class="comment-user-name">菲菲大魔王<span class="comment-time-text">1小时前</span></p>
                                        <p class="comment-time-text"></p>
                                        <div class="comment-content">
                                            <p style="margin-top: 0px; margin-bottom: 16px; color: rgb(36, 41, 46); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; font-size: 16px;">路过。</p>
                                        </div>
                                    </div>
                                </li>
                                <li class="comment-item clearfix">
                                    <div class="user-head float-left">
                                        <div></div>
                                    </div>
                                    <div class="comment-con-wrap float-left">
                                        <p class="comment-user-name">菲菲大魔王<span class="comment-time-text">1小时前</span></p>
                                        <p class="comment-time-text"></p>
                                        <div class="comment-content">
                                            <p style="margin-top: 0px; margin-bottom: 16px; color: rgb(36, 41, 46); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; font-size: 16px;">里面的属性都能被访问了，然后开始进行执行阶段的操作。</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <!-- 评论 -->
                            <h2 class="section-title-text">我也要评论</h2>
                            <Editor :catchData="catchData"></Editor>
                            <div class="comment-wrap">
                                <h4 class="comment-title-text">评论昵称</h4>
                                <el-input v-model="nickName" placeholder="请输入您的昵称"></el-input>
                            </div>
                            <el-button class="comment-btn" type="primary">发布评论</el-button>
                            <div class="editor-preview-wrap trans" v-show="content">
                                <h2 class="section-title-text">评论预览</h2>
                                <div class="editor-preview" v-html="content"></div>
                            </div>
                        </div>
                    </el-card>
                </el-col>
                <el-col :xl="6" :lg="6" :md="8" :sm="24">
                    <!-- 侧边栏 -->
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
            defaultText: editorDefault,
            nickName: ''
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
    .el-tag {
        height: 20px;
        line-height: 20px;
    }
    .article-msg-wrap .article-tag {
        margin-right: 5px;
    }
    .article-msg-wrap .msg-label {
        margin-left: 10px;
        line-height: 20px;
        font-size: 12px;
        color: #909399;
    }
    .article-msg-wrap .msg-label span {
        margin-left: 5px;
    }
    .comment-title-text {
        margin: 15px auto 5px;
        font-size: 14px;
    }
    .comment-btn {
        margin-top: 20px;
    }
    .user-head {
        background-color: #f1f1f1;
    }
    .user-head,
    .user-head div {
        width: 30px;
        height: 30px;
    }
    .user-head div {
        background-size: cover;
    }
    .comment-con-wrap {
        margin-left: 10px;
    }
    .comment-user-name,
    .comment-time-text {
        line-height: 1;
    }
    .comment-user-name {
        font-size: 14px;
        color: #303133;
    }
    .comment-time-text {
        margin-left: 6px;
        font-size: 12px;
        color: #808080;
    }
    .comment-content {
        margin-top: 5px;
    }
</style>