<template>
  <div class="panel panel-primary">

    <div class="panel-heading">
      <slot name="head">
        Panel heading without title
      </slot>
    </div>

    <div class="panel-body">
      <slot name="body">
        Panel content
      </slot>
    </div>

  </div>
</template>

<script>
  export default {

  }
</script>