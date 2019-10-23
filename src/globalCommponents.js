import Head from "@/components/Head.vue";
import Footer from "@/components/Footer.vue";
// import Ditro from "@/components/Ditro.vue";

function plugin (Vue){
    if(plugin.installed) {
        return;
    }
    Vue.component('Head', Head);
    Vue.component('Footer', Footer);
    // Vue.component('Ditro', Ditro);
}

export default plugin;