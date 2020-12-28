import LoadingComponent from './loading';
import Vue from "vue";

let instance;

const LoadingConstructor = Vue.extend(LoadingComponent);

instance = new LoadingConstructor({
    el:document.createElement('div')
})

instance.show = false
const loading = {
    show(options = {}) {
        instance.show = true;
        if (options){
            document.getElementsByTagName('body')[0].appendChild(instance.$el);
            instance.text = options.text;
            instance.type = options.type;
        }
    },
    hide(){
        instance.show = false;
    }
};

export default {
    install() {
        if(!Vue.$loading) {
            Vue.$loading = loading;
        }
        Vue.mixin({
            created() {
                this.$loading = Vue.$loading;
            }
        })
    }
};