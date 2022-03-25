<template>
  <div class="sm:max-w-2xl sm:mx-auto mt-10  p-3">
    <h1 class="text-xl font-bold uppercase text-gray-600 text-center">Home</h1>
    <div class="post-list">
      <div v-if="error" class="text-pink-500 text-center mt-5">{{error}}</div>
      <div v-else>
        <div v-if="posts.length" class="layout">
          <PostList :posts="posts" />
          <tag-cloud :posts="posts" />
        </div>
        <div v-else>
          <Spinner />
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import getPosts from '../composables/getPosts'
import TagCloud from '../components/TagCloud.vue'
import PostList from '../components/PostList.vue'
import Spinner from '../components/Spinner.vue'

export default {
  name: 'Home',
  components: { PostList, Spinner, TagCloud },
  setup() {
    const {posts, error, load } = getPosts()
    load()
    return { posts, error}
  }
}
  
</script>
<style>
  .layout {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20px;
  }

</style>
