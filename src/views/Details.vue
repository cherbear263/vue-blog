<template>
  <div v-if="error" class="text-pink-500 text-center mt-5">{{error}}</div>
  <div v-if="post" class="max-w-2xl mx-auto">
    <h3 class="text-xl font-bold text-gray-500 mt-5">{{ post.title }}</h3>
    <p class="text-gray-500 leading-5 mt-3 whitespace-pre-wrap">{{post.body}}</p>
  </div>
  <div v-else>
    <spinner />
  </div>
</template>

<script>
import getPost from '../composables/getPost'
import Spinner from '../components/Spinner.vue'
import { useRoute } from 'vue-router'

export default {
  props: ['id'],
  components: { Spinner },
  setup(props) {
    const route = useRoute()
    console.log(route)
    const { post, error, load } = getPost(route.params.id)

    load()

    return { post, error}

  }
  
}
</script>