<template>
  <div class="root">
    <welcome />
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from "vue-property-decorator"
  import Welcome from '@/components/welcome.vue'

  @Component({
    components: {
      Welcome
    }
  })
  class App extends Vue{}

  export default App
</script>

<style lang="scss" scoped>
</style>
