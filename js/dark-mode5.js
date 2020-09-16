//        if (window.matchMedia('(prefers-color-scheme)').media === 'not all') {
          // alert('Your browser does not support the `prefers-color-scheme` media query.');
//        }
        const picture = document.querySelector('picture');
        const dark = picture.querySelectorAll('source[media="(prefers-color-scheme: dark)"]');
        const light = picture.querySelectorAll('source[media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"]');

//        const modeChange = (mode) => {
//          if (mode === 'dark') {
//            dark.media = 'all';
//            light.media = 'none';
//          } else {
//            dark.media = 'none';
//            light.media = 'all';
//          }
//        }; 

//        document.addEventListener('colorschemechange', (e) => {    
//          modeChange(e.detail.colorScheme);
//        });

//        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');              
//        darkModeMediaQuery.addListener((e) => {
//          if (e.matches) {
//            modeChange('dark');
//          } else {
//            modeChange('light');
//          }
//        });       

//function setPicturesThemed(colorScheme = undefined) {
	// Clean up all existing picture sources that were cloned
	document.querySelectorAll('picture > source[data-cloned-theme]').forEach(el => {
		el.remove();
	});

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


	if (colorScheme) {
		// Find all picture sources with the desired colour scheme
		document.querySelectorAll(`picture > source[media*="(prefers-color-scheme: ${colorScheme})"]`).forEach(el => {
			const cloned = el.cloneNode();
			cloned.removeAttribute('media');
			cloned.setAttribute('data-cloned-theme', colorScheme);
			el.parentNode.prepend(cloned);

		});
	}
//}
