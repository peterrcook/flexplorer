<template>
  <div class="flex-container-control-panel">
    <h2 class="f6 pb1 bb b--moon-gray moon-gray">Flex container</h2>

    <ButtonGroup :items="flexRules.flexDirection" id="flexDirection" label="flex-direction" :handleClick="handleContainerPropertyClick" :selectedValue="storeState.flexDirection" />
    <ButtonGroup :items="flexRules.flexWrap" id="flexWrap" label="flex-wrap" :handleClick="handleContainerPropertyClick"  :selectedValue="storeState.flexWrap" />
    <ButtonGroup :items="flexRules.justifyContent" id="justifyContent" label="justify-content" :handleClick="handleContainerPropertyClick"  :selectedValue="storeState.justifyContent" />
    <ButtonGroup :items="flexRules.alignItems" id="alignItems" label="align-items" :handleClick="handleContainerPropertyClick"  :selectedValue="storeState.alignItems" />
    <ButtonGroup :items="flexRules.alignContent" id="alignContent" label="align-content" :handleClick="handleContainerPropertyClick"  :selectedValue="storeState.alignContent" />

    <div class="flex items-center">
      <input class="mr2" type="checkbox" v-model="storeState.controlSizeOfContainer" />
      <label>Control size of container</label>
    </div>

    <div class="mt4">
      <h2 class="f6 pb1 bb b--moon-gray moon-gray">Items</h2>
      <div class="f6 link dim br2 ba ph3 pv2 mb2 dib near-black noselect" @click="removeItem">Remove item</div>
      <div class="f6 link dim br2 ba ph3 pv2 mb2 ml2 dib near-black noselect" @click="addItem">Add item</div>
    </div>

  </div>
</template>

<script>
import store from '../store';
import flexRules from '../flex-rules';

import ButtonGroup from './ButtonGroup.vue';

export default {
  name: 'ControlPanelFlexContainer',
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
    },
    handleContainerPropertyClick: (id, value) => {
      store.setItem(id, value);
    }
  }
}
</script>

