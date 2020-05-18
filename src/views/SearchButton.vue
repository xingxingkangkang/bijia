<template>
  <div>
    <a-breadcrumb :style="{ margin: '16px 0' }">
      <a-breadcrumb-item>首页</a-breadcrumb-item>
      <a-breadcrumb-item>搜索</a-breadcrumb-item>
    </a-breadcrumb>
    <div :style="{ background: '#fff', padding: '24px', minHeight: '380px' }">
      <a-input-search
        placeholder="请输入要进行比价的商品"
        enter-button="Search"
        size="large"
        @search="onSearch"
      />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onSearch(value) {
      console.log(value);
      this.$router.push("/bijia/search/" + value);
    }
  }
};
</script>

<style></style>
