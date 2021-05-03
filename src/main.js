import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBx-I61Zf-7_OAWdDEtwVpHU8oxEX51IP8",
    authDomain: "login1-78dbb.firebaseapp.com",
    projectId: "login1-78dbb",
    storageBucket: "login1-78dbb.appspot.com",
    messagingSenderId: "261268625257",
    appId: "1:261268625257:web:a1699525deed02e5a18ff8",
    measurementId: "G-2SRQ98GB4W"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
firebase.analytics();
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
