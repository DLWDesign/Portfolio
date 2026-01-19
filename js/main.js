/* ---
* Script: main.js
* Autore: Gemini
* Descrizione: Gestione interazioni, animazioni e internazionalizzazione (i18n).
* --- */

// --- Oggetto Traduzioni (i18n) ---
const translations = {
  it: {
    // Meta Tags
    meta_title: "Delibero Lorenzo | Web Developer",
    meta_description: "Portfolio di Lorenzo Delibero, sviluppatore web specializzato in soluzioni front-end/back-end moderne e performanti.",
    // Navbar
    nav_home: "/home",
    nav_projects: "/progetti",
    nav_about: "/chi_sono",
    nav_contact: "/contatti",
    // Hero Section (Nuova struttura)
    hero_command: "chi_sono",
    hero_output_name: '<span class="terminal-key">nome</span>: "Lorenzo Delibero"',
    hero_output_role: '<span class="terminal-key">ruolo</span>: "Sviluppatore Web"',
    hero_output_focus: '<span class="terminal-key">focus</span>: ["Struttura", "Semplicità", "Performance"]',
    hero_output_status: '<span class="terminal-key">status</span>: "Aperto a collaborazioni e opportunità"',
    hero_cta: "visualizza progetti",
    // Skills Section (index.html)
    skills_title: "stack_tecnologico",
    skills_cta: "ls -a ./projects",
    // Projects Page
    projects_title: "projects",
    project_label_desc: "> descrizione: ",
    project1_title: "Sito-aziendale - Wrong Site",
    project1_desc: "Sito vetrina per un'architetto, sviluppato per essere pulito, professionale e completamente responsive.",
    project2_title: "Sito-aziendale - Cartoleria Dudù",
    project2_desc: "Sito vetrina per una cartoleria locale, progettato per valorizzare prodotti, servizi e identità del negozio.Interfaccia moderna, responsive e orientata all’esperienza utente, sviluppata con HTML5, CSS3, JavaScript e Bootstrap.",
    project3_title: "Sito-aziendale - DREAMCAR Site",
    project3_desc: "Template responsive per un sito di officina. Design moderno e focalizzato sulla semplicità di richiedere preventivi e visualizzare i servizi.",
    project4_title: "Piattaforma - SPLit (In aggiotrnamento)",
    project4_desc: "Piattaforma web per inserzioni di sopralluoghi architettonici e strutturali, progettata per mettere in contatto studi di architettura e professionisti del settore.Il sistema prevede profili differenziati, gestione delle inserzioni e dashboard dedicate, con un’interfaccia moderna e orientata all’usabilità.",
    project_view_btn: "view",
    project_code_btn: "code",
    project_tech_list: "html css bootstrap responsive-design javascript api",
    // About Page
    about_title: "about_me",
    about_intro_lead: "// Profilo tecnico",
    about_intro_p: "Sono uno sviluppatore web con focus sul front-end. Il mio obiettivo primario è la scrittura di codice efficiente, manutenibile e scalabile. Traduco specifiche di progetto in applicazioni web funzionali, con particolare attenzione alla user experience e alla performance.",
    about_method_title: "/Metodologia",
    about_method_p1: "Il mio approccio è basato sulla risoluzione pragmatica dei problemi. Analizzo i requisiti, definisco una struttura logica e implemento la soluzione utilizzando le tecnologie più adatte al contesto.",
    about_method_p2: "La mia base di competenze include HTML5, CSS3 e JavaScript (ES6+). Utilizzo Bootstrap 5 per la gestione del layout e la creazione di interfacce responsive, ma sono in grado di lavorare con CSS puro per ottenere design custom.",
    about_goals_title: "/Obiettivi",
    about_goals_p1: "Sono in una fase di continuous learning. Il mio obiettivo è consolidare le competenze attuali e approfondire lo studio di framework JS moderni e tool di sviluppo per ottimizzare il workflow.",
    about_goals_p2: "Sono orientato alla collaborazione in team e al raggiungimento di obiettivi tecnici condivisi. Valuto opportunità che mi permettano di contribuire a progetti complessi e di accrescere le mie responsabilità tecniche.",
    // Contact Page
    contact_title: "contact",
    contact_intro: "// Disponibile per opportunità di collaborazione.",
    contact_label_name: "nome",
    contact_label_email: "email",
    contact_label_message: "messaggio",
    contact_submit_btn: "./send_message.sh",
    contact_success_msg: "> Messaggio inviato con successo. Grazie per avermi contattato!",
    contact_error_msg: "> Errore: tutti i campi sono obbligatori.",
    // Footer (Nuova struttura)
    footer_identity_name: "Lorenzo Delibero",
    footer_identity_role: "Web Developer",
    footer_identity_tagline: "Codecrafter & Design Enthusiast",
    footer_nav_title: "Navigazione",
    footer_nav_home: "/home",
    footer_nav_projects: "/progetti",
    footer_nav_about: "/chi_sono",
    footer_nav_contact: "/contatti",
    footer_contact_title: "Contatti",
    footer_copyright: "© 2026 Lorenzo Delibero.",
    footer_built_with: "Realizzato con HTML, CSS e JavaScript vanilla."
  },
  en: {
    // Meta Tags
    meta_title: "Delibero Lorenzo | Web Developer",
    meta_description: "Portfolio of Lorenzo Delibero, a web developer specializing in modern and high-performance front-end/back-end solutions.",
    // Navbar
    nav_home: "/home",
    nav_projects: "/projects",
    nav_about: "/about",
    nav_contact: "/contact",
    // Hero Section (New structure)
    hero_command: "who_am_i",
    hero_output_name: '<span class="terminal-key">name</span>: "Lorenzo Delibero"',
    hero_output_role: '<span class="terminal-key">role</span>: "Web Developer"',
    hero_output_focus: '<span class="terminal-key">focus</span>: ["clean code", "usability"]',
    hero_output_status: '<span class="terminal-key">status</span>: "Available for opportunities"',
    hero_cta: "view projects",
    // Skills Section (index.html)
    skills_title: "tech_stack",
    skills_cta: "ls -a ./projects",
    // Projects Page
    projects_title: "projects",
    project_label_desc: "> description: ",
    project1_title: "Company-website - Wrong Site",
    project1_desc: "A showcase site for an architect, developed to be clean, professional, and fully responsive.",
    project2_title: "Company-website - Dudù Stationery",
    project2_desc: "A showcase site for a local stationery store, designed to highlight products, services and the identity of the shop. Modern, responsive interface oriented to user experience, developed with HTML5, CSS3, JavaScript and Bootstrap.",
    project3_title: "Company-website - DREAMCAR Site",
    project3_desc: "A responsive template for a personal blog. The design is minimal and focused on content readability.",
    project4_title: "Platform - SPLit (Being updated)",
    project4_desc: "A web platform for listing architectural and structural inspections, designed to connect architectural firms and industry professionals. The system features differentiated profiles, listing management, and dedicated dashboards, with a modern, user-friendly interface.",
    project_view_btn: "view",
    project_code_btn: "code",
    project_tech_list: "html css bootstrap responsive-design javascript api",
    // About Page
    about_title: "about_me",
    about_intro_lead: "// Technical profile",
    about_intro_p: "I am a web developer with a focus on the front-end. My primary objective is to write efficient, maintainable, and scalable code. I translate project specifications into functional web applications, with a strong focus on user experience and performance.",
    about_method_title: "/Methodology",
    about_method_p1: "My approach is based on pragmatic problem-solving. I analyze requirements, define a logical structure, and implement the solution using the most suitable technologies for the context.",
    about_method_p2: "My skill base includes HTML5, CSS3, and JavaScript (ES6+). I use Bootstrap 5 for layout management and creating responsive interfaces, but I am proficient in working with pure CSS for custom designs.",
    about_goals_title: "/Goals",
    about_goals_p1: "I am in a continuous learning phase. My goal is to consolidate my current skills and delve deeper into modern JS frameworks and development tools to optimize my workflow.",
    about_goals_p2: "I am team-oriented and focused on achieving shared technical goals. I seek opportunities that allow me to contribute to complex projects and increase my technical responsibilities.",
    // Contact Page
    contact_title: "contact",
    contact_intro: "// Available for collaboration opportunities.",
    contact_label_name: "name",
    contact_label_email: "email",
    contact_label_message: "message",
    contact_submit_btn: "./send_message.sh",
    contact_success_msg: "> Message sent successfully. Thank you for contacting me!",
    contact_error_msg: "> Error: all fields are required.",
    // Footer (New structure)
    footer_identity_name: "Lorenzo Delibero",
    footer_identity_role: "Web Developer",
    footer_identity_tagline: "Codecrafter & Design Enthusiast",
    footer_nav_title: "Navigation",
    footer_nav_home: "/home",
    footer_nav_projects: "/projects",
    footer_nav_about: "/about",
    footer_nav_contact: "/contact",
    footer_contact_title: "Contact",
    footer_copyright: "© 2024 Lorenzo Delibero.",
    footer_built_with: "Built with vanilla HTML, CSS, and JavaScript."
  }
};

// --- Funzione per tradurre la pagina ---
function translatePage(lang) {
  // Aggiorna attributo lang
  document.documentElement.lang = lang;

  // Traduci tutti gli elementi con data-i18n
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });

  // Traduci placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    if (translations[lang][key]) {
        element.placeholder = translations[lang][key];
    }
  });
    
  // Traduci meta tags e title
  const titleTag = document.querySelector('title');
  const metaDescriptionTag = document.querySelector('meta[name="description"]');
  
  if (titleTag) {
    titleTag.innerHTML = translations[lang].meta_title;
  }
  if (metaDescriptionTag) {
    metaDescriptionTag.setAttribute('content', translations[lang].meta_description);
  }
}

// --- Funzione per impostare la lingua ---
let currentLang = 'it';
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('language', lang);
  
  // Evidenzia lingua attiva
  document.querySelectorAll('.lang-switch').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  
  translatePage(lang);

  // Gestione speciale per effetto terminale
  if(document.getElementById('hero-terminal')) {
    initTerminalEffect();
  }
}

// --- Funzioni per l'effetto Terminale ---

// Funzione helper per "scrivere" il testo
function typewriter(element, text, speed = 50) {
  return new Promise(resolve => {
    let i = 0;
    element.innerHTML = ""; // Pulisce l'elemento
    const cursor = '<span class="cursor">_</span>';
    element.innerHTML = cursor;

    function type() {
      if (i < text.length) {
        element.innerHTML = text.substring(0, i + 1) + cursor;
        i++;
        setTimeout(type, speed);
      } else {
        // Rimuove il cursore alla fine della scrittura della riga
        element.innerHTML = text;
        resolve();
      }
    }
    type();
  });
}

// Funzione principale per l'effetto terminale
let terminalAnimationId = 0; // Contatore per gestire le istanze dell'animazione

async function initTerminalEffect() {
    const terminalContainer = document.getElementById('hero-terminal-output');
    const ctaContainer = document.getElementById('hero-cta');

    if (!terminalContainer || !ctaContainer) return;

    // Incrementa l'ID corrente: questo invalida qualsiasi animazione precedente ancora in corso
    const currentId = ++terminalAnimationId;
    
    // Reset
    terminalContainer.innerHTML = '';
    ctaContainer.innerHTML = '';

    const lang = currentLang;

    // Linee da visualizzare
    const command = translations[lang].hero_command;
    const outputLines = [
        translations[lang].hero_output_name,
        translations[lang].hero_output_role,
        translations[lang].hero_output_focus,
        translations[lang].hero_output_status
    ];
    const cta = translations[lang].hero_cta;

    // 1. Mostra il comando iniziale
    const commandElement = document.createElement('p');
    commandElement.className = 'terminal-prompt';
    commandElement.innerHTML = `$ <span></span>`;
    terminalContainer.appendChild(commandElement);
    const commandSpan = commandElement.querySelector('span');
    
    await typewriter(commandSpan, command);
    if (currentId !== terminalAnimationId) return; // Stop se è partita una nuova animazione

    // Pausa naturale
    await new Promise(resolve => setTimeout(resolve, 1000));
    if (currentId !== terminalAnimationId) return;

    // 2. Mostra l'output riga per riga
    for (const line of outputLines) {
        const p = document.createElement('p');
        p.className = 'terminal-output-line';
        terminalContainer.appendChild(p);
        
        await typewriter(p, line, 30); 
        if (currentId !== terminalAnimationId) return;
        
        await new Promise(resolve => setTimeout(resolve, 200)); // Breve pausa tra le righe
        if (currentId !== terminalAnimationId) return;
    }

    // Pausa prima del CTA
    await new Promise(resolve => setTimeout(resolve, 500));
    if (currentId !== terminalAnimationId) return;

    // 3. Mostra il CTA finale
    const ctaElement = document.createElement('p');
    ctaElement.className = 'terminal-prompt';
    // Link diretto alla pagina projects.html
    ctaElement.innerHTML = `$ <a href="projects.html" class="terminal-link"></a>`;
    ctaContainer.appendChild(ctaElement);
    const ctaLink = ctaElement.querySelector('a');
    
    await typewriter(ctaLink, cta);
}

// --- Funzione per caricare il Footer condiviso ---
function loadFooter() {
    const placeholder = document.getElementById('footer-placeholder');
    if (!placeholder) return;

    // Template HTML del footer
    placeholder.innerHTML = `
    <footer class="footer">
        <div class="container">
            <div class="row">

                <!-- Area Identità -->
                <div class="col-md-4 mb-4 mb-md-0">
                    <h5 data-i18n="footer_identity_name"></h5>
                    <p class="mb-1" data-i18n="footer_identity_role"></p>
                    <p class="footer-tagline" data-i18n="footer_identity_tagline"></p>
                </div>

                <!-- Area Navigazione -->
                <div class="col-md-4 mb-4 mb-md-0">
                    <h5 data-i18n="footer_nav_title"></h5>
                    <ul class="list-unstyled">
                        <li><a href="index.html" data-i18n="footer_nav_home"></a></li>
                        <li><a href="projects.html" data-i18n="footer_nav_projects"></a></li>
                        <li><a href="about.html" data-i18n="footer_nav_about"></a></li>
                        <li><a href="contact.html" data-i18n="footer_nav_contact"></a></li>
                    </ul>
                </div>

                <!-- Area Contatti -->
                <div class="col-md-4">
                    <h5 data-i18n="footer_contact_title"></h5>
                    <div class="social-icons">
                        <a href="mailto:lorenzo.delibero@email.com" aria-label="Email"><i class="fas fa-envelope"></i> Email</a>
                        <a href="https://github.com/lorenzodelibero" target="_blank" aria-label="GitHub"><i class="fab fa-github"></i> GitHub</a>
                        <a href="https://linkedin.com/in/lorenzodelibero" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin"></i> LinkedIn</a>
                    </div>
                </div>

            </div>
            <div class="footer-bottom text-center">
                <p class="mb-0 small"><span data-i18n="footer_copyright"></span> <span data-i18n="footer_built_with"></span></p>
            </div>
        </div>
    </footer>
    `;
}

// --- Event Listener al caricamento del DOM ---
document.addEventListener('DOMContentLoaded', () => {
  // --- Inizializzazione AOS (Animate on Scroll) ---
  AOS.init({
    duration: 800,
    once: true,
    offset: 50,
  });

  // Carica il footer prima di applicare la lingua
  loadFooter();

  // --- Logica i18n ---
  const savedLang = localStorage.getItem('language') || 'it';

  // Aggiungi event listener ai bottoni dello switch
  document.querySelectorAll('.lang-switch').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = e.target.dataset.lang;
      setLanguage(lang);
    });
  });

  // Imposta la lingua iniziale
  setLanguage(savedLang);

  // --- Validazione Form Contatti ---
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      const confirmationMessage = document.getElementById('form-confirmation');
      const lang = localStorage.getItem('language') || 'it';

      if (name === '' || email === '' || message === '') {
        confirmationMessage.textContent = translations[lang].contact_error_msg;
        confirmationMessage.style.color = '#dc3545';
      } else {
        confirmationMessage.textContent = translations[lang].contact_success_msg;
        confirmationMessage.style.color = '#2ea043';
        contactForm.reset();
      }
    });
  }
});
