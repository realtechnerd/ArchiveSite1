let pre = document.createElement("link");
pre.rel = "stylesheet";
pre.type = "text/css";
pre.href = "../load.css";
pre.id = "style";
document.head.prepend(pre);
window.addEventListener("load", function () {
  document.getElementById("style").remove();
});
//scripting-js
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}
function greeting() {
  const time = new Date();
  const hours = time.getHours();
  const welcome = document.getElementById("welmessage");
  if (!welcome) return;
  if (hours < 12) {
    welcome.innerHTML = "Good Morning!";
  } else if (hours < 16) {
    welcome.innerHTML = "Good Afternoon!";
  } else if (hours < 20) {
    welcome.innerHTML = "Good Evening!";
  } else {
    welcome.innerHTML = "Good Night!";
  }
}
var shiftWindow = function () {
  scrollBy(0, -50);
};
window.addEventListener("hashchange", shiftWindow);
function load() {
  if (window.location.hash) shiftWindow();
}
// or for a banner:
window.addEventListener("load", function () {
  includeHTML();
  greeting();
});
(function () {
  function loadFont() {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }

  function deprecatedBanner() {
    const banner = document.createElement("div");
    banner.innerHTML = `
      <div style="
        background: linear-gradient(to right, #121212, #142a4e);
        color: oklch(87.2% .01 258.338);
        padding: 13px;
        text-align: center;
        font-family: 'Inter', sans-serif;
        font-size: 15px;
        box-shadow: 0 2px 6px rgba(0,0,0,0.3);
      ">
        This site is <span style="font-weight: 900;">archived</span>.
        Explore my new website <a href="https://realtechnerd.github.io" target="_blank" style="color: #209cee; text-decoration: underline;">here</a>.
      </div>
    `;
    document.body.prepend(banner);
  }

  window.addEventListener("load", () => {
    loadFont();
    deprecatedBanner();
  });
})();
