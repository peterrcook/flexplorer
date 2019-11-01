<template>
  <div class="wrapper">
    <div id="flex-container" :style="containerStyle" >
      <div v-for="item in storeState.items" :key="item.id" class="item" contenteditable>{{item.text}}</div>
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
        justifyContent: store.state.justifyContent,
        alignItems: store.state.alignItems,
        alignContent: store.state.alignContent,

        resize: store.state.controlSizeOfContainer ? 'both' : 'none',
        width: store.state.controlSizeOfContainer ? 'auto' : null,
        height: store.state.controlSizeOfContainer ? 'auto' : null
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
  background-color: #eee;
  overflow: hidden;
}

.item {
  padding: 20px;
  border: 1px solid #fff;
  background-color: #ddd;
  flex-shrink: 0;

  overflow: hidden;
}

.item-1 {
  /* flex-shrink: 2; */
}
.item-3 {
  /* flex-shrink: 2; */
}
.item-4 {
  /*   flex-grow: 1; */
  /* width: 200px;
     height: 100px; */
  /*   flex-shrink: 0; */
}

</style>
