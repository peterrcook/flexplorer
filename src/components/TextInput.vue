<template>
  <div class="text-input mb2">
    <span class="label b dib mb1 f5">{{label}}: </span>
    <input :value="storeState.items[storeState.selectedItem][cssProp]" @change="setItemValue(cssProp, $event)">
  </div>
</template>

<script>
import store from '../store';

export default {
  name: 'TextInput',
  props: {
    cssProp: String,
    label: String
  },
  data: function() {
    return {
      storeState: store.state
    }
  },
  methods: {
    setItemValue: (id, e) => {
      console.log(id, e);
      store.setSelectedItemValue(id, +e.target.value);
    }
  }
}
</script>

<style scoped>
.text-input {
  font-family: 'Inconsolata', monospace;
}
input {
  width: 5em;
  padding: 0.25em;
  margin-left: 0.25em;
}
</style>
