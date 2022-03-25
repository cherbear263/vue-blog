<template>
  <div v-if="error" class="text-pink-500 text-center mt-5">{{error}}</div>
  <div v-if="post" class="max-w-xl mx-auto">
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

export default {
  props: ['id'],
  components: { Spinner },
  setup(props) {
    const { post, error, load } = getPost(props.id)

    load()

    return { post, error}

  }
  
}
</script>