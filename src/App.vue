<template>
  <div class="root">
    <router-view />
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from "vue-property-decorator"

  @Component
  class App extends Vue{
    mounted () {
      var a = 1
      //vue-router库本身的问题，如果不加catch，会报vue-router.esm.js?8c4f:2065 Uncaught (in promise) NavigationDuplicated: Avoided redundant navigation to current location: "/welcome"，未找到更佳的解决方案
       this.$router.push('/welcome').catch(err=>{
         console.log(err)
       })
    }
  }

  export default App
</script>

<style lang="scss" scoped>
</style>
