<template>
    <div class="demo">
        <input type="text" v-model="value">
        <span @click="serch">搜索</span>
    </div>
</template>

<script>
    export default {
        name: "fkl-input",
        data () {
            return {
                value: ''
            }
        },
        methods: {
            serch () {
                alert(this.value);
                this.$emit('click', this.value)
            }
        }
    }
</script>

<style scoped>
    .demo input {
        padding: 10px;
        box-sizing: border-box;
        border-radius: 5px;
        outline:none;
        border:1px solid gray;
    }
    .demo span {
        padding: 10px;
        box-sizing: border-box;
        cursor: pointer;
        margin-left: 10px;
        display: inline-block;
        background: #42b983;
        color: #ffffff;
        border-radius: 5px;

    }
</style>