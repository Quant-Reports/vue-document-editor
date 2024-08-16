import { createApp } from 'vue'
import Report from './Demo/Report.vue'

const app = createApp(Report);

app.config.devtools = true;

app.mount('#app');