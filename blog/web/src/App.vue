<template>
  <div>
    <header>
      <nav class="flex p-4">
        <router-link to="/">
          <h1>clubaaron</h1>
        </router-link>
      </nav>
    </header>
    <div class="p-4">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
