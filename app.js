// app.js

// Placeholder images for initial gallery
const placeholderImages = [
  "https://via.placeholder.com/150/ffa500/fff?text=Book+1",
  "https://via.placeholder.com/150/ff7f50/fff?text=Book+2",
  "https://via.placeholder.com/150/ff8c00/fff?text=Book+3",
  "https://via.placeholder.com/150/ff6347/fff?text=Book+4",
  "https://via.placeholder.com/150/ff4500/fff?text=Book+5",
  "https://via.placeholder.com/150/ff7f50/fff?text=Book+6",
];

// Function to load placeholder gallery images
function loadPlaceholderGallery() {
  const container = document.getElementById("placeholder-gallery");
  placeholderImages.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Book placeholder image";
    img.loading = "lazy";
    container.appendChild(img);
  });
}

// Function to load dynamic gallery images (initially empty)
function loadDynamicGallery(images) {
  const container = document.getElementById("dynamic-gallery");
  container.innerHTML = ""; // Clear existing
  images.forEach((src, i) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = `User uploaded image ${i + 1}`;
    img.loading = "lazy";
    container.appendChild(img);
  });
}

// Handle image upload and email sending simulation
function setupUploadForm() {
  const form = document.getElementById("upload-form");
  const fileInput = document.getElementById("image-upload");
  const status = document.getElementById("upload-status");
  const dynamicGalleryImages = [];

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    status.textContent = "";
    if (!fileInput.files.length) {
      status.textContent = "Please select an image file to upload.";
      status.style.color = "red";
      return;
    }
    const file = fileInput.files[0];
    if (!file.type.startsWith("image/")) {
      status.textContent = "Invalid file type. Please upload an image.";
      status.style.color = "red";
      return;
    }

    // Show loading message
    status.textContent = "Uploading and sending email...";
    status.style.color = "#4e342e";

    // Simulate "sending email" with a timeout
    setTimeout(() => {
      // Add image to dynamic gallery
      const reader = new FileReader();
      reader.onload = function (evt) {
        dynamicGalleryImages.push(evt.target.result);
        loadDynamicGallery(dynamicGalleryImages);
      };
      reader.readAsDataURL(file);

      // Reset form
      form.reset();

      // Show success message
      status.textContent = "Image uploaded and email sent successfully!";
      status.style.color = "green";
    }, 1800);

    // Note: In a real app, here you would send the image to your backend
    // which would send the email to ps.dedios94@gmail.com with the image attached.
  });
}

// Initialize all on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  loadPlaceholderGallery();
  setupUploadForm();
  // dynamic gallery starts empty
});
// app.js

// Random images URLs (children/book themed)
const galleryImages = [
  "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=400&q=80",
];

// Load gallery images dynamically
function loadImageGallery() {
  const gallery = document.querySelector(".image-gallery");
  if (!gallery) return;

  galleryImages.forEach((src, i) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = `Gallery image ${i + 1}`;
    img.loading = "lazy";
    gallery.appendChild(img);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadImageGallery();
});

const translations = {
  en: {
    navbar: {
      home: "Home",
      products: "Products",
      contact: "Contact",
      searchPlaceholder: "Search books...",
    },
    hero: {
      title: "Welcome to P&C Books",
      subtitle: "Drawing books for children based on AI",
    },
    booksGallery: [
      {
        description: "Discover magical adventures in every page!",
      },
      {
        description: "Engaging stories for kids of all ages.",
      },
      {
        description: "Colorful drawings to spark your child’s creativity.",
      },
      {
        description: "Interactive pages for fun learning.",
      },
      {
        description: "Stories that teach values and friendship.",
      },
      {
        description: "Bright, fun illustrations to delight kids.",
      },
    ],
    infoSection: {
      title: "P&C Books, Learn Having Fun",
      paragraph:
        "At P&C Books, we believe that learning should be an exciting journey filled with creativity and joy. Our unique drawing books for children combine AI-generated artwork with engaging stories to spark imagination and foster a love for reading. Whether you choose from our exclusive collection or create your own personalized books, every page is designed to captivate and inspire. Dive into a world where education meets fun, and watch your child's creativity blossom. Join our community of young learners and explore endless possibilities with P&C Books.",
    },
    btnBuy: "Buy",
  },
  es: {
    navbar: {
      home: "Inicio",
      products: "Productos",
      contact: "Contacto",
      searchPlaceholder: "Buscar libros...",
    },
    hero: {
      title: "Bienvenido a P&C Libros",
      subtitle: "Libros para colorear para niños basados en IA",
    },
    booksGallery: [
      {
        description: "¡Descubre aventuras mágicas en cada página!",
      },
      {
        description: "Historias atractivas para niños de todas las edades.",
      },
      {
        description: "Dibujos coloridos para estimular la creatividad de tu hijo.",
      },
      {
        description: "Páginas interactivas para un aprendizaje divertido.",
      },
      {
        description: "Historias que enseñan valores y amistad.",
      },
      {
        description: "Ilustraciones brillantes y divertidas para encantar a los niños.",
      },
    ],
    infoSection: {
      title: "P&C Libros, Aprende Divirtiéndote",
      paragraph:
        "En P&C Libros, creemos que aprender debe ser un viaje emocionante lleno de creatividad y alegría. Nuestros únicos libros para colorear para niños combinan obras de arte generadas por IA con historias atractivas para despertar la imaginación y fomentar el amor por la lectura. Ya sea que elijas de nuestra colección exclusiva o crees tus propios libros personalizados, cada página está diseñada para cautivar e inspirar. Sumérgete en un mundo donde la educación se encuentra con la diversión, y observa cómo florece la creatividad de tu hijo. Únete a nuestra comunidad de jóvenes aprendices y explora infinitas posibilidades con P&C Libros.",
    },
    btnBuy: "Comprar",
  },
};
// Store current language (default English)
let currentLang = localStorage.getItem("lang") || "en";

// Flag icons URLs
const flags = {
  en: "https://flagcdn.com/us.svg", // English flag (US)
  es: "https://flagcdn.com/es.svg", // Spanish flag
};

// Elements to translate
const elements = {
  navbar: {
    home: document.querySelector('a[href="#home"]'),
    products: document.querySelector('a[href="#products"]'),
    contact: document.querySelector('a[href="#contact"]'),
    searchInput: document.querySelector('input[type="search"]'),
  },
  hero: {
    title: document.querySelector(".hero-text h1"),
    subtitle: document.querySelector(".hero-text p"),
  },
  booksGallery: document.querySelectorAll(".book-description"),
  infoSection: {
    title: document.querySelector(".info-text h2"),
    paragraph: document.querySelector(".info-text p"),
  },
  buyButtons: document.querySelectorAll(".btn-buy"),
  langToggleBtn: document.getElementById("lang-toggle"),
  langToggleImg: document.getElementById("lang-toggle").querySelector("img"),
};

// Function to update all text content based on language
function updateContent(lang) {
  const data = translations[lang];

  // Navbar
  elements.navbar.home.textContent = data.navbar.home;
  elements.navbar.products.textContent = data.navbar.products;
  elements.navbar.contact.textContent = data.navbar.contact;
  elements.navbar.searchInput.placeholder = data.navbar.searchPlaceholder;

  // Hero section
  elements.hero.title.textContent = data.hero.title;
  elements.hero.subtitle.textContent = data.hero.subtitle;

  // Books gallery descriptions
  elements.booksGallery.forEach((descElem, index) => {
    if (data.booksGallery[index]) {
      descElem.textContent = data.booksGallery[index].description;
    }
  });

  // Info section
  elements.infoSection.title.textContent = data.infoSection.title;
  elements.infoSection.paragraph.textContent = data.infoSection.paragraph;

  // Buy buttons
  elements.buyButtons.forEach((btn) => {
    btn.textContent = data.btnBuy;
  });

  // Update flag icon to show the OTHER language's flag as toggle
  elements.langToggleImg.src = flags[lang === "en" ? "es" : "en"];
  elements.langToggleImg.alt = lang === "en" ? "Spanish flag" : "English flag";
}

// Toggle language function
function toggleLanguage() {
  currentLang = currentLang === "en" ? "es" : "en";
  localStorage.setItem("lang", currentLang);
  updateContent(currentLang);
}

// Initial load
document.addEventListener("DOMContentLoaded", () => {
  updateContent(currentLang);
  elements.langToggleBtn.addEventListener("click", toggleLanguage);
});



const imageUpload = document.getElementById('image-upload');
const imagePreview = document.getElementById('image-preview');
const previewContainer = document.getElementById('preview-container');
const uploadForm = document.getElementById('upload-form');
const uploadStatus = document.getElementById('upload-status');

// Show preview when user selects an image
imageUpload.addEventListener('change', () => {
  const file = imageUpload.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = e => {
      imagePreview.src = e.target.result;
      imagePreview.style.display = 'block';
    };
    reader.readAsDataURL(file);
  } else {
    imagePreview.src = '';
    imagePreview.style.display = 'none';
  }
});

// Handle form submission
uploadForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  uploadStatus.style.display = 'none';

  const formData = new FormData(uploadForm);

  try {
    const response = await fetch('/upload', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      uploadStatus.style.display = 'block';
      uploadForm.reset();
      imagePreview.src = '';
      imagePreview.style.display = 'none';
    } else {
      alert('Failed to upload image. Please try again.');
    }
  } catch (error) {
    alert('Error submitting image: ' + error.message);
  }
});