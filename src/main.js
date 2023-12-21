import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'


import { MotionPlugin } from '@vueuse/motion'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPercent } from '@fortawesome/free-solid-svg-icons';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { faChartColumn } from '@fortawesome/free-solid-svg-icons';
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faSackDollar } from '@fortawesome/free-solid-svg-icons';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faWind } from '@fortawesome/free-solid-svg-icons';


library.add(faPercent);
library.add(faBoxOpen);
library.add(faCoins);
library.add(faChartColumn);
library.add(faClockRotateLeft);
library.add(faPlus);
library.add(faTrashCan);
library.add(faMinus);
library.add(faCircleExclamation);
library.add(faCartShopping);
library.add(faMagnifyingGlass);
library.add(faAngleRight);
library.add(faSackDollar);
library.add(faTags);
library.add(faLocationDot);
library.add(faWind);



const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);





loadFonts()

createApp(App)
  .use(MotionPlugin)

  .use(router)
  .use(store)
  .use(vuetify)
  .mount('#app')
