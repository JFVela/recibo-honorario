# Recibo Honorarios 🧾⚡

## Descripción 📋

El proyecto **Recibo Honorarios** fue creado con la intención de facilitar la gestión de los servicios y productos que un profesional ofrece, ayudando al usuario a calcular cuánto cobrar por el trabajo realizado y los materiales usados. Este proyecto nació de la observación de mi padre, un electricista senior que trabaja bajo el sol, y me inspiró a crear una herramienta para realizar cálculos más precisos y profesionales.

El proyecto se desarrolló con **Vite**, utilizando componentes locales, módulos de npm, **Material UI (MUI)** y **dayjs** para el manejo de fechas y tiempos. Además, se incorporó **SweetAlert2** para mejorar la experiencia de usuario con alertas visuales.

## Hosting 🚀

El proyecto está alojado en **Vercel**:  
[Visita el proyecto en Vercel](https://recibo-honorario.vercel.app)

## Características principales ✨

- **Formulario Dinámico**: Se usa un `label` con **MUI** y diseño propio usando **CSS**. El formulario llama a los `label` y les asigna `props` según el tipo de `textField` (producto, unidades, costo).
- **Tabla de Productos**: Cuando el usuario da clic en el formulario, los datos (productos, unidades y costo) se añaden a una tabla.  
- **Tiempo Real**: Se muestra la hora local de **Lima/Perú** gracias a la librería **dayjs**, lo que permite ver la hora exacta de creación del recibo en tiempo real.
- **Resumen**: Se muestra un resumen de los productos y un cálculo del **subtotal** usando componentes creados con **styled-components**.
- **Botón de Finalización**: El botón **"Finalizar"** permite al usuario concluir el proceso, aunque aún falta añadir la funcionalidad para capturar la pantalla y enviarla (probablemente en formato PDF).
- **Futuras Mejoras**: Se planea añadir más secciones, como el nombre del servidor, el nombre del profesional y el nombre del cliente.

## Tecnologías utilizadas 💻

- **Vite**: Para el desarrollo rápido y eficiente del proyecto.
- **Material UI (MUI)**: Para la interfaz gráfica, proporcionando componentes como `TextField`, `Button`, `Table`, entre otros.
- **dayjs**: Para el manejo de fechas y tiempos.
- **SweetAlert2**: Para alertas visuales interactivas.
- **CSS**: Para el diseño personalizado de la aplicación.

## Estructura del Proyecto 📂

1. **Formulario**: Permite ingresar productos, cantidades y costos.
2. **Tabla**: Muestra los productos agregados, con la hora y un resumen del subtotal.
3. **Resumen**: Muestra el total calculado de todos los productos y su precio.
4. **Botón "Finalizar"**: Finaliza el proceso de creación del recibo (aún en desarrollo).

## Planes Futuros 🔮

- Implementar la funcionalidad de capturar la pantalla y enviarla en formato **PDF**.
- Añadir campos para el **nombre del servidor**, **nombre del profesional** y **nombre del cliente**.
- Mejorar la interfaz y la experiencia del usuario con más interacciones.

## Instalación ⚙️

Para ejecutar el proyecto localmente, sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tuusuario/recibo-honorarios.git
2. Instala las dependencias:
   ```bash
   npm install
3. Ejecuta el servidor de desarrollo:
   ```bash
   npm run dev
