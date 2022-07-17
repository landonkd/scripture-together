<template>
  <div>
    <nav id="primary-nav">
        <div class="container">
            <ul>
                <li><NuxtLink to="/">Daily</NuxtLink></li>
                <li><NuxtLink to="/about">About</NuxtLink></li>
            </ul>
        </div>
    </nav>
    <slot/>
  </div>
</template>