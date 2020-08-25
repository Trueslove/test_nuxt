
<template>
    <div>test</div>
</template>
<script>
export default {
    asyncData({params}) {
        const slug = params.slug;
        const test = params.test;
        console.log(slug, test)
        return {slug, test}
    }
}
</script>