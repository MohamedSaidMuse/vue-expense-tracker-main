import { createApp } from 'vue';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import './assets/style.css';
import App from './App.vue';
import { createMq } from 'vue3-mq';

const app = createApp(App);

// Configure vue3-mq with your desired breakpoints
app.use(createMq({
  breakpoints: {
    mobile: 450,
    tablet: 900,
    laptop: 1250,
    desktop: Infinity,
  },
  defaultBreakpoint: 'mobile' // Customize this for SSR
}));

app.use(Toast);
app.mount('#app');