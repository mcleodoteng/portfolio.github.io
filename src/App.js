import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body1 from './components/Body1';
import Body2 from './components/Body2';
import Body3 from './components/Body3';
import AllContent from './components/AllContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className='bg-black w-screen overflow-hidden'>
      <Header/>
      <Body1/>
      <Body2/>
      <Body3/>
      <AllContent/>
      <Footer/>
      {/* <Conten1/> */}
    </div>
  );
}

export default App;
