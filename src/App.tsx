import { Children, Suspense } from 'react'
import NProgress from 'nprogress'
import { useRoutes } from 'react-router-dom'
import { redirect } from 'react-router-dom'

// Get all generated routes
import routes from '~react-pages'
import Index from './pages/__main_layout/index'
import MainLayout from './pages/__main_layout'
import Experiencia from './pages/__main_layout/Experiencias'

const routes_ = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '', element: <Index /> },
    ],
  },
  {
    path: '/:id',
    element: <MainLayout />,
    children: [
      { path: '', element: <Index /> },
    ],
  },
  {
    path: '/experiencias/:id',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <Experiencia />
      }
    ]
  }
];

// Progress bar
const Progress = () => {
  useEffect(() => {
    NProgress.start()

    return () => {
      NProgress.done()
    }
  })

  return <></>
}

function App() {
  return (<Suspense fallback={<Progress />}>{useRoutes(routes_)}</Suspense>)
}

export default App
