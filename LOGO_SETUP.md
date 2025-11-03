# Interactive Logo Setup Guide

## Getting Your Logo from Design.com

1. **Visit Design.com**: Go to https://www.design.com/maker/logo
2. **Create Your Logo**:

   - Enter your business name: "Undefined " or your preferred name
   - Select documentary/streaming related icons
   - Choose colors that match your theme (accent colors)
   - Customize text and layout

3. **Download Your Logo**:

   - Choose SVG format for best quality and scalability
   - Get the direct URL or download the file

4. **Update the Logo URL**:
   - Open `client/src/components/InteractiveLogo.tsx`
   - Replace the `logoUrl` default value with your actual logo URL
   - Or update it in `client/src/components/Header.tsx` where InteractiveLogo is used

## Example Usage

```tsx
<InteractiveLogo
  logoUrl="https://your-actual-logo-url.svg"
  fallbackText="Undefined "
/>
```

## Features

- **Responsive**: Automatically scales on different screen sizes
- **Interactive**: Hover effects for better user experience
- **Fallback**: Shows text logo if image fails to load
- **Accessible**: Proper alt text and semantic HTML

## Alternative Logo Services

If you prefer other services:

- **Canva**: https://www.canva.com/logos/
- **LogoMaker**: https://www.logomaker.com/
- **Hatchful**: https://hatchful.shopify.com/

Just replace the `logoUrl` with your chosen logo's URL.
