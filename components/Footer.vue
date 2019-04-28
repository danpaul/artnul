<template>
  <div
    class="
      flex
      justify-between
      items-end
      fixed
      pin-b
      pin-l
      pin-r
      p-6
      py-4
      text-xs
    "
    style="
      background-color: rgba(248,250,252, 0.66);
    "
  >
    <div class="flex">
      <div class="footer-item">
        © ArtNul <no-ssr>{{ new Date().getFullYear() }}</no-ssr>
      </div>
      <!-- <nuxt-link to="/privacy" class="footer-item">
        Privacy Policies
      </nuxt-link> -->
      <!-- <nuxt-link to="/privacy" class="footer-item">
        Terms & Conditions
      </nuxt-link> -->
    </div>
    <div>
      <a href="https://www.instagram.com/artnnnul/" target="_blank" class="footer-item">
        Instagram
      </a>
      <nuxt-link to="/list" class="footer-item">
        Newsletter
      </nuxt-link>
      <nuxt-link to="/contact" class="footer-item mr-0">
        Contact
      </nuxt-link>
    </div>
  </div>
</template>

<script>

export default {
}
</script>

<style lang="scss" scoped>

.footer-item {
  @apply mr-3;
}

</style>
