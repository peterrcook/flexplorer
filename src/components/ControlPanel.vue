<template>
  <div class="control-panel pa3">
    <h1 class="title f3 mt0 bb b--silver mb4">Flexplorer</h1>
    <div class="flex-container-panel" v-if="storeState.selectedItem === null">
      <h2 class="f6 pb1 bb b--moon-gray moon-gray">Flex container</h2>
      <ButtonGroup :items="flexRules.flexDirection" id="flexDirection" label="flex-direction" :handleClick="handleContainerPropertyClick" :selectedValue="storeState.flexDirection" />
      <ButtonGroup :items="flexRules.flexWrap" id="flexWrap" label="flex-wrap" :handleClick="handleContainerPropertyClick"  :selectedValue="storeState.flexWrap" />
      <ButtonGroup :items="flexRules.justifyContent" id="justifyContent" label="justify-content" :handleClick="handleContainerPropertyClick"  :selectedValue="storeState.justifyContent" />
      <ButtonGroup :items="flexRules.alignItems" id="alignItems" label="align-items" :handleClick="handleContainerPropertyClick"  :selectedValue="storeState.alignItems" />
      <ButtonGroup :items="flexRules.alignContent" id="alignContent" label="align-content" :handleClick="handleContainerPropertyClick"  :selectedValue="storeState.alignContent" />
      <div>
        <div class="flex items-center">
          <input class="mr2" type="checkbox" v-model="storeState.controlSizeOfContainer" />
          <label>Control size of container</label>
        </div>
      </div>
      <div class="mt4">
        <h2 class="f6 pb1 bb b--moon-gray moon-gray">Items</h2>
        <div class="f6 link dim br2 ba ph3 pv2 mb2 dib near-black noselect" @click="removeItem">Remove item</div>
        <div class="f6 link dim br2 ba ph3 pv2 mb2 ml2 dib near-black noselect" @click="addItem">Add item</div>
      </div>
    </div>
    <div class="flex-item-panel" v-if="storeState.selectedItem !== null">
      <div class="flex justify-end">
        <i class="deselect-item material-icons dim " @click="deselectItem">close</i>
      </div>
      <h2 class="f6 pb1 bb b--moon-gray moon-gray">Flex item</h2>
      <TextInput label="order" cssProp="order" />
      <TextInput label="flex-basis" cssProp="flexBasis" />
      <TextInput label="flex-shrink" cssProp="flexShrink" />
      <TextInput label="flex-grow" cssProp="flexGrow" />
    </div>
  </div>
</template>

<script>
import store from '../store';
import flexRules from '../flex-rules';

import ButtonGroup from './ButtonGroup.vue';
import TextInput from './TextInput.vue';

export default {
  name: 'ControlPanel',
  components: {
    ButtonGroup,
    TextInput
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
    deselectItem: () => {
      store.selectItem(null);
    },
    handleContainerPropertyClick: (id, value) => {
      console.log('handling click', id, value);
      store.setItem(id, value);
    }
  }
}
</script>

<style>
.control-panel {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 20rem;
  box-sizing: border-box;
  border-right: 1px solid #ddd;
  overflow-y: auto;
}

.control-panel .title {
  font-family: 'Inconsolata', monospace;
}

.deselect-item {
  cursor: default;
}
</style>
