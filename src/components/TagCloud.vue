<template>
  <div class="tag-cloud p-3">
    <h3 class="border-b-2 border-b-gray-300 py-2 px-1">Tags</h3>
    <div class="inline-block p-2" v-for="tag in tags" :key="tag">
      <router-link class="text-gray-300" :to="{ name: 'Tag', params: { tag: tag }}">
        #{{tag}}
        </router-link>
    </div>
  </div>
</template>

<script>
import useTags from '../composables/useTags'

export default {
  props: ['posts'],
  setup(props) {
    const { tags } = useTags(props.posts)

    return { tags }
  }

}
</script>

<style>
.tag-cloud a.router-link-active {
  color: #ff8800;
  font-weight: bold;
}

</style>