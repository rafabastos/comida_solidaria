# **Organización de Eventos Solidários**

## Descripción

Esta aplicación móvil está diseñada para ayudar a organizar eventos gastronómicos de recaudación de fondos, como hamburguesadas y polladas. La app permite manejar donaciones de productos, asignar y seguir adhesiones, y generar códigos QR para rastrear las ventas de manera eficiente.

## Funcionalidades

### Donaciones
- **Lista de Productos Necesarios**: Permite especificar una lista de productos necesarios para el evento.
- **Encargado de Donar el Producto**: Asigna un encargado para donar cada producto.
- **Estado de Donación**: Permite marcar el estado del producto como entregado o pendiente.

### Adhesiones
- **Lista de Ventas Necesarias**: Permite crear una lista con la cantidad de ventas necesarias (ej: 1 - 500).
- **Asignación de Números a Encargados**: Asigna rangos de números a ciertos encargados (ej: Rafael debe vender del 1 al 20).
- **Registro de Ventas**: Lleva un registro de cada venta del producto, incluyendo información como el vendedor, comprador, fecha de venta, y número de adhesión.

### Generación y Escaneo de QR
- **Generación de QR**: Genera un código QR para cada adhesión con los datos correspondientes.
- **Escaneo de QR**: Permite que el encargado de caja escanee el QR generado desde la app y vea los datos del comprador para marcar como comprado.

## Tecnologías Utilizadas
- **React Native**: Framework para el desarrollo de aplicaciones móviles.
- **AsyncStorage**: Utilizado para el almacenamiento local de datos en la aplicación.
- **SQLite**: Base de datos local para almacenamiento estructurado.
- **react-native-qrcode-svg**: Librería para la generación de códigos QR.
- **react-native-camera**: Librería para la funcionalidad de escaneo de QR.

## Instalación y Ejecución

### Requisitos Previos
- Node.js
- npm o yarn
- Expo CLI (para desarrollo con Expo)

### Pasos para la Instalación
1. **Clonar el Repositorio**
   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio