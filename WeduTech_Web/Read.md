# Weducate Nepal — Website Documentation

## Overview

**Weducate Nepal** is a static website for an EdTech Agency based in Kathmandu, Nepal. The platform empowers individuals through advanced skill development, career counseling, workshops, and digital learning resources.

---

## Project Structure

```
WeduTech_Web/
├── css/
│   ├── bootstrap.css        # Bootstrap 4 framework
│   ├── font-awesome.min.css # Font Awesome 4 icons
│   ├── style.css            # Main custom stylesheet (CSS custom properties)
│   ├── style.scss           # SCSS source (legacy, CSS is maintained directly)
│   ├── style.css.map        # Source map
│   └── responsive.css       # Responsive breakpoints & mobile styles
├── js/
│   ├── jquery-3.4.1.min.js  # jQuery library
│   ├── bootstrap.js         # Bootstrap 4 JS
│   └── custom.js            # Scroll animations, navbar effects, smooth scroll
├── images/                  # All image assets
├── fonts/                   # Font files
├── index.html               # Homepage
├── about.html               # About Us page
├── service.html             # Services page
├── contact.html             # Contact page
├── login.html               # User login page
├── Signup.html              # User registration page
└── Read.md                  # This documentation file
```

---

## Technology Stack

| Technology   | Version  | Purpose                          |
| ------------ | -------- | -------------------------------- |
| HTML5        | -        | Semantic page structure          |
| CSS3         | -        | Styling with CSS Custom Properties |
| JavaScript   | ES6+     | Interactivity & animations       |
| Bootstrap    | 4.x      | Grid system & components         |
| jQuery       | 3.4.1    | DOM manipulation & carousel      |
| Font Awesome | 4.x / 6  | Icon library                     |
| Formspree    | -        | Contact form backend             |
| Google Fonts | -        | Inter & Poppins typography       |

---

## Pages

### `index.html` — Homepage
- **Hero Carousel**: 3-slide image + text carousel
- **Stats Section**: Key metrics (students, courses, mentors, satisfaction)
- **Services**: 4 service cards with hover gradient effect
- **About**: Company overview with CTA button
- **Case Studies**: 2 featured case study cards with real content
- **Testimonials**: 3-slide testimonial carousel
- **Contact Form**: Callback request form (Formspree integration)
- **Google Maps**: Embedded map showing office location

### `about.html` — About Us
- Company overview with image
- Mission, Vision, Values cards section

### `service.html` — Services
- Detailed descriptions of all 4 services
- "Get Started" CTA linking to contact page

### `contact.html` — Contact
- Contact info cards (location, phone, email)
- Callback request form (Formspree powered)
- Embedded Google Maps

### `login.html` — Login
- Email/password login form
- Remember me & forgot password options
- Illustration image

### `Signup.html` — Registration
- Full registration form (name, email, password, confirm password)
- Terms of service checkbox
- Illustration image

---

## Design System

### CSS Custom Properties

All colors, shadows, spacing, and transitions are defined as CSS variables in `:root` of `style.css`:

```css
--primary: #0f172a         /* Dark navy */
--accent: #3b82f6          /* Blue */
--accent-gradient: linear-gradient(135deg, #3b82f6, #8b5cf6)
--surface: #ffffff          /* White backgrounds */
--text-primary: #0f172a     /* Dark text */
--text-secondary: #475569   /* Muted text */
```

### Key Design Features
- **Gradient Accents**: Buttons and hover states use blue-to-purple gradient
- **Scroll Animations**: Elements fade in on scroll via IntersectionObserver
- **Navbar Glassmorphism**: Navbar becomes translucent with blur on scroll
- **Modern Cards**: Clean borders, subtle shadows, gradient hover effects
- **Responsive**: Mobile-first breakpoints at 480px, 576px, 768px, 992px, 1120px, 1200px

---

## Contact Form

The contact form on `index.html` and `contact.html` submits to **Formspree**:

```
POST https://formspree.io/f/xrblzzel
```

Fields: Full Name, Email, Phone, Message. A toast notification appears on success/failure.

---

## Setup & Development

### Running Locally

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Open `index.html` directly in a browser, or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js
   npx serve .
   ```
3. Navigate to `http://localhost:8000`

### Making Changes

- **Styling**: Edit `css/style.css` (uses CSS Custom Properties for theming)
- **Responsiveness**: Edit `css/responsive.css`
- **Animations/JS**: Edit `js/custom.js`
- **Content**: Edit individual HTML files

---

## Contact

- **Phone**: +977-9767946666
- **Email**: naksahub@gmail.com
- **Location**: New Baneshwor, Kathmandu, Nepal
- **Facebook**: [Weducate Nepal](https://www.facebook.com/profile.php?id=61560326193477)
- **Instagram**: [@weducate.nepal](https://www.instagram.com/weducate.nepal/?hl=en)

---

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

© 2025 Weducate Nepal. All Rights Reserved.
