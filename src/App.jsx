import { useMemo, useState } from 'react'
import './App.css'

const COL_DARK_BLUE = '#1a2b3c'
const COL_LIGHT_BLUE = '#2980b9'
const COL_TEAL = '#16a085'
const COL_ORANGE = '#d35400'
const COL_RED = '#c0392b'
const COL_GREEN = '#27ae60'
const COL_GOLD = '#f39c12'
const COL_PURPLE = '#8e44ad'

const MODULES_DATA = [
  {
    id: 'ops_seguridad',
    label: 'OPERACIONES DE\nSEGURIDAD',
    color: COL_RED,
    image:
      'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=900&auto=format&fit=crop',
  },
  {
    id: 'seguridad_humana',
    label: 'SEGURIDAD HUMANA\nY PATRIMONIAL',
    color: COL_ORANGE,
    image:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=900&auto=format&fit=crop',
  },
  {
    id: 'soie',
    label: 'SOIE',
    color: COL_LIGHT_BLUE,
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=900&auto=format&fit=crop',
  },
  {
    id: 'fraude',
    label: 'PREVENCION\nDE FRAUDE',
    color: COL_PURPLE,
    image:
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=900&auto=format&fit=crop',
  },
  {
    id: 'riesgos_sicorp',
    label: 'EVOLUC GESTION\nDE RIESGOS SICORP',
    color: COL_TEAL,
    image:
      'https://images.unsplash.com/photo-1633265486501-0cf524a072f8?q=80&w=900&auto=format&fit=crop',
  },
  {
    id: 'proyectos_sic',
    label: 'PROYECTOS &\nPRESUPUESTOS SIC',
    color: COL_GOLD,
    image:
      'https://images.unsplash.com/photo-1556742031-c6961e8560b0?q=80&w=900&auto=format&fit=crop',
  },
  {
    id: 'safe',
    label: 'ASEGURAMIENTO\nDE INGRESOS',
    color: COL_GREEN,
    image:
      'https://images.unsplash.com/photo-1642790551116-18e150f2482f?q=80&w=900&auto=format&fit=crop',
  },
  {
    id: 'ciber',
    label: 'SEGURIDAD\nCIBERNETICA',
    color: COL_DARK_BLUE,
    image:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=900&auto=format&fit=crop',
    objectPosition: 'center 30%',
  },
]

const RIESGOS_SUBMODS = [
  { label: 'Inventarios', icon: '📦', url: 'https://example.com/inventarios' },
  {
    label: 'Documentacion',
    icon: '📄',
    url: 'https://example.com/documentacion',
  },
  { label: 'Arquitectura', icon: '🏗️', url: 'https://example.com/arquitectura' },
  { label: 'Modelos Machine Learning', icon: '🧠', url: 'https://example.com/ml' },
  {
    label: 'Evalua tu proyecto',
    icon: '📋',
    url: 'https://example.com/evaluador',
  },
]

const CIBER_SUBMODS = [
  {
    label: 'Seguridad Cibernetica',
    icon: '🛡️',
    image:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=900&auto=format&fit=crop',
    url: 'https://example.com/ciber',
  },
  {
    label: 'COSC',
    icon: '🛰️',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=900&auto=format&fit=crop',
    url: 'https://example.com/cosc',
  },
]

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [menuTitle, setMenuTitle] = useState('Panel')
  const [menuItems, setMenuItems] = useState([])
  const [externalOpen, setExternalOpen] = useState(false)
  const [externalUrl, setExternalUrl] = useState('')
  const [externalTitle, setExternalTitle] = useState('Detalle del Modulo')

  const sortedModules = useMemo(() => {
    const priorityOrder = [
      'ASEGURAMIENTO\nDE INGRESOS',
      'PREVENCION\nDE FRAUDE',
      'SEGURIDAD\nCIBERNETICA',
    ]

    return [...MODULES_DATA].sort((a, b) => {
      const indexA = priorityOrder.indexOf(a.label)
      const indexB = priorityOrder.indexOf(b.label)

      if (indexA !== -1 && indexB !== -1) return indexA - indexB
      if (indexA !== -1) return -1
      if (indexB !== -1) return 1
      return 0
    })
  }, [])

  const openDynamicMenu = (title, items) => {
    setMenuTitle(title)
    setMenuItems(items)
    setMenuOpen(true)
  }

  const closeMenu = () => {
    setMenuOpen(false)
    setMenuItems([])
  }

  const openExternalOverlay = (url, title) => {
    closeMenu()
    setExternalUrl(url)
    setExternalTitle(title)
    setExternalOpen(true)
  }

  const closeExternalOverlay = () => {
    setExternalOpen(false)
    setTimeout(() => setExternalUrl(''), 250)
  }

  const openModuleById = (moduleId) => {
    if (moduleId === 'ciber') {
      openDynamicMenu('Seguridad Cibernetica y de Informacion', CIBER_SUBMODS)
      return
    }

    switch (moduleId) {
      case 'riesgos_sicorp':
        openDynamicMenu('Gestion de Riesgos - Panel de Control', RIESGOS_SUBMODS)
        break
      case 'safe':
        openExternalOverlay('https://example.com/safe', 'Aseguramiento de Ingresos')
        break
      case 'seguridad_humana':
        openExternalOverlay('https://example.com/seguridad-humana', 'Seguridad Humana')
        break
      case 'soie':
        openExternalOverlay('https://example.com/soie', 'SOIE')
        break
      case 'fraude':
        openExternalOverlay('https://example.com/fraude', 'Prevencion de Fraude')
        break
      case 'proyectos_sic':
        openExternalOverlay('https://example.com/proyectos', 'Proyectos y Presupuestos SIC')
        break
      case 'ops_seguridad':
        openExternalOverlay('https://example.com/operaciones', 'Operaciones de Seguridad')
        break
      default:
        break
    }
  }

  return (
    <div className={darkMode ? 'app modular-dark-mode' : 'app'}>
      <div id="mobile-message">
        <p>Acceso no disponible</p>
        <p>Esta aplicacion esta optimizada para visualizacion en escritorio.</p>
      </div>

      <header className="header">
        <div className="brand-block">
          <svg className="brand-shield" viewBox="0 0 120 120" aria-hidden="true">
            <defs>
              <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#9ca3af" />
                <stop offset="100%" stopColor="#6b7280" />
              </linearGradient>
            </defs>
            <path
              d="M60 8L96 22V51C96 74 80 95 60 109C40 95 24 74 24 51V22L60 8Z"
              fill="none"
              stroke="url(#shieldGradient)"
              strokeWidth="4"
            />
            <path
              d="M60 22L81 30V49C81 63 71 77 60 86C49 77 39 63 39 49V30L60 22Z"
              fill="none"
              stroke="#9ca3af"
              strokeWidth="3.5"
            />
            <circle cx="60" cy="55" r="11" fill="#0ea5e9" />
            <path
              d="M54 55L58.8 59.5L66.5 51.8"
              fill="none"
              stroke="#fff"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <h1 className="title">
            <span className="text-blue">Seguridad</span>
            <span className="text-gray">Integral</span>
            <span className="text-gray">Corporativa</span>
          </h1>
        </div>

        <button
          type="button"
          className="theme-toggle"
          onClick={() => setDarkMode((prev) => !prev)}
          title="Cambiar tema"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </header>

      <main id="modular-view">
        {sortedModules.map((mod) => (
          <article
            key={mod.id}
            className="module-card"
            style={{ '--card-color': mod.color }}
            onClick={() => openModuleById(mod.id)}
          >
            <img
              src={mod.image}
              alt={mod.label.replace('\n', ' ')}
              className="module-card-image"
              style={mod.objectPosition ? { objectPosition: mod.objectPosition } : undefined}
            />
            <div className="module-card-content">
              <h3 dangerouslySetInnerHTML={{ __html: mod.label.replace('\n', '<br/>') }} />
            </div>
          </article>
        ))}
      </main>

      {menuOpen && (
        <div id="menu-overlay" className="active" onClick={closeMenu}>
          <div className="menu-card" onClick={(e) => e.stopPropagation()}>
            <h3>{menuTitle}</h3>
            <div className="menu-grid">
              {menuItems.map((item) => (
                <button
                  type="button"
                  key={item.label}
                  className="menu-item"
                  onClick={() => openExternalOverlay(item.url, item.label)}
                >
                  {item.image ? (
                    <img src={item.image} alt={item.label} className="submodule-img" />
                  ) : (
                    <div className="submodule-icon">{item.icon}</div>
                  )}
                  <div className="menu-item-content">
                    <span>{item.label}</span>
                  </div>
                </button>
              ))}
            </div>
            <button type="button" className="close-menu-btn" onClick={closeMenu}>
              Cerrar
            </button>
          </div>
        </div>
      )}

      {externalOpen && (
        <div id="external-overlay" className="active">
          <div className="overlay-header">
            <span>{externalTitle}</span>
            <button type="button" onClick={closeExternalOverlay}>
              CERRAR X
            </button>
          </div>
          <div className="iframe-container">
            <iframe
              title={externalTitle}
              src={externalUrl}
              referrerPolicy="no-referrer"
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default App
