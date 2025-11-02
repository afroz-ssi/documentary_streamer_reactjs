# Documentary Streaming Platform - Design Guidelines

## Design Approach
**Reference-Based**: Drawing inspiration from Netflix, YouTube, and Vimeo to create a content-first streaming experience that emphasizes visual storytelling and intuitive navigation.

## Typography System
- **Primary Font**: Inter or Poppins from Google Fonts
- **Headings**: 
  - Hero Title: text-5xl to text-6xl, font-bold
  - Section Headers: text-3xl to text-4xl, font-semibold
  - Card Titles: text-xl, font-semibold
- **Body Text**: text-base to text-lg, font-normal
- **Metadata/Labels**: text-sm to text-xs, font-medium

## Layout & Spacing System
**Tailwind Units**: Consistently use 4, 6, 8, 12, 16, 20, 24 for spacing (p-4, gap-6, mt-8, etc.)

### Public Pages Layout
**Landing Page**:
- Fixed left sidebar (w-64): Category filters with smooth scrolling
- Main content area (flex-1): Header + documentary grid
- Grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6`
- Container: `max-w-[1920px] mx-auto px-6`

**Documentary Detail Page**:
- Hero section (h-[70vh]): Full-width banner image with gradient overlay
- Video player area: 16:9 aspect ratio, max-w-6xl centered
- Two-column metadata layout below video: 
  - Left (w-2/3): Description, director info
  - Right (w-1/3): Stats card (year, duration, rating, categories)

**About Us Page**:
- Hero section with mission statement (h-[60vh])
- Team section: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 for team member cards
- Values/Timeline section with alternating left-right content blocks

**Contact Page**:
- Two-column split: 
  - Left (md:w-1/2): Contact form with generous spacing (gap-6)
  - Right (md:w-1/2): Contact information card + office hours

### Admin Dashboard Layout
**Sidebar Navigation** (w-64, fixed):
- Logo area (h-16)
- Navigation items with icon + label (gap-3, py-3, px-4)
- Profile section at bottom

**Main Content Area**:
- Top header bar (h-16): Page title + quick actions
- Dashboard grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6` for stat cards
- Charts section: grid-cols-1 lg:grid-cols-2 gap-8
- Recent uploads table: Full-width with responsive overflow

**Documentary Management**:
- Form sections with clear grouping (space-y-8)
- Two-column layout for form fields: grid-cols-1 md:grid-cols-2 gap-6
- Upload areas: Prominent drop zones (min-h-48) with preview thumbnails

## Component Library

### Cards
**Documentary Card**:
- Aspect ratio 2:3 for thumbnail (poster style)
- Hover effect: scale-105 transition
- Overlay gradient from bottom with title, duration, rating badge
- Rounded corners: rounded-lg

**Stat Card** (Admin):
- Icon circle (h-12 w-12) with icon centered
- Value: text-4xl font-bold
- Label: text-sm
- Padding: p-6

**Team Member Card**:
- Square image (aspect-square), rounded-full
- Name: text-xl font-semibold
- Role: text-sm
- Bio: text-sm, max 3 lines

### Navigation
**Public Header**:
- Fixed top (h-16), backdrop-blur effect
- Logo (h-8)
- Center nav links (gap-8)
- Search icon + User icon on right (gap-4)

**Category Sidebar**:
- Category items: py-3 px-4, rounded-lg
- Active state: font-semibold with subtle indicator
- Icon (h-5 w-5) + label layout

### Forms
**Contact Form**:
- Input fields: h-12, rounded-lg, px-4
- Textarea: min-h-32
- Field spacing: space-y-6
- Submit button: w-full md:w-auto, h-12, px-8

**Admin Documentary Form**:
- Section headers: text-2xl, mb-6, border-b pb-4
- Label: text-sm font-medium, mb-2
- File upload zones: border-2 border-dashed, rounded-xl, p-8
- Multi-select categories: Checkbox grid with gap-4
- Status toggle: Switch component
- Action buttons row: flex justify-end gap-4

### Video Player
- Aspect ratio: 16:9
- Custom controls bar at bottom (h-16)
- Progress bar, play/pause, volume, fullscreen controls
- Thumbnail preview on hover over progress bar

### Data Displays
**Analytics Chart**:
- Chart container: h-80, rounded-xl, p-6
- Use Chart.js via CDN
- Monthly upload bar chart with gradient fills

**Documentary Table**:
- Row height: h-16
- Thumbnail preview (w-20, aspect-video)
- Sortable column headers
- Action buttons: icon-only (edit, delete) with gap-2
- Pagination at bottom: justify-between items-center

### Overlays
**Video Modal**:
- Backdrop blur
- Centered video player (max-w-5xl)
- Close button: top-right, h-10 w-10, rounded-full

**Delete Confirmation**:
- Centered card (max-w-md)
- Icon warning at top
- Action buttons: flex gap-4 at bottom

## Icons
**Library**: Heroicons via CDN
- Navigation: Home, Film, Info, Mail, Cog
- Categories: Beaker (Science), Cpu (Tech), AcademicCap (History)
- Admin: Plus, Pencil, Trash, ChartBar, User
- Player: Play, Pause, Volume, Expand

## Images
**Hero Sections**:
- Landing page: Full-width documentary montage (h-[80vh]) with gradient overlay
- About page: Team collaboration or documentary production scene (h-[60vh])
- Documentary detail: High-quality banner from documentary (h-[70vh])

**Thumbnails**:
- Documentary cards: 2:3 poster-style images
- Admin table: 16:9 preview thumbnails

**Team Photos**:
- About page: Professional headshots in circular frames

**Upload Placeholders**:
- Admin forms: Dotted border zones with upload icon and "Drop files here" text

## Responsive Behavior
**Mobile (< 768px)**:
- Sidebar becomes slide-out drawer with menu toggle
- Documentary grid: single column
- Two-column layouts stack to single column
- Admin sidebar: Hidden, hamburger menu reveals

**Tablet (768px - 1024px)**:
- Documentary grid: 2 columns
- Admin sidebar: Collapsed icons-only (w-16), expands on hover
- Forms: 2-column where appropriate

**Desktop (> 1024px)**:
- Full layouts as designed
- Maximum content width: 1920px

## Accessibility
- All interactive elements: min-h-12 for touch targets
- Form inputs: Consistent focus states with ring offset
- Skip navigation link for keyboard users
- Proper heading hierarchy throughout
- Alt text for all images (especially documentary thumbnails)