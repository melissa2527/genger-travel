import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: teal;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

/* @link https://utopia.fyi/space/calculator?c=320,16,1.067,1440,32,1.067,5,2,1280&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l */

:root {
  --fluid-min-width: 320;
  --fluid-max-width: 1440;

  --fluid-screen: 100vw;
  --fluid-bp: calc((var(--fluid-screen) - var(--fluid-min-width) / 16 * 1rem) / (var(--fluid-max-width) - var(--fluid-min-width)));

  /* typography */
  --f--2-min: 12.64;
  --f--2-max: 20.54;
  --size--2: calc(
    ((var(--f--2-min) / 16) * 1rem) + (var(--f--2-max) - var(--f--2-min)) *
      var(--fluid-bp)
  );

  --f--1-min: 14.22;
  --f--1-max: 23.11;
  --size--1: calc(
    ((var(--f--1-min) / 16) * 1rem) + (var(--f--1-max) - var(--f--1-min)) *
      var(--fluid-bp)
  );

  --f-0-min: 16.00;
  --f-0-max: 26.00;
  --size-0: calc(
    ((var(--f-0-min) / 16) * 1rem) + (var(--f-0-max) - var(--f-0-min)) *
      var(--fluid-bp)
  );

  --f-1-min: 18.00;
  --f-1-max: 29.25;
  --size-1: calc(
    ((var(--f-1-min) / 16) * 1rem) + (var(--f-1-max) - var(--f-1-min)) *
      var(--fluid-bp)
  );

  --f-2-min: 20.25;
  --f-2-max: 32.91;
  --size-2: calc(
    ((var(--f-2-min) / 16) * 1rem) + (var(--f-2-max) - var(--f-2-min)) *
      var(--fluid-bp)
  );

  --f-3-min: 22.78;
  --f-3-max: 37.02;
  --size-3: calc(
    ((var(--f-3-min) / 16) * 1rem) + (var(--f-3-max) - var(--f-3-min)) *
      var(--fluid-bp)
  );

  --f-4-min: 25.63;
  --f-4-max: 60;
  --size-4: calc(
    ((var(--f-4-min) / 16) * 1rem) + (var(--f-4-max) - var(--f-4-min)) *
      var(--fluid-bp)
  );

  --f-5-min: 32;
  --f-5-max: 80;
  --size-5: calc(
    ((var(--f-5-min) / 16) * 1rem) + (var(--f-5-max) - var(--f-5-min)) *
      var(--fluid-bp)
  );
}

@media screen and (min-width: 1440px) {
  :root {
    --fluid-screen: calc(var(--fluid-max-width) * 1px);
  }
}

:root {
  --fc-3xs-min: (var(--fc-s-min) * 0.25); 
  --fc-3xs-max: (var(--fc-s-max) * 0.25);

  --fc-2xs-min: (var(--fc-s-min) * 0.5); 
  --fc-2xs-max: (var(--fc-s-max) * 0.5);

  --fc-xs-min: (var(--fc-s-min) * 0.75); 
  --fc-xs-max: (var(--fc-s-max) * 0.75);

  --fc-s-min: (var(--f-0-min, 16)); 
  --fc-s-max: (var(--f-0-max, 32));

  --fc-m-min: (var(--fc-s-min) * 1.5); 
  --fc-m-max: (var(--fc-s-max) * 1.5);

  --fc-l-min: (var(--fc-s-min) * 2); 
  --fc-l-max: (var(--fc-s-max) * 2);

  --fc-xl-min: (var(--fc-s-min) * 3); 
  --fc-xl-max: (var(--fc-s-max) * 3);

  --fc-2xl-min: (var(--fc-s-min) * 4); 
  --fc-2xl-max: (var(--fc-s-max) * 4);

  --fc-3xl-min: (var(--fc-s-min) * 6); 
  --fc-3xl-max: (var(--fc-s-max) * 6);

  /* T-shirt sizes */
  --space-3xs: calc(((var(--fc-3xs-min) / 16) * 1rem) + (var(--fc-3xs-max) - var(--fc-3xs-min)) * var(--fluid-bp));
  --space-2xs: calc(((var(--fc-2xs-min) / 16) * 1rem) + (var(--fc-2xs-max) - var(--fc-2xs-min)) * var(--fluid-bp));
  --space-xs: calc(((var(--fc-xs-min) / 16) * 1rem) + (var(--fc-xs-max) - var(--fc-xs-min)) * var(--fluid-bp));
  --space-s: calc(((var(--fc-s-min) / 16) * 1rem) + (var(--fc-s-max) - var(--fc-s-min)) * var(--fluid-bp));
  --space-m: calc(((var(--fc-m-min) / 16) * 1rem) + (var(--fc-m-max) - var(--fc-m-min)) * var(--fluid-bp));
  --space-l: calc(((var(--fc-l-min) / 16) * 1rem) + (var(--fc-l-max) - var(--fc-l-min)) * var(--fluid-bp));
  --space-xl: calc(((var(--fc-xl-min) / 16) * 1rem) + (var(--fc-xl-max) - var(--fc-xl-min)) * var(--fluid-bp));
  --space-2xl: calc(((var(--fc-2xl-min) / 16) * 1rem) + (var(--fc-2xl-max) - var(--fc-2xl-min)) * var(--fluid-bp));
  --space-3xl: calc(((var(--fc-3xl-min) / 16) * 1rem) + (var(--fc-3xl-max) - var(--fc-3xl-min)) * var(--fluid-bp));
  
  /* One-up pairs */
  --space-3xs-2xs: calc(((var(--fc-3xs-min) / 16) * 1rem) + (var(--fc-2xs-max) - var(--fc-3xs-min)) * var(--fluid-bp));
  --space-2xs-xs: calc(((var(--fc-2xs-min) / 16) * 1rem) + (var(--fc-xs-max) - var(--fc-2xs-min)) * var(--fluid-bp));
  --space-xs-s: calc(((var(--fc-xs-min) / 16) * 1rem) + (var(--fc-s-max) - var(--fc-xs-min)) * var(--fluid-bp));
  --space-s-m: calc(((var(--fc-s-min) / 16) * 1rem) + (var(--fc-m-max) - var(--fc-s-min)) * var(--fluid-bp));
  --space-m-l: calc(((var(--fc-m-min) / 16) * 1rem) + (var(--fc-l-max) - var(--fc-m-min)) * var(--fluid-bp));
  --space-l-xl: calc(((var(--fc-l-min) / 16) * 1rem) + (var(--fc-xl-max) - var(--fc-l-min)) * var(--fluid-bp));
  --space-xl-2xl: calc(((var(--fc-xl-min) / 16) * 1rem) + (var(--fc-2xl-max) - var(--fc-xl-min)) * var(--fluid-bp));
  --space-2xl-3xl: calc(((var(--fc-2xl-min) / 16) * 1rem) + (var(--fc-3xl-max) - var(--fc-2xl-min)) * var(--fluid-bp));

  /* Custom pairs */
  --space-s-l: calc(((var(--fc-s-min) / 16) * 1rem) + (var(--fc-l-max) - var(--fc-s-min)) * var(--fluid-bp));
}`;

export default GlobalStyle;
