<template>
  <form 
    novalidate
    :class="isInline ? 'form-inline' : 'form-horizontal'">
    <slot></slot>
  </form>
  
</template>

<script>
export default {
  props: {
    isInline: {
      type: Boolean,
      defalut: false
    }
  }
}
</script>
