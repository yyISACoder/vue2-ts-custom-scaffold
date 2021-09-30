<template>
  <div class="welcome">
    <img
      :src="avatar"
      class="avatar"
    />
    <p>{{ notice }}</p>
    <p>github地址：<a :href="githubLink" target="_blank">{{ githubLink }}</a></p>
  </div>
</template>

<script lang="ts">
  import avatar from '@/assets/images/avatar.jpg'
  import { Vue, Component } from "vue-property-decorator"

  @Component
  class Welcome extends Vue{
    avatar:string = avatar 
    notice:string = '欢迎使用Carl的Vue2脚手架😉'
    githubLink:string = 'https://github.com/yyISACoder/vue2-ts-custom-scaffold'
  }

  export default Welcome
</script>

<style lang="scss" scoped>
.welcome {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #c2e9ff;
  .avatar {
    width: 200px;
    border-radius: 50%;
  }
  p{
    margin-top: 20px;
    font-size: 20px;
    font-weight: bold;
    &:nth-child(3) {
      margin-top: 100px;
      a {
        color:#00f;
        text-decoration: underline;
        &:hover {
          color: #40a9ff;
        }
      }
    }
  }
}
</style>
