<template>
  <div class="max-w-xl mx-auto mt-20">
    <h1 class="text-xl font-bold uppercase text-gray-600 text-center">Home</h1>
    <div class="post-list">
      <PostList v-if="showPosts" :posts="posts" />
      <div class="flex gap-2 justify-center">
        <button class="bg-cyan-400 text-gray-600 mt-10 font-semibold px-3 py-2 rounded-md" @click="showPosts = !showPosts">toggle posts</button>
        <button class="bg-pink-400 text-gray-600 mt-10 font-semibold px-3 py-2 rounded-md" @click="posts.pop()">delete a post</button>

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
    const posts = ref([
      { title: 'welcome to the blog', 
        body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
        id: 1},
      { title: 'top 5 CSS tips', body: 'lorem ipusm', id: 2},
    ])
    const showPosts = ref(true)

    return { posts, showPosts }
  }
}
</script>
