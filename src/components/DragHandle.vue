<template>
  <svg class="drag-handle" :width="size" :height="size">
    <path :d="pathString" />
  </svg>
</template>

<script>
export default {
  name: 'DragHandle',
  props: {
    size: Number
  },
  computed: {
    pathString: function() {
      return `M${this.size},0 v${this.size} h-${this.size} z`;
    }
  }
}
</script>

<style>
.drag-handle {
  position: absolute;
  display: none;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.drag-handle path {
  fill: #aaa;
}

@media screen and (min-width: 60em) {
  /* only show drag-handle on larger displays - it tends to be fiddly and frustrating on mobile */
  .drag-handle {
    display: inline;
  }
}
</style>
