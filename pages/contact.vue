<template>
  <div class="h-screen w-full px-4 py-24" style="padding-top: 4.5rem;">
    <form name="contact" class="p-4" method="POST" data-netlify="true">
      <div class="form-item">
        <p>Name:</p>
        <input type="text" name="name" />
      </div>
      <div class="form-item">
        <p>Email:</p>
        <input type="email" name="email" />
      </div>
      <div class="form-item">
        <p>Message:</p>
        <textarea rows="4" cols="50" name="message"></textarea>
      </div>
      <p class="form-item">
        <button type="submit" class="p-3 bg-grey">Send</button>
      </p>
    </form>
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

<style scoped>

.form-item {
  @apply mb-4;
}

</style>
