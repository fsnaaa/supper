<template>
  <div class="tab-bar-item" @click="activeClick">
    <div>
        <slot name="normal-img" v-if="!isChecked"></slot>
        <slot name="active-img" v-else></slot>
    </div>
    <div :style="isChecked?{color:checkedColor}:{}">
        <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    path:{
      type:String,
      required: true
    },
    checkedColor:{
      type:String,
      default:"#ff5777"
    }
  },
  computed:{
    isChecked(){
      return this.$route.path.indexOf(this.path)>=0;
    }
  },
  methods:{
    activeClick(){
      //通过路由对象方法形式进行导航
      this.$router.replace(this.path);
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  height: 49px;
  flex: 1;
  text-align: center;
  font-size: 14px;
  margin-top: 5px;
  margin-bottom: 2px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
}
</style>
