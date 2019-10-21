<template>
    <div>
        <BlogHeader></BlogHeader>
        <div class="main">
            <el-row :gutter="12" class="mr-0">
                <el-col :xl='18' :lg="18" :md="16" :sm="24">
                    <el-card class="box-card card" :body-style="{ padding: '0px'}">
                        <Ditro></Ditro>
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
                            <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
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
                            <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
                        </el-card>
                    </el-aside>
                </el-col>
            </el-row>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import BlogHeader from '@/components/Blog/BlogHeader'
export default {
    data (){
        return {
            msg: ''
        }
    },
    components: {
        BlogHeader
    }
}
</script>

<style>

</style>