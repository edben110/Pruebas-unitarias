# Pruebas Unitarias

Este proyecto es una aplicación de React que incluye un componente llamado `ColorPicker`. Este componente permite a los usuarios seleccionar un color y guarda la selección en el almacenamiento local del navegador.

## Estructura del Proyecto

El proyecto tiene la siguiente estructura de archivos:

```
Pruebas-unitarias
├── src
│   └── components
│       └── ColorPicker.tsx
├── .github
│   └── workflows
│       └── ci.yml
├── package.json
├── tsconfig.json
└── README.md
```

### Descripción de Archivos

- **src/components/ColorPicker.tsx**: Contiene el componente `ColorPicker` que utiliza hooks para manejar el estado del color seleccionado y para guardar y cargar el color desde el almacenamiento local. Exporta el componente como un `React.FC`.

- **.github/workflows/ci.yml**: Configuración para la integración continua. Define el flujo de trabajo que se ejecutará en cada push o pull request, incluyendo la instalación de dependencias, la compilación del proyecto y la ejecución de pruebas.

- **package.json**: Configuración para npm. Lista las dependencias del proyecto y los scripts que se pueden ejecutar.

- **tsconfig.json**: Configuración para TypeScript. Especifica las opciones del compilador y los archivos que se incluirán en la compilación.

## Instalación

Para instalar las dependencias del proyecto, ejecuta:

```
npm install
```

## Ejecución

Para iniciar la aplicación en modo de desarrollo, utiliza:

```
npm start
```

## Pruebas

Para ejecutar las pruebas, utiliza:

```
npm test
```

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o un pull request.