// Mobile navigation — no external libraries needed.
const menu = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");
menu.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menu.setAttribute("aria-expanded", String(open));
  menu.textContent = open ? "Close ×" : "Menu +";
});
nav.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
    menu.textContent = "Menu +";
  }),
);
// Static service prices and user-confirmed WhatsApp booking requests.
const ownerWhatsAppNumber = "917356341218";
const listedPrices = {
  "Water tank cleaning": "₹999",
};
const standardListedPrice = "₹2,000–₹3,999";
const displayServiceNames = {
  "Home deep cleaning": "House cleaning",
};
const form = document.getElementById("quote-form");
const bookingSection = document.getElementById("booking-details");
const bookingFields = document.getElementById("booking-fields");
const result = document.getElementById("result");
const serviceInput = document.getElementById("service");
const serviceName = document.getElementById("selected-service-name");
const servicePrice = document.getElementById("selected-service-price");
const bookingStepLabel = document.getElementById("booking-step-label");
const bookingHeading = document.getElementById("booking-details-title");
const bookingDescription = document.getElementById("booking-details-description");
const summary = document.getElementById("summary");
function updateSelectedService(service) {
  serviceName.textContent = displayServiceNames[service] || service || "Choose a service";
  servicePrice.textContent = service
    ? listedPrices[service] || standardListedPrice
    : "—";
}
function scrollToSection(section) {
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  section.scrollIntoView({
    behavior: reducedMotion ? "auto" : "smooth",
    block: "start",
  });
}
function chooseService(service) {
  serviceInput.value = service;
  updateSelectedService(service);
  bookingSection.hidden = false;
  bookingFields.hidden = false;
  result.hidden = true;
  bookingStepLabel.textContent = "STEP 2 · YOUR DETAILS";
  bookingHeading.textContent = "Let’s plan the details.";
  bookingDescription.textContent =
    "Add your contact and location information. We’ll prepare a WhatsApp request for you to review and send.";
  scrollToSection(bookingSection);
  bookingHeading.focus({ preventScroll: true });
}
serviceInput.addEventListener("change", () => {
  updateSelectedService(serviceInput.value);
});
document.getElementById("other-service-button").addEventListener("click", () => {
  serviceInput.value = "";
  updateSelectedService("");
  bookingSection.hidden = false;
  bookingFields.hidden = false;
  result.hidden = true;
  bookingStepLabel.textContent = "STEP 2 · YOUR DETAILS";
  bookingHeading.textContent = "Let’s plan the details.";
  bookingDescription.textContent =
    "Choose from the full service list, then add your contact and location information.";
  scrollToSection(bookingSection);
  serviceInput.focus({ preventScroll: true });
});
document.querySelectorAll("[data-book-service]").forEach((button) => {
  button.addEventListener("click", () => {
    chooseService(button.dataset.bookService);
  });
});
document.querySelectorAll("[data-service]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    chooseService(link.dataset.service);
  });
});
document.getElementById("change-service").addEventListener("click", (event) => {
  event.preventDefault();
  bookingSection.hidden = true;
  const pricingTitle = document.getElementById("pricing-title");
  scrollToSection(document.getElementById("pricing"));
  pricingTitle.focus({ preventScroll: true });
});
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const fields = new FormData(form);
  const service = fields.get("service");
  summary.textContent = [
    "Caretaker booking request",
    `Name: ${fields.get("customer").trim()}`,
    `Phone: ${fields.get("phone").trim()}`,
    `Service: ${displayServiceNames[service] || service}`,
    `Listed price: ${listedPrices[service] || standardListedPrice}`,
    `District: ${fields.get("district")}`,
    `Area/locality: ${fields.get("area").trim()}`,
    `Preferred date: ${fields.get("date") || "To discuss"}`,
    "Please confirm service scope and availability before booking.",
  ].join("\n");
  bookingFields.hidden = true;
  result.hidden = false;
  bookingStepLabel.textContent = "STEP 3 · WHATSAPP REQUEST";
  bookingHeading.textContent = "Review your request.";
  bookingDescription.textContent =
    "Your request summary is ready. Review it and send it in WhatsApp; Caretaker will confirm availability after replying.";
  document.getElementById("copy-status").textContent = "";
  const whatsappUrl = `https://wa.me/${ownerWhatsAppNumber}?text=${encodeURIComponent(summary.textContent)}`;
  document.getElementById("whatsapp-link").href = whatsappUrl;
  scrollToSection(bookingSection);
  bookingHeading.focus({ preventScroll: true });
  // The customer must still tap Send in WhatsApp; retain a visible fallback.
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
});
document.getElementById("edit-request").addEventListener("click", () => {
  result.hidden = true;
  bookingFields.hidden = false;
  bookingStepLabel.textContent = "STEP 2 · YOUR DETAILS";
  bookingHeading.textContent = "Let’s plan the details.";
  bookingDescription.textContent =
    "Add your contact and location information. We’ll prepare a WhatsApp request for you to review and send.";
  scrollToSection(bookingSection);
  bookingHeading.focus({ preventScroll: true });
});
// Clipboard use is explicit and initiated by the user.
document.getElementById("copy").addEventListener("click", async () => {
  const status = document.getElementById("copy-status");
  try {
    await navigator.clipboard.writeText(summary.textContent);
    status.textContent =
      "Summary copied. To deliver the enquiry, open WhatsApp and tap Send.";
  } catch {
    status.textContent =
      "Copy is unavailable here. Select the summary text and copy it manually.";
  }
});

// Keep only one advertisement playing at a time.
const adPlayers = document.querySelectorAll(".video-stage video");
adPlayers.forEach((player) => {
  player.addEventListener("play", () => {
    adPlayers.forEach((other) => {
      if (other !== player) other.pause();
    });
  });
});

// A clear initial play button avoids a loading-looking native media overlay.
// Native controls remain in the HTML for browsers where JavaScript is disabled.
document.querySelectorAll(".video-frame").forEach((frame) => {
  const player = frame.querySelector("video");
  const button = frame.querySelector(".video-play-button");
  player.controls = false;
  button.hidden = false;
  player.addEventListener("play", () => {
    player.controls = true;
    button.hidden = true;
  });
  button.addEventListener("click", async () => {
    player.controls = true;
    button.hidden = true;
    try {
      await player.play();
    } catch {
      button.hidden = false;
      button.textContent = "Tap to try again ▶";
    }
  });
});
