<template>
  <div class="control-panel">
    <ButtonGroup :items="flexRules.flexDirection" groupId="flexDirection" label="flex-direction" />
    <ButtonGroup :items="flexRules.flexWrap" groupId="flexWrap" label="flex-wrap" />
    <ButtonGroup :items="flexRules.justifyContent" groupId="justifyContent" label="justify-content" />
    <ButtonGroup :items="flexRules.alignItems" groupId="alignItems" label="align-items" />
    <ButtonGroup :items="flexRules.alignContent" groupId="alignContent" label="align-content" />
    <div>
      <h4>Flex container</h4>
      <input type="checkbox" v-model="storeState.controlSizeOfContainer" />
      <label>Control size of container</label>
    </div>
    <div>
      <h4>Items</h4>
      <div class="button noselect" @click="removeItem">Remove item</div>
      <div class="button noselect" @click="addItem">Add item</div>
    </div>
  </div>
</template>

<script>
import store from '../store';
import flexRules from '../flex-rules';

import ButtonGroup from './ButtonGroup.vue';

export default {
  name: 'ControlPanel',
  components: {
    ButtonGroup
  },
  data: () => {
    return {
      storeState: store.state,
      flexRules: flexRules
    }
  },
  methods: {
    addItem: () => {
      store.addItem();
    },
    removeItem: () => {
      store.removeItem();
    }
  }
}
</script>

<style>
.control-panel {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 300px;
  box-sizing: border-box;
  padding: 1rem;
  border-right: 1px solid #ddd;
  overflow-y: auto;
}
</style>
