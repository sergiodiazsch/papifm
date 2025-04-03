<!-- ========================================================= -->
<!-- Sección 1: Dependencias Externas (Librerías y Atributos) -->
<!-- ========================================================= -->

<!-- [Attributes by Finsweet] CMS Filter (para filtrar contenido CMS) -->
<script async src="https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsfilter@1/cmsfilter.js"></script>

<!-- [Attributes by Finsweet] Custom Form Select -->
<script defer src="https://cdn.jsdelivr.net/npm/@finsweet/attributes-selectcustom@1/selectcustom.js"></script>

<!-- Librerías externas: jQuery, GSAP, Draggable, Typed.js, glslCanvas, Swiper, Hammer.js, VanillaTilt -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/Draggable.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/glslCanvas/2.1.0/GlslCanvas.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.17.1/matter.min.js"></script>
<script src="https://unpkg.com/swiper@9/swiper-bundle.min.js"></script>
<script src="https://hammerjs.github.io/dist/hammer.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vanilla-tilt@1.7.0/dist/vanilla-tilt.min.js"></script>

<!-- ========================================================= -->
<!-- Sección 2: Estilos Globales y Personalizados -->
<!-- ========================================================= -->

<!-- Estilos de cursor para toda la página (flecha y mano para elementos interactivos) -->
<style>
  body {
    cursor: url('https://cdn.prod.website-files.com/66d1f3b407293a385b142c82/67e54843197a54bf4c65ba53_arrow.png'), auto;
  }
  a,
  button,
  input[type="button"],
  input[type="submit"] {
    cursor: url('https://cdn.prod.website-files.com/66d1f3b407293a385b142c82/67e548388da9b24b9ebfa0c9_hand.png'), pointer;
  }
</style>

<!-- Estilos para Swiper slider, cartas y temas personalizados -->
<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
<style>
  /* ============================
     Estilos del Swiper y cartas
     ============================ */
  .swiper-container { width: 100%; height: 300px; }
  .swiper-slide { display: flex; align-items: center; justify-content: center; }
  .card-item { position: relative; transition: transform 0.3s ease; }
  .carta-img { width: 150px; height: auto; }
  #carta-elegida { margin-top: 20px; }
  /* Ocultar elementos */
  .hide { display: none; }
  /* Loader personalizado */
  .pkmn-loader {
    position: fixed;
    z-index: 9999;
  }
  /* Estilos del slider: contenedor, wrapper y slide */
  .swiper-container {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px 0;
    overflow: visible;
  }
  .swiper-wrapper,
  .swiper-slide {
    overflow: visible;
  }
  .swiper-slide { display: flex; justify-content: center; align-items: center; }
  /* Carta expandida */
  .card-item.expanded {
    z-index: 9999;
    box-shadow: 0 0 20px rgba(0,0,0,0.5);
  }
  .carta-img {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 8px;
  }
  /* Efecto glare en las cartas (oculto por defecto) */
  .glare {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background: linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.6) 50%, transparent 100%);
    opacity: 0;
    transition: opacity 0.2s ease;
    border-radius: 8px;
  }
  /* Blending modes */
  .mbm-normal{mix-blend-mode: normal;}
  .mbm-multiply{mix-blend-mode: multiply;}
  .mbm-screen{mix-blend-mode: screen;}
  .mbm-overlay{mix-blend-mode: overlay;}
  .mbm-darken{mix-blend-mode: darken;}
  .mbm-lighten{mix-blend-mode: lighten;}
  .mbm-color-dodge{mix-blend-mode: color-dodge;}
  .mbm-color-burn{mix-blend-mode: color-burn;}
  .mbm-hard-light{mix-blend-mode: hard-light;}
  .mbm-soft-light{mix-blend-mode: soft-light;}
  .mbm-difference{mix-blend-mode: difference;}
  .mbm-exclusion{mix-blend-mode: exclusion;}
  .mbm-hue{mix-blend-mode: hue;}
  .mbm-saturation{mix-blend-mode: saturation;}
  .mbm-color{mix-blend-mode: color;}
  .mbm-luminosity{mix-blend-mode: luminosity;}
  
  /* Forzar overflow visible en Swiper */
  .swiper-container,
  .swiper-wrapper,
  .swiper-slide {
    overflow: visible !important;
  }
  
  /* Estilos de temas (paletas de colores) */
  :root {
    --primary--gray-100: #ffffff;
    --primary--gray-200: #fdf4eb;
    --primary--gray-300: #f9efe4;
    --primary--gray-400: #f0e4dc;
    --primary--gray-500: #e5dacd;
    --primary--gray-600: #dacfc0;
    --primary--gray-700: #cfc3b3;
    --primary--gray-800: #c4b7a7;
  }
  :root[data-theme="1"] {
    /* Tema 1: Rojo suave – Paleta theme-2 */
    --primary--gray-100: #ffe3e3;
    --primary--gray-200: #ffd6d6;
    --primary--gray-300: #ffc9c9;
    --primary--gray-400: #ffbcbc;
    --primary--gray-500: #ffafaf;
    --primary--gray-600: #ffa3a3;
    --primary--gray-700: #ff8f8f;
    --primary--gray-800: #ff7a7a;
  }
  :root[data-theme="2"] {
    /* Tema 2: Verde azulado – Paleta theme-3 */
    --primary--gray-100: #e6f7f1;
    --primary--gray-200: #cdeee4;
    --primary--gray-300: #b5ecda;
    --primary--gray-400: #9ae2cd;
    --primary--gray-500: #80d8c0;
    --primary--gray-600: #66ceb3;
    --primary--gray-700: #4cc5a6;
    --primary--gray-800: #33bb99;
  }
  :root[data-theme="3"] {
    /* Tema 3: Cian – Paleta theme-4 */
    --primary--gray-100: #e6f9f9;
    --primary--gray-200: #cceff0;
    --primary--gray-300: #b5e5e5;
    --primary--gray-400: #9adbdc;
    --primary--gray-500: #80d1d2;
    --primary--gray-600: #66c7c8;
    --primary--gray-700: #4cbcbe;
    --primary--gray-800: #33b2b4;
  }
  :root[data-theme="4"] {
    /* Tema 4: Azul clarito – Paleta theme-5 */
    --primary--gray-100: #f0ffff;
    --primary--gray-200: #e8fcfd;
    --primary--gray-300: #ecfbfd;
    --primary--gray-400: #d9f8fa;
    --primary--gray-500: #c5f4f6;
    --primary--gray-600: #b2f1f3;
    --primary--gray-700: #9eeeed;
    --primary--gray-800: #8beae9;
  }
  :root[data-theme="5"] {
    /* Tema 5: Amarillo clarito – Paleta theme-6 */
    --primary--gray-100: #fffef7;
    --primary--gray-200: #fffdf0;
    --primary--gray-300: #fff6d9;
    --primary--gray-400: #fff1c2;
    --primary--gray-500: #ffecab;
    --primary--gray-600: #ffe895;
    --primary--gray-700: #ffe27e;
    --primary--gray-800: #ffdd67;
  }
</style>

<!-- Estilos adicionales: posicionamiento, video y efecto Typed en .paragraph-loader -->
<style>
  /* Posicionamiento de elementos drag-and-drop */
  .draggable:nth-child(2) { top: 250px; left: 150px; }
  .draggable:nth-child(3) { top: 400px; left: 200px; }
  
  /* Ajustes de video: contraste y brillo */
  video {
    filter: contrast(1.2) brightness(0.9);
  }
  
  /* Estilo para el efecto de tipeo en .paragraph-loader */
  .paragraph-loader {
    white-space: pre; /* Preserva espacios y saltos de línea */
    font-family: monospace; /* Fuente monoespaciada para efecto terminal */
  }
</style>

<!-- ========================================================= -->
<!-- Sección 3: Scripts de Funcionalidad (Eventos, Animaciones y Efectos) -->
<!-- ========================================================= -->

<!-- Snippet 1: [Attributes by Finsweet] Mirror Click Events -->
<script defer src="https://cdn.jsdelivr.net/npm/@finsweet/attributes-mirrorclick@1/mirrorclick.js"></script>

<!-- Script para manejo de eventos de click, z-index y draggable con GSAP -->
<script>
  // Variable global para manejar el z-index máximo
  var highestZ = 1;

  $(document).ready(function () {
    // Al hacer clic en cualquier .wrapper-icon dentro de .block-content
    $('.block-content').on('click', '.wrapper-icon', function () {
      // Encontrar el contenedor principal correspondiente y alternar su clase 'closed'
      var $wrapperIconMain = $(this).closest('.block-content').find('.wrapper-icon-main');
      var wasClosed = $wrapperIconMain.hasClass('closed');
      $wrapperIconMain.toggleClass('closed');

      // Si se abrió el contenedor, buscar el elemento draggable y actualizar el z-index
      if (wasClosed) {
        var $draggable = $wrapperIconMain.find('.draggable');
        highestZ++;
        $draggable.css('z-index', highestZ);
      }
    });
  });

  // Inicialización de GSAP Draggable para elementos con clase .draggable
  document.addEventListener('DOMContentLoaded', function () {
    gsap.registerPlugin(Draggable);
    document.querySelectorAll('.draggable').forEach(function (draggableElem) {
      // Al iniciar el drag, actualizar el z-index para traerlo al frente
      draggableElem.addEventListener('mousedown', function () {
        highestZ++;
        draggableElem.style.zIndex = highestZ;
      }, true);

      // Seleccionar la zona de arrastre (.drag-handle) y crear el objeto Draggable
      var handle = draggableElem.querySelector('.drag-handle');
      Draggable.create(draggableElem, {
        type: "x,y",
        bounds: "#main-content",
        inertia: true,
        zIndexBoost: false,
        trigger: handle,
        snap: {
          x: endValue => Math.round(endValue / 50) * 50,
          y: endValue => Math.round(endValue / 50) * 50
        },
        onDragEnd: function () {
          const snappedX = Math.round(this.x / 50) * 50;
          const snappedY = Math.round(this.y / 50) * 50;
          gsap.to(this.target, {
            x: snappedX,
            y: snappedY,
            ease: "bounce.out",
            duration: 0.5
          });
        }
      });
    });
  });
</script>

<!-- Snippet 4: Typed.js - Efecto de máquina de escribir en .paragraph-loader -->
<script>
  (function() {
    // Inyecta CSS para preservar el formato y ocultar inicialmente el elemento
    var style = document.createElement("style");
    style.textContent = ".paragraph-loader { white-space: pre; font-family: monospace; visibility: hidden; }";
    document.head.appendChild(style);

    // Guardar el texto original y limpiar el contenido para el efecto
    var paragraph = document.querySelector(".paragraph-loader");
    var originalText = paragraph.innerHTML;
    paragraph.innerHTML = "";

    // Cargar Typed.js y, al finalizar, iniciar el efecto tras un retraso
    var typedScript = document.createElement("script");
    typedScript.src = "https://cdn.jsdelivr.net/npm/typed.js@2.0.12";
    typedScript.onload = function() {
      window.addEventListener("load", function() {
        setTimeout(function() {
          paragraph.style.visibility = "visible";
          new Typed(".paragraph-loader", {
            strings: [originalText],
            typeSpeed: 1,
            showCursor: false,
            cursorChar: "|",
            loop: false
          });
        }, 1500);
      });
    };
    document.head.appendChild(typedScript);
  })();
</script>

<!-- Snippet 5: Activación de pantalla completa (Fullscreen) -->
<script>
  function launchFullscreen(element) {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { // Firefox
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // Chrome, Safari, Opera
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // IE/Edge
      element.msRequestFullscreen();
    }
  }
  // Activar fullscreen ante pulsación de tecla o toque
  document.addEventListener('keydown', function() {
    launchFullscreen(document.documentElement);
  });
  document.addEventListener('touchstart', function() {
    launchFullscreen(document.documentElement);
  });
</script>

<!-- Snippet 6: Ocultar Loader y mostrar la página principal tras interacción -->
<script>
  document.addEventListener("DOMContentLoaded", function() {
    const loader = document.querySelector('.loader');
    const mainPage = document.querySelector('.main-page');

    function isVisible(el) {
      return el && (el.offsetWidth > 0 || el.offsetHeight > 0);
    }

    function handleEvent() {
      if (loader && isVisible(loader)) {
        loader.classList.add('hide');       // Oculta el loader
        if (mainPage) { mainPage.classList.remove('down'); } // Muestra la página principal
        // Remover listeners después de la acción
        document.removeEventListener('click', handleEvent);
        document.removeEventListener('keydown', handleEvent);
      }
    }

    document.addEventListener('click', handleEvent);
    document.addEventListener('keydown', handleEvent);
  });
</script>

<!-- Snippet 8: Efecto parpadeo: Toggle de visibilidad en elementos .flash-item -->
<script>
  document.addEventListener('DOMContentLoaded', function() {
    setInterval(function() {
      document.querySelectorAll('.flash-item').forEach(function(el) {
        el.style.visibility = (el.style.visibility === 'hidden') ? 'visible' : 'hidden';
      });
    }, 350);
  });
</script>

<!-- ========================================================= -->
<!-- Sección 4: Funcionalidad para Cámara y Video con Efectos -->
<!-- ========================================================= -->

<script>
  // Variables para manejar video, canvas y efectos de cámara
  const video = document.getElementById('video');
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  // Estados iniciales: flash activado, night mode desactivado
  let flashEnabled = true;
  let nightModeEnabled = false;

  // Pre-cargar imágenes de fondo (sources vacías, se pueden actualizar)
  const camBgImg = new Image();
  camBgImg.src = "";
  
  const textBgImg = new Image();
  textBgImg.src = "";

  // Función para iniciar la cámara al hacer clic en "papicam"
  function iniciarCamara() {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => { 
        video.srcObject = stream;
      })
      .catch(err => { 
        console.error("Error al acceder a la cámara:", err); 
      });
  }
  document.getElementById('papicam').addEventListener('click', () => {
    iniciarCamara();
  });

  // Función para componer la imagen final en el canvas (con efectos de filtro y texto)
  function compositeImage() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibujar imagen de fondo (cam-bg)
    ctx.save();
    ctx.globalAlpha = 1;
    ctx.drawImage(camBgImg, 0, 0, canvas.width, canvas.height);
    ctx.restore();

    // Dibujar video con efecto flip horizontal y filtros según night mode
    ctx.save();
    if (nightModeEnabled) {
      ctx.filter = "grayscale(30%) contrast(80%) brightness(150%)";
    } else {
      ctx.filter = "grayscale(30%) contrast(120%) brightness(110%)";
    }
    ctx.globalAlpha = 0.8;
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    ctx.restore();

    // Dibujar overlay rosado con blend mode "multiply"
    ctx.save();
    ctx.globalCompositeOperation = 'multiply';
    ctx.globalAlpha = 0.5;
    ctx.fillStyle = 'hsla(323, 100%, 50%, 1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.restore();

    // Dibujar capa de texto con sombra y patrón
    const offCanvas = document.createElement('canvas');
    offCanvas.width = canvas.width;
    offCanvas.height = canvas.height;
    const offCtx = offCanvas.getContext('2d');
    offCtx.drawImage(textBgImg, 0, 0, offCanvas.width, offCanvas.height);
    offCtx.fillStyle = 'hsla(68.9412, 100%, 50%, 0.54)';
    offCtx.fillRect(0, 0, offCanvas.width, offCanvas.height);
    const textPattern = ctx.createPattern(offCanvas, 'no-repeat');

    ctx.save();
    ctx.filter = "blur(0.6px)";
    ctx.shadowColor = "#d9ff00";
    ctx.shadowBlur = 5;
    ctx.shadowOffsetX = 1;
    ctx.shadowOffsetY = 1;
    ctx.font = "italic 42px Geneva, sans-serif";
    ctx.textBaseline = "bottom";
    ctx.fillStyle = textPattern;
    const textX = 32;
    const textY = canvas.height - 32;
    ctx.fillText("PAPICAM™", textX, textY);
    ctx.restore();
  }

  // Toggle para activar/desactivar flash
  document.getElementById('flash-btn').addEventListener('click', () => {
    flashEnabled = !flashEnabled;
    const flashBtn = document.getElementById('flash-btn');
    if (flashEnabled) {
      flashBtn.classList.add('active');
    } else {
      flashBtn.classList.remove('active');
    }
  });

  // Toggle para activar/desactivar night mode
  document.getElementById('night-btn').addEventListener('click', () => {
    nightModeEnabled = !nightModeEnabled;
    const nightBtn = document.getElementById('night-btn');
    if (nightModeEnabled) {
      nightBtn.classList.add('active');
      video.style.filter = "brightness(50%) contrast(80%)";
    } else {
      nightBtn.classList.remove('active');
      video.style.filter = "";
    }
  });

  // Capturar imagen al hacer clic en "Capturar foto"
  document.getElementById('snap').addEventListener('click', () => {
    if (flashEnabled) {
      const flashDiv = document.querySelector('.flash-div');
      if (flashDiv) {
        flashDiv.style.display = 'block';
      }
      setTimeout(() => { compositeImage(); }, 300);
      setTimeout(() => {
        if (flashDiv) { flashDiv.style.display = 'none'; }
      }, 1000);
    } else {
      compositeImage();
    }
  });
</script>

<!-- Script para descargar la imagen del canvas con nombres aleatorios divertidos -->
<script>
  document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.getElementById('download');
    const funnyNames = [
      'who_approved_this.png',
      'delete_this_now.png',
      'proof_of_trauma.png',
      'born_to_disappoint.png',
      'thanks_i_hate_it.png',
      'crying_in_hd.png',
      'face_only_mother_could_love.png',
      'emotional_damage.png',
      'please_unsee.png',
      'zero_chill.png'
    ];

    if (downloadBtn) {
      downloadBtn.addEventListener('click', () => {
        const randomName = funnyNames[Math.floor(Math.random() * funnyNames.length)];
        const dataURL = canvas.toDataURL("image/png");
        const link = document.createElement('a');
        link.href = dataURL;
        link.download = randomName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    } else {
      console.error('No se encontró el botón con id="download".');
    }
  });
</script>

<!-- ========================================================= -->
<!-- Sección 5: Funcionalidad para Efectos con GLSL y Botones de Cámara/Pokemon -->
<!-- ========================================================= -->

<!-- Snippet 10: glslCanvas para efectos con shaders GLSL -->
<!-- (El canvas para el shader se posiciona de fondo y ocupa toda la pantalla) -->
<canvas id="shader-canvas"></canvas>

<!-- Snippet 11: Botón Flash - Toggle de clases en elementos .camera-secondary -->
<script>
  document.addEventListener('DOMContentLoaded', function() {
    var cameraElements = document.querySelectorAll('.camera-secondary');
    cameraElements.forEach(function(element) {
      element.addEventListener('click', function() {
        element.classList.toggle('active');
        Array.from(element.children).forEach(function(child) {
          child.classList.toggle('hide');
        });
      });
    });
  });
</script>

<!-- Snippet 12: Botón Cámara - Agregar clase 'done' a #camera-result -->
<script>
  document.addEventListener('DOMContentLoaded', function() {
    var btnCamera = document.getElementById('btn-camera');
    var cameraResult = document.getElementById('camera-result');
    if (btnCamera && cameraResult) {
      btnCamera.addEventListener('click', function() {
        setTimeout(function() {
          cameraResult.classList.add('done');
        }, 500);
      });
    } else {
      console.error('No se encontró el elemento con id "btn-camera" o "camera-result".');
    }
  });
</script>

<!-- Snippet 13: Botón Cámara - Actualizar fecha en #pic-date -->
<script>
  document.getElementById('btn-camera').addEventListener('click', function() {
    var now = new Date();
    var day = now.getDate().toString().padStart(2, '0');
    var month = (now.getMonth() + 1).toString().padStart(2, '0');
    var year = now.getFullYear().toString().slice(-2);
    var hours = now.getHours();
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    var hoursFormatted = hours.toString().padStart(2, '0');
    var formattedDate = day + '-' + month + '-' + year + ' - ' + hoursFormatted + ':' + minutes + ' ' + ampm;
    document.getElementById('pic-date').textContent = formattedDate;
  });
</script>

<!-- Snippet 14: Botón Cámara - Seleccionar nombre aleatorio para foto -->
<script>
  const picNames = [
    "selfie-disaster",
    "pathetic-pose",
    "cringe-face",
    "tryhard-fail",
    "awkward-selfie",
    "mediocre-smirk",
    "basic-look",
    "nobody-cares",
    "overrated-selfie",
    "desperate-shot",
    "ugly-mugshot",
    "snooze-worthy",
    "dull-expression",
    "facepalm-moment",
    "loser-portrait"
  ];

  document.getElementById("btn-camera").addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * picNames.length);
    const selectedName = picNames[randomIndex];
    document.getElementById("pic-name").textContent = selectedName;
  });
</script>

<!-- Snippet 16: Toggle de Volumen en videos (.vol-toggle) -->
<script>
  document.addEventListener("DOMContentLoaded", function() {
    const toggleButtons = document.querySelectorAll('.vol-toggle');
    toggleButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        const container = button.closest('.glfx-video-container');
        if (container) {
          const video = container.querySelector('video');
          if (video) {
            video.muted = !video.muted;
          }
        }
      });
    });
  });
</script>

<!-- ========================================================= -->
<!-- Sección 6: Funcionalidad para Pokemon (Cartas, Swiper y API) -->
<!-- ========================================================= -->

<!-- Estilos adicionales para el slider de cartas y efectos de manipulación -->
<style>
  /* Bloque de estilos para temas de cartas (CSSCO) */
  .cssco.cssco--c1 {
      background: linear-gradient(#d5aeae, #8f8f8f, #c99d93, #185d62 110%);
  }
  .cssco.cssco--c1 video, .cssco.cssco--c1 canvas {
      filter: grayscale(6%) contrast(130%);
      mix-blend-mode: hard-light;
  }
  /* (Se incluyen otros bloques de estilos para diferentes temas: F2, G3, P5, LV3, B5, A6, KK2, M5, M3, HB1, HB2, ACG, X1, T1) */
</style>

<!-- Código para manejo de Pokemon TCG: abrir sobre, mostrar cartas en Swiper, selección y eventos -->
<script>
  // Función para obtener la API key (modificar si es necesario)
  async function obtenerApiKey() {
    return "e74f8e4f-d51b-4412-8a0f-f13d67b1f66b";
  }

  // Función para barajar un arreglo (algoritmo Fisher‑Yates)
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Asigna eventos para efecto de perspectiva y brillo en cartas
  function attachManipulation(cardItem) {
    const isChosen = !!cardItem.closest("#carta-elegida");
    const defaultScale = 1;
    const expandedScale = 1.5;
    const glareEl = cardItem.querySelector(".glare");
    if (!glareEl) return;

    function handleMouseMove(e) {
      if (!isChosen && cardItem.classList.contains("expanded")) return;
      const rect = cardItem.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const maxTilt = 15;
      let tiltX = (deltaY / (rect.height / 2)) * maxTilt;
      let tiltY = -(deltaX / (rect.width / 2)) * maxTilt;
      tiltX = Math.max(-maxTilt, Math.min(maxTilt, tiltX));
      tiltY = Math.max(-maxTilt, Math.min(maxTilt, tiltY));
      cardItem.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(${defaultScale})`;
      if (isChosen) {
        cardItem.style.filter = 'drop-shadow(0 0 8px #fff)';
      }
    }
    function resetMouseTransform() {
      cardItem.style.transform = `perspective(1000px) scale(${defaultScale})`;
      if (isChosen) {
        cardItem.style.filter = 'none';
      }
    }
    cardItem.addEventListener("mousemove", handleMouseMove);
    cardItem.addEventListener("mouseleave", resetMouseTransform);
    if (!cardItem.hammerInstance) {
      const hammertime = new Hammer(cardItem);
      hammertime.get('pan').set({ direction: Hammer.DIRECTION_ALL });
      hammertime.on('pan', (ev) => {
        if (!isChosen && cardItem.classList.contains("expanded")) return;
        const maxTilt = 15;
        let tiltX = (ev.deltaY / 100) * maxTilt;
        let tiltY = -(ev.deltaX / 100) * maxTilt;
        tiltX = Math.max(-maxTilt, Math.min(maxTilt, tiltX));
        tiltY = Math.max(-maxTilt, Math.min(maxTilt, tiltY));
        cardItem.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(${defaultScale})`;
        if (isChosen) {
          cardItem.style.filter = 'drop-shadow(0 0 8px #fff)';
        }
      });
      hammertime.on('panend', () => {
        cardItem.style.transform = `perspective(1000px) scale(${defaultScale})`;
        if (isChosen) {
          cardItem.style.filter = 'none';
        }
      });
      cardItem.hammerInstance = hammertime;
    }
  }

  async function abrirSobre() {
    const loader = document.querySelector('.pkmn-loader');
    if (loader) loader.classList.remove('hide');

    const apiKey = await obtenerApiKey();
    try {
      const setsResponse = await fetch("https://api.pokemontcg.io/v2/sets", {
        headers: { "X-Api-Key": apiKey }
      });
      const setsData = await setsResponse.json();
      const setPrimer = setsData.data[0].id;
    
      const response = await fetch(`https://api.pokemontcg.io/v2/cards?q=set.id:${setPrimer}`, {
        headers: { "X-Api-Key": apiKey }
      });
      const data = await response.json();
      const cartas = data.data;
    
      if (!cartas || cartas.length === 0) {
        alert("No se encontraron cartas en este set. Intenta de nuevo.");
        return;
      }
    
      const cartasBarajadas = shuffleArray(cartas);
      const sobre = cartasBarajadas.slice(0, 6);
      mostrarCartasEnSwiper(sobre);
    } catch (error) {
      console.error("Error al cargar las cartas:", error);
    } finally {
      if (loader) loader.classList.add('hide');
    }
  }

  function mostrarCartasEnSwiper(cartas) {
    const swiperWrapper = document.querySelector(".swiper-wrapper");
    if (!swiperWrapper) return;
    swiperWrapper.innerHTML = "";
    
    cartas.forEach(carta => {
      const slide = document.createElement("div");
      slide.classList.add("swiper-slide");
    
      const cardItem = document.createElement("div");
      cardItem.classList.add("card-item", "card-poke");
    
      const img = document.createElement("img");
      img.src = carta.images.small;
      img.alt = carta.name;
      img.classList.add("carta-img");
    
      const glareEl = document.createElement("div");
      glareEl.classList.add("glare");
    
      cardItem.appendChild(img);
      cardItem.appendChild(glareEl);
      slide.appendChild(cardItem);
      swiperWrapper.appendChild(slide);
    
      attachManipulation(cardItem);
    
      // Al hacer clic sobre una carta en el slider, expandir o contraer la carta
      cardItem.addEventListener('click', function(e) {
        e.stopPropagation();
        if (cardItem.closest("#carta-elegida")) return;
        if (cardItem.classList.contains("expanded")) {
          cardItem.classList.remove("expanded");
          cardItem.style.transform = `perspective(1000px) scale(1)`;
        } else {
          const expandedCard = document.querySelector(".swiper-container .card-item.expanded");
          if (expandedCard) {
            expandedCard.classList.remove("expanded");
            expandedCard.style.transform = `perspective(1000px) scale(1)`;
          }
          cardItem.classList.add("expanded");
          cardItem.style.transform = `perspective(1000px) scale(1.5)`;
        }
      });
    });
    
    if (window.mySwiper) {
      window.mySwiper.update();
    } else {
      window.mySwiper = new Swiper('.swiper-container', {
        effect: 'cards',
        grabCursor: true,
        loop: true,
        cardsEffect: { rotate: true, slideShadows: false },
        pagination: { el: '.swiper-pagination', clickable: true }
      });
    }
  }

  // Recuperar carta elegida guardada en localStorage al cargar la página
  document.addEventListener("DOMContentLoaded", function() {
    const cartaGuardada = localStorage.getItem("cartaElegida");
    if (cartaGuardada) {
      const divCarta = document.getElementById("carta-elegida");
      divCarta.innerHTML = cartaGuardada;
      const cardClon = divCarta.querySelector(".card-item");
      if (cardClon) attachManipulation(cardClon);
    }
  });
  
  // Botón para seleccionar la carta activa del slider y guardarla en localStorage
  document.getElementById("btn-seleccionar").addEventListener("click", function() {
    const slideActivo = document.querySelector(".swiper-slide-active");
    if (!slideActivo) return;
    const cardActual = slideActivo.querySelector(".card-item");
    if (!cardActual) return;
    
    const cartaElegida = cardActual.cloneNode(true);
    attachManipulation(cartaElegida);
    
    const divCartaElegida = document.getElementById("carta-elegida");
    if (divCartaElegida) {
      divCartaElegida.innerHTML = "";
      divCartaElegida.appendChild(cartaElegida);
      localStorage.setItem("cartaElegida", cartaElegida.outerHTML);
    }
    
    const pkmnWrapper = document.querySelector(".pkmn-wraper-div");
    if (pkmnWrapper) pkmnWrapper.classList.add("hide");
  });
  
  // Botón "Pokemon Redo" para volver a sacar nuevas cartas
  document.getElementById("pokemon-redo").addEventListener("click", function() {
    abrirSobre();
  });
  
  // Vincular el botón "Abrir Sobre" con la función abrirSobre
  document.getElementById("abrirSobre").addEventListener("click", abrirSobre);
</script>

<!-- Snippet 20: Lazy Loading de videos (usando IntersectionObserver y eventos) -->
<script>
  document.addEventListener("DOMContentLoaded", function() {
    const videoContainers = document.querySelectorAll('.lazy-video');
    const loadVideo = (videoElement) => {
      if (!videoElement.dataset.src) return;
      videoElement.src = videoElement.dataset.src;
      videoElement.removeAttribute("data-src");
    };

    if ("IntersectionObserver" in window) {
      let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const video = entry.target.querySelector("video");
            if (video) loadVideo(video);
            observer.unobserve(entry.target);
          }
        });
      }, { rootMargin: "200px" });

      videoContainers.forEach(container => observer.observe(container));
    }

    document.addEventListener("click", function(event) {
      let parentContainer = event.target.closest('.lazy-video');
      if (parentContainer) {
        const video = parentContainer.querySelector("video");
        if (video) loadVideo(video);
      }
    });

    document.querySelectorAll('[fs-mirrorclick-element]').forEach(tab => {
      tab.addEventListener("click", function() {
        setTimeout(() => {
          const activePane = document.querySelector('.w-tab-pane.w--tab-active');
          if (activePane) {
            const video = activePane.querySelector("video");
            if (video) loadVideo(video);
          }
        }, 300);
      });
    });
  });
</script>

<!-- Inicialización de VanillaTilt en cartas Pokemon -->
<script>
  document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card-poke');
    VanillaTilt.init(cards, {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.5
    });
  });
</script>

<!-- Inicialización de Swiper y funcionalidad de expandir cartas -->
<script>
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1.5,
    spaceBetween: 20,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  document.querySelectorAll('.card-item').forEach(card => {
    card.addEventListener('click', function() {
      this.classList.toggle('expanded');
    });
  });
</script>

<!-- ========================================================= -->
<!-- Sección 7: Shader Canvas con GLSL (Efectos visuales en WebGL) -->
<!-- ========================================================= -->
<script>
(function(){
  const canvas = document.getElementById('shader-canvas');
  const gl = canvas.getContext('webgl');
  if (!gl) {
    console.error('WebGL no está soportado.');
    return;
  }
  
  // Ajustar canvas al tamaño de la ventana
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  // Función para compilar shaders
  function compileShader(source, type) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error('Error compilando shader:', gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }
  
  // Obtener código de shaders desde elementos en el HTML
  const vertexSource = document.getElementById('vertexShader').text;
  const fragmentSource = document.getElementById('fragmentShader').text;
  
  const vertexShader = compileShader(vertexSource, gl.VERTEX_SHADER);
  const fragmentShader = compileShader(fragmentSource, gl.FRAGMENT_SHADER);
  
  // Crear y enlazar el programa WebGL
  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('Error al enlazar el programa:', gl.getProgramInfoLog(program));
    return;
  }
  gl.useProgram(program);
  
  // Crear un cuadrado que cubra la pantalla
  const vertices = new Float32Array([
    -1, -1,
    1, -1,
    -1,  1,
    -1,  1,
    1, -1,
    1,  1,
  ]);
  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
  
  const positionLocation = gl.getAttribLocation(program, "a_position");
  gl.enableVertexAttribArray(positionLocation);
  gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
  
  // Obtener ubicaciones de uniformes
  const iResolutionLocation = gl.getUniformLocation(program, "iResolution");
  const iTimeLocation = gl.getUniformLocation(program, "iTime");
  
  let startTime = Date.now();
  
  function render() {
    const currentTime = (Date.now() - startTime) / 1000.0;
    gl.uniform2f(iResolutionLocation, canvas.width, canvas.height);
    gl.uniform1f(iTimeLocation, currentTime);
    
    gl.drawArrays(gl.TRIANGLES, 0, 6);
    requestAnimationFrame(render);
  }
  render();
})();
</script>

<!-- ========================================================= -->
<!-- Sección 8: Eventos adicionales para UI y tiempo -->
<!-- ========================================================= -->

<!-- Mostrar elementos ocultos según clic (confirmación de Pokemon) -->
<script>
  document.addEventListener('DOMContentLoaded', function() {
    var openSobreElements = document.querySelectorAll('.open-sobre');
    openSobreElements.forEach(function(element) {
      element.addEventListener('click', function() {
        var confirmPkmn = document.getElementById('confirm-pkmn');
        if (confirmPkmn) {
          confirmPkmn.classList.remove('hide');
        }
      });
    });

    var abrirSobreElements = document.querySelectorAll('.abrir-sobre');
    abrirSobreElements.forEach(function(element) {
      element.addEventListener('click', function() {
        var pkmnWraperDiv = document.querySelector('.pkmn-wraper-div');
        if (pkmnWraperDiv) {
          pkmnWraperDiv.classList.remove('hide');
        }
      });
    });
  });
</script>

<!-- Actualización de la hora en el elemento con id "hora" -->
<script>
  function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const period = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    if (hours === 0) hours = 12;
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const timeString = `${formattedHours}:${formattedMinutes}${period}`;
    document.getElementById("hora").textContent = timeString;
  }
  updateTime();
  setInterval(updateTime, 1000);
</script>

<!-- ========================================================= -->
<!-- Sección 9: Funcionalidad de Audio y Música (Reproductor CMS) -->
<!-- ========================================================= -->
<script>
document.addEventListener("DOMContentLoaded", function () {
  // URL del anuncio (ad) y variables de estado
  const adTrackUrl = "https://pouch.jumpshare.com/preview/hn7BhqqrKhcCkyTgNNqKDcvwq86P41FntiPCTRUyyztCJnR5PR2oHB__mPVpOcxFUS0HJJ7ZMXK8w8OQQKqIT49F5UobXeBXez8jDBRImPceqjtjpj-twSPYylPdbyPVvFvQw33beg-i26QLFZCtzW6yjbN-I2pg_cnoHs_AmgI.mp3";
  let isAdPlaying = false;
  let pendingSongButton = null;
  let audio = new Audio();
  let currentDisco = null;
  let animationFrame = null;
  let lastTimestamp = null;
  let currentRotation = 0;
  let currentTitle = "";
  let currentArtist = "";
  let currentCover = "";

  // Barra de progreso para buscar en la canción
  const progressWrapper = document.querySelector(".barra-music-wrapper");
  const progressBar = document.querySelector(".barra-music");
  if (progressWrapper && progressBar) {
    let isSeeking = false;
    function updateProgress(e) {
      const rect = progressWrapper.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const percentage = Math.min(Math.max(offsetX / rect.width, 0), 1);
      progressBar.style.width = (percentage * 100) + "%";
      if (audio.duration) {
        audio.currentTime = percentage * audio.duration;
      }
    }
    progressWrapper.addEventListener("mousedown", (e) => { isSeeking = true; updateProgress(e); });
    window.addEventListener("mousemove", (e) => { if (isSeeking) updateProgress(e); });
    window.addEventListener("mouseup", (e) => { if (isSeeking) { updateProgress(e); isSeeking = false; } });
    progressWrapper.addEventListener("click", updateProgress);
    progressWrapper.addEventListener("touchstart", (e) => { isSeeking = true; updateProgress(e.touches[0]); });
    window.addEventListener("touchmove", (e) => { if (isSeeking) updateProgress(e.touches[0]); });
    window.addEventListener("touchend", () => { isSeeking = false; });
  }

  // Eventos del audio: metadata, timeupdate, ended
  audio.addEventListener("loadedmetadata", () => {
    document.getElementById("duration").textContent = formatTime(audio.duration);
  });
  audio.addEventListener("timeupdate", () => {
    document.getElementById("sofar").textContent = formatTime(audio.currentTime);
    if (audio.duration && progressBar) {
      progressBar.style.width = (audio.currentTime / audio.duration) * 100 + "%";
    }
  });
  audio.addEventListener("ended", () => {
    stopSpin();
    if (isAdPlaying) {
      isAdPlaying = false;
      if (pendingSongButton) {
        playSong(pendingSongButton);
        pendingSongButton = null;
      }
      return;
    }
    if (currentButton) {
      let thumbMusic = currentButton.closest(".thumb-music");
      thumbMusic?.classList.remove("playing");
      thumbMusic?.querySelector(".thumb-music-box")?.classList.remove("playing");
      thumbMusic?.querySelector(".thumb-music-overlay")?.classList.add("hide");

      let nextThumb = thumbMusic.nextElementSibling;
      while (nextThumb && !nextThumb.classList.contains("thumb-music")) {
        nextThumb = nextThumb.nextElementSibling;
      }
      if (nextThumb) {
        let nextButton = nextThumb.querySelector(".btn-play");
        if (nextButton) {
          pendingSongButton = nextButton;
          playAd();
          return;
        }
      }
      const firstButton = document.querySelector(".btn-play");
      if (firstButton) {
        pendingSongButton = firstButton;
        playAd();
      }
    }
  });

  let currentButton = null;
  audio.addEventListener("play", () => {
    if ("mediaSession" in navigator) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: currentTitle,
        artist: currentArtist,
        artwork: [{ src: currentCover, sizes: "512x512", type: "image/png" }]
      });
    }
    if (currentButton) {
      let thumbMusic = currentButton.closest(".thumb-music");
      thumbMusic?.classList.add("playing");
      thumbMusic?.querySelector(".thumb-music-box")?.classList.add("playing");
      thumbMusic?.querySelector(".thumb-music-overlay")?.classList.remove("hide");
    }
    updateGlobalPlayPauseIcons(true);
    updateGlobalPlayPauseButton(true);
    updatePapiIcons(true);
  });
  audio.addEventListener("pause", () => {
    if ("mediaSession" in navigator) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: currentTitle,
        artist: currentArtist,
        artwork: [{ src: pausedCover, sizes: "512x512", type: "image/avif" }]
      });
    }
    if (currentButton) {
      let thumbMusic = currentButton.closest(".thumb-music");
      thumbMusic?.classList.remove("playing");
      thumbMusic?.querySelector(".thumb-music-box")?.classList.remove("playing");
      thumbMusic?.querySelector(".thumb-music-overlay")?.classList.add("hide");
    }
    updateGlobalPlayPauseIcons(false);
    updateGlobalPlayPauseButton(false);
    updatePapiIcons(false);
  });

  // Media Session API para controles nativos
  if ("mediaSession" in navigator) {
    navigator.mediaSession.setActionHandler("play", () => audio.play());
    navigator.mediaSession.setActionHandler("pause", () => audio.pause());
    navigator.mediaSession.setActionHandler("seekbackward", () => { audio.currentTime = Math.max(0, audio.currentTime - 10); });
    navigator.mediaSession.setActionHandler("seekforward", () => { audio.currentTime = Math.min(audio.currentTime + 10, audio.duration); });
    navigator.mediaSession.setActionHandler("previoustrack", () => { document.getElementById("btn-previous")?.click(); });
    navigator.mediaSession.setActionHandler("nexttrack", () => { document.getElementById("btn-next")?.click(); });
  }

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  }

  function updateRotation(timestamp) {
    if (!lastTimestamp) lastTimestamp = timestamp;
    const delta = timestamp - lastTimestamp;
    currentRotation += (360 / 3000) * delta;
    currentRotation %= 360;
    if (currentDisco) {
      currentDisco.style.transform = `rotate(${currentRotation}deg)`;
    }
    lastTimestamp = timestamp;
    animationFrame = requestAnimationFrame(updateRotation);
  }

  function startSpin(disco) {
    cancelAnimationFrame(animationFrame);
    currentDisco = disco;
    disco.style.transition = "none";
    void disco.offsetWidth; // Forzar repaint
    lastTimestamp = null;
    animationFrame = requestAnimationFrame(updateRotation);
  }

  function stopSpin() {
    if (animationFrame) cancelAnimationFrame(animationFrame);
    animationFrame = null;
    if (currentDisco) {
      currentDisco.style.transition = "transform 0.6s ease-out";
      currentDisco.style.transform = `rotate(${currentRotation + 3.5}deg)`;
      setTimeout(() => {
        currentDisco.style.transition = "transform 0.5s ease-in-out";
        currentDisco.style.transform = `rotate(${currentRotation - 2}deg)`;
        setTimeout(() => {
          currentDisco.style.transition = "transform 0.3s ease";
          currentDisco.style.transform = `rotate(${currentRotation}deg)`;
        }, 500);
      }, 600);
    }
  }

  function updateGlobalUI(title, artist, cover) {
    document.getElementById("nombre-cancion").textContent = title;
    document.getElementById("nombre-artista").textContent = artist;
    document.getElementById("sofar").textContent = "0:00";
    document.getElementById("duration").textContent = "";
    const grid = document.getElementById("grid-playing-now");
    if (grid) {
      Array.from(grid.children).forEach(child => {
        child.textContent = `${title} - ${artist}`;
      });
    }
  }

  function updateGlobalPlayPauseIcons(isPlaying) {
    const globalPlayPause = document.getElementById("play-pause");
    if (globalPlayPause) {
      const playIcon = globalPlayPause.querySelector(".play");
      const pauseIcon = globalPlayPause.querySelector(".pause");
      if (isPlaying) {
        playIcon?.classList.add("hide");
        pauseIcon?.classList.remove("hide");
      } else {
        playIcon?.classList.remove("hide");
        pauseIcon?.classList.add("hide");
      }
    }
  }

  function updateGlobalPlayPauseButton(isPlaying) {
    const globalPlayPause = document.getElementById("play-pause");
    if (globalPlayPause) {
      if (isPlaying) {
        globalPlayPause.classList.add("pause");
      } else {
        globalPlayPause.classList.remove("pause");
      }
    }
  }

  function updatePapiIcons(isPlaying) {
    const papiPlay = document.querySelector(".papi-play");
    const papiPause = document.querySelector(".papi-pause");
    if (isPlaying) {
      papiPlay?.classList.remove("hide");
      papiPause?.classList.add("hide");
    } else {
      papiPlay?.classList.add("hide");
      papiPause?.classList.remove("hide");
    }
  }

  function playAd() {
    isAdPlaying = true;
    updateGlobalUI("Ads", "Enjoy your misery", "");
    const grid = document.getElementById("grid-playing-now");
    if (grid) {
      Array.from(grid.children).forEach(child => {
        child.textContent = "Wait: ads ruin fun";
      });
    }
    audio.src = adTrackUrl;
    audio.load();
    audio.play();
  }

  function playSong(button) {
    if (isAdPlaying) {
      audio.pause();
      isAdPlaying = false;
      pendingSongButton = null;
    }
    if (currentButton && currentButton !== button) {
      let prevThumb = currentButton.closest(".thumb-music");
      prevThumb?.classList.remove("playing");
      prevThumb?.querySelector(".thumb-music-box")?.classList.remove("playing");
      prevThumb?.querySelector(".thumb-music-overlay")?.classList.add("hide");
    }
    const src = button.getAttribute("data-audio");
    currentTitle = button.getAttribute("data-title");
    currentArtist = button.getAttribute("data-artist");
    currentCover = button.getAttribute("data-cover");

    if (audio.src !== src) {
      audio.src = src;
      audio.load();
    }
    audio.play();
    currentButton = button;

    updateGlobalUI(currentTitle, currentArtist, currentCover);
    const imgCoverDisco = document.getElementById("img-cover-disco");
    if (imgCoverDisco) {
      imgCoverDisco.style.backgroundImage = `url(${currentCover})`;
    }
    let thumbMusic = button.closest(".thumb-music");
    thumbMusic.classList.add("playing");
    thumbMusic.querySelector(".thumb-music-box")?.classList.add("playing");
    thumbMusic.querySelector(".thumb-music-overlay")?.classList.remove("hide");
    let disco = thumbMusic.querySelector(".disco");
    startSpin(disco);
  }

  function toggleSong(button) {
    if (currentButton === button) {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    } else {
      playSong(button);
    }
  }

  document.querySelectorAll(".btn-play").forEach(button => {
    button.addEventListener("click", () => {
      if (isAdPlaying) {
        audio.pause();
        isAdPlaying = false;
        pendingSongButton = null;
        playSong(button);
      } else {
        toggleSong(button);
      }
    });
  });

  const globalPlayPause = document.getElementById("play-pause");
  if (globalPlayPause) {
    globalPlayPause.addEventListener("click", () => {
      if (!audio.src) {
        const firstButton = document.querySelector(".btn-play");
        if (firstButton) {
          playSong(firstButton);
        }
        return;
      }
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    });
  }

  const btnNext = document.getElementById("btn-next");
  if (btnNext) {
    btnNext.addEventListener("click", () => {
      if (isAdPlaying) {
        audio.pause();
        isAdPlaying = false;
        pendingSongButton = null;
      }
      if (currentButton) {
        let thumbMusic = currentButton.closest(".thumb-music");
        let nextThumb = thumbMusic.nextElementSibling;
        while (nextThumb && !nextThumb.classList.contains("thumb-music")) {
          nextThumb = nextThumb.nextElementSibling;
        }
        let nextButton = nextThumb ? nextThumb.querySelector(".btn-play") : null;
        if (!nextButton) {
          nextButton = document.querySelector(".btn-play");
        }
        if (nextButton) {
          pendingSongButton = nextButton;
          playAd();
        }
      }
    });
  }

  const btnPrevious = document.getElementById("btn-previous");
  if (btnPrevious) {
    btnPrevious.addEventListener("click", () => {
      if (isAdPlaying) {
        audio.pause();
        isAdPlaying = false;
        pendingSongButton = null;
      }
      if (currentButton) {
        let thumbMusic = currentButton.closest(".thumb-music");
        let prevThumb = thumbMusic.previousElementSibling;
        while (prevThumb && !prevThumb.classList.contains("thumb-music")) {
          prevThumb = prevThumb.previousElementSibling;
        }
        let prevButton = prevThumb ? prevThumb.querySelector(".btn-play") : null;
        if (!prevButton) {
          const allButtons = document.querySelectorAll(".btn-play");
          if (allButtons.length > 0) {
            prevButton = allButtons[allButtons.length - 1];
          }
        }
        if (prevButton) {
          pendingSongButton = prevButton;
          playAd();
        }
      }
    });
  }

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible" && audio && !audio.paused) {
      audio.play();
    }
  });

  function saveAudioState() {
    const state = {
      src: audio.src,
      currentTime: audio.currentTime,
      isPlaying: !audio.paused,
      title: currentTitle,
      artist: currentArtist,
      cover: currentCover
    };
    localStorage.setItem("audioState", JSON.stringify(state));
  }
  window.addEventListener("beforeunload", saveAudioState);

  function restoreAudioState() {
    const stateJSON = localStorage.getItem("audioState");
    if (stateJSON) {
      const state = JSON.parse(stateJSON);
      if (state.src) {
        audio.src = state.src;
        audio.load();
        audio.currentTime = state.currentTime;
        currentTitle = state.title;
        currentArtist = state.artist;
        currentCover = state.cover;
        updateGlobalUI(currentTitle, currentArtist, currentCover);
        const imgCoverDisco = document.getElementById("img-cover-disco");
        if (imgCoverDisco) {
          imgCoverDisco.style.backgroundImage = `url(${currentCover})`;
        }
        const button = document.querySelector(`.btn-play[data-audio="${state.src}"]`);
        if (button) {
          currentButton = button;
          let thumbMusic = button.closest(".thumb-music");
          thumbMusic.classList.add("playing");
          thumbMusic.querySelector(".thumb-music-box")?.classList.add("playing");
          thumbMusic.querySelector(".thumb-music-overlay")?.classList.remove("hide");
          let disco = thumbMusic.querySelector(".disco");
          startSpin(disco);
        }
        if (state.isPlaying) {
          audio.play();
        } else {
          audio.pause();
        }
      }
    }
  }
  restoreAudioState();
});
</script>

<!-- ========================================================= -->
<!-- Sección 10: Alternador de Temas (Switch de Paleta de Colores) -->
<!-- ========================================================= -->

<!-- Botón para cambiar tema de forma cíclica -->
<script>
  let currentTheme = 0;
  const themeButton = document.getElementById("theme");

  if (themeButton) {
    themeButton.addEventListener("click", function() {
      currentTheme = (currentTheme + 1) % 6;
      document.documentElement.setAttribute("data-theme", currentTheme);
    });
  } else {
    console.warn("No se encontró el botón con id='theme'. Asegúrate de que exista en la página.");
  }
</script>

<!-- Script para mapear un select a los temas y guardar la selección en localStorage -->
<script>
  const themeMapping = {
    "miami": "0",
    "cosmic": "1",
    "paradise": "2",
    "barry": "3",
    "cheeky": "4",
    "papi": "5"
  };

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme !== null) {
    setTheme(savedTheme);
    const selectElement = document.getElementById("select-theme-2");
    if (selectElement) {
      for (const [key, value] of Object.entries(themeMapping)) {
        if (value === savedTheme) {
          selectElement.value = key;
          break;
        }
      }
    }
  }

  const selectElement = document.getElementById("select-theme-2");
  if (selectElement) {
    selectElement.addEventListener("change", function() {
      const selectedValue = this.value;
      const theme = themeMapping[selectedValue];
      if (theme !== undefined) {
        setTheme(theme);
      } else {
        console.warn("No se encontró un tema asignado para el valor:", selectedValue);
      }
    });
  } else {
    console.warn("No se encontró el elemento select con id 'select-theme-2'");
  }
</script>
