<template>
    <div class="app">
        <Navbar></Navbar>
        <router-view></router-view>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
    name: 'app',
    components: {
        Navbar: defineAsyncComponent(() => import('./components/navbar'))
    }
};
</script>
