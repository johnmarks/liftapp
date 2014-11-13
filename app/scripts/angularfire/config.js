angular.module('firebase.config', [])
  .constant('FBURL', 'https://crackling-fire-7724.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password','facebook','google'])

  .constant('loginRedirectPath', '/login');