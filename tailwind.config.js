/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        //m = mobile
        'm-f1':'240px',
        // => @media (min-width: 240px) { ... } 
        'm-f2' :'320px',
        // => @media (min-width: 240px) { ... }
        'm-f3':'360px',
        // => @media (min-width: 360px) { ... } 
        'm-f4':'375px',
        // => @media (min-width: 375px) { ... }
        'm-f5':'384px',
        // => @media (min-width: 375px) { ... }
        'm-f6':'393px',
        // => @media (min-width: 393px) { ... }
        'm-f7':'411px',
        // => @media (min-width: 411px) { ... }
        'm-f8':'412px',
        // => @media (min-width: 412px) { ... }
        'm-f9':'414px',
        // => @media (min-width: 414px) { ... }

        //tablet
        't-f1':'600px',
        // => @media (min-width: 600px) { ... }  
        't-f2': '640px',
        // => @media (min-width: 640px) { ... }
        't-f3': '688px',
        // => @media (min-width: 688px) { ... }
        't-f4': '768px',
        // => @media (min-width: 768px) { ... }
        't-f5': '800px',
        // => @media (min-width: 800px) { ... }
        't-f6': '834px',
        // => @media (min-width: 834px) { ... }

        //laptop
        'l':'1024px',
        // => @media (min-width: 1024px) { ... } 
        
        
        //desktop
        'd-f1': '1280px',
        // => @media (min-width: 1280px) { ... }
        'd-f2':'1440px',
        // => @media (min-width: 1280px) { ... } 
        'd-f3':'1680px',
        // => @media (min-width: 1280px) { ... }
        'd-f4':'1920px',
        // => @media (min-width: 1920px) { ... }
        'd-f5':'2560px'
        // => @media (min-width: 2560px) { ... }
      }
    },
  },
  plugins: [],
}
