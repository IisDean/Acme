<template>
    <el-header class="header-cn box-s">
        <div class="header-wrap clearfix">
            <router-link to="/blog" class="logo-wrap btn-link float-left">
                <el-image class="logo-icon full-img" :src="urlLogo" fit="contain"></el-image>
            </router-link>
            <nav class="float-left">
                <ul class="clearfix">
                    <li class="blog-nav-item float-left">
                        <router-link to="/Article" class="blog-nav-btn">Article</router-link>
                    </li>
                </ul>
            </nav>
            <div class="search-wrap float-right box-s">
                <el-input placeholder="请输入内容" v-model="searchText" class="input-with-select">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </div>
        </div>
    </el-header>
</template>

<script>
export default {
    name: 'BlogHeader',
    data() {
        return {
            urlLogo: require('@/assets/img/blog.png'),
            searchText: "" 
        }
    }
}
</script>

<style scoped>

    .header-cn {
        position: relative;
        z-index: 999;
        width: 100%;
        height: 60px;
        border-bottom: 1px solid #f0f0f0;
    }
    .header-wrap {
        margin: 0 auto;
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
        line-height: 60px;
    }
    .blog-nav-btn {
        display: block;
        padding: 0 15px;
        font-size: 16px;
        color: #191919;
    }

    @media screen and (min-width: 1200px) {
        .wrap {
            min-width: 1200px;
        }
        .header-wrap {
            width: 1200px;
        }
    }
    @media screen and (max-width: 767px) {
        .search-wrap {
            display: none;
        }
    }
</style>