import {createRouter, createWebHistory} from 'vue-router';
import routes from './routes';

const routerHistory = createWebHistory();

export default createRouter({
    history: routerHistory,
    routes
});
