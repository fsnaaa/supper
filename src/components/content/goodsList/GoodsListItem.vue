<template>
  <div class="goods-list-item">
    <img :src="goodsInfo.show.img" />
    <div class="goods-item-info">
      <p class="item-title">{{ goodsInfo.title }}</p>
      <span class="item-price">￥{{ goodsInfo.price }}</span>
      <span class="item-collect">{{ goodsInfo.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.goods-list-item {
  position: relative;
  padding-bottom: 40px;
  margin-bottom: 15px;
}
.goods-list-item img {
  width: 100%;
  border-radius: 5px;
}
.goods-item-info {
  font-size: 13px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goods-item-info p {
  /* 超过宽度自动裁剪 */
  overflow: hidden;
  /* 多余部分使用省略号 */
  text-overflow: ellipsis;
  /* 文字不换行 */
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-item-info .item-price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods-item-info .item-collect {
  position: relative;
}
/* 票数标签的第一个伪子元素 */
.goods-item-info .item-collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  /* 0 0/14px 表示   background-position/background-size的形式 */
  background: url("~assets/img/common/collect.svg") 0 0/14px;
}
</style>
