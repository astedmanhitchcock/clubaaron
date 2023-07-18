<template>
  <router-link :to="`/tag/${tag.name}`">
    #{{ tag.name }}
  </router-link>
</template>

<script>
export default {
  name: 'PostTag',
  props: {
    tag: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
a {
  @apply text-white text-rose-quartz border border-rose-quartz py-1 px-2 rounded-lg;
  transition: all 0.35s ease;
}

a:hover {
  @apply bg-rose-quartz text-base-bg;
}
</style>