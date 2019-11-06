<template>
  <div id="app">
    <ControlPanel />
    <FlexContainer />
  </div>
</template>

<script>
import 'tachyons';
import './tachyons-additions.css';

import FlexContainer from './components/FlexContainer.vue'
import ControlPanel from './components/ControlPanel.vue'

export default {
  name: 'app',
  components: {
    FlexContainer,
    ControlPanel
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Lato', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.noselect {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

</style>
