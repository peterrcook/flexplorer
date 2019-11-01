<template>
  <div class="wrapper">
    <div id="flex-container" :style="containerStyle" >
      <textarea v-for="item in storeState.items" :key="item.id" v-model="item.text" class="item"></textarea>
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

  overflow: hidden;
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
