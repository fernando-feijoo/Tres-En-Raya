# 🎮 Tres en Raya Interactivo

¡Bienvenido al **Tres en Raya Interactivo**! Este proyecto es una versión modernizada y estilizada del clásico juego de tres en raya, diseñada para ofrecer una experiencia visual atractiva y dinámica. Inspirado por las interfaces elegantes y minimalistas, el juego incorpora elementos visuales modernos y características interactivas que lo hacen único y divertido.

## 📜 Descripción del Proyecto

Tres en Raya Interactivo es un juego de tres en raya en línea que permite a dos jugadores competir en tiempo real. Los jugadores pueden personalizar sus nombres y elegir sus colores favoritos para las marcas `X` y `O`. El tablero de juego está diseñado con un estilo continuo similar a un hashtag, con líneas blancas y un fondo azul oscuro. El marcador se actualiza dinámicamente para mostrar el turno actual y resaltar al jugador que tiene el turno. Además, el juego cuenta con animaciones de parpadeo para indicar los movimientos que van a ser borrados y una animación de confeti para celebrar las victorias, se agregara sonido luego y mas funcionalidades.

## 🚀 Características

- **Interfaz de usuario personalizada:** Nombres y colores de los jugadores.
- **Diseño visual atractivo:** Estilo continuo similar a un hashtag, líneas blancas y fondo azul oscuro.
- **Marcador interactivo:** Actualización dinámica del turno y resaltado del jugador activo.
- **Animaciones de parpadeo:** Indicación de los movimientos que van a ser borrados.
- **Celebración de victorias:** Animación de confeti para festejar las victorias.
- **Experiencia de juego fluida:** Reinicio automático del tablero después de cada partida.
- **Control de sonido:** Opción para activar o desactivar el sonido de victoria.

## 🛠️ Instalación

Para instalar y ejecutar el proyecto localmente, sigue estos pasos:

1. **Clona el repositorio:**

   ```sh
   git clone https://github.com/tu-usuario/Tres-En-Raya.git
   cd Tres-En-Raya
   ```

2. **Instala las dependencias:**

   ```sh
   npm install
   ```

3. **Inicia la aplicación:**

   ```sh
   npm start
   ```

4. **Abre tu navegador y ve a:**
   ```sh
   http://localhost:5173
   ```

## 📂 Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

```plaintext
└── 📁Tres-En-Raya
    └── 📁hooks
        └── post-receive
    └── 📁public
        └── .htaccess
        └── TFeijoo.ico
        └── TFeijooLogo.png
    └── 📁src
        └── App.tsx
        └── 📁assets
            └── Celebracion1.wav
        └── 📁components
            └── Board.tsx
            └── Footer.tsx
            └── Game.tsx
            └── PlayerInput.tsx
            └── Scoreboard.tsx
            └── Square.tsx
        └── global.d.ts
        └── index.css
        └── main.tsx
        └── vite-env.d.ts
    └── .cpanel.yml
    └── .gitignore
    └── eslint.config.js
    └── index.html
    └── package-lock.json
    └── package.json
    └── postcss.config.js
    └── README.md
    └── tailwind.config.js
    └── tsconfig.app.json
    └── tsconfig.json
    └── tsconfig.node.json
    └── vite.config.ts
```

## 🎨 Personalización

Puedes personalizar fácilmente los colores y estilos del juego editando las clases CSS en el archivo `index.css`. Por ejemplo, para cambiar el color de fondo del tablero:

```css
.bg-custom-dark {
  background-color: rgb(16, 21, 36);
}
```

## 🐛 Contribución

¡Las contribuciones son bienvenidas! Si encuentras algún error o tienes alguna sugerencia para mejorar el proyecto, por favor abre un issue o envía un pull request.

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## 🎉 Agradecimientos

Agradecemos a todos los colaboradores y a la comunidad de desarrollo por su apoyo y contribuciones a este proyecto.

¡Diviértete jugando Tres en Raya Interactivo! 🚀
