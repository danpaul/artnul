<template>
  <section class="container">
    <div
      v-for="(sketch, index) in sketches"
      :key="index"
      class="w-1/5 flex"
    >
      <component
        :is="getSketch(index)"
      />
    </div>
  </section>
</template>

<script>

import sketches from '~/components/sketches'

const elementPadding = 16;

export default {
  data() {
    return {
      sketches
    }
  },
  // computed: {
  //   elementWidth() {
  //     const breakpoint = Number(tailwind.screens.md.replace('px', ''));
  //     const { innerWidth } = window;
  //     if(window.innerWidth < breakpoint){
  //       return
  //     }
  //     console.log(breakpoint)
  //   }
  // },
  methods: {
    getSketch(index) { return this.sketches[index].sketch; }
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
