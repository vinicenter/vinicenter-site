import { createApp } from 'vue';
import '@popperjs/core';
import 'bootstrap';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all';

import App from './App.vue';
import router from './router';

createApp(App).use(router).mount('#app');
