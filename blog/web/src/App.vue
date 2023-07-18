<template>
  <div>
    <header>
      <BaseNav />
    </header>
    <div class="p-4">
      <router-view />
    </div>
  </div>
</template>

<script>
import BaseNav from '@/components/BaseNav.vue'

export default {
  name: 'App',
  components: {
    BaseNav
  }
}
</script>
