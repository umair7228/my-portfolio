/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			inter: ['var(--font-inter)'],
  			playfair: ['Playfair Display', 'serif']
  		},
  		colors:{
			background: 'rgb(var(--background))',
			foreground: 'rgb(var(--foreground))',
			muted: 'rgb(var(--muted))',
			accent: 'rgb(var(--accent))',
		},
  		backgroundImage: {
  			'firefly-radial': 'radial-gradient(50% 50% at 50% 50%, rgba(253, 255, 80, 0.5) 0%, rgba(217,217,217, 0) 100%)'
  		},
  		boxShadow: {
  			'glass-inset': 'inset 0 17px 5px -9px rgba(254,254,91, 0.05)',
  			'glass-sm': '5px 5px 20px 0px rgba(254,254,91, 0.3)'
  		},
  		keyframes: {
  			'spin-reverse': {
  				'0%': {
  					transform: 'rotate(0deg)'
  				},
  				'100%': {
  					transform: 'rotate(-360deg)'
  				}
  			},
  			slideRight: {
  				'0%': {
  					transform: 'translateX(-100%)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateX(0)',
  					opacity: '1'
  				}
  			},
  			slideLeft: {
  				'0%': {
  					transform: 'translateX(100%)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateX(0)',
  					opacity: '1'
  				}
  			},
  			slideUp: {
  				'0%': {
  					transform: 'translateY(100%)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateY(0)',
  					opacity: '1'
  				}
  			},
  			slideDown: {
  				'0%': {
  					transform: 'translateY(-100%)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateY(0)',
  					opacity: '1'
  				}
  			},
  			rotateBackToFront: {
  				'0%': {
  					transform: 'rotateY(90deg)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'rotateY(0deg)',
  					opacity: '1'
  				}
  			},
  			fadeIn: {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			}
  		},
  		animation: {
  			'spin-slow': 'spin 40s linear infinite',
  			'spin-slow-reverse': 'spin-reverse 40s linear infinite',
  			'slide-right': 'slideRight 1s ease-out forwards',
  			'slide-left': 'slideLeft 1s ease-out forwards',
  			'slide-up': 'slideUp 1s ease-out forwards',
  			'slide-down': 'slideDown 1s ease-out forwards',
  			rotateBackToFront: 'rotateBackToFront 1.2s ease-out',
  			fadeIn: 'fadeIn 1s ease-out forwards'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		screens: {
  			xs: '360px'
  		}
  	}
  },
  plugins: [],
};