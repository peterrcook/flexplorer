<template>
  <div class="wrapper vh-50 overflow-y-auto vh-100-m vh-100-l pl7-m pl8-l">
    <div id="flex-container" class="bg-light-gray" :style="containerStyle" >
      <div v-for="(item, i) in storeState.items" :key="item.id" :class="itemClass(item)" :style="itemStyle(item)" contenteditable @click="selectItem(i)">{{item.text}}</div>
      <DragHandle :size="18" v-if="includeDragHandle()" />
    </div>
  </div>
</template>

<script>
import store from '../store';

import DragHandle from './DragHandle';

export default {
  name: 'FlexContainer',
  components: {
    DragHandle
  },
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
      store.selectItem(i)
    },
    itemStyle: item => {
      return {
        order: item.order,
        flexShrink: item.flexShrink,
        flexGrow: item.flexGrow,
        flexBasis: item.flexBasis,
        alignSelf: item.alignSelf
      }
    },
    itemClass: (item) => {
      return {
        item: true,
        "bg-moon-gray": item.id !== store.state.selectedItem,
        "bg-yellow": item.id === store.state.selectedItem
      }
    },
    includeDragHandle: () => {
      // Only include custom drag handle in browsers that support resize css property
      return 'resize' in document.body.style
    }
  }
}
</script>

<style scoped>
#flex-container {
  overflow: hidden;
  position: relative;
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
</style>
