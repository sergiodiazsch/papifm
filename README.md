# Interactive Multi-Feature Web Application

This repository contains a fully interactive web project that combines multiple JavaScript libraries and custom code to deliver a rich user experience. The project includes features such as:

- **Finsweet Attributes:** CMS filtering and custom form select.
- **Draggable Elements:** Using GSAP and Draggable for interactive drag-and-drop functionality.
- **Typed.js Effect:** Simulates a typewriter effect for text content.
- **Fullscreen Activation:** Automatically triggers fullscreen mode on user interaction.
- **Camera & Canvas Effects:** Accesses the user camera, applies filters, composites video onto a canvas with effects (flash, night mode, overlay, text patterns), and enables image download.
- **GLSL Shader Effects:** Uses WebGL with glslCanvas to render shader-based visual effects.
- **Pokemon TCG Integration:** Fetches Pokemon cards from the Pokemon TCG API, shuffles and displays them in a Swiper slider, and allows users to select and save a card.
- **Audio Player:** An integrated audio player with CMS controls, progress bar, media session support, and advertisement handling.
- **Theme Switcher:** Provides multiple color themes with a cyclic toggle and a select dropdown for persistent theme selection.

## Project Structure and Script Sections

The source code is divided into **10 numbered sections**. Each section is clearly commented in the code to facilitate navigation and future maintenance:

1. **Dependencies**  
   _What you'll find:_ All external libraries and Finsweet attributes (e.g., CMS Filter, Custom Form Select, jQuery, GSAP, Typed.js, glslCanvas, Swiper, Hammer.js, VanillaTilt, Matter.js).  
   _Location:_ At the very top of the HTML document.

2. **Global Styles**  
   _What you'll find:_ Custom CSS including cursor styles, Swiper slider design, card layouts, and theme definitions.  
   _Location:_ Immediately following the dependencies.

3. **Core Functionality Scripts**  
   _What you'll find:_ Scripts for handling click events, draggable elements (GSAP & Draggable), typewriter effect (Typed.js), and fullscreen activation.  
   _Location:_ In the early script blocks after the global styles.

4. **Camera & Canvas Effects**  
   _What you'll find:_ Code to manage camera access, canvas compositing with filters (flash, night mode), and the functionality to capture and download images.  
   _Location:_ Midway through the script sections dedicated to camera functionality.

5. **GLSL and Button Effects**  
   _What you'll find:_ Implementation of shader effects via glslCanvas and related button interactions (e.g., toggling flash, managing camera secondary elements).  
   _Location:_ Just after the camera and canvas effects section.

6. **Pokemon TCG Integration**  
   _What you'll find:_ Functions to fetch, shuffle, and display Pokemon cards using the Pokemon TCG API, integration with Swiper for card display, and card selection logic.  
   _Location:_ Within the section handling Pokemon functionality and Swiper slider integration.

7. **Shader Canvas**  
   _What you'll find:_ WebGL shader initialization and rendering code that creates dynamic background effects using GLSL.  
   _Location:_ In its own dedicated script block for shader effects.

8. **UI and Time Updates**  
   _What you'll find:_ Scripts to manage additional UI interactions such as revealing hidden elements and updating the current time display.  
   _Location:_ Shortly after the shader canvas section.

9. **Audio Player**  
   _What you'll find:_ Comprehensive audio player functionality including play/pause controls, progress tracking, media session API integration, and advertisement handling.  
   _Location:_ In the larger block of scripts that manage audio and music playback.

10. **Theme Switcher**  
    _What you'll find:_ Scripts for cycling through multiple color themes, mapping a select dropdown to theme changes, and saving the selected theme in localStorage.  
    _Location:_ At the end of the script sections.

