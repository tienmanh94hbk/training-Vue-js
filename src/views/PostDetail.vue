<template>
  <div>
    <h1>POST DETAIL PAGE</h1>
    <button @click="backPage">Back</button>
  </div>
</template>

<script>
  export default {
    methods: {
      backPage: function () {
        this.$router.push('/').catch();
      }
    }
  }
</script>
