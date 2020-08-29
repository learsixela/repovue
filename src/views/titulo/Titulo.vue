<template>
  <div>
    <p>{{titulo1}}</p>
    <br>
    <p>este es un mensaje</p>
  </div>
</template>

<script>

export default {
name: "Titulo",
components: {
},
  data(){
    return {
      titulo1:'Hola Diego',
      nombre:'paso de datos al footer',
    }
  },
}
</script>
