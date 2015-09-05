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

    log("navlight() activated!");
    dir(navlight);

  }


  // Quickie DOM readiness check to initialize widget.
  if (!!(window.addEventListener)) {
    window.addEventListener("DOMContentLoaded", navlight);
  } else {
    window.attachEvent("onload", navlight);
  }

}());
