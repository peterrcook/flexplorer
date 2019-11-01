<template>
  <div>
    <h4>{{groupName}}</h4>
    <div v-for="item in items" :key="item">
      <input type="radio" :name="groupName" :value="item" :checked="item === storeState[groupName]" @change="setItem(groupName, item)" />
      <label>{{item}}</label>
    </div>
  </div>
</template>

<script>
import store from '../store';

export default {
  name: 'RadioGroup',
  props: {
    items: Array,
    groupName: String
  },
  data: function() {
    return {
      storeState: store.state
    }
  },
  methods: {
    setItem: function(id, item) {
      console.log('select item', id, item);
      store.setItem(id, item);
    }
  }
}
</script>

