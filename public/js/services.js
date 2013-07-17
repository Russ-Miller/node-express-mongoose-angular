'use strict';

/* Services asdf */
angular.module('blogcatServices', ['ngResource']).
    factory('Articles', function($resource){
  return $resource('articles/:verb', {}, {
    query: {method:'GET', params:{verb: 'indexJSON'}, isArray:true},
    delete: {method:'DELETE', params:{verb: 'destroy'}}
  });
});

