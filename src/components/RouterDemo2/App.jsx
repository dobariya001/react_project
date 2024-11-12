import { Route, Routes } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Navbar from './Navbar';
import Service from './Service';
import User from './User';
import Search from './Search';

const App = () => {
  const Name = () => {
    return <h1>Hello, I am a Name page</h1>
  }
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<About name="About Us"/>}></Route>  {/* aa name ae ek props banavel che. */}
        <Route path='/service' element={<Service />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='search' element={<Search />}></Route>
        <Route path='/name' element={<Name />}></Route>
        {/* <Route path='/user/:id' element={<User />}></Route> */}
        <Route path='/user/:fname/:lname?' element={<User />}></Route>
        <Route path='*' element={<Error />}></Route>



        {/* <Route path='/user/:name?/:lname' element={<User />}></Route>*/}
        {/* Aa path ma :id puchi ?(ternery operator) nathi means ke default parameter aapyu nathi. */}
        {/* Jo parameter ma default parameter aapvu hoy to :id puchi ?(ternery operator) aapvu. */}
        {/* jyare param ma 2 parameter pass karva hoy and ek parameter default rakhavu hoy tyare :name puchi ?(ternery operator karvu.) */}
        {/* parameter pass karti vakhate :name and puchi ?(ternery operator) karavathi jo aapde koi value enter no kariye to bydefault value show kare che. means ke koi extra code karavani jarur nathi. */}
      </Routes>
    </>
  )
}

export default App;