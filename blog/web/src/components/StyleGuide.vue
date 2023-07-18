<template>
  <h2>Styleguide</h2>
  <h3>Colors</h3>
  <hr>
  <ul class="grid grid-cols-4 lg:grid-cols-6 gap-4">
    <li
      v-for="color in colors"
      :key="color"
      class="aspect-square rounded flex flex-col align-center justify-center"
      :class="`${color}`"
    >
      <span class="text-black text-center">
        this is text in black
      </span>
      <span class="text-white text-center">
        this is text in white
      </span>
      <p class="mt-4 font-mono text-center">
        <span class="p-1 bg-white rounded">
          class: {{ color }}
        </span>
      </p>
    </li>
  </ul>
  <h3>Fonts</h3>
  <hr>
</template>

<script>
export const COLORS = [
  'bg-rich-black', 'bg-jet', 'bg-ash', 'bg-azure', 'bg-rose-quartz', 'bg-midnight-green', 'bg-cerulean', 'bg-redwood', 'bg-dutch-white'
]

export default {
  name: 'StyleGuide',
  data() {
    return {
      loremIpsum: 'The quick brown fox jumps over the lazy dog.',
      colors: COLORS
    }
  }
}
</script>

<style scoped>
.test-text {
  font-weight: 400;
  font-size: 40px;
}
</style>