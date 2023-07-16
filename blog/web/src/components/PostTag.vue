<template>
  <router-link :to="`/tag/${tag.name}`" class="font-serif text-white bg-slate-500 hover:bg-sky-500 py-1 px-2 rounded-lg">
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