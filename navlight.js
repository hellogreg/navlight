(function () {

  "use strict";

  // Console functions: log() and dir().
  function log(m) {
    m = (m !== undefined) ? m : "-----------------"; // If no message, output a separator line.
    console.log(m);
  }

  function dir(m) {
    if (m) {
      console.dir(m);
    } else {
      log("Object returned false.");
    }
  }


  function navlight() {

    var $navTriggers = document.getElementsByClassName("nav-triggers")[0];
    var $navLinks = document.getElementsByClassName("nav-links")[0];

    var maxMobileWidth = 720;

    function startTriggerListener() {
      $navTriggers.addEventListener("click", function (e) {

        //var $target = e.target || e.srcElement;
        e.preventDefault();
        $navLinks.classList.toggle("visible");

      }, false);
    }



    (function () {

      if (window.innerWidth < maxMobileWidth) {
        //$navLinks.classList.add("invisible");
        startTriggerListener();
      }

    }());


  }


  // Quickie DOM readiness check to initialize widget.
  if (!!(window.addEventListener)) {
    window.addEventListener("DOMContentLoaded", navlight);
  } else {
    window.attachEvent("onload", navlight);
  }

}());
