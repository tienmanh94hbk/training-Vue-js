<template>
    <div class="card-body">
        <h1>New Post</h1>
        <form @submit.prevent="getFormValues">
            <div class="form-group" :class="{ 'form-group--error': $v.id.$error }">
                <label>
                    <input type="number" placeholder="Id" name="id" v-model.trim="$v.id.$model"/>
                </label>
            </div>
            <div class="error" v-if="!$v.id.required">Id is not required</div>
            <div class="error" v-if="!$v.id.maxLength">Id must have at longest {{$v.id.$params.maxLength.max}}
                letters.
            </div>
            <div class="form-group" :class="{ 'form-group--error': $v.userId.$error }">
                <label>
                    <input name="userId" type="number" placeholder="UserID" v-model.trim="$v.userId.$model"/>
                </label>
            </div>
            <div class="error" v-if="!$v.userId.required">UserId is not required</div>
            <div class="error" v-if="!$v.userId.maxLength">UserId must have at longest
                {{$v.userId.$params.maxLength.max}}
                letters.
            </div>
            <div class="form-group" :class="{ 'form-group--error': $v.title.$error }">
                <label>
                    <input name="title" type="text" placeholder="Title" v-model.trim="$v.title.$model"/>
                </label>
            </div>
            <div class="error" v-if="!$v.title.required">Field is required</div>
            <div class="error" v-if="!$v.title.maxLength">Tittle must have at longest {{$v.title.$params.maxLength.max}}
                letters.
            </div>
            <div class="error" v-if="!$v.title.alphaNum">Title must be characters type</div>
            <div class="form-group" :class="{ 'form-group--error': $v.body.$error }">
                <label>
                    <input name="body" type="text" placeholder="Body" v-model.trim="$v.body.$model" />
                </label>
            </div>
            <button :disabled="$v.$invalid" type="submit" id="button-save">Save Post</button>
        </form>
    </div>
</template>

<script>
    import {required, maxLength, alphaNum} from 'vuelidate/lib/validators'

    export default {
        data() {
            return {
                    id: '',
                    userId: '',
                    title: '',
                    body: '',
            }
        },
        validations: {
            id: {
                required,
                maxLength: maxLength(8)
            },
            userId: {
                required,
                maxLength: maxLength(8)
            },
            title: {
                required,
                maxLength: maxLength(256),
                alphaNum
            },
            body:{

            }
        },
        methods: {
            getFormValues: function () {
                if (!this.$v.$invalid) {
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
        font-size: 16px;
        background-color: #008cba;
    }

    .error {
        color: red;
    }
</style>
