<template>
    <div>
        <div>
            <button v-on:click="newPost()">New Post</button>
        </div>
        <h1>LIST POST</h1>
        <app-posts v-bind:post="post" v-for="post in posts" :key="post.id" v-if="post.id < 50"
                   class="text-title"></app-posts>
    </div>
</template>

<script>
    import Post from '../components/Posts'

    export default {
        components: {
            'app-posts': Post
        },
        created() {
            this.$http.get('https://jsonplaceholder.typicode.com/posts')
                .then(function (res) {
                    for (let i = 0; i < res.body.length; i++) {
                        res.body[i].clicked = false
                    }
                    this.posts = res.body;
                }).catch(function (error) {
                console.log('Error: ', error);
            }).then(() => {
                const objNewPost = this.$route.params.newPost;
                if (objNewPost) {
                    this.posts.unshift(objNewPost);
                }
            });
        },
        data() {
            return {
                posts: []
            }
        },
        methods: {
            newPost() {
                this.$router.push({
                    name: 'NewPost'
                })
            }
        }
    }
</script>

<style>
</style>
