<template>
  <div class="portafolio">
    <Carousel class="mt-10" />
  </div>
</template>
<script>
import Carousel from '../components/Carousel.vue'
export default {
  data: () => ({
    //
  }),
  components: {
    Carousel
  }
}
</script>
<style lang="sass" scoped>
.portafolio
    background-color: #DDDDDD
    height: 100vh !important
</style>
