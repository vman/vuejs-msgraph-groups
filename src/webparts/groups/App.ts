interface IGroup {
  name: string;
  members: string[];
}

import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class App extends Vue {
  
  private groups: IGroup[] = [{
    name: "My Group",
    members: ["vrd", "vrd2"]
  }, {
    name: "Another Group",
    members: ["rvd", "rvd2"]
  }];

  // inital data
  // msg: number = 123
  // // use prop values for initial data
  // //helloMsg: string = 'Hello, ' + this.propMessage
  // // lifecycle hook
  // mounted () {
  //   this.greet()
  // }
  // // computed
  // get computedMsg () {
  //   return 'computed ' + this.msg
  // }
  // // method
  // greet () {
  //   alert('greeting: ' + this.msg)
  // }
}