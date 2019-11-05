<template>
  <div class="wrapper">
    <div id="flex-container" class="bg-light-gray" :style="containerStyle" >
      <div v-for="(item, i) in storeState.items" :key="item.id" class="item bg-moon-gray" :style="itemStyle(item)" contenteditable @click="selectItem(i)">{{item.text}}</div>
    </div>
  </div>
</template>

<script>
import store from '../store';

export default {
  name: 'FlexContainer',
  data: () => {
    return {
      storeState: store.state
    }
  },
  computed: {
    containerStyle: () => {
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
  },
  methods: {
    selectItem: function(i) {
      store.selectItem(i);
    },
    itemStyle: item => {
      return {
        order: item.order,
        flexShrink: item.flexShrink,
        flexGrow: item.flexGrow,
        flexBasis: item.flexBasis,
        alignSelf: item.alignSelf
      }
    }
  }
}
</script>

<style scoped>
.wrapper {
  margin-left: 20rem;
}

#flex-container {
  overflow: hidden;
}

.item {
  font-family: 'Merriweather', serif;
  font-weight: 600;
  font-size: 1rem;
  padding: 1rem;
  border: 1px solid #fff;
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
