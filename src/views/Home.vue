<template>
  <div class="max-w-sm mx-auto mt-20">
    <h1 class="text-xl font-bold uppercase text-gray-600">Home</h1>
    <div v-for="name in matchingNames" :key="name">
      {{ name }}
    </div>
    <input type="text" v-model="search" class="border-2 border-cyan-500 my-3 rounded-sm pl-2" placeholder="search"/>
    <p>search term - {{ search }} </p>
    
  </div>
</template>

<script>
// @ is an alias to /src
import {computed, ref} from 'vue'

export default {
  name: 'Home',
  setup() {
    const search = ref('')
    const names = ref(['mario', 'yoshi', 'luigi', 'toad', 'bowser', 'koopa', 'peach'])

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value))
  })
    return { names, search, matchingNames }
  }
}
</script>
