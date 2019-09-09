<template>
    <div>
        <div>
            <button v-on:click="newPost()">New Post</button>
        </div>
        <div class="home">
            <h1>LIST POST</h1>
            <div v-for="(post,index) in posts" :key="post.id" @click='sendData(post)'>
                <div v-bind:id="index" v-if="post.id < 50" class="text-title"
                     :class="{active: post.id %2===0, hide: post.id%2!==0}">
                    <h3>Id: {{ post.id }}- Title: {{ post.title }}</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                posts: [],
                isActive: true,
                isHide: false
            }
        },
        mounted() {
            this.$http.get('https://jsonplaceholder.typicode.com/posts')
                .then(function (res) {
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
        methods: {
            newPost() {
                this.$router.push({
                    name: 'NewPost'
                })
            },
            sendData(post) {
                this.$router.push({
                    name: 'PostDetail',
                    params: {
                        postDetail: post
                    }
                });
            }
        }
    }
</script>

<style>
    .active {
        background-color: yellow;
    }

    .hide {
        background-color: green;
    }
</style>
