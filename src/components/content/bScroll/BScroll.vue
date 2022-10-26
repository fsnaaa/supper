<template>
  <div class="scroll" ref="wrapper">
    <div>
        <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
    props:{
        probeType:{
            type:Number,
            default:0
        },
        pullUpLoad:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return{
            bs:null,
        }
    },
    mounted(){
        this.initBScroll();
    },
    methods:{
        initBScroll(){
           this.bs= new BScroll(this.$refs.wrapper,{
                probeType:this.probeType,
                pullUpLoad: this.pullUpLoad,
                click: true,
            });

            if(this.probeType>=2){
                //滚动事件 scroll
                this.bs.on("scroll",(ps)=>{
                    //位置对象
                    console.log(ps)
                });
            }
            
            if(this.pullUpLoad==true){
                //判定上拉到顶事件
                this.bs.on('pullingUp', () => {
                    console.log("上拉加载更多");
                    bs.finishPullUp();
                });
            }
			

        }
    }
}
</script>

<style>

</style>