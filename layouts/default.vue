<template>
  <div class="layout layout--default">
    <VitePwaManifest />
    <NuxtLoadingIndicator 
      :color="themeColorHex" 
      :height="3"
      :duration="500"
      :throttle="0" npm 
    />
    <nav class="primary-nav">
      <div class="container">
        <ul>
          <li><NuxtLink to="/">Year 1</NuxtLink></li>
          <!-- <li><NuxtLink to="/year-2">Year 2</NuxtLink></li> -->
          <li><NuxtLink to="/about">About</NuxtLink></li>
        </ul>
      </div>
    </nav>
    <slot/>
  </div>
</template>

<script setup>

  // Date Manipulations
  const today = new Date()

  // Current Hour of Day
  const hour = today.getHours()
  const themeColorHex = hour > 6 && hour < 19 ? '#C0855A' : '#5A70C0'

  useHead({
    title: 'Scripture Together',
    meta: [
      { name: 'theme-color', content: '#111518' }
    ],
    link: [
      { rel: 'icon', type: 'image/svg', href: 'favicon.svg' },
      // { rel: 'icon', type: 'image/svg', href: 'pwa-512x512.png' },
      { rel: 'mask-icon', type: 'image/svg', href: 'favicon.svg', color: '#FFF' }
    ],
    // Change color theme based on time of day
    htmlAttrs: {
      class: hour > 6 && hour < 19 ? 'theme--dawnfang' : 'theme--duskfang'
    }
  })
</script>

<style>
.page-enter-active,
.page-leave-active {
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}
.page-enter-from {
  opacity: 0;
}
.page-leave-active {
  opacity: 0;
  -webkit-transition: .0s;
  transition: .0s;
}
</style>