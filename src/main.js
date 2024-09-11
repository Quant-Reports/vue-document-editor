import { createApp } from 'vue'
import Demo from './Demo/Report.vue'

const app = createApp(Demo);

// enable devtools for the demo
app.config.devtools = true;

app.mount('#app');