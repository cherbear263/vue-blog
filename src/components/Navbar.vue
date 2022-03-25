<template>
  <header class="flex justify-between align-middle max-w-xl my-0 mx-auto p-2">
    <h1 class="text-gray-300 text-4xl tracking-tight">The Dojo Blog</h1>
    <nav>
      <router-link class="text-gray-300 ml-2" :to="{ name: 'Home' }">Home</router-link>
      <router-link class="text-gray-300 ml-2" :to="{ name: 'Create' }">Create</router-link>
    </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style>
header a.router-link-active {
  color: #444;
  font-weight: bold;
}

</style>