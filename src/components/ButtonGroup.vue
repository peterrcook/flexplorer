<template>
  <div>
    <h4>{{label}}</h4>
    <div v-for="item in items"
         :key="item"
         :class="{item: true, button: true, active: item === storeState[groupId]}"
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
.item {
}  
.active {
  background: yellow;
}
</style>
