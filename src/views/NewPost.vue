<template>
    <div class="card-body">
        <h1>New Post</h1>
        <form @submit.prevent="getFormValues">
            <validation-provider rules="required|numeric|max:8" v-slot="{ errors }">
                <label>
                    <input v-model="id" placeholder="Id" name="id" type="text" v-numericOnly/>
                </label>
                <p class="errors">{{ errors[0] }}</p>
            </validation-provider>
            <validation-provider rules="required|numeric|max:8" v-slot="{ errors }">
                <label>
                    <input v-model="userId" placeholder="UserId" name="userId" type="text" v-numericOnly/>
                </label>
                <p class="errors">{{ errors[0] }}</p>
            </validation-provider>
            <validation-provider rules="required|max:256|regex:[0-9a-fA-F]" v-slot="{ errors }">
                <label>
                    <input v-model="title" placeholder="title" name="title" type="text" />
                </label>
                <p class="errors">{{ errors[0] }}</p>
            </validation-provider>
            <validation-provider  v-slot="{ errors }">
                <label>
                    <input v-model="body" placeholder="body" name="body" type="text" />
                </label>
                <p class="errors">{{ errors[0] }}</p>
            </validation-provider>
            <button type="submit" id="button-save">Save Post</button>
        </form>
    </div>
</template>

<script>
    import { ValidationProvider, extend } from 'vee-validate';
    import {required, max, numeric,regex} from 'vee-validate/dist/rules';

    extend('required', {
        ...required,
        message: 'The field is required.'
    });
    extend('numeric',{
        ...numeric,
        message: 'The filed may only contain numeric characters.'
    });
    extend('max',{
        ...max,
        message: 'The filed longer limit number characters.'
    });
    extend('regex',{
        ...regex,
        message: 'The filed can not input Vietnamese letters'
    });


    export default {
        components: {
            ValidationProvider
        },
        data() {
            return {
                id: '',
                userId: '',
                title: '',
                body: '',
            }
        },
        methods: {
            getFormValues: function () {
                const post = {
                    id: this.id,
                    userId: this.userId,
                    title: this.title,
                    body: this.body
                };
                if(Object.keys(post).length) {
                    this.$router.push({
                        name: 'ListPost',
                        params: {
                            newPost: post
                        }
                    });
                }
            }
        }
    };
</script>

<style scoped>
    .card-body {
        width: 30%;
        margin: auto;
        border-radius: 5px;
        background-color: #f2f2f2;
        padding: 20px;
    }

    input[type="text"] {
        width: 100%;
        padding: 12px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        margin-top: 6px;
        margin-bottom: 16px;
        resize: vertical;
    }

    input[type="number"] {
        width: 100%;
        padding: 12px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        margin-top: 6px;
        margin-bottom: 16px;
        resize: vertical;
    }

    #button-save {
        font-size: 24px;
        background-color: blue;
        color: white;
    }

    .errors {
        color: red;
    }
</style>
