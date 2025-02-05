import { useState } from 'react'
import './App.css'
import { GitHubProfile } from './GitHubProfile'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate()

  const Home = () => {
    return <h1>Home Page!!</h1>
  }

  const About = () => {
    return <h1>About</h1>
  }
  // const [username, setUserName] = useState(null)

  // const handleSubmit = (evt) => {
  //   evt.preventDefault()
  //   // console.log(evt.target[0].value)
  //   setUserName(evt.target[0].value)

  // }

  const handleClick = () => {
    navigate('/about')
  }

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/github-user/:gitHubUserName' element={<GitHubProfile username='jimmynono' />} />
    </Routes>
    <Link to='/github-user/:jimmynono'>Link to Jimmynono</Link>
    <Link to='/github-user/:aramhagen'>Link to Aram</Link>
    <button onClick={handleClick}>Linky Herey to About</button>
    </>
    // <>
    // <form onSubmit={handleSubmit}>
    //   <label htmlFor="username-input"></label>
    //   <input type="text" id="username-input" name="username-input" />
    //   <button type='submit'>Submit</button>
    // </form>
    // <GitHubProfile username={username}/>
    // </>
  )
}

export default App
