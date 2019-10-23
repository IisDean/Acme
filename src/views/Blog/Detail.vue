<template>
    <div>
        <BlogHeader></BlogHeader>
        <div class="main">
            <el-row :gutter="12" class="mr-0">
                <el-col :xl='18' :lg="18" :md="16" :sm="24">
                    <el-card class="box-card card" :body-style="{ padding: '0px'}">
                        <!-- <Simditor :id="123"></Simditor> -->
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
// import Simditor from '@/components/Simditor';
export default {
    data (){
        return {
            msg: '',
            data: '',
            content:'',
            options: {
                placeHolder: 'this is placeHolder',
                toolbarFloat: false,
                toolbar: ['title', 'bold', 'italic', 'underline', 'strikethrough', 'fontScale', 'color', '|', 'ol', 'ul', 'blockquote', 'code', 'table', '|', 'link', 'image', 'hr', '|', 'indent', 'outdent', 'alignment',],
                pasteImage:true,
                upload:{
                    url : `http://`, //文件上传的接口地址
                    params: null, //键值对,指定文件上传接口的额外参数,上传的时候随文件一起提交
                    fileKey: 'file', //服务器端获取文件数据的参数名
                    connectionCount: 3,
                    leaveConfirm: '正在上传文件'
                }
            }
        }
    },
    components: {
        BlogHeader,
        // Simditor
    },
    methods: {
        change(val){
            console.log(val)  //以html格式获取simditor的正文内容
        }
    }
}
</script>

<style>

</style>