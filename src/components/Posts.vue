<template xmlns:data="http://www.w3.org/1999/xhtml">
    <div class="home">
        <h1>LIST POST</h1>
        <div v-for="(post,index) in posts" :key="post.id" @click='sendData(post)'>
            <div v-bind:id="index" v-if="post.id < 50" class="text-title"
                 :class="{active: post.id %2===0, hide: post.id%2!==0}">
                <h3>Id: {{ post.id }}- Title: {{ post.title }}</h3>
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
            })
        },
        methods: {
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

<style scoped>
    .active {
        background-color: yellow;
    }

    .hide {
        background-color: green;
    }
</style>
