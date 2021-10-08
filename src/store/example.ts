import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
 
@Module({
  name: 'example'
})
export default class Example extends VuexModule {
  welcomeTxt = '欢迎使用Carl的Vue2脚手架😉'
 
  @Mutation
  changeWelcomeTxt(welcomeTxt: string) {
    this.welcomeTxt = welcomeTxt
  }
}