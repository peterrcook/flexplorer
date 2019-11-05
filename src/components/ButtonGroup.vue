<template>
  <div class="item-group mb4">
    <h2 class="mb1 f5">{{label}}:</h2>
    <div v-for="item in items"
         :key="item"
         :class="{item: true, pa1: true, noselect: true, dim: true, 'bg-yellow': item === selectedValue}"
         @click="handleClick(id, item)">
      {{item}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ButtonGroup',
  props: {
    items: Array,
    id: String,
    label: String,
    handleClick: Function,
    selectedValue: String
  }
}
</script>

<style scoped>
.item-group {
  font-family: 'Inconsolata', monospace;
}
</style>
