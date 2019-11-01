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
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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

.button {
  padding: 0.5em;
  display: inline-block;
  background-color: #eee;
  border-radius: 0.25em;
  cursor: pointer;
  margin: 0 4px 4px 0;
}
</style>
