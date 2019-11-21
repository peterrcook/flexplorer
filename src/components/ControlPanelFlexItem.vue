<template>
  <div class="flex-item-control-panel">
    <div class="flex justify-end">
      <i class="deselect-item material-icons dim " @click="deselectItem">close</i>
    </div>
    <h2 class="f6 pb1 mt0 bb b--moon-gray moon-gray">Flex item</h2>
    <TextInput label="order" cssProp="order" />
    <TextInput label="flex-basis" cssProp="flexBasis" />
    <TextInput label="flex-shrink" cssProp="flexShrink" />
    <TextInput label="flex-grow" cssProp="flexGrow" />
    <ButtonGroup
      :items="flexRules.items.alignSelf.values"
      id="alignSelf"
      label="align-self"
      :handleClick="handleItemPropertyClick"
      :selectedValue="storeState.items[storeState.selectedItem].alignSelf"
      :helpText="helpText.alignSelf" />
  </div>
</template>

<script>
import store from '../store';
import flexRules from '../flex-rules';
import helpText from '../help-text';

import ButtonGroup from './ButtonGroup.vue';
import TextInput from './TextInput.vue';

export default {
  name: 'ControlPanelFlexItem',
  components: {
    ButtonGroup,
    TextInput
  },
  data: () => {
    return {
      storeState: store.state,
      flexRules: flexRules,
      helpText: helpText
    }
  },
  methods: {
    deselectItem: () => {
      store.selectItem(null);
    },
    handleItemPropertyClick: (id, value) => {
      store.setSelectedItemValue(id, value);
    }
  }
}
</script>

