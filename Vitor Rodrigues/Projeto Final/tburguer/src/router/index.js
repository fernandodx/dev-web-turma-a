<<<<<<< HEAD
import { createRouter, createWebHistory } from "vue-router";
import MenuView from "@/views/MenuView.vue";
import ConfiguracaoPedidoView from "@/views/ConfiguracaoPedidoView.vue";
import PedidosView from "@/views/PedidosView.vue";
const routes = [
  {
    path: "/",
    name: "menu",
    component: MenuView,
  },
  {
    path: "/menu",
    name: "menu",
    component: MenuView,
  },
  {
    path: "/pedidos",
    name: "pedidos",
    component: PedidosView,
  },
  {
    path: "/config",
    name: "config",
    component: ConfiguracaoPedidoView,
  },
];
=======
import { createRouter, createWebHistory } from 'vue-router'
import MenuView from '@/views/MenuView.vue'
import ConfiguracaoPedidoView from '@/views/ConfiguracaoPedidoView.vue'
import PedidosView from '@/views/PedidosView.vue'
const routes = [
  {
    path: '/',
    name: 'menu',
    component: MenuView
  },
   {
    path: '/menu',
    name: 'menu',
    component: MenuView
  },
   {
    path: '/pedidos',
    name: 'pedidos',
    component: PedidosView
  },
   {
    path: '/config',
    name: 'config',
    component: ConfiguracaoPedidoView
  },
 
]
>>>>>>> 77b102aa185a10e650b8bd32a6b6d5855491b155

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
