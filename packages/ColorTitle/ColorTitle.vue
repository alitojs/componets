<template>
  <div class="colorTitleStyle">
    <div class="ctColor" />
    <div class="ctTitle">{{ title }}</div>
    <slot name="subTitle"></slot>
    <div style="flex: 1" />
    <div class="ctRight"><slot name="right"></slot></div>
  </div>
</template>
<script>
export default {
  name: 'ColorTitle',
  props: {
    title: String
  }
};
</script>
<style lang="less" scoped>
.colorTitleStyle {
  display: flex;
  align-items: center;

  .ctColor {
    width: 4px;
    height: 20px;
    background: #466afa;
    border-radius: 2px;
    opacity: 0.85;
    flex-shrink: 0;
  }
  .ctTitle {
    font-size: 14px;
    font-family: Microsoft YaHei-Bold, Microsoft YaHei;
    font-weight: bold;
    color: #182b56;
    padding-left: 7px;
  }

  .ctRight {
    flex-shrink: 0;
  }
}
</style>
