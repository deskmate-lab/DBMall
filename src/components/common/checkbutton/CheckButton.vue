<template>
  <div class="check-button" :class="{checked: isChecked}"></div>
</template>

<script>
  export default {
    name: 'CheckButton',
    props: {
      isChecked: {
        type: Boolean,
        default() {
          return false
        }
      }
    }
  }
</script>

<style scoped>
  .check-button {
    width: 18px;
    height: 18px;
    border: 1px solid #999;
    border-radius: 50%;
  }

  .checked {
    background: url('~assets/img/cart/selected.png') 0 0/100% 100%;
    border: none;
  }
</style>
