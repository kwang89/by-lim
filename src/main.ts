import { createApp } from 'vue';
import { Quasar } from 'quasar';
import quasarLang from 'quasar/lang/ko-KR';

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css';

// Import Quasar css
import 'quasar/src/css/index.sass';

import App from './App.vue';

createApp(App)
  .use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
    lang: quasarLang,
  })
  .mount('#app');
