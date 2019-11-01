<template>
  <div class="wrapper">
    <div id="flex-container" :style="containerStyle" >
      <div contenteditable class="item item-1">Lorem ipsum 1</div>
      <div contenteditable class="item item-2">Lorem ipsum 2</div>
      <div contenteditable class="item item-3">Lorem ipsum 3 more text more text more text</div>
      <div contenteditable class="item item-4">Lorem ipsum 4</div>
      <div contenteditable class="item">Lorem ipsum 5</div>
      <div contenteditable class="item">Lorem ipsum 6</div>
      <div contenteditable class="item">Lorem ipsum 7</div>
    </div>
  </div>
</template>

<script>
import store from '../store';

export default {
  name: 'FlexContainer',
  data: function() {
    return {
      storeState: store.state
    }
  },
  computed: {
    containerStyle: function() {
      return {
        display: 'flex',
        flexDirection: store.state.flexDirection,
        flexWrap: store.state.flexWrap,
        justifyContent: store.state.justifyContent
      }
    }
  }
}
</script>

<style scoped>
.wrapper {
  margin-left: 300px;
}

#flex-container {
  align-items: center; /* stretch, center, flex-start, flex-end, baseline - aligns items along cross-axis */
  align-content: space-around; /* space-around, flex-start, flex-end, center, stretch, space-between - if multiline (due to wrapping) defines how lines are distributed along cross-axis */

  width: 100%;
  height: 50%;
  
  background-color: #eee;
  overflow: hidden;
  
  resize: both;
}

.item {
  padding: 20px;
  border: 1px solid #fff;
  background-color: #ddd;
  flex-shrink: 0;
}

/* .item-1 {
   flex-shrink: 2;
   } */
.item-3 {
  flex-shrink: 2;
}

.item-4 {
  /*   flex-grow: 1; */
  width: 200px;
  height: 100px;
  /*   flex-shrink: 0; */
}

</style>
