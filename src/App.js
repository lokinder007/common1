import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Profile from './components/pages/Profile'
import Contact from './components/pages/Contact'
import Errorpage from './components/pages/Errorpage'

import './components/stylesheets/layout.css'
import './components/stylesheets/auth.css'
import Tasks from './components/pages/Tasks'
import Users from './components/pages/Users'
import Login from './components/pages/Login'
import Signup from './components/pages/Signup'
import Jokes from './components/pages/Jokes'
import News from './components/pages/News'
import AddUser from './components/pages/AddUser'

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <main className='py-3'>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/tasks" exact element={<Tasks />} />

            <Route path="/users" exact element={<Users />} />
            <Route path="/users/add" exact element={<AddUser />} />
            {/* <Route path="/users/view/:userId" exact element={<ViewContact />} /> */}
            {/* <Route path="/users/edit/:userId" exact element={<EditContact />} /> */}
           

            <Route path="/jokes" exact element={<Jokes />} />
            <Route path="/news" exact element={<News />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/profile" exact element={<Profile />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/signup" exact element={<Signup />} />

            <Route path="*" element={<Errorpage />} />
          </Routes>
        </main>
        <Footer />
      </>
    </Router>
  );
}

export default App;
