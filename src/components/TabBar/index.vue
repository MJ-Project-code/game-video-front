<template>
  <Menu mode="horizontal" class="header" active-name="1">
    <Menu-item name="1">
      <Icon type="ios-paper"></Icon>
      观看
    </Menu-item>
    <Menu-item name="2">
      <Icon type="ios-people"></Icon>
      上传
    </Menu-item>
  </Menu>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style scoped>
.header  > li{
  margin-left: 60px;
}
</style>
