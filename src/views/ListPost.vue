<template>
  <div>
    <p>LIST POST</p>
    <button @click="movePage">Next</button>
  </div>
</template>

<script>
  export default {
    methods: {
      movePage: function () {
        this.$router.push('/PostDetail').catch();
      }
    }
  }
</script>
