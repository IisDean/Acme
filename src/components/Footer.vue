<template>
    <div class="footer-wrap text-center box-s">
        <p class="foot-p">{{ en }}</p>
        <p class="foot-p">{{ cn }}</p>
    </div>
</template>
<script>
export default {
    data (){
        return {
            en: 'COPYRIGHT © 2019 – 2019 IisDean. ALL RIGHTS RESERVED.',
            cn: '叫我院长保留所有权利'
        }
    }
}
</script>
<style scope>
    .footer-wrap {
        padding: 20px 0;
    }
    .foot-p {
        line-height: 20px;
    }
</style>