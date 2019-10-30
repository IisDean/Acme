import Head from "@/components/Head.vue";
import Footer from "@/components/Footer.vue";
import Editor from "@/components/Editor.vue";
import AdminHeader from "@/components/Admin/AdminHeader.vue";

function plugin (Vue){
    if(plugin.installed) {
        return;
    }
    Vue.component('Head', Head);
    Vue.component('Footer', Footer);
    Vue.component('Editro', Editor);
    Vue.component('AdminHeader', AdminHeader);
}

export default plugin;