<template>
  <a-layout id="components-layout-demo-fixed">
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <div class="logo">
        <MenuIcon type="icon-yunliankeji-" style="font-size: 40px"></MenuIcon>
      </div>
      <Menu></Menu>
    </a-layout-header>
    <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
      <!-- <a-breadcrumb :style="{ margin: '16px 0' }">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>
      <div :style="{ background: '#fff', padding: '24px', minHeight: '380px' }">
        Content
      </div> -->
      <router-view></router-view>
    </a-layout-content>
    <a-layout-footer :style="{ textAlign: 'center' }">
      <Footer></Footer>
    </a-layout-footer>
  </a-layout>
</template>
<script>
import Menu from "./Menu";
import Footer from "./Footer";
export default {
  components: {
    Menu,
    Footer
  }
};
</script>
<style>
#components-layout-demo-fixed .logo {
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  float: right;
}
</style>
