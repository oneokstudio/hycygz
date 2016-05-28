<template>
  <div 
    class="v-dialog fade"
    :class="show ? 'in focused' : ''"
    transition="v-dialog">
    <a class="v-dialog-close">×</a>
    <div class="v-dialog-header">
      <template v-if="customHeader">
        <slot name="header">
        </slot>
      </template>
      <template v-else>
        <h3 class="v-dialog-title">{{title}}</h3>
      </template>
    </div>
    <div class="v-dialog-body">
      <slot name="body"></slot>
    </div>
    <div class="v-dialog-footer">
      <slot name="footer">
        <button type="button" class="btn btn-default" @click="show=false">关闭</button>
        <button type="button" class="btn btn-primary">保存</button>
      </slot>
    </div>
  </div>
  <div class="modal-backdrop fade in" v-if="show"></div>
</template>

<script>
module.exports = {
  props: {
    show: {
      type: Boolean,
      required: true,
      twoWay: true
    },
    customHeader: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
    }
  }
}
</script>
