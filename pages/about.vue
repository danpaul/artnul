<template>
  <div class="h-screen w-full px-4 py-24" style="padding-top: 4.5rem;">
    <p>Lorem ipsum dolor sit amet, vel at dolorum quaestio. Ex qui aliquam moderatius quaerendum, ea eius doming civibus nec. An facete utroque denique mei, est an eius singulis scriptorem. No mel alienum antiopam intellegebat, sit eu ridens debitis convenire. Mel ad amet omnes mandamus, choro fabellas perfecto qui ex, qui veniam oblique ut.</p>

    <p>Ea insolens interesset reprehendunt vix, eum in dicunt vidisse, usu labore expetendis ut. Natum labitur scribentur ex his, cum ei consulatu reprehendunt mediocritatem. Vis eu invenire reprimique concludaturque, alii debet vix ne. Idque gloriatur ut pri, in qui minim solet maluisset. Id has ludus zril consetetur. Omittam appareat persecuti ad mei, quo te brute populo persequeris.</p>

    <p>Ius id suas reformidans, vel reque hendrerit ne. Ex his quaerendum referrentur. Eum an constituto mediocritatem, vel hinc doming eu. Dicam iisque assentior ius ut, deleniti nominati reprehendunt te est.</p>
  </div>
</template>

<script>

import sketches from '~/components/sketches'
const featured = sketches.find(({ featured }) => (featured))

export default {
  data() {
    return {
      sketches,
      featured
    }
  },
  methods: {
    getSketch(index) { return this.sketches[index].sketch; }
  }
}
</script>

<style>

.container {
  /* margin: 0 auto; */
  min-height: 100vh;
  text-align: center;
}

</style>
