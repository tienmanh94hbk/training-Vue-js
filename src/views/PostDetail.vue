<template>
    <div id="single-post">
        <h1>Post Detail</h1>
        <h2>ID: {{post.id}}</h2>
        <h2>UserId: {{post.userId}}</h2>
        <h2>Title: {{post.title}}</h2>
        <h2>Body: {{post.body}}</h2>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                post: {}
            }
        },
        created() {
            this.post = this.$route.params.postDetail;
        }
    }
</script>

