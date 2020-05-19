<template>
  <div>
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item @click="clickone">首页</a-breadcrumb-item>
      <a-breadcrumb-item>商品</a-breadcrumb-item>
      <a-breadcrumb-item>价格波动</a-breadcrumb-item>
    </a-breadcrumb>
    <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
      Content
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let eid = this.$route.params.eid;
      let goodID = this.$route.params.goodID;
      console.log(eid);
      console.log(goodID);
      axios
        .get("/goods/price_history", {
          params: {
            eid: eid,
            gid: goodID
          }
        })
        .then(res => {
          console.log(res);
        });
    }
  }
};
</script>

<style></style>
