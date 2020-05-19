<template>
  <div>
    <a-breadcrumb :style="{ margin: '16px 0' }">
      <a-breadcrumb-item>首页</a-breadcrumb-item>
      <a-breadcrumb-item>搜索比价商品</a-breadcrumb-item>
      <a-breadcrumb-item>{{ goods }}</a-breadcrumb-item>
    </a-breadcrumb>
    <div :style="{ background: '#fff', padding: '24px', minHeight: '380px' }">
      <a-list
        item-layout="vertical"
        size="large"
        :pagination="pagination"
        :data-source="listData"
      >
        <a-list-item slot="renderItem" key="item.title" slot-scope="item">
          <template v-for="{ type, text } in actions" slot="actions">
            <span :key="type">
              <a-icon :type="type" style="margin-right: 8px" />
              {{ text }}
            </span>
          </template>
          <img slot="extra" width="88" alt="logo" :src="item.PhotoUrl" />
          <a-list-item-meta :description="item.description">
            <a
              @click="like(item.Eid, item.GoodID)"
              slot="title"
              :href="item.href"
              >{{ item.title }}</a
            >
            <a-avatar slot="avatar" :src="item.avatar" />
          </a-list-item-meta>
          <a-button
            icon="search"
            type="primary"
            @click="onClick(item.Eid, item.GoodID)"
          >
            点击查看价格波动图
          </a-button>
          <a-button type="primary" icon="search">
            Search
          </a-button>
        </a-list-item>
      </a-list>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Jd from "../assets/Jd.png";
import Taobao from "../assets/Taobao.png";
let listData = [];

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
        { type: "rocket", text: "2" }
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
    like: function(Eid, GoodID) {
      axios
        .get("/goods/like", {
          params: {
            eid: Eid,
            gid: GoodID
          }
        })
        .then(() => {
          console.log("OK");
        });
    },
    onClick: function(Eid, GoodID) {
      this.$router.push("/bijia/detail/" + GoodID + "/" + Eid);
    },
    init() {
      axios
        .get("/goods/search", {
          params: {
            search: this.$route.params.goods
          }
        })
        .then(res => {
          let len = listData.length;
          for (let i = 0; i < len; i++) {
            listData.pop();
          }
          console.log(res);
          let goods = res.data.result;
          let size = res.data.result.length;
          for (let i = 0; i < size; i++) {
            let Icon = Jd;
            if (goods[i].Eid == 1) {
              Icon = Taobao;
            }
            listData.push({
              href: goods[i].Url,
              title: goods[i].Title,
              PhotoUrl: goods[i].PhotoUrl,
              avatar: Icon,
              Eid: goods[i].Eid,
              GoodID: goods[i].GoodID,
              description:
                "订单数：" +
                goods[i].OrderCount +
                ";    价格：" +
                goods[i].Price +
                "元;",
              content: "empty"
            });
          }
        });
    }
  }
};
</script>
<style></style>
