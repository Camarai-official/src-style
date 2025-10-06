        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        'primary': '#554696',
                        'primary-dark': '#433879',
                        'text-light': '#6b7280',
                        'border-custom': '#d1d5db',
                        'bg-secondary': '#f3f4f6',
                        'bg-tertiary': '#e5e7eb',
                        'success': '#22c55e',
                        'danger': '#ef4444',
                        'warning': '#f59e0b',
                    },
                    fontFamily: {
                        'inter': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
                    },
                    transitionProperty: {
                        'all': 'all 0.2s ease-in-out',
                    },
                    keyframes: {
                        spin: {
                            to: { transform: 'rotate(360deg)' },
                        },
                        slideIn: {
                            from: { transform: 'translateX(100%)', opacity: 0 },
                            to: { transform: 'translateX(0)', opacity: 1 },
                        },
                        fadeOut: {
                            from: { opacity: 1 },
                            to: { opacity: 0, transform: 'translateY(10px)' },
                        }
                    },
                    animation: {
                        'spin-custom': 'spin 1s linear infinite',
                        'slide-in': 'slideIn 0.3s ease-out forwards',
                        'fade-out': 'fadeOut 0.5s ease-out forwards',
                    }
                }
            }
        }