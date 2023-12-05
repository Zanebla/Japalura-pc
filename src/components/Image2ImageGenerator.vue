<template>
  <div>
    <label for="imageInput">Upload Image:</label>
    <input id="imageInput" type="file" @change="handleImageUpload" />

    <label for="promptInput">Please Enter Your Prompt:</label>
    <input id="promptInput" v-model="promptText" />
    <br /><br />

    <label for="imageStepsSlider">Select Steps:</label>
    <input
      id="imageStepsSlider"
      type="range"
      min="1"
      max="100"
      v-model="imageSteps"
    />
    <span>{{ imageSteps }}</span>

    <button @click="generateImage">Generate Image</button>

    <div v-if="generatedImage">
      <img :src="generatedImage" alt="Generated Image" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      promptText: '',
      imageSteps: 5,
      imageFiles: [],
      generatedImage: null
    }
  },
  methods: {
    handleImageUpload (event) {
      const files = event.target.files
      this.imageFiles = []

      if (files.length > 0) {
        for (const file of files) {
          // 使用FileReader将文件转换为Base64字符串
          const reader = new FileReader()
          reader.onload = (e) => {
            this.imageFiles.push(e.target.result)
          }
          reader.readAsDataURL(file)
        }
      }
    },
    generateImage () {
      axios.post('/api/sdapi/v1/img2img', {
        prompt: this.promptText,
        steps: this.imageSteps,
        init_images: this.imageFiles, // 直接传递 Base64 字符串数组
      })
        .then(response => {
          const imageData = response.data.images[0]
          this.generatedImage = `data:image/png;base64,${imageData}`
        })
        .catch(error => {
          console.error('Error generating image:', error)
        })
    }
  }
}
</script>

<style scoped>
#imageStepsSlider {
  width: 200px;
}
</style>