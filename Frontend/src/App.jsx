import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import DeveloperForm from './components/DeveloperForm'


function App() {
  return (
    <>
      <Toaster />

      <Routes>
        <Route path='/' element={<DeveloperForm />} />
        
      </Routes>
    </>
  )
}

export default App