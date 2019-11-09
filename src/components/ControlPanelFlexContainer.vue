<template>
  <div class="flex-container-control-panel">
    <h2 class="f6 pb1 bb b--moon-gray moon-gray">Flex container</h2>

    <ButtonGroup
      v-for="prop in flexRules.container"
      :key="prop.id"
      :items="prop.values"
      :id="prop.id"
      :label="prop.label"
      :handleClick="handleContainerPropertyClick"
      :selectedValue="storeState[prop.id]"
      :helpText="helpText[prop.id]" />

    <div class="flex items-center">
      <input class="mr1" type="checkbox" v-model="storeState.controlSizeOfContainer" />
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
import helpText from '../help-text';

import ButtonGroup from './ButtonGroup.vue';

export default {
  name: 'ControlPanelFlexContainer',
  components: {
    ButtonGroup
  },
  data: () => {
    return {
      storeState: store.state,
      flexRules: flexRules,
      helpText: helpText
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
