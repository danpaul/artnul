<template>
  <div
    class="
      flex
      justify-between
      items-end
      fixed
      pin-t
      pin-l
      pin-r
      p-6
      py-4
    "
    style="
      background-color: rgba(248,250,252, 0.66);
    "
  >
    <nuxt-link
      to="/"
      class="no-underline text-black"
    >
      <h1>ArtNul</h1>
    </nuxt-link>
    <div>
      <!-- <nuxt-link to="/works" class="menu-link">
        Works
      </nuxt-link> -->
      <nuxt-link to="/about" class="menu-link">
        Hi
      </nuxt-link>
      <!-- <nuxt-link to="/shipping" class="menu-link">
        Shipping
      </nuxt-link> -->
      <!-- <nuxt-link to="/blog" class="menu-link">
        Blog
      </nuxt-link> -->
    </div>
  </div>
</template>

<script>

export default {
}
</script>

<style lang="scss" scoped>

.menu-link {
  @apply ml-4;
}

</style>
