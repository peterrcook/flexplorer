<template>
  <div class="control-panel pa3 vh-50 w-100 fixed-ns vh-100-ns w5-m w6-l overflow-y-auto shadow-1">
    <h1 class="title f3 mt0 bb b--silver mb4">Flexplorer</h1>
    <ControlPanelFlexContainer v-if="storeState.selectedItem === null" />
    <ControlPanelFlexItem v-if="storeState.selectedItem !== null" />
  </div>
</template>

<script>
import store from '../store';

import ControlPanelFlexContainer from './ControlPanelFlexContainer';
import ControlPanelFlexItem from './ControlPanelFlexItem';

export default {
  name: 'ControlPanel',
  components: {
    ControlPanelFlexContainer,
    ControlPanelFlexItem
  },
  data: () => {
    return {
      storeState: store.state
    }
  }
}
</script>

<style>
.control-panel .title {
  font-family: 'Inconsolata', monospace;
}

.deselect-item {
  cursor: default;
}
</style>
