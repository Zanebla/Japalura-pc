<template>
  <div>
    <label for="promptInput">Please Enter Your Prompt:</label>
    <input id="promptInput" v-model="promptText" />
    <br /><br />

    <label for="stepsSlider">Select Steps:</label>
    <input id="stepsSlider" type="range" min="1" max="100" v-model="steps" />
    <span>{{ steps }}</span>

    <br /><br />
    <button @click="generateImage">Generate Image</button>

    <div v-if="generatedImagePath">
      <img :src="generatedImagePath" alt="Generated Image" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      promptText: '',
      steps: 5,
      generatedImagePath: null
    }
  },
  methods: {
    generateImage () {
      axios.post('/api/sdapi/v1/txt2img', {
        prompt: this.promptText,
        steps: this.steps,
      })
        .then(response => {
          const imageData = response.data.images[0]
          this.generatedImagePath = `data:image/png;base64,${imageData}`
        })
        .catch(error => {
          console.error('Error generating image:', error)
        })
    },
  },
}
</script>

<style scoped>
</style>