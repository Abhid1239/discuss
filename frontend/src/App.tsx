import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp'
import SignIn from './pages/LogIn'
import Blog from './pages/Blog'



function Main() {
  return (
    <>
      <p>
        Hello World
      </p>
      <Link to='/signup'>Sign Up</Link>
    </>
  )
}
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App