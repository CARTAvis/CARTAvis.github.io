
      const screenshotEl = document.getElementById('screenshot');
      const matchDark = window.matchMedia('(prefers-color-scheme: dark)');

      const setScreenshot = isDark =>
        (screenshotEl.src = `images/company-images/logo_github_${isDark ? 'dark' : 'light'}.png`);

      setScreenshot(matchDark.matches);

      matchDark.addListener(e => {
        setScreenshot(e.matches);
      });
