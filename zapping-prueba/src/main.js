import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import './style.scss';
import App from './App.vue';
import esDictionary from './locales/es.json';
import ptDictionary from './locales/pt.json';

const i18n = createI18n({
    locale: 'es',
    messages: {
      es: esDictionary,
      pt: ptDictionary,
    },
  });
  
  const app = createApp(App);
  
  app.use(i18n);

  app.provide('$i18n', i18n);
  
  app.mount('#app');