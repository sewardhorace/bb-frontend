'use strict';

Date.prototype.toDateInputValue = (function() {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
});

window.onload = function(){
  document.getElementById("date").value = new Date().toDateInputValue();
};

//broken! doesn't load at correct time (element with id "date" not available)
