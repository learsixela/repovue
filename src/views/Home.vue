<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <compo-footer
    ></compo-footer>
  </div>

</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import CompoFooter from '@/views/otros/Footer'

export default {
  name: 'Home',
  components: {
    //HelloWorld,
    'compo-footer': CompoFooter,
  }
}
</script>
