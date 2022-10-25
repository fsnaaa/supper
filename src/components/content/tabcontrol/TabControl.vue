<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      @click="activeClick(index)"
      :class="{ activeStyle: currentIndex == index }"
      v-for="(item, index) in titles"
      :key="index"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    activeClick(index) {
      this.currentIndex = index;
      this.$emit("tabItemIndex",index);
    },
  },
};
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  background-color: white;
}
.activeStyle {
  color: var(--color-tint);
}
.activeStyle span {
  border-bottom: 3px solid var(--color-high-text);
  padding: 5px;
}
.tab-control-item {
  flex: 1;
}
</style>
