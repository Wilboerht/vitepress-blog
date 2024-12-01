// Security headers configuration
export const securityHeaders = {
  // Prevent XSS attacks
  'Content-Security-Policy': 
    "default-src 'self'; " +
    "script-src 'self' 'unsafe-inline' 'unsafe-eval'; " +
    "style-src 'self' 'unsafe-inline'; " +
    "img-src 'self' data: https:; " +
    "font-src 'self' data:; " +
    "connect-src 'self' https:;",

  // Prevent clickjacking
  'X-Frame-Options': 'SAMEORIGIN',

  // Enable browser XSS protection
  'X-XSS-Protection': '1; mode=block',

  // Prevent MIME type sniffing
  'X-Content-Type-Options': 'nosniff',

  // Referrer policy
  'Referrer-Policy': 'strict-origin-when-cross-origin',

  // Permissions policy
  'Permissions-Policy': 
    'camera=(), ' +
    'microphone=(), ' +
    'geolocation=(), ' +
    'interest-cohort=()',

  // HSTS (uncomment if you have HTTPS)
  // 'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
};
