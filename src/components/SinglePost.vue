<template>
  <h3 class="text-xl font-bold text-gray-500 mt-5">{{post.title}}</h3>
  <p class="text-gray-500 font-sans text-sm">{{ snippet }}</p>
</template>
<script>
import { computed } from '@vue/runtime-core'
export default {
  props: ['post'],
  setup(props) {
    const snippet = computed(() => {
      // only reuturn the first 100 chars of the string
      return props.post.body.substring(0,100) + '....'
    })

    return { snippet }
    
  }
}
</script>