<template>
  <div>
    <a-breadcrumb :style="{ margin: '16px 0' }">
      <a-breadcrumb-item>首页</a-breadcrumb-item>
      <a-breadcrumb-item>今日热门</a-breadcrumb-item>
      <a-breadcrumb-item>{{ goods }}</a-breadcrumb-item>
    </a-breadcrumb>
    <div :style="{ background: '#fff', padding: '24px', minHeight: '380px' }">
      <a-list
        item-layout="vertical"
        size="large"
        :pagination="pagination"
        :data-source="listData"
      >
        <div slot="footer"><b>ant design vue</b> footer part</div>
        <a-list-item slot="renderItem" key="item.title" slot-scope="item">
          <template v-for="{ type, text } in actions" slot="actions">
            <span :key="type">
              <a-icon :type="type" style="margin-right: 8px" />
              {{ text }}
            </span>
          </template>
          <img
            slot="extra"
            width="272"
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          />
          <a-list-item-meta :description="item.description">
            <a slot="title" :href="item.href">{{ item.title }}</a>
            <a-avatar slot="avatar" :src="item.avatar" />
          </a-list-item-meta>
          {{ item.content }}
        </a-list-item>
      </a-list>
    </div>
  </div>
</template>
<script>
import axios from "axios";
let listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: "https://www.antdv.com/",
    title: `ant design vue part ${i}`,
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team.",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
  });
}

export default {
  data() {
    return {
      listData,
      pagination: {
        onChange: page => {
          console.log(page);
        },
        pageSize: 10
      },
      actions: [
        { type: "star-o", text: "156" },
        { type: "like-o", text: "156" },
        { type: "message", text: "2" }
      ],
      goods: this.$route.params.goods
    };
  },
  mounted() {
    this.init();
  },
  watch: {
    $route(to, from) {
      console.log(to);
      console.log(from);
      this.init();
    }
  },
  methods: {
    init() {
      axios
        .get("/bijia/search", {
          params: {
            name: this.$route.params.goods
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
