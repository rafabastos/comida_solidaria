import { Translations } from "./en"

const es: Translations = {
    common: {
      ok: "¡OK!",
      cancel: "Cancelar",
      back: "Atrás",
    },
    welcomeScreen: {
      postscript:
        "psst — Probablemente esta no es la apariencia de tu aplicación. (A menos que tu diseñador te haya entregado estas pantallas, en ese caso, ¡lánzalo!)",
      readyForLaunch: "Bienvinido a la app",
      exciting: "(¡ohh, esto es emocionante!)",
      initEvent: 'Iniciar Evento',
      manageEvents: 'Manejar Eventos',
    },
    errorScreen: {
      title: "¡Algo salió mal!",
      friendlySubtitle:
        "Esta es la pantalla que tus usuarios verán en producción cuando se lance un error. Querrás personalizar este mensaje (ubicado en `app/i18n/en.ts`) y probablemente el diseño también (`app/screens/ErrorScreen`). Si deseas eliminar esto por completo, revisa `app/app.tsx` para el componente <ErrorBoundary>.",
      reset: "REINICIAR APP",
    },
    emptyStateComponent: {
      generic: {
        heading: "Tan vacío... tan triste",
        content: "Aún no se han encontrado datos. Intenta hacer clic en el botón para refrescar o recargar la aplicación.",
        button: "Intentemos esto de nuevo",
      },
    },
  }

export default es
