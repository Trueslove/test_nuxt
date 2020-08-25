
<template>
    <div>{{this.test}}</div>
</template>
<script>
export default {
    async asyncData({params}) {
        const slug = '你好';
        
        return { slug };
    }
}
</script>