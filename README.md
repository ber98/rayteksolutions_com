# Raytek Solutions - Jekyll Site

A professional website for Raytek Solutions, featuring mini split installation services.

## Features

- **Flashy Banner**: Animated banner showing "Mini split installs starting at $750*"
- **Responsive Design**: Built with Bootstrap 5 for mobile-first design
- **Navigation**: Clean navigation bar with all main pages
- **Homepage**: Hero section, services overview, project carousel, testimonials, and call-to-action
- **Packages Page**: Two clickable package options (Standard and With Small-Electrical)
- **Contact Information**: Phone (623) 258-9666 and email contact@rayteksolutions.com on every page
- **Social Links**: Instagram, TikTok, and YouTube links in footer

## Pages

1. **Home** (`/`) - Main landing page with hero section and overview
2. **Packages** (`/packages/`) - Installation package options
3. **Recommended Mini Splits** (`/recommended-mini-splits/`) - Coming soon
4. **About Us** (`/about/`) - Coming soon

## Technical Details

- **Framework**: Jekyll 4.4.1
- **Styling**: Bootstrap 5.3.0 + Custom CSS
- **Icons**: Font Awesome 6.4.0
- **JavaScript**: Custom JS for enhanced functionality
- **Images**: Optimized placeholder images from Unsplash

## Development

### Prerequisites
- Ruby 3.4.0+
- Bundler

### Setup
```bash
bundle install
```

### Build
```bash
bundle exec jekyll build
```

### Serve Locally
```bash
bundle exec jekyll serve
```

The site will be available at `http://localhost:4000`

## File Structure

```
rayteksolutions_com/
├── _layouts/          # Jekyll layouts
├── _includes/         # Reusable components
├── assets/            # CSS, JS, and images
├── packages/          # Packages page
├── recommended-mini-splits/  # Mini splits page
├── about/             # About us page
├── _posts/            # Blog posts
├── _config.yml        # Jekyll configuration
└── index.markdown     # Homepage
```

## Performance Optimizations

- CDN-hosted Bootstrap and Font Awesome
- Optimized CSS with efficient selectors
- Minimal JavaScript for essential functionality
- Responsive images with proper sizing
- Efficient CSS animations using transform properties

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Progressive enhancement approach
