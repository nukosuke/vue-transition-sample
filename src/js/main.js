require('style.scss');

var Vue       = require('vue');
var VueRouter = require('vue-router');

Vue.use(VueRouter);

/* コンポーネント登録 */
var components = {};
components.root = Vue.extend({});

components.tab = Vue.component('tab', {
  template: '#tab'
});

components.home = Vue.component('home', {
  template: '#home'
});

components.p1 = Vue.component('page-1', {
  template: '#page-1'
});

components.p2 = Vue.component('page-2', {
  template: '#page-2'
});

/* トランジションの登録 */
Vue.transition('page', {
  enterClass: 'fadeInUp',
  leaveClass: 'slideOutRight',
});

/* routeのマッピング */
var router = new VueRouter();
router.redirect({ '/': '/home' });
router.map({
  '/home': {
    component: components.home,
  },
  '/page-1': {
    component: components.p1,
  },
  '/page-2': {
    component: components.p2,
  },
});

/* アプリケーションの開始 */
router.start(components.root, '#root');
