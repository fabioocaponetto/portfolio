const isSmallScreen = window.innerWidth < 1200;

const imagesToPreload = [
  "img/resonance.webp",
  "img/acque-risorgive.webp",
  "img/sulle-onde-sbagliate.webp",
  "img/IMG_0401_col.webp",
  "img/spazi-indecisi.webp",
  "img/prato.webp",
  "img/madeleine.webp",
  "img/dettagli/spaziindecisi/copertina.gif",
  "img/dettagli/spaziindecisi/EXH_mostra_.gif",
  "img/dettagli/spaziindecisi/video2.mp4",
  "img/dettagli/spaziindecisi/foto.webp",
  "img/dettagli/prato/copertina.gif",
  "img/dettagli/prato/prato5.webp",
  "img/dettagli/prato/prato4.webp",
  "img/dettagli/prato/prato6.webp",
  "img/dettagli/prato/prato7.webp",
  "img/dettagli/prato/prato.webp",
  "img/dettagli/prato/prato3.webp",
  "img/dettagli/prato/prato2.webp",
  "img/dettagli/prato/prato8.webp",
  "img/dettagli/madeleine/foto1.webp",
  "img/dettagli/madeleine/posizionamento.webp",
  "img/dettagli/madeleine/dispenser2.webp",
  "img/dettagli/madeleine/spiegazione.webp",
  "img/dettagli/madeleine/dispenser1.webp",
  "img/dettagli/madeleine/copertina.gif",
  "img/dettagli/madeleine/prototipo.webp",
  "img/dettagli/madeleine/cassa1.webp",
  "img/dettagli/madeleine/definizione.webp",
  "img/dettagli/madeleine/aromaterapia.webp",
  "img/dettagli/madeleine/cassa2.webp",
  "img/dettagli/madeleine/userjourney manuale.gif",
  "img/dettagli/madeleine/userjourney.webp",
  "img/dettagli/madeleine/esplosi.gif",
  "img/dettagli/madeleine/sketch.webp",
  "img/dettagli/madeleine/manuale.gif",
  "img/dettagli/madeleine/arduino.webp",
  "img/dettagli/madeleine/obbiettivi.gif",
  "img/dettagli/madeleine/render.webp",
  "img/dettagli/madeleine/mockup.mp4",
  "img/dettagli/sulleondesbagliate/villaperelli.webp",
  "img/dettagli/sulleondesbagliate/foto.gif",
  "img/dettagli/sulleondesbagliate/teaser.mp4",
  "img/dettagli/sulleondesbagliate/copertina.gif",
  "img/dettagli/sulleondesbagliate/concept.gif",
  "img/dettagli/sulleondesbagliate/installazione.mp4",
  "img/dettagli/sulleondesbagliate/comunicazione2.webp",
  "img/dettagli/sulleondesbagliate/comunicazione1.webp",
  "img/dettagli/sulleondesbagliate/manifesto.webp",
  "img/dettagli/sulleondesbagliate/interazione1.webp",
  "img/dettagli/sulleondesbagliate/interazione2.webp",
  "img/dettagli/sulleondesbagliate/exhibit.webp",
  "img/dettagli/sulleondesbagliate/modello3d.gif",
  "img/dettagli/sulleondesbagliate/experience journey.webp",
  "img/dettagli/sulleondesbagliate/vista villa.webp",
  "img/dettagli/sulleondesbagliate/citazionepapa.webp",
  "img/dettagli/sulleondesbagliate/intro.gif",
  "img/dettagli/sulleondesbagliate/uscita villa.webp",
  "img/dettagli/sulleondesbagliate/entrata1.webp",
  "img/dettagli/sulleondesbagliate/allestimento.gif",
  "img/dettagli/sulleondesbagliate/entrata2.webp",
  "img/dettagli/acquerisorgive/trailer.mp4",
  "img/dettagli/acquerisorgive/copertina.gif",
  "img/dettagli/acquerisorgive/acque-risorgive3.webp",
  "img/dettagli/acquerisorgive/acque-risorgive2.webp",
  "img/dettagli/acquerisorgive/acque-risorgive1.webp",
  "img/dettagli/acquerisorgive/acque-risorgive5.webp",
  "img/dettagli/acquerisorgive/acque-risorgive4.webp",
  "img/dettagli/acquerisorgive/acque-risorgive6.webp",
  "img/dettagli/resonance/lanyard.webp",
  "img/dettagli/resonance/palette.webp",
  "img/dettagli/resonance/luoghi.webp",
  "img/dettagli/resonance/vario_logo.mp4",
  "img/dettagli/resonance/slide_trailer.mp4",
  "img/dettagli/resonance/pieghevole.mp4",
  "img/dettagli/resonance/definizione.webp",
  "img/dettagli/resonance/tipografia.webp",
  "img/dettagli/resonance/biglietti.webp",
  "img/dettagli/resonance/chiusura.mp4",
  "img/dettagli/resonance/rocce.webp",
  "img/dettagli/resonance/manifesto_digitale.mp4",
  "img/dettagli/resonance/manifesti.gif",
  "img/dettagli/synthesi/synthesi_video.mp4",
  "img/dettagli/synthesi/video_sonificazione.mp4",
  "img/dettagli/synthesi/copertina.gif",
  "img/dettagli/synthesi/synthesi2.webp",
  "img/dettagli/synthesi/pad_dati.mp4",
  "img/dettagli/synthesi/synthesi3.webp",
  "img/dettagli/synthesi/synthesi4.webp",
  "img/dettagli/synthesi/synthesi5.webp",
  "img/dettagli/synthesi/synthesi7.webp",
  "img/dettagli/synthesi/synthesi6.webp",
  "img/dettagli/synthesi/synthesi8.webp",
  "img/dettagli/synthesi/synthesi.webp",
  "img/dettagli/synthesi/dati_carotaggio.mp4",
  "img/dettagli/synthesi/programmi.mp4",
  "img/dettagli/synthesi/sito.mp4",
  "img/dettagli/onemoredee/copertina.gif",
  "img/dettagli/onemoredee/onemoredee8.webp",
  "img/dettagli/onemoredee/onemoredee9.webp",
  "img/dettagli/onemoredee/onemoredee2.webp",
  "img/dettagli/onemoredee/onemoredee3.webp",
  "img/dettagli/onemoredee/onemoredee12.webp",
  "img/dettagli/onemoredee/onemoredee7.webp",
  "img/dettagli/onemoredee/onemoredee6.webp",
  "img/dettagli/onemoredee/onemoredee4.webp",
  "img/dettagli/onemoredee/onemoredee11.webp",
  "img/dettagli/onemoredee/onemoredee5.webp",
  "img/dettagli/onemoredee/onemoredee10.webp",
  "img/dettagli/onemoredee/onemoredee.webp",
  "img/synthesi.webp",
  "img/one-more-dee.webp",
  "img/fab.webp",
  "img/IMG_0401.webp"
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

const aboutMe = document.querySelector('.about-me');
const moreInfo = document.querySelector('.more-info');
const hobbies = document.querySelector('.hobbies');

const overlay = document.querySelector('.about-me .overlay');
const overlayContent = document.querySelector('.overlay-content');

const overlayHobbies = document.querySelector('.about-me .overlay-hobbies');
const overlayHobbiesContent = document.querySelector('.about-me .overlay-hobbies-content');

const closeOverlay = document.querySelector('#close-overlay');
const closeHobbiesOverlay = document.querySelector('#close-hobbies-overlay');

//blocca scroll
function disableScroll() {
    document.body.style.overflow = 'hidden';
}
  
//riabilita scroll
function enableScroll() {
    document.body.style.overflow = '';
}

//mostra overlay
moreInfo.addEventListener('click', (e) => {
  e.stopPropagation();

  aboutMe.scrollIntoView({ behavior: 'smooth', block: 'start' });

  overlay.style.visibility = "visible";
//   overlayContent.style.visibility = "visible";
  overlay.classList.add('active');
  disableScroll();

  setTimeout(() => {
    overlayContent.style.visibility = "visible";
  }, 500);
});

//nasconde overlay cliccando "close"
closeOverlay.addEventListener('click', () => {
  overlayContent.style.visibility = "hidden";
  overlay.style.visibility = "hidden";
  overlay.classList.remove('active');
  enableScroll();
});

// Mostra overlay "Hobbies"
hobbies.addEventListener('click', (e) => {
  e.stopPropagation();
  aboutMe.scrollIntoView({ behavior: 'smooth', block: 'start' });

  overlayHobbies.style.visibility = "visible";
  overlayHobbies.classList.add('active');
  disableScroll();

  setTimeout(() => {
    overlayHobbiesContent.style.visibility = "visible";
  }, 500);
});

// Chiudi overlay "Hobbies"
closeHobbiesOverlay.addEventListener('click', () => {
  overlayHobbiesContent.style.visibility = "hidden";
  overlayHobbies.style.visibility = "hidden";
  overlayHobbies.classList.remove('active');
  enableScroll();
});

//----------------------------------------------------------------------------------------------------------------------------------------

const music = document.getElementById("music-hobbies");
const video = document.getElementById("video-hobbies");
const istrText = document.querySelector("#istr-video span");
let spacePressed = false;

if (isSmallScreen) {
    // Cambia il testo per i dispositivi touch
    istrText.innerHTML = 'TIENI PREMUTO<br>E ALZA IL VOLUME';

    // Gestione touch solo su #video-hobbies
    video.addEventListener("touchstart", (e) => {
        e.preventDefault();
        video.play();
        music.play();
    }, { passive: false });

    video.addEventListener("touchend", (e) => {
        e.preventDefault();
        video.pause();
        music.pause();
    }, { passive: false });
} else {
    // Gestione tastiera (desktop)
    document.addEventListener("keydown", (event) => {
        if (event.code === "Space" && !spacePressed) {
            event.preventDefault();
            spacePressed = true;
            video.play();
            music.play();
        }
    });

    document.addEventListener("keyup", (event) => {
        if (event.code === "Space") {
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
