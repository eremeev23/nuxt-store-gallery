<template>
  <div id="app">
    <ItemAdder />
    <ItemsBox :items__data=getItems />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import ItemAdder from '../components/ItemAdder.vue'
import ItemsBox from '../components/ItemsBox.vue'

export default {
  name: 'app',
  components: {
    ItemAdder,
    ItemsBox
  },
  computed: {
    ...mapGetters(['getItems'])
  }
}
</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  #app {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    min-height: 100vh;
    width: 96vw;
    padding: 32px;
    background: #f1f1f1;
    font-family: 'Source Sans Pro', sans-serif;
  }
}

</style>
