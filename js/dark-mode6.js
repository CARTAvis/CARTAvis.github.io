        if (window.matchMedia('(prefers-color-scheme)').media === 'not all') {
          // alert('Your browser does not support the `prefers-color-scheme` media query.');
        }
        const picture = document.querySelector('picture');
        const dark = picture.querySelector('source[media="(prefers-color-scheme: dark)"]');
        const light = picture.querySelector('source[media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"]');

        const picture2 = document.querySelector('picture2');
        const dark2 = picture2.querySelector('source[media="(prefers-color-scheme: dark)"]');
        const light2 = picture2.querySelector('source[media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"]');

        const picture3 = document.querySelector('picture3');
        const dark3 = picture3.querySelector('source[media="(prefers-color-scheme: dark)"]');
        const light3 = picture3.querySelector('source[media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"]');



        const modeChange = (mode) => {
          if (mode === 'dark') {
            dark.media = 'all';
            light.media = 'none';
          } else {
            dark.media = 'none';
            light.media = 'all';
          }
        }; 

        const modeChange2 = (mode) => {
          if (mode === 'dark') {
            dark2.media = 'all';
            light2.media = 'none';
          } else {
            dark2.media = 'none';
            light2.media = 'all';
          }
        };

        document.addEventListener('colorschemechange', (e) => {    
          modeChange(e.detail.colorScheme);
          modeChange2(e.detail.colorScheme);
        });

        document.addEventListener('colorschemechange', (e) => {
          modeChange2(e.detail.colorScheme);
        });


//        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');              
//        darkModeMediaQuery.addListener((e) => {
//          if (e.matches) {
//            modeChange('dark2');
//          } else {
//            modeChange('light2');
//          }
//        });        
