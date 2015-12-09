angular.module('quizApp')
  .factory('Auth', function($http, LocalService, api) {
 
    return {

      isAuthenticated: function() {
        return LocalService.get();
      },
      login: function(credentials) {
        var login = $http.post(api + '/auth/login', credentials);
        login.success(function(result) {

          LocalService.unset();
          LocalService.set(JSON.stringify(result));
        });
        login.error(function  () {

        })
        return login;
      },
      logout: function() {
        // The backend doesn't care about logouts, delete the token and you're good to go.
        LocalService.unset();
      },
      register: function(formData) {
        LocalService.unset();
      
        var register = $http.post(api + '/auth/register', formData);
        register.success(function(result) {
          LocalService.set(JSON.stringify(result));
        });
        return register;
      }
    };
  })
  .factory('AuthInterceptor', function($q, $injector) {
    var LocalService = $injector.get('LocalService');

    return {
      
      request: function(config) {
        var token;
      
        if (LocalService.get()) {
          token = angular.fromJson(LocalService.get()).token;
        }
        if (token) {
          config.headers.Authorization = 'Bearer ' + token;
          
        }
        return config;
      },
      responseError: function(response) {
        if (response.status === 401 || response.status === 403) {
          LocalService.unset();
         
        }
        return $q.reject(response);
      }
    };
  })
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');
  });