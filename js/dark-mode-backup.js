
  if (window.matchMedia('(prefers-color-scheme: dark)').media === 'not all') {
    document.documentElement.style.display = 'none';
    document.head.insertAdjacentHTML(
        'beforeend',
        '<link rel="stylesheet" href="css/light.css" onload="document.documentElement.style.display = \'\'">'
    );
  }


        const picture = document.querySelector('picture');
        const dark = picture.querySelector('source[media="(prefers-color-scheme: dark)"]');
        const light = picture.querySelector('source[media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"]');

        const modeChange = (mode) => {
          if (mode === 'dark') {
            dark.media = 'all';
            light.media = 'none';
          } else {
            dark.media = 'none';
            light.media = 'all';
          }
        }; 

        document.addEventListener('colorschemechange', (e) => {    
          modeChange(e.detail.colorScheme);
        });

        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');              
        darkModeMediaQuery.addListener((e) => {
          if (e.matches) {
            modeChange('dark');
          } else {
            modeChange('light');
          }
        });        
