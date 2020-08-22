<template>
  <div>{{msjLocal}} {{valor}}</div>
</template>

<script>
export default {
name: "Prueba",
  data: function(){
    return{
      msjLocal:'Hola2',
      valor: true,
    }
  },
  mounted() {
     this.msjLocal = 'probando';
     console.clear();
     console.log('componente Prueba montado');
  },
  computed:{},
  methods:{},
}
</script>

<style scoped>

</style>