<template>
  <div class="layout layout--default" :class="`hour-${hour}`">
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
  // Netlify timezone gives +4 hours
  const hour = today.getHours()
  const themeColorHex = hour >= 10 && hour <= 22 ? '#C0855A' : '#5A70C0'

  useHead({
    // Change color theme based on time of day
    htmlAttrs: {
      class: hour >= 10 && hour <= 22 ? 'theme--dawnfang' : 'theme--duskfang'
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