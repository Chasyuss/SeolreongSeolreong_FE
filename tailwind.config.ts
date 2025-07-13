/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
    extend: {
      fontFamily: {
        Pretendard: ['Pretendard'],
      },
      colors: {
        /** Primary **/
        'green-01': '#016956',
        'green-02': '#066D50',
        'green-03': '#19854F',
        'green-04': '#00905B',
        'green-05': '#0C9F60',
        'green-06': '#20AE66',
        'green-07': '#68CA6F',
        'green-08': '#7CD58F',
        'green-09': '#8CE090',
      

        /** red **/
        'red-01': '#A31A27',
        'red-02': '#C60010',
        'red-03': '#D1212F',
        'red-04': '#E32938',
        'red-05': '#EF4452',
        'red-06': '#F56570',
        'red-07': '#FF8293',
        'red-08': '#FDAFB4',
        'red-09': '#FFCAC5',

        /** gray **/
       'gray-01': '#191F28',
       'gray-02': '#2E2E2E',
       'gray-03': '#373737',
       'gray-04': '#474747',
       'gray-05': '#636363',
       'gray-06': '#828282',
       'gray-07': '#ACACAC',
       'gray-08': '#C9C9C9',
       'gray-09': '#E6E6E6',
       'gray-10': '#F0F0F0',

       'black' : '#000000',
       'white' : '#FFFFFF'

        
      },
    },
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        '.font-default': {
          'font-family': 'Pretendard',
        },
        '.font-glyph32-B': {
          '@apply font-default font-bold': {},
          fontSize: '32px',
          lineHeight: '48px',
          letterSpacing: '-1px',
        },
        '.font-glyph32-SB': {
          '@apply font-default font-semibold': {},
          fontSize: '32px',
          lineHeight: '48px',
          letterSpacing: '-1px',
        },
        '.font-glyph32-R': {
          '@apply font-default font-medium': {},
          fontSize: '32px',
          lineHeight: '48px',
          letterSpacing: '-1px',
        },
         '.font-glyph28-B': {
          '@apply font-default font-bold': {},
          fontSize: '28px',
          lineHeight: '38px',
          letterSpacing: '-1px',
        },
        '.font-glyph28-SB': {
          '@apply font-default font-semibold': {},
          fontSize: '28px',
          lineHeight: '38px',
          letterSpacing: '-1px',
        },
        '.font-glyph28-R': {
          '@apply font-default font-medium': {},
          fontSize: '28px',
          lineHeight: '38px',
          letterSpacing: '-1px',
        },
         '.font-glyph24-B': {
          '@apply font-default font-bold': {},
          fontSize: '24px',
          lineHeight: '32px',
          letterSpacing: '-0.6px',
        },
        '.font-glyph24-SB': {
          '@apply font-default font-semibold': {},
          fontSize: '24px',
          lineHeight: '32px',
          letterSpacing: '-0.6px',
        },
        '.font-glyph24-R': {
          '@apply font-default font-medium': {},
          fontSize: '24px',
          lineHeight: '32px',
          letterSpacing: '-0.6px',
        },
        '.font-glyph22-B': {
          '@apply font-default font-bold': {},
          fontSize: '22px',
          lineHeight: '30px',
          letterSpacing: '-0.6px',
        },
        '.font-glyph22-SB': {
          '@apply font-default font-semibold': {},
          fontSize: '22px',
          lineHeight: '30px',
          letterSpacing: '-0.6px',
        },
        '.font-glyph22-R': {
          '@apply font-default font-medium': {},
          fontSize: '22px',
          lineHeight: '30px',
          letterSpacing: '-0.6px',
        },
        '.font-glyph20-B': {
          '@apply font-default font-bold': {},
          fontSize: '20px',
          lineHeight: '28px',
          letterSpacing: '-0.6px',
        },
        '.font-glyph20-SB': {
          '@apply font-default font-semibold': {},
          fontSize: '20px',
          lineHeight: '28px',
          letterSpacing: '-0.6px',
        },
        '.font-glyph20-R': {
          '@apply font-default font-medium': {},
          fontSize: '20px',
          lineHeight: '28px',
          letterSpacing: '-0.6px',
        },
        '.font-glyph18-B': {
          '@apply font-default font-bold': {},
          fontSize: '18px',
          lineHeight: '26px',
          letterSpacing: '-0.6px',
        },
        '.font-glyph18-SB': {
          '@apply font-default font-semibold': {},
          fontSize: '18px',
          lineHeight: '26px',
          letterSpacing: '-0.6px',
        },
        '.font-glyph18-R': {
          '@apply font-default font-medium': {},
          fontSize: '18px',
          lineHeight: '26px',
          letterSpacing: '-0.6px',
        },
        '.font-glyph16-B': {
          '@apply font-default font-bold': {},
          fontSize: '16px',
          lineHeight: '24px',
          letterSpacing: '-0.6px',
        },
        '.font-glyph16-SB': {
          '@apply font-default font-semibold': {},
          fontSize: '16px',
          lineHeight: '24px',
          letterSpacing: '-0.6px',
        },
        '.font-glyph16-R': {
          '@apply font-default font-medium': {},
          fontSize: '16px',
          lineHeight: '24px',
          letterSpacing: '-0.6px',
        },
        '.font-glyph15-B': {
          '@apply font-default font-bold': {},
          fontSize: '15px',
          lineHeight: '22px',
          letterSpacing: '-0.6px',
        },
        '.font-glyph15-SB': {
          '@apply font-default font-semibold': {},
          fontSize: '15px',
          lineHeight: '22px',
          letterSpacing: '-0.6px',
        },
        '.font-glyph15-R': {
          '@apply font-default font-medium': {},
          fontSize: '15px',
          lineHeight: '22px',
          letterSpacing: '-0.6px',
        },
        '.font-glyph14-B': {
          '@apply font-default font-bold': {},
          fontSize: '14px',
          lineHeight: '20px',
          letterSpacing: '-0.4px',
        },
        '.font-glyph14-SB': {
          '@apply font-default font-semibold': {},
          fontSize: '14px',
          lineHeight: '20px',
          letterSpacing: '-0.4px',
        },
        '.font-glyph14-R': {
          '@apply font-default font-medium': {},
          fontSize: '14px',
          lineHeight: '20px',
          letterSpacing: '-0.4px',
        },
        '.font-glyph12-B': {
          '@apply font-default font-bold': {},
          fontSize: '12px',
          lineHeight: '16px',
          letterSpacing: '-0.4px',
        },
        '.font-glyph12-SB': {
          '@apply font-default font-semibold': {},
          fontSize: '12px',
          lineHeight: '16px',
          letterSpacing: '-0.4px',
        },
        '.font-glyph12-R': {
          '@apply font-default font-medium': {},
          fontSize: '12px',
          lineHeight: '16px',
          letterSpacing: '-0.4px',
        },
        '.font-glyph11-B': {
          '@apply font-default font-bold': {},
          fontSize: '11px',
          lineHeight: '14px',
          letterSpacing: '-0.4px',
        },
        '.font-glyph11-SB': {
          '@apply font-default font-semibold': {},
          fontSize: '11px',
          lineHeight: '14px',
          letterSpacing: '-0.4px',
        },
        '.font-glyph11-R': {
          '@apply font-default font-': {},
          fontSize: '11px',
          lineHeight: '14px',
          letterSpacing: '-0.4px',
        },
     
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
      });
    },
  ],
};

