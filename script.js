const isSmallScreen = window.innerWidth < 1200;

const imagesToPreload = [
  "img/resonance.webp",
  "img/acque-risorgive.webp",
  "img/sulle-onde-sbagliate.webp",
  "img/IMG_0401_col.webp",
  "img/spazi-indecisi.webp",
  "img/prato.webp",
  "img/madeleine.webp",
  "img/synthesi.webp",
  "img/one-more-dee.webp",
  "img/fab.webp",
  "img/IMG_0401.webp",
  "videos/animazione_hobbies.mp4",
];

const imagePaths = imagesToPreload.filter(path => !path.endsWith('.mp4'));
const videoPaths = imagesToPreload.filter(path => path.endsWith('.mp4'));

function preloadImages(imagePaths) {
  const promises = imagePaths.map(src => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(src);
      img.onerror = () => reject(src);
      img.src = src;
    });
  });

  return Promise.all(promises);
}

function preloadVideos(videoPaths) {
  const promises = videoPaths.map(src => {
    return new Promise((resolve, reject) => {
      const video = document.createElement('video');
      video.preload = 'auto';
      video.src = src;
      video.onloadeddata = () => resolve(src);
      video.onerror = () => reject(src);
    });
  });

  return Promise.all(promises);
}

Promise.all([
  preloadImages(imagePaths),
  preloadVideos(videoPaths)
])
  .then(() => {
    console.log("✅ Tutte le risorse (immagini e video) sono state caricate.");
  })
  .catch((err) => {
    console.warn("⚠️ Alcune risorse non sono state caricate:", err);
  });

window.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById('loader');
  const hash = window.location.hash;
  const isHashExcluded = hash === "#progetti" || hash === "#about-me";

  // tutti i contenuti principali della pagina home
  const mainSections = document.querySelectorAll('.home, .about-me, .progetti, .contatti');

  function mostraContenuti() {
    mainSections.forEach(sec => {
      sec.style.opacity = '1';
    });
  }

  if (!isHashExcluded) {
    const squares1 = document.querySelector('.square1');
    const squares2 = document.querySelector('.square2');
    const squares3 = document.querySelector('.square3');

    setTimeout(() => {
      squares1.style.backgroundColor = '#ff5c00';
      squares2.style.backgroundColor = 'black';
      squares3.style.backgroundColor = 'black';
    }, 500);

    setTimeout(() => {
      squares1.style.backgroundColor = '#ff5c00';
      squares2.style.backgroundColor = '#ff5c00';
      squares3.style.backgroundColor = 'black';
    }, 1000);

    setTimeout(() => {
      squares1.style.backgroundColor = '#ff5c00';
      squares2.style.backgroundColor = '#ff5c00';
      squares3.style.backgroundColor = '#ff5c00';
    }, 1500);

    // Nascondi loader dopo 2 secondi e mostra i contenuti
    setTimeout(() => {
      loader.style.transition = 'opacity 0.5s ease';
      loader.style.opacity = '0';

      setTimeout(() => {
        loader.style.display = 'none';
        mostraContenuti(); // 👈 qui rendiamo visibile tutto
      }, 500);
    }, 2000);

    localStorage.setItem("visited", "true");
  } else {
    // se atterro direttamente su #progetti o #about-me:
    loader.style.display = 'none';
    mostraContenuti(); // contenuti subito visibili ma già caricati sotto
  }
});


const revealImg = document.querySelector('.image-reveal img');
const rectSize = 200;

document.querySelector('.home').addEventListener('mousemove', e => {
  const bounds = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - bounds.left;
  const y = e.clientY - bounds.top;

  const top = Math.max(0, y/2);
  const bottom = Math.max(0, bounds.height - (y + rectSize));
  const left = Math.max(0, x/2);
  const right = Math.max(0, bounds.width - (x + rectSize));

  revealImg.style.clipPath = `inset(${top}px ${right}px ${bottom}px ${left}px)`;
});

//----------------------------------------------------------------------------------------------------------------------------------------

const headerText = document.getElementById('header-text');
const sections = document.querySelectorAll('div[data-label]');

window.addEventListener('scroll', () => {
  let currentLabel = 'FABIO CAPONETTO'; // default

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 0 && rect.bottom >= 0) {
      let label = section.getAttribute('data-label');
      if (label.toLowerCase() === 'vedi progetti') {
        currentLabel = 'PROGETTI';
      } else {
        currentLabel = label.toUpperCase();
      }
    }
  });

  headerText.textContent = currentLabel;
});


//----------------------------------------------------------------------------------------------------------------------------------------

const buttons = document.querySelectorAll('#button');
      
buttons.forEach(button => {
  button.addEventListener('mouseenter', function () {
    button.style.backgroundColor = '#1f18c0';
    button.style.color = '#f7f7f7';
    const label = button.getAttribute('data-label');
    button.innerHTML = label.toUpperCase() + ' ↘';
  });
      
  button.addEventListener('mouseleave', function () {
    button.style.backgroundColor = '#f7f7f7';
    button.style.color = 'black';
    const label = button.getAttribute('data-label');
    button.innerHTML = label.toUpperCase();
  });
});

document.querySelectorAll('#button').forEach(btn => {
  btn.addEventListener('click', () => {
    const label = btn.getAttribute('data-label');
    const targetSection = document.querySelector(`div[data-label="${label}"]`);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

//----------------------------------------------------------------------------------------------------------------------------------------

const music = document.getElementById("music-hobbies");
const video = document.getElementById("video-hobbies");
const istrText = document.querySelector("#istr-video span");
let spacePressed = false;

const overlayHobbies = document.querySelector('.overlay-hobbies');

function isOverlayVisible() {
  if (!overlayHobbies) return false;

  const rect = overlayHobbies.getBoundingClientRect();
  const vh = window.innerHeight || document.documentElement.clientHeight;

  const visibleHeight = Math.min(rect.bottom, vh) - Math.max(rect.top, 0);

  // la consideriamo "visibile" se almeno il 30% è in viewport
  return visibleHeight > vh * 0.5;
}

if (isSmallScreen) {
  // Testo per mobile
  istrText.innerHTML = 'TIENI PREMUTO<br>E ALZA IL VOLUME';

  let startX = 0;
  let startY = 0;
  let isScrollingLike = false;
  const MOVE_THRESHOLD = 20; // px: oltre questo lo consideriamo scroll

  function handleTouchStart(e) {
    if (e.touches.length !== 1) return;

    const t = e.touches[0];
    startX = t.clientX;
    startY = t.clientY;
    isScrollingLike = false;

    // 👉 appena appoggia il dito: parte video + musica
    video.play();
    music.play();
  }

  function handleTouchMove(e) {
    if (e.touches.length !== 1) return;
    if (isScrollingLike) return;

    const t = e.touches[0];
    const dx = Math.abs(t.clientX - startX);
    const dy = Math.abs(t.clientY - startY);

    if (dx > MOVE_THRESHOLD || dy > MOVE_THRESHOLD) {
      // 👉 sta chiaramente scrollando: fermiamo audio/video
      isScrollingLike = true;
      if (!video.paused) {
        video.pause();
        music.pause();
      }
    }
  }

  function handleTouchEndOrCancel() {
    // 👉 appena solleva il dito (o il touch viene cancellato): STOP sempre
    if (!video.paused) {
      video.pause();
      music.pause();
    }
  }

  video.addEventListener("touchstart", handleTouchStart, { passive: true });
  video.addEventListener("touchmove", handleTouchMove, { passive: true });
  video.addEventListener("touchend", handleTouchEndOrCancel, { passive: true });
  video.addEventListener("touchcancel", handleTouchEndOrCancel, { passive: true });

} else {
  // DESKTOP: gestione tastiera (spacebar)
  document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
      event.preventDefault(); // niente scroll mai

      if (!isOverlayVisible()) return;

      if (!spacePressed) {
        spacePressed = true;
        video.play();
        music.play();
      }
    }
  });

  document.addEventListener("keyup", (event) => {
    if (event.code === "Space") {
      event.preventDefault();

      if (!isOverlayVisible()) return;

      spacePressed = false;
      video.pause();
      music.pause();
    }
  });
}



//----------------------------------------------------------------------------------------------------------------------------------------

function applicaBordiGriglia() {
  const container = document.querySelector('.box-progetti');
  const items = Array.from(container.querySelectorAll('.progetto'));

  const computedStyle = getComputedStyle(container);
  const columnCount = computedStyle.gridTemplateColumns.split(' ').length;

  items.forEach((item, index) => {
    // Reset bordi
    item.style.borderTop = 'none';
    item.style.borderLeft = 'none';
    item.style.borderRight = '1px solid black';
    item.style.borderBottom = '1px solid black';

    // Prima riga
    if (index < columnCount) {
      item.style.borderTop = '1px solid black';
    }

    // Primo elemento di ogni riga
    if (index % columnCount === 0) {
      item.style.borderLeft = '1px solid black';
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const boxProgetti = document.querySelector('.box-progetti');

  // CARICA I PROGETTI DAL CSV
  fetch('data/progetti.csv')
    .then(response => response.text())
    .then(text => {
      const lines = text.trim().split('\n');
      const headers = lines[0].split(',');

      lines.slice(1).forEach(line => {
        const values = line.split(',');
        const project = {};

        headers.forEach((header, index) => {
          project[header.trim()] = values[index].trim();
        });

        const div = document.createElement('div');
        div.classList.add('progetto');
        div.id = project.ambito.toLowerCase();
        div.dataset.titBreve = project.tit_breve;

        div.innerHTML = `
          <div class="info-progetto">
              <p><span id="titolo-info-progetto">${project.titolo}</span></p>
              <p><span id="descrizione-info-progetto">${project.descrizione}</span></p>
              <p><span id="anno-info-progetto">${project.anno}</span></p>
              <p><span id="freccia-info-progetto">[more info]</span></p>
          </div>
        `;

        div.addEventListener('click', () => {
          const path = `dettagli/${project.tit_breve.toLowerCase()}.html`;
          window.location.href = path;

          div.querySelector(".info-progetto").style.backgroundImage = ``;
          div.querySelector("#titolo-info-progetto").style.backgroundColor = "";
          div.querySelector("#titolo-info-progetto").style.color = "black";
          div.querySelector("#descrizione-info-progetto").style.backgroundColor = "";
          div.querySelector("#descrizione-info-progetto").style.color = "black";
          div.querySelector("#anno-info-progetto").style.backgroundColor = "";
          div.querySelector("#anno-info-progetto").style.color = "black";
          div.querySelector("#freccia-info-progetto").style.backgroundColor = "";
          div.querySelector("#freccia-info-progetto").style.color = "black";

        });

        div.addEventListener('mouseenter', () => {
          div.querySelector(".info-progetto").style.backgroundImage = `url('img/${project.tit_breve}.webp')`;
          div.querySelector(".info-progetto").style.backgroundSize = `cover`;
          div.querySelector(".info-progetto").style.backgroundPosition = `center`;
          div.querySelector(".info-progetto").style.backgroundRepeat = `no-repeat`;

          div.querySelector("#titolo-info-progetto").style.backgroundColor = "black";
          div.querySelector("#titolo-info-progetto").style.color = "white";
          div.querySelector("#descrizione-info-progetto").style.backgroundColor = "black";
          div.querySelector("#descrizione-info-progetto").style.color = "white";
          div.querySelector("#anno-info-progetto").style.backgroundColor = "black";
          div.querySelector("#anno-info-progetto").style.color = "white";
          div.querySelector("#freccia-info-progetto").style.backgroundColor = "black";
          div.querySelector("#freccia-info-progetto").style.color = "white";
        });

        div.addEventListener('mouseleave', () => {
          div.querySelector(".info-progetto").style.backgroundImage = ``;
          div.querySelector("#titolo-info-progetto").style.backgroundColor = "";
          div.querySelector("#titolo-info-progetto").style.color = "black";
          div.querySelector("#descrizione-info-progetto").style.backgroundColor = "";
          div.querySelector("#descrizione-info-progetto").style.color = "black";
          div.querySelector("#anno-info-progetto").style.backgroundColor = "";
          div.querySelector("#anno-info-progetto").style.color = "black";
          div.querySelector("#freccia-info-progetto").style.backgroundColor = "";
          div.querySelector("#freccia-info-progetto").style.color = "black";
        });

        boxProgetti.appendChild(div);
        applicaBordiGriglia();
      });

      setupFiltri();
    })
    .catch(error => {
      console.error('Errore nel caricamento del CSV:', error);
    });

  function setupFiltri() {
    const filterButtons = document.querySelectorAll('.scelta-ambito > div');
    const allProjects = document.querySelectorAll('.progetto');

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const selected = button.classList[0].toLowerCase(); // product, digital, exhibit, all-projects

        allProjects.forEach(project => {
          const imgName = project.dataset.titBreve;
          const infoProgetto = project.querySelector('.info-progetto');
          const titolo = project.querySelector('#titolo-info-progetto');
          const descrizione = project.querySelector('#descrizione-info-progetto');
          const anno = project.querySelector('#anno-info-progetto');
          const moreInfo = project.querySelector('#freccia-info-progetto');


          if (selected === 'all-progetti') {
            titolo.style.opacity = 1;
            descrizione.style.opacity = 1;
            anno.style.opacity = 1;
            moreInfo.style.opacity = 1;

            project.style.pointerEvents = "all";
            project.style.backgroundColor = "transparent";
            project.style.backgroundImage = `none`;

              titolo.style.backgroundColor = "";
              titolo.style.color = "black";
              descrizione.style.backgroundColor = "";
              descrizione.style.color = "black";
              anno.style.backgroundColor = "";
              anno.style.color = "black";
              moreInfo.style.backgroundColor = "";
              moreInfo.style.color = "black";
            
            applicaBordiGriglia();
          } else if (project.id === selected) {
            titolo.style.opacity = 1;
            descrizione.style.opacity = 1;
            anno.style.opacity = 1;
            moreInfo.style.opacity = 1;
            project.style.pointerEvents = "all";

            if (isSmallScreen) {
              project.style.pointerEvents = "all";
              project.style.backgroundImage = `url('img/${imgName}.webp')`;
              project.style.backgroundSize = `cover`;
              project.style.backgroundPosition = `center`;
              project.style.backgroundRepeat = `no-repeat`;

              titolo.style.backgroundColor = "black";
              titolo.style.color = "white";
              descrizione.style.backgroundColor = "black";
              descrizione.style.color = "white";
              anno.style.backgroundColor = "black";
              anno.style.color = "white";
              moreInfo.style.backgroundColor = "black";
              moreInfo.style.color = "white";
            }
          } else {
            titolo.style.opacity = 0.2;
            descrizione.style.opacity = 0.2;
            anno.style.opacity = 0.2;
            moreInfo.style.opacity = 0.2;

            project.style.pointerEvents = "none";
            project.style.backgroundColor = "transparent";
            project.style.backgroundImage = `none`;

            if (isSmallScreen) {
              titolo.style.backgroundColor = "";
              titolo.style.color = "black";
              descrizione.style.backgroundColor = "";
              descrizione.style.color = "black";
              anno.style.backgroundColor = "";
              anno.style.color = "black";
              moreInfo.style.backgroundColor = "";
              moreInfo.style.color = "black";
            }

          }
        });

        // Cambio colore ai bottoni
        filterButtons.forEach(b => {
          b.style.backgroundColor = "transparent";
          b.style.color = "black";
        });
        button.style.backgroundColor = "black";
        button.style.color = "white";
      });
    });
  }
});

window.addEventListener('resize', () => {
  applicaBordiGriglia();
});

//----------------------------------------------------------------------------------------------------------------------------------------

document.querySelector("#header-text").addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener("load", () => {
  if (window.location.hash === "#progetti") {
    const el = document.getElementById("progetti");
    if (el) {
      el.scrollIntoView({ behavior: "auto", block: "start" }); // forza lo scroll in top 0
    }
  }
});

//----------------------------------------------------------------------------------------------------------------------------------------

const closeHobbiesOverlayBtn = document.getElementById('close-hobbies-overlay');

if (closeHobbiesOverlayBtn) {
  closeHobbiesOverlayBtn.addEventListener('click', () => {
    // opzionale: ferma audio/video prima del redirect
    if (video && !video.paused) video.pause();
    if (music && !music.paused) music.pause();

    // vai alla pagina curriculum.html nella cartella "dettagli"
    window.location.href = 'dettagli/curriculum.html';
  });
}

if (closeHobbiesOverlayBtn) {

  closeHobbiesOverlayBtn.addEventListener('mouseenter', () => {
    closeHobbiesOverlayBtn.style.backgroundColor = 'white';
    closeHobbiesOverlayBtn.style.color = 'blue';
  });

  closeHobbiesOverlayBtn.addEventListener('mouseleave', () => {
    closeHobbiesOverlayBtn.style.backgroundColor = 'blue';
    closeHobbiesOverlayBtn.style.color = 'white';
  });
}

//----------------------------------------------------------------------------------------------------------------------------------------

(function () {
    const baseURL = "https://fabioocaponetto.github.io/portfolio/index.html";

    // rileva se questo caricamento è un reload
    let isReload = false;

    if (performance.getEntriesByType) {
      const nav = performance.getEntriesByType("navigation")[0];
      if (nav && nav.type === "reload") isReload = true;
    } else if (performance.navigation) {
      isReload = performance.navigation.type === 1; // legacy
    }

    // se è un reload e c'è un hash → vai all'index pulito
    if (isReload && window.location.hash) {
      window.location.href = baseURL;
    }
  })();
