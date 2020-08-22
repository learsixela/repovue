<template>
  <div>{{msjLocal}} {{valor}}
  <br>
    <!-- <ul v-for="(asd,i) in this.titulos"> -->
    <ul v-for="titulo in titulos" v-bind:key="titulo.titulo">
      <li >
        {{titulo.titulo}} {{titulo.pag}}
      </li>
    </ul>
    {{titulos[1].titulo}}
    <br>
  </div>
</template>

<script>
export default {
  name: "Milista",
  data: function(){
    return{
      msjLocal:'Hola2',
      valor: true,
      titulos: [
        {titulo: 'titulo1', pag:'2'},
        {titulo: 'titulo2', pag:'4'},
        {titulo: 'titulo3', pag:'4'},
      ]
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