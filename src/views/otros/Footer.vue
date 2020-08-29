<template>
<section>
  <H1> ESTO ES EL FOOTER </H1> <br>
      <div>
          <p>{{ nombress }}</p>
          <p>{{ otromas }}</p>
      </div>
</section>
</template>

<script>
export default {

  name: "compo-footer",
  props: {
    nombress: String,
    otromas: String,
  },

}
</script>

<style scoped>

</style>