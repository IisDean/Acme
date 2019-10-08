<template>
    <el-container>
        <el-header class="header-cn box-s">
            <div class="header-wrap clearfix">
                <router-link to="/blog" class="logo-wrap btn-link float-left">
                    <el-image class="logo-icon full-img" :src="urlLogo" fit="contain"></el-image>
                </router-link>
                <el-button type="text" class="blog-nav-item float-left">Article</el-button>
                <div class="search-wrap float-right box-s">
                    <el-input placeholder="请输入内容" v-model="searchText" class="input-with-select">
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </div>
            </div>
        </el-header>
        <el-container class="wrap">
            <el-main class="main">
                <el-card class="box-card card" :body-style="{ padding: '0px'}">
                    <ArticleItem></ArticleItem>
                </el-card>
            </el-main>
            <el-aside width="200px">Aside</el-aside>
        </el-container>
        <el-footer>Footer{{searchText}}</el-footer>
    </el-container>
</template>

<script>
import ArticleItem from "@/components/Blog/ArticleItem.vue";
export default {
    data() { 
        return {
            urlLogo: require('@/assets/img/blog.png'),
            searchText: "" 
        } 
    },
    components: {
        ArticleItem,
    }
}
</script>

<style scoped>
    /* header */
    .wrap {
        margin: 0 auto;
        width: 1200px;
    }
    .header-cn {
        position: relative;
        z-index: 999;
        width: 100%;
        height: 70px;
        border-bottom: 1px solid #f0f0f0;
    }
    .header-wrap {
        margin: 0 auto;
        width: 1200px;
        text-align: left;
    }
    .header-wrap .el-menu-demo {
        border-bottom: 0;
        background-color: transparent;
    }
    .logo-wrap,
    .logo-icon {
        width: auto;
        height: 40px;
    }
    .logo-wrap {
        margin-right: 30px;
        margin-top: 10px;
    }
    .search-wrap {
        margin-left: 20px;
        margin-top: 10px;
        width: 249px;
    }
    .blog-nav-item {
        margin-left: 20px;
        margin-top: 10px;
        font-size: 16px;
        color: #191919;
    }
    
    /* main */
    .main {
        margin: auto -12px;
        padding: 0;
    }

</style>