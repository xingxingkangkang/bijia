<template>
  <div>
    <a-breadcrumb :style="{ margin: '16px 0' }">
      <a-breadcrumb-item>首页</a-breadcrumb-item>
      <a-breadcrumb-item>个人信息</a-breadcrumb-item>
    </a-breadcrumb>
    <a-button @click="onClick">点我</a-button>
    <div :style="{ background: '#fff', padding: '24px', minHeight: '380px' }">
      <a-descriptions title="User Info" layout="vertical">
        <a-descriptions-item label="用户名">
          {{ this.$store.state.userName }}
        </a-descriptions-item>
        <a-descriptions-item label="联系电话">
          {{ this.$store.state.phone }}
        </a-descriptions-item>
        <a-descriptions-item label="居住地">
          Hangzhou, Zhejiang
        </a-descriptions-item>
        <a-descriptions-item label="地址" span="2">
          No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
        </a-descriptions-item>
        <a-descriptions-item label="Remark">
          empty
        </a-descriptions-item>
      </a-descriptions>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  mounted() {
    let isLogin = this.$store.state.isLogin;
    if (isLogin == false) {
      // this.$router.push("/user");
    }
  },
  methods: {
    onClick() {
      this.$store.commit("changeIslogin");
    }
  }
};
</script>
