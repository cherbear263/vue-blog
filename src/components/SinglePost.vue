<template>
<div class="pb-3 border-b-2 border-dashed border-gray-200">
<router-link :to="{ name: 'Details', params: {id: post.id }}">
  <h3 class="text-xl px-1 py-1 font-bold text-orange-500 mt-5 -rotate-2 mb-3">{{post.title}}</h3>
</router-link>
  <p class="text-gray-500 font-sans text-sm mb-3">{{ snippet }}</p>
  <span class="text-gray-400 uppercase tracking-tight font-semibold text-xs bg-orange-100 rounded-lg px-2 py-1 mx-1"
  v-for="tag in post.tags" :key="tag">
    <router-link :to="{ name: 'Tag', params: { tag: tag }}"> #{{tag}}</router-link>
  </span>
  </div>
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