import App from './App.vue'
import {createMemoryHistory, createRouter, createWebHashHistory} from "vue-router";
import Card from "@/components/cards/Card.vue";
import Main from "@/components/main/Main.vue";


const routes = [
    {path: '/', name: 'main', component: Main},
    {path: '/test',name:'test',component: Card}
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router