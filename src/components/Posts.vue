<template>
    <div >
        <div @click='setClick(post)' :class="{active: post.id %2===0 && !post.clicked, hide: post.id%2!==0&& !post.clicked ,afterClick: post.clicked}">
            <h3>Id: {{ post.id }}- Title: {{ post.title }}</h3>
        </div>
    </div>
</template>

<script>
    export default {
        props:['post'],
        methods: {
            setClick(post) {
                post.clicked = true;
                this.$router.push({
                    name: 'PostDetail',
                    params: {
                        postDetail: post
                    }
                });
            }
        },
    }
</script>

<style scoped>
    .active {
        background-color: yellow;
    }
    .hide {
        background-color: green;
    }
    .afterClick{
        background-color: gray;
    }
</style>
