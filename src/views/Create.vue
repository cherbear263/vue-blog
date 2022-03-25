<template>
  <div class="create">
    <form @submit.prevent="handleSubmit">
    <label class="inline-block relative text-lg text-white mt-3 bg-orange-500 px-3 py-1 rounded-sm mb-3 rotate-3">Title: </label>
      <input v-model="title" type="text" required />
      <label  class="inline-block relative text-lg text-white mt-3 bg-orange-500 px-3 py-1 rounded-sm mb-3 -rotate-3">Content: </label>
      <textarea v-model="body" required></textarea>
      <label  class="inline-block relative text-lg text-white mt-3 bg-orange-500 px-3 py-1 rounded-sm mb-3 rotate-3">Tags (hit enter to add a tag)</label>
      <input 
        v-model="tag" 
        type="text"
        @keydown.enter.prevent="handleKeydown">
        <div v-for="tag in tags" :key="tag" class="pill">
          #{{ tag }}
        </div>
      <button 
        class="block bg-orange-500 px-3 py-2 rounded-sm text-white mt-3 w-full hover:bg-orange-600 mx-auto"
        type="submit"
        >Add Post</button>
    </form>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  setup() {
    const title = ref('')
    const body = ref('')
    const tag = ref('')
    const tags = ref([])

    const handleKeydown = () => {
      if (!tags.value.includes(tag.value)) {
        tag.value = tag.value.replace(/\s/, '') // removes all white space
        tags.value.push(tag.value)
      }
      tag.value = ''
    }

    const handleSubmit = async () => {
      const post = {
        title: title.value,
        body: body.value,
        tags: tags.value
      }
      await fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(post)
      })
    }

    return { title, body, tag, handleKeydown, tags, handleSubmit }
  }
}
</script>

<style>
form {
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
}
input, textarea {
  display: block;
  width: 100%;
  margin: 10px 0;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #eee;
}
textarea {
  height: 160px;

}

label::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: #ff8800;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotatez(-1.5deg);
}
button {
  display: block;
  margin-top: 30px;
  background: #ff8800;
}
.pill {
  display: inline-block;
  margin: 10px 10px 0 0;
  color: #444;
  background: #ddd;
  padding: 8px;
  border-radius: 20px;
  font-size: 14px;
}

</style>