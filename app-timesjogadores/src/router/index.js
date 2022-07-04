import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import LivrosView from '@/views/LivrosView.vue';
import AutoresView from '@/views/AutoresView.vue';
import EditorasView from '@/views/EditorasView.vue';
import CategoriasView from '@/views/CategoriasView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/livros', name: 'livros', component: LivrosView },
    { path: '/autores', name: 'autores', component: AutoresView },
    { path: '/editoras', name: 'editoras', component: EditorasView },
    { path: '/categorias', name: 'categorias', component: CategoriasView },

  ],
});

export default router
