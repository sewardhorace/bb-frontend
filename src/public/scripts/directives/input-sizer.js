'use strict';

angular.module('trackerApp')
.directive('inputSizer', function($timeout){
  return {
    restrict:'A',
    require:'ngModel',
    scope:{
      listener:'=listen'
    },
    link: function(scope, elem, attrs, ctrl){
      var onInputChange = function(){
        var text = elem.val();
        if (text.length === 0){
          if (attrs.placeholder){
            text = attrs.placeholder;
          }
        }
        var classes = attrs.class;
        var p = angular.element(document.createElement('p'));
        p.addClass(classes);//do i need to loop for multiple classes?
        var style = {
          "display":"inline-block",
          "white-space":"pre",
          "width":"auto"
        };
        p.css(style);
        p.text(text);
        elem.parent().append(p);
        var width = p[0].offsetWidth;
        p.remove();
        style = {
          width: width+4+'px'
        };
        elem.css(style);
      };

      scope.$watch('listener', function(newValue, oldValue){
        if (newValue !== oldValue) {
          $timeout(function () {
            onInputChange();
          }, 1); //delay necessary for some reason
        }
      });

      scope.$on('valueChanged', function(event, options){
        $timeout(function () {
          onInputChange();
        }, 1);
      });

      // scope.$watch('ctrl.$modelValue', function(newValue, oldValue){
      //   console.log("watcher ran");
      //   if (newValue !== oldValue) {
      //   }
      // });

      ctrl.$viewChangeListeners.push(onInputChange);
    }
  };
});
