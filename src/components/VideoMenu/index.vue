<template>
  <Row>
    <Col span="8">
      <Menu >
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-paper"></Icon>
            DOTA2
          </template>
          <Menu-item name="1-1">小怪兽空大集锦</Menu-item>
          <Menu-item name="1-2">马俊对线单杀</Menu-item>
          <Menu-item name="1-3">黄人打团不开BKB</Menu-item>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            <Icon type="ios-people"></Icon>
            老头环
          </template>
          <Menu-item name="2-1">赵丹青弹反过女武神</Menu-item>
        </Submenu>
        <Submenu name="3">
          <template slot="title">
            <Icon type="ios-people"></Icon>
            VRISING
          </template>
        </Submenu>
      </Menu>
    </Col>
  </Row>
</template>

<script>
export default {
  name: "VideoMenu"
}
</script>

<style scoped>

</style>
