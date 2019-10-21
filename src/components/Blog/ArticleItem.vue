<template>
    <div>
        <div class="card-header clearfix">
            <el-button type="text" class="article-nav-item float-left">
                <i class="el-icon-news"></i>
                <span>最新</span>
            </el-button>
            <el-button type="text" class="article-nav-item float-left">
                <i class="el-icon-hot-water"></i>
                <span>最热</span>
            </el-button>                        
        </div>
        <ul class="article-list">
            <li class="article-item clearfix" v-for="todo in articleList">
                <div class="article-box float-left">
                    <router-link :to="'/blogDetail?id='+todo.id" class="article-link">
                        <h2 class="article-title-text">{{ todo.title }}</h2>
                    </router-link>
                    <ul class="msg-cn clearfix">
                        <li class="float-left article-tag" v-for="label in todo.label">
                            <el-tag type="info">{{ label }}</el-tag>
                        </li>
                        <li class="msg-label float-left">
                            <i class="icon icon-dianzan"></i>
                            <span>{{ todo.zan }}</span>
                        </li>
                        <li class="msg-label float-left">
                            <i class="el-icon-chat-dot-round"></i>
                            <span>{{ todo.messageNum }}</span>
                        </li>
                        <li class="msg-label float-left">
                            <i class="el-icon-time"></i>
                            <span>{{ todo.updateTime }}</span>
                        </li>
                    </ul>
                </div>
                <div class="article-cover float-right">
                    <el-image
                    style="width: 70px; height: 70px"
                    :src="todo.imgUrl"
                    fit="cover"></el-image>
                </div>
            </li>
        </ul>
        <el-pagination class="pagination-wrap"
        background
        layout="prev, pager, next"
        :total="100">
        </el-pagination>
    </div>
</template>

<script>
export default {
    data() {
        return {
            scr: '123',
            articleList: [
                {
                    id: 123,
                    title: '你有看见过我的Blog文章的标题吗？',
                    label: ['生活', '技巧'],
                    imgUrl: '',
                    zan: 2,
                    messageNum: '12',
                    updateTime: '1小时前'
                },{
                    id: 123,
                    title: '你有看见过我的Blog文章的标题吗？',
                    label: ['生活', '技巧'],
                    imgUrl: '',
                    zan: 2,
                    messageNum: '12',
                    updateTime: '1小时前'
                },{
                    id: 123,
                    title: '你有看见过我的Blog文章的标题吗？',
                    label: ['生活', '技巧'],
                    imgUrl: '',
                    zan: 2,
                    messageNum: '12',
                    updateTime: '1小时前'
                },{
                    id: 123,
                    title: '你有看见过我的Blog文章的标题吗？',
                    label: ['生活', '技巧'],
                    imgUrl: '',
                    zan: 2,
                    messageNum: '12',
                    updateTime: '1小时前'
                },{
                    id: 123,
                    title: '你有看见过我的Blog文章的标题吗？',
                    label: ['生活', '技巧'],
                    imgUrl: '',
                    zan: 2,
                    messageNum: '12',
                    updateTime: '1小时前'
                },{
                    id: 123,
                    title: '你有看见过我的Blog文章的标题吗？',
                    label: ['生活', '技巧'],
                    imgUrl: '',
                    zan: 2,
                    messageNum: '12',
                    updateTime: '1小时前'
                },{
                    id: 123,
                    title: '你有看见过我的Blog文章的标题吗？',
                    label: ['生活', '技巧'],
                    imgUrl: '',
                    zan: 2,
                    messageNum: '12',
                    updateTime: '1小时前'
                }
            ]
        }
    }
}
</script>

<style scoped>

    .card-header {
        padding: 0 12px;
        box-sizing: border-box;
    }
    .article-nav-item {
        position: relative;
        margin-right: 10px;
        text-align: left;
    }
    .article-nav-item::after {
        display: block;
        content: "";
        position: absolute;
        top: 13px;
        right: -11px;
        width: 1px;
        height: 12px;
        border-right: 1px solid #606266;
    }
    .card-header .article-nav-item:last-child::after {
        opacity: 0;
    }
    .article-item {
        padding: 15px 12px;
        border-bottom: 1px solid #f4f4f4;
    }
    .article-link {
        display: block;
    }
    .article-box {
        margin-top: 5px;
        width: calc(100% - 70px);
    }
    .msg-cn {
        margin-top: 20px;
    }
    .msg-cn .article-tag {
        margin-right: 5px;
    }
    .msg-cn .el-tag {
        height: 20px;
        line-height: 20px;
    }
    .msg-cn .msg-label {
        margin-left: 10px;
        line-height: 20px;
        font-size: 12px;
        color: #909399;
    }
    .msg-cn .msg-label span {
        margin-left: 5px;
    }
    .article-cover {
        width: 70px;
        height: 70px;
    }
    .article-title-text {
        margin: 0;
        color: #464c5b;
        line-height: 20px;
        font-size: 18px;
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .pagination-wrap {
        padding: 15px 0;
    }
    @media screen and (max-width: 374px) {
        .msg-cn .article-tag:nth-of-type(n+2) {
            display: none;
        }
    }
</style>