

class DarkMode {
  constructor() {
    // define some properties
    this.isActive = false;
    this.cookieTimeoutDays = 30;
    this.cookieName = "darkMode";

    this.toggleBtn = document.querySelectorAll(".js-darkmode-toggle");
    this.init();
  }

  init() {
    // get initial setting, add event listeners
    this.isActive = this.getPreference();
    this.toggleBtn.addEventListener("click", this.toggle);
  }

  getPreference() {
    // read if the user has selected a theme before,
    // otherwise fall back to media query for system defaults.
    const cookie = Cookies.get(this.cookieName);
    const systemPreference = window.matchMedia("(prefers-color-scheme: dark)")
      .matches;

    switch (cookie) {
      case "true":
        return true;
      case "false":
        return false;
      default:
        return systemPreference;
    }
  }

  toggle() {
    // switch between light and dark
    this.isActive = !this.isActive;

    // set the data attribute to trigger CSS changes
    document.documentElement.setAttribute(
      "data-theme",
      this.isActive ? "dark" : "light"
    );
    // update the cookie to save the user preference
    Cookies.set(this.cookieName, String(this.isActive), {
      expires: this.cookieTimeoutDays,
    });

    // toggle the button state for screen readers
    this.toggleBtn.setAttribute("aria-checked", String(this.isActive));
  }
}

// this feature only makes sense if CSS custom properties are supported, 
// so check for that first before we kick things off
if (window.CSS && CSS.supports("color", "var(--fake-var)")) {
  new DarkMode();
}


