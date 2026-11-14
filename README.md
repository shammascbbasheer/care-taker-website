# Caretaker — Cleaning & Moving website

Client-review front-end based on the two supplied promotional posters. This replaces the earlier fictional elder-care demo.

## Open
Unzip this project. Double-click index.html to view in a browser. In VS Code use File → Open Folder and select the extracted project folder. Keep css, js and assets beside index.html.

## Included
- index.html: complete site content, separate service-price cards, booking form with all 14 Kerala district choices, WhatsApp handoff, original promotional posters, FAQ
- css/style.css: responsive layout, purple/blue branding, light/dark modes, lightweight CSS 3D-style animation, reduced-motion support
- js/script.js: navigation, price-card selection, booking-details and request-ready steps, WhatsApp message summary, user-triggered clipboard
- assets/logo.png: logo cropped from the supplied moving poster (not a vector original)
- assets/cleaning-poster.webp and assets/moving-poster.webp: supplied promotional posters
- assets/hero.webp: AI-generated illustrative photo, not a real employee photograph
- _headers: security-header configuration for static hosts that support this file

## Confirmed source details
Caretaker branding; Kochi; contact +91 73563 41218 and +91 99952 41218; every listed service is priced at ₹2,000–₹3,999 except water tank cleaning at ₹999. The original form choices remain available (home deep cleaning, office/interior cleaning, sanitization, bathroom cleaning, local/commercial moving, packing/unpacking/crating, long-distance moving and furniture assembly).

## Still to confirm with client
Exact trading name and address; working hours; route/locality coverage; discounts or additional charges; legal/privacy text; use rights for the posters; real team/job photos; vector logo; service limitations and booking/cancellation terms. Do not add invented reviews, ratings, awards, licenses, guarantees or response-time promises.

## Not yet included
No backend, database, confirmed booking flow, admin dashboard or server-side form validation. The form opens WhatsApp addressed to +91 73563 41218 with an encoded enquiry message. The customer must tap Send in WhatsApp. The website cannot confirm delivery and stores no enquiry. Phone links show both +91 73563 41218 and +91 99952 41218; WhatsApp booking requests still go to the first number. Popup fallback and copy-summary options are included. Hosting, domain, HTTPS, DDoS protection, monitoring, backups and traffic load tests have not been configured. The project has not been tested for 1,000 simultaneous visitors.

## Security and hosting
The _headers file configures a restrictive Content Security Policy, HTTPS-only HSTS, anti-framing, MIME-sniffing and referrer protections, a limited Permissions Policy, and same-origin isolation headers. These headers apply only on hosts that support _headers (including Netlify); otherwise configure equivalent response headers in the hosting platform. HSTS is effective only when the site is served over HTTPS. Verify response headers on the deployed site. The booking form uses POST as a fallback so details are not placed in a URL if JavaScript is unavailable; the static site has no server-side form handler. A static site cannot enforce server-side rate limits, TLS, or DDoS protection. Keep hosting, domain, DNS, monitoring, backups, and any CDN/WAF settings secured separately.

## WhatsApp enquiry flow
The submit button opens a prefilled WhatsApp conversation with the selected service and its listed price. These are booking requests, not confirmed bookings or online payments. This is not an automatic WhatsApp API integration. The business receives the message only if the customer sends it. No account credentials, API keys, or database are used. Test on the deployed site and a phone; no real test messages were sent during development.

## Two video ads added
Videos section includes the premium ad with improved ending (18.5 seconds) and Fresh Start ad (16.1 seconds). All MP4s and cover images are in assets/videos. Players use controls, playsinline and preload="none"; they never autoplay. Starting one pauses the other. Covers are small JPGs. The headers explicitly allow same-origin media and configure one-day video caching on supported hosts. Actual bandwidth is consumed when a visitor plays or downloads a video; monitor hosting usage.

## Update the existing live site
This ZIP updates files only, not your live Netlify deployment. Unzip, then upload the extracted project folder (index.html at its root) to the manual deployment area in the existing Netlify project's Deploys page. Keep the same project to retain the existing URL. Verify both videos and WhatsApp on the live URL after deployment. Do not upload a standalone HTML preview or the ZIP itself as index.html.
