<template>
  <div class="max-w-xl mx-auto mt-20">
    <h1 class="text-xl font-bold uppercase text-gray-600 text-center">Home</h1>
    <div class="post-list">
      <div v-if="error" class="text-pink-500 text-center mt-5">{{error}}</div>
      <div v-else>
        <div v-if="posts.length">
          <PostList :posts="posts" />
        </div>
        <div v-else>Loading ...</div>
      </div>
      
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {ref} from 'vue'
import PostList from '../components/PostList.vue'

export default {
  name: 'Home',
  components: { PostList },
  setup() {
    const posts = ref([])
    const error = ref(null)
  

    const load = async () => {
      try {

        const data = await fetch('http://localhost:3000/posts')
        if (!data.ok) {
          throw Error('no data available')

        }
        posts.value = await data.json()
        
      } catch(err) {
        // update the ref error with the thrown message
        error.value = err.message
        console.log(error.value)

      }
    }
    load()
    return { posts, error}
  }
}
  
</script>
