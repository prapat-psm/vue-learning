/* eslint-disable */

import Header from './components/app-route/HeaderRoute.vue';
import HomePage from './components/app-route/HomeRoute.vue';
// import UserPage from './components/app-route/UserRoute.vue';
// import UserStart from './components/app-route/UserStart';
// import UserEdit from './components/app-route/UserEdit';
// import UserDetail from './components/app-route/UserDetail';

const UserPage = resolve => {
  require.ensure(['./components/app-route/UserRoute.vue'], () => {
    resolve(require('./components/app-route/UserRoute.vue'))
  }, 'user'); // " }, 'user' " คือการกำหนดชื่อกรุ๊ปรวม
};

const UserStart = resolve => {
  require.ensure(['./components/app-route/UserStart.vue'], () => {
    resolve(require('./components/app-route/UserStart.vue'))
  }, 'user');
};

const UserEdit = resolve => {
  require.ensure(['./components/app-route/UserEdit.vue'], () => {
    resolve(require('./components/app-route/UserEdit.vue'))
  }, 'user');
};

const UserDetail = resolve => {
  require.ensure(['./components/app-route/UserDetail.vue'], () => {
    resolve(require('./components/app-route/UserDetail.vue'))
  }, 'user');
};

export const routes = [
  {
    path: '',
    components: {
      default: HomePage,
      'header-top': Header
    },
    name: 'home'
  },
  {
    path: '/user',
    components: {
      default: UserPage,
      'header-bottom': Header
    },
    children: [
      {
        path: '', // ถ้าไม่เซ็ตค่า path ตรงนี้ มันจะวิ่งไปหา default ตัวแม่ของมัน ในที่นี้ก็คือ /user
        component: UserStart
      },
      {
        path: ':id',
        component: UserDetail,
        beforeEnter: (to, from, next) => {
          console.log('Inside route.js before enter');
          next();
        }
      },
      {
        path: ':id/edit',
        component: UserEdit , name: 'userEdit'
      },
    ]
  },
  {
    path: '/redirect-me',
    redirect: { name: 'home' },
  },
  {
    // error catch all
    path: '*',
    redirect: { name: 'home' },
  }
];