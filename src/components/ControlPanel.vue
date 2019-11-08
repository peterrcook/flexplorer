<template>
  <div class="control-panel pa3 vh-50 w-100 fixed-ns vh-100-ns w5-m w6-l overflow-y-auto shadow-1">
    <div class="flex justify-between mb3">
      <h1 class="title f3 mt0">Flexplorer</h1>
      <i class="deselect-item material-icons dim" @click="showInfo" v-if="!storeState.showInfo">info</i>
      <i class="deselect-item material-icons dim" @click="hideInfo" v-if="storeState.showInfo">close</i>
    </div>

    <ControlPanelFlexContainer v-if="storeState.selectedItem === null && !storeState.showInfo" />
    <ControlPanelFlexItem v-if="storeState.selectedItem !== null && !storeState.showInfo" />
    <InfoPanel v-if="storeState.showInfo" />
  </div>
</template>

<script>
import store from '../store';

import ControlPanelFlexContainer from './ControlPanelFlexContainer';
import ControlPanelFlexItem from './ControlPanelFlexItem';
import InfoPanel from './InfoPanel';

export default {
  name: 'ControlPanel',
  components: {
    ControlPanelFlexContainer,
    ControlPanelFlexItem,
    InfoPanel
  },
  data: () => {
    return {
      storeState: store.state
    }
  },
  methods: {
    showInfo: () => {
      store.setItem('showInfo', true);
    },
    hideInfo: () => {
      store.setItem('showInfo', false);
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
