import Head from "@/components/Head.vue";
import Footer from "@/components/Footer.vue";

function plugin (Vue){
    if(plugin.installed) {
        return;
    }
    Vue.component('Head', Head);
    Vue.component('Footer', Footer);
}

export default plugin;