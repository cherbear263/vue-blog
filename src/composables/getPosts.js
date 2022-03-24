import {ref} from 'vue'

const getPosts = () => {
  
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
  return { posts, error, load }

}

export default getPosts