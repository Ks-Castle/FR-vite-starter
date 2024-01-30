import { type Config } from 'tailwindcss'

export const extendedTheme = {
  colors: {
    black: {
      DEFAULT: 'hsl(var(--black))',
      5: 'hsl(var(--black-5))',
      10: 'hsl(var(--black-10))',
      20: 'hsl(var(--black-20))',
      40: 'hsl(var(--black-40))',
      80: 'hsl(var(--black-80))'
    },
    white: {
      DEFAULT: 'hsl(var(--white))',
      5: 'hsl(var(--white-5))',
      10: 'hsl(var(--white-10))',
      20: 'hsl(var(--white-20))',
      40: 'hsl(var(--white-40))',
      80: 'hsl(var(--white-80))'
    },
    'theme-black': {
      DEFAULT: 'hsl(var(--theme-black))',
      5: 'hsl(var(--theme-black-5))',
      10: 'hsl(var(--theme-black-10))',
      20: 'hsl(var(--theme-black-20))',
      40: 'hsl(var(--theme-black-40))',
      80: 'hsl(var(--theme-black-80))'
    },
    'theme-white': {
      DEFAULT: 'hsl(var(--theme-white))',
      5: 'hsl(var(--theme-white-5))',
      10: 'hsl(var(--theme-white-10))',
      20: 'hsl(var(--theme-white-20))',
      40: 'hsl(var(--theme-white-40))',
      80: 'hsl(var(--theme-white-80))'
    },
    border: 'hsl(var(--border))',
    input: {
      DEFAULT: 'hsl(var(--input))',
      10: 'hsl(var(--input-10))',
      invalid: 'hsl(var(--input-invalid))'
    },
    ring: {
      DEFAULT: 'hsl(var(--ring))',
      invalid: 'hsl(var(--foreground-destructive))'
    },
    background: 'hsl(var(--background))',
    foreground: {
      DEFAULT: 'hsl(var(--foreground))',
      destructive: 'hsl(var(--foreground-destructive))'
    },
    primary: {
      DEFAULT: 'hsl(var(--primary))',
      foreground: 'hsl(var(--primary-foreground))'
    },
    secondary: {
      DEFAULT: 'hsl(var(--secondary))',
      20: 'hsl(var(--secondary-20))',
      foreground: 'hsl(var(--secondary-foreground))'
    },
    destructive: {
      DEFAULT: 'hsl(var(--destructive))',
      foreground: 'hsl(var(--destructive-foreground))'
    },
    muted: {
      DEFAULT: 'hsl(var(--muted))',
      foreground: 'hsl(var(--muted-foreground))'
    },
    accent: {
      DEFAULT: 'hsl(var(--accent))',
      foreground: 'hsl(var(--accent-foreground))'
    },
    popover: {
      DEFAULT: 'hsl(var(--popover))',
      foreground: 'hsl(var(--popover-foreground))'
    },
    card: {
      DEFAULT: 'hsl(var(--card))',
      80: 'hsl(var(--card-80))',
      highlight: 'hsl(var(--card-highlight))',
      foreground: 'hsl(var(--card-foreground))'
    }
  },
  borderColor: {
    DEFAULT: 'hsl(var(--border))'
  },
  borderRadius: {
    lg: 'var(--radius)',
    md: 'calc(var(--radius) - 2px)',
    sm: 'calc(var(--radius) - 4px)'
  },
  fontSize: {
    // 1rem = 16px
    /** 80px size / 84px high / bold */
    mega: ['5rem', { lineHeight: '5.25rem', fontWeight: '700' }],
    /** 56px size / 62px high / bold */
    h1: ['3.5rem', { lineHeight: '3.875rem', fontWeight: '700' }],
    /** 40px size / 48px high / bold */
    h2: ['2.5rem', { lineHeight: '3rem', fontWeight: '700' }],
    /** 32px size / 36px high / bold */
    h3: ['2rem', { lineHeight: '2.25rem', fontWeight: '700' }],
    /** 28px size / 36px high / bold */
    h4: ['1.75rem', { lineHeight: '2.25rem', fontWeight: '700' }],
    /** 24px size / 32px high / bold */
    h5: ['1.5rem', { lineHeight: '2rem', fontWeight: '700' }],
    /** 16px size / 20px high / bold */
    h6: ['1rem', { lineHeight: '1.25rem', fontWeight: '700' }],

    /** 32px size / 36px high / normal */
    'body-2xl': ['2rem', { lineHeight: '2.25rem' }],
    /** 28px size / 36px high / normal */
    'body-xl': ['1.75rem', { lineHeight: '2.25rem' }],
    /** 24px size / 32px high / normal */
    'body-lg': ['1.5rem', { lineHeight: '2rem' }],
    /** 20px size / 28px high / normal */
    'body-md': ['1.25rem', { lineHeight: '1.75rem' }],
    /** 16px size / 20px high / normal */
    'body-sm': ['1rem', { lineHeight: '1.25rem' }],
    /** 14px size / 18px high / normal */
    'body-xs': ['0.875rem', { lineHeight: '1.125rem' }],
    /** 12px size / 16px high / normal */
    'body-2xs': ['0.75rem', { lineHeight: '1rem' }],

    /** 18px size / 24px high / semibold */
    caption: ['1.125rem', { lineHeight: '1.5rem', fontWeight: '600' }],
    /** 12px size / 16px high / bold */
    button: ['0.75rem', { lineHeight: '1rem', fontWeight: '700' }]
  },
  backgroundImage: {
    'gradient-card':
      'linear-gradient(0deg, hsl(var(--theme-white-40)) 0%, hsl(var(--theme-white-40)) 100%)'
  }
} satisfies Config['theme']
