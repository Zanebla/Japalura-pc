<template>
  <div>
    <h1>Japalura Demo 🦎</h1>
    <p>This is a fantastic application for Image Processing</p>
    <router-link to="/text-to-image"
      >Get Started with Text to Image</router-link
    >
    <router-link to="/image-to-image"
      >Try Image to Image Generation</router-link
    >
  </div>
</template>

<script>
export default {

}
</script>

<style>
h1 {
  font-size: 2em;
  margin-bottom: 20px;
}

p {
  font-size: 1.2em;
  margin-bottom: 30px;
}

router-link {
  display: block;
  margin-bottom: 10px;
  text-decoration: none;
  color: #428bca;
  font-weight: bold;
}
</style>