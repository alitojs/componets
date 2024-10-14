<template>
  <span>
    <span v-if="value && value.length <= maxLength">{{ value }}</span>
    <a-tooltip
      :getPopupContainer="
        (triggerNode) => {
          return triggerNode.parentNode;
        }
      "
      v-else-if="value && value.length > maxLength">
      <template slot="title">
        {{ value }}
      </template>
      <span>{{ `${value.substr(0, maxLength)}` }}...</span>
    </a-tooltip>
    <span v-else>-</span>
  </span>
</template>

<script>
export default {
  name: 'TextTooltip',
  props: {
    value: {
      type: String,
      default: ''
    },
    maxLength: {
      type: Number,
      default: 999999
    }
  }
};
</script>

<style scoped lang="less"></style>
