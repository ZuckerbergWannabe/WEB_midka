Bad Bunny Fan Hub — Midterm Project
Project Topic: mudic website


Group Members 
Group: SE-2540
Members:
  Darkhan Serikbai
  Sakenov Danial
  Askar Bavgashev

Live Project Link
Published Website: https://zuckerbergwannabe.github.io/WEB_midka/



Short Description
Bad Bunny Fan Hub is a multi-page responsive web application created for fans of Bad Bunny. The project showcases the artist's biography, recent album discography, popular tracks with an interactive audio player, tour schedules, photo galleries, and a contact form for the fan club.

Features Implemented
1. 5 Connected Pages: Home (index.html), About (about.html), Tour Schedule (tour.html), Gallery (gallery.html), and Contact (contact.html).
2. Sticky Navigation & Header: Header with Flexbox layout, responsive navigation, and active page highlighting.
3. Responsive Mobile Menu: Animated burger menu toggling navigation on mobile viewports (<768px).
4. Custom Audio Player: JS-powered audio player with play/pause, seek bar, and rewind/forward controls.
5. Interactive Data Table & Custom Grids: CSS Grid layouts for image galleries and tour cards, plus an alternating-color data table.
6. Fixed Floating Action: "Back to Top" button using fixed positioning.


 Technologies Used
HTML5: Semantic elements (header, main, footer, nav, section).
CSS3: Custom styles (/css/style.css), CSS Grid, Flexbox, media queries (768px, 480px), positioning (relative, absolute, fixed, sticky),:hover/:focus pseudo-classes
Bootstrap 5: Grid system and utilities.

Requirements Coverage & Technical Details
CSS Variables primary-color, dark-bg, light-bg, card-alt-bg, font-heading, font-body.
 Positioning Techniques:
  Relative & Absolute: Badge overlay on album cards .
  Fixed: Floating top button .
  Sticky: Dynamic header bar .
Pseudo-classes: :hover, :focus, :nth-child(even) for alternating rows and cards.
Media Queries: Breakpoints at 768px  and 480px.



1. Darkhan Serikbai
CSS Module:  Common Styles & Index Page 
Key Deliverables:
  Configured CSS Variables , Google Fonts import, base resetting, and body layout.
  Styled the global sticky header, navigation links, and responsive burger menu.
   Created card component styles, buttons, and fixed "Back to Top" button.
   Designed the Audio Player layout  and  absolute positioning.
   Built base media queries for headers and players.

2. Sakenov Danial
CSS Module: Tour Schedule Page 
Key Deliverables:
  Created custom table styling  with dark headers and  alternating row backgrounds.
  Built Custom CSS Grid layout for Tour Highlights (.tour-grid) using 3-column repeat(3, 1fr) structure.
  Designed interactive hover effects for tour cards (.tour-grid-card:hover).
  Added responsive breakpoint for .tour-grid to stack vertically on screens under 768px.

3. Askar Bavgashev
CSS Module: Gallery Page & Contact Page .
Key Deliverables:
  Developed Custom CSS Grid layout (.gallery-grid) for photo gallery cards.
   Configured multi-tier responsive breakpoints for the gallery grid (3 columns on desktop, 2 columns at <=768px, 1 column at <=480px).
   Styled Contact Form control focus states (.form-control:focus) with primary color glow effects.
   Conducted page layout tests and Bootstrap utility integration across pages.