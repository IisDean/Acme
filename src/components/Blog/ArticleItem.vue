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
                    <h2 class="article-title-text">{{ todo.title }}</h2>
                    <div class="msg-cn" style="text-align: left;">
                        <el-tag type="info">{{ todo.label[0] }}</el-tag>
                        
                    </div>
                </div>    
                <div class="article-cover float-left">
                    <el-image
                    style="width: 70px; height: 70px"
                    :src="todo.imgUrl"
                    fit="cover"></el-image>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            articleList: [
                {
                    title: '你有看见过我的Blog文章的标题名称吗',
                    imgUrl: '',
                    updateTime: '2019-10-08',
                    user: 'IisDean',
                    read: '999',
                    messageNum: '12',
                    label: ['生活']
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
    .article-list {

    }
    .article-item {
        padding: 15px 12px;
        border-top: 1px solid #f4f4f4;
    }
    .article-box {
        width: 900px;
    }
    .article-cover {
        width: 70px;
        height: 70px;
    }
    .article-title-text {
        margin: 0;
        color: #464c5b;
        font-size: 18px;
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>