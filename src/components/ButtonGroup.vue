<template>
  <div class="item-group mb4">
    <div class="flex justify-between items-center">
      <h2 class="mb2 f5">{{label}}:</h2>
      <i class="deselect-item material-icons dim f4 silver noselect" @click="toggleHelp">info</i>
    </div>
    <div v-if="showHelp" class="property-help mb3 silver">
      <div class="lh-copy" v-html="helpText"></div>
    </div>
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
    selectedValue: String,
    helpText: String
  },
  data: () => {
    return {
      showHelp: false
    }
  },
  methods: {
    toggleHelp: function() {
      this.showHelp = !this.showHelp
    }
  }
}
</script>

<style scoped>
.item-group {
  font-family: 'Inconsolata', monospace;
}
</style>
