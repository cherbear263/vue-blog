<template>
  <div class="max-w-xl mx-auto mt-10  p-3">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="postsWithTag" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import getPosts from '../composables/getPosts'
import PostList from '../components/PostList.vue'
import Spinner from '../components/Spinner.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

export default {
 name: 'Tag',
  components: { PostList, Spinner },
  setup() {
    const route = useRoute()
    const {posts, error, load } = getPosts()
    load()

    const postsWithTag = computed(() => {
      return posts.value.filter((p) => p.tags.includes(route.params.tag))
    })
    return { error, posts, postsWithTag }
  }
}
</script>

<style>

</style>