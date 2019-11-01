<template>
  <div class="control-panel">
    <ButtonGroup :items="flexRules.flexDirection" groupId="flexDirection" label="flex-direction" />
    <ButtonGroup :items="flexRules.flexWrap" groupId="flexWrap" label="flex-wrap" />
    <ButtonGroup :items="flexRules.justifyContent" groupId="justifyContent" label="justify-content" />
    <ButtonGroup :items="flexRules.alignItems" groupId="alignItems" label="align-items" />
    <ButtonGroup :items="flexRules.alignContent" groupId="alignContent" label="align-content" />
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
  data: function() {
    return {
      storeState: store.state,
      flexRules: flexRules
    }
  }
}
</script>

<style scoped>
.control-panel {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 300px;
  border-right: 1px solid #ddd;
}
</style>
