<template>
  <div class="item-group mb4">
    <h2 class="mb2 f5">{{label}}:</h2>
    <div v-for="item in items"
         :key="item"
         :class="{item: true, pa1: true, noselect: true, dim: true, 'bg-yellow': item === storeState[groupId]}"
         @click="setItem(groupId, item)">
      {{item}}
    </div>
  </div>
</template>

<script>
import store from '../store';

export default {
  name: 'ButtonGroup',
  props: {
    items: Array,
    groupId: String,
    label: String
  },
  data: function() {
    return {
      storeState: store.state
    }
  },
  methods: {
    setItem: function(id, item) {
      store.setItem(id, item);
    }
  }
}
</script>

<style scoped>
.item-group {
  font-family: 'Inconsolata', monospace;
}
</style>
