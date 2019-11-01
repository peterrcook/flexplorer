<template>
  <div id="app">
    <ControlPanel />
    <FlexContainer />
  </div>
</template>

<script>
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
body: {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
