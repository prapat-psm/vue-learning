import Header from './components/app-route/HeaderRoute.vue';
import HomePage from './components/app-route/HomeRoute.vue';
import UserPage from './components/app-route/UserRoute.vue';
import UserStart from './components/app-route/UserStart';
import UserEdit from './components/app-route/UserEdit';
import UserDetail from './components/app-route/UserDetail';

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
      { path: '', component: UserStart }, // ถ้าไม่เซ็ตค่า path ตรงนี้ มันจะวิ่งไปหา default ตัวแม่ของมัน ในที่นี้ก็คือ /user
      { path: ':id', component: UserDetail },
      { path: ':id/edit', component: UserEdit , name: 'userEdit'},
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