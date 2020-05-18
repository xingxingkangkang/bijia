<template>
  <div>
    <a-menu
      theme="dark"
      mode="horizontal"
      @select="onSelect"
      :default-selected-keys="['2']"
      :style="{ lineHeight: '64px' }"
    >
      <a-menu-item key="search">
        搜索比价
      </a-menu-item>
      <a-menu-item key="hot">
        热门商品
      </a-menu-item>
      <a-menu-item key="user">
        个人信息
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
export default {
  methods: {
    onSelect(key) {
      console.log("select");
      console.log(key);
      this.$router.push("/bijia/" + key.key);
      // if (key.key == 'like' || key.key == 'history' || key.key == 'tags')
      //   this.$router.push('/books/' + key.key);
      // else {
      //   console.log('change');
      //   this.$router.push('/books/tag/' + key.key);
      //   // this.$router.go(0);
      // }
    }
  }
};
</script>

<style></style>
