<template>
  <div class="max-w-xl mx-auto mt-20">
    <h1 class="text-xl font-bold uppercase text-gray-600 text-center">Home</h1>
    <div class="post-list">
      <div v-if="error" class="text-pink-500 text-center mt-5">{{error}}</div>
      <div v-else>
        <div v-if="posts.length">
          <PostList :posts="posts" />
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
import PostList from '../components/PostList.vue'
import Spinner from '../components/Spinner.vue'

export default {
  name: 'Home',
  components: { PostList, Spinner },
  setup() {
    const {posts, error, load } = getPosts()
    load()
    return { posts, error}
  }
}
  
</script>
