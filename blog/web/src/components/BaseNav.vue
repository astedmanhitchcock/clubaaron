<template>
  <nav class="p-4 flex justify-between">
    <div>
      <router-link
        :to="'/'"
      >
        <h1 class="font-serif">aaronhitchcock</h1>
      </router-link>
    </div>
    <div>
      <router-link
        v-for="(link, index) in links"
        :key="link.path"
        :to="link.path"
        class="text-rose-quartz / py-1 px-2"
        :class="{
          'border-l': index > 0
        }"
      >
        {{ link.label }}
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'BaseNav',
  data() {
    return {
      links: [
        {
          'label': 'styleguide',
          'path': '/styleguide'
        }
      ]
    }
  }
}
</script>