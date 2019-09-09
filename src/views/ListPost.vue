<template>
    <div class="home">
        <h1>LIST POST</h1>
        <div v-for="(post,index) in posts" :key="post.id" @click='setClick(post)'>
            <div v-bind:id="index" v-if="post.id < 50" class="text-title"
                 :class="{evenOrder: post.id %2===0 && !post.clicked, oddOrder: post.id%2!==0 && !post.clicked,afterClick: post.clicked}">
                <h3>Id: {{ post.id }}- Title: {{ post.title }}</h3>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                posts: []
            }
        },
        mounted: function () {
            this.$http.get('https://jsonplaceholder.typicode.com/posts')
                .then(function (res) {
                    for (let i = 0; i < res.body.length; i++) {
                       res.body[i].clicked = false
                    }
                    this.posts = res.body
                }).catch(function (error) {
                console.log('Error: ', error);
            })
        },
        methods: {
            setClick(post) {
                post.clicked = true;
                console.log(this.posts)
            }
        }

    }
</script>

<style>
    .evenOrder {
        background-color: yellow;
    }

    .oddOrder {
        background-color: green;
    }
    .afterClick{
        background-color: gray;
    }
</style>
