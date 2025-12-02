import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import DeveloperForm from './components/DeveloperForm'
import DeveloperList from './components/DeveloperList'


function App() {
  return (
    <>
      <Toaster />

      <Routes>
        
        <Route path='/' element={<DeveloperForm />} />
        <Route path='/list' element={<DeveloperList />} />
      </Routes>
    </>
  )
}

export default App