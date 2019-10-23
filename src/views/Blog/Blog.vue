<template>
    <div>
        <BlogHeader></BlogHeader>
        <div class="main">
            <el-row :gutter="12" class="mr-0">
                <el-col :xl='18' :lg="18" :md="16" :sm="24">
                    <el-card class="box-card card" :body-style="{ padding: '0px'}">
                        <ArticleItem></ArticleItem>
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
import ArticleItem from "@/components/Blog/ArticleItem.vue";
import BlogHeader from "@/components/Blog/BlogHeader.vue";
export default {
    data() { 
        return {
            data: [
                {
                    id: 1,
                    label: '生活'
                },{
                    id: 2,
                    label: '技巧'
                },{
                    id: 3,
                    label: '前端'
                },{
                    id: 4,
                    label: '后端'
                },{
                    id: 5,
                    label: 'JavaScript'
                },{
                    id: 6,
                    label: 'Vue'
                },{
                    id: 7,
                    label: 'Node.Js'
                }
            ],
            defaultProps: {
                children: 'children',
                label: 'label'
            }
        } 
    },
    methods: {
      handleNodeClick(data) {
        console.log(data.id);
      }
    },
    components: {
        ArticleItem,
        BlogHeader
    }
}
</script>

<style scoped>

</style>