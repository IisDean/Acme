<template>
    <el-card
        class="box-card card pa-center login"
        v-loading="loading"
        :body-style="{ padding: '0px'}"
    >
        <h1 class="title-text">acme管理</h1>
        <el-input placeholder="请输入内容" class="account-wrap" v-model="account" clearable></el-input>
        <el-input placeholder="请输入密码" class="pass-wrap" v-model="password" show-password></el-input>
        <el-button type="primary" class="login-btn" @click="login()">登录</el-button>
        <div class="text-right">
            <el-button type="text" class="resetpw-text" @click="resetPw()">忘记密码>></el-button>
        </div>
    </el-card>
</template>

<script>
export default {
    name: "login",
    data() {
        return {
            account: "",
            password: "",
            loading: false
        };
    },
    mounted() {},
    methods: {
        login() {
            this.loading = true;
            setTimeout(() => {
                this.loading = false;
            }, 1500);
        },
        resetPw() {
            this.$message("敬请期待！");
        }
    }
};
</script>

<style scoped>
.login {
    left: 0;
    right: 0;
    margin: 0 auto;
    padding: 50px 40px;
    box-sizing: border-box;
    width: 440px;
    height: 375px;
}
.account-wrap {
    margin-top: 25px;
}
.pass-wrap,
.login-btn {
    margin-top: 20px;
}
input:focus {
    border-color: #dcdfe6 !important;
}
.login-btn {
    width: 100%;
}
.resetpw-text {
    margin-top: 25px;
}
</style>