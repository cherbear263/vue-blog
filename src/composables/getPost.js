import { ref } from 'vue'

const getPost = (id) => {
  const post = ref(null)
  const error = ref(null)


  const load = async () => {
    try {
      // simulate delay
      await new Promise(resolve => {
        setTimeout(resolve, 2000)
      })

      const data = await fetch('http://localhost:3000/posts/' + id)
      if (!data.ok) {
        throw Error('that post does not exist')

      }
      post.value = await data.json()
      
    } catch(err) {
      // update the ref error with the thrown message
      error.value = err.message
      console.log(error.value)

    }
  }
  return { post, error, load }
}
export default getPost