<template>
  <div class="content">
    <TabBar/>
    <router-view class="view-content"></router-view>
<!--    <gamerecord-player class="player"/>-->
  </div>

</template>

<script>
// import GamerecordPlayer from "@/components/VideoPlayer";
import TabBar from "@/components/TabBar";

export default {
  components: {TabBar}
}
</script>

<style>
html,body{

  height:100%;

  width:100%;

  border:hidden;

  overflow:hidden;

}
.content{
  height: 100%;
}
.view-content{
  width: 70%;
  height: 100%;
  padding-left: 15%;
  padding-top: 5%;
}
.video-list{
  float:right;
}
</style>
