<template>
    <div class="colorful">
        <div class="r"></div>
        <div class="r r2"></div>
        <div class="r r3"></div>
        <div class="r r2"></div>
        <div class="r r3"></div>
        <div class="r r2"></div>
        <div class="r r3"></div>
        <div class="r r2"></div>
        <div class="r r3"></div>
        <div class="r r2"></div>
        <div class="r r3"></div>
        <div class="r r2"></div>
    </div>
</template>

<script>
  export default {
    name: "colorful",
    props:['icon','color','type'],
    mounted() {
        const that = this
        const a = Array(12)
        for (let i = 0; i < a.length; i++) {
            that.$('.r').append(`
                    <div class="a">
                    <div class="b">
                        <div class="c">

                        </div>
                    </div>
                </div>
                `)
        }
        that.$('.c').mousemove(function() {
            that.$(this).css({
                'animation': 'myfirst 1s'
            })
        }).mouseout(function() {
            setTimeout(() => {
                that.$(this).css({
                    'animation': 'none'
                })
            }, 2000);
        })
    }
  }
</script>

<style scoped>

</style>