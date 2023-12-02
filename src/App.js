import './App.css';
// import { JBModal } from 'jb-modal-react'
import Intro from './All/intro/Intro';
import Header from './All/header/Header';
import LH from './All/lower-header/LH';
import Link from './All/f-linkb/Link';
import Footer from './All/footer/Footer';
import Director from './All/director/Director';
import Actors from './All/actors/Actors';
import Vip from './All/vip-m/Vip';
import Ekhtsasi from './All/ekhts/Vip';
import Free from './All/free/Vip';

function App() {
  return (
    <div className="App">
      <Intro></Intro>
      <Header></Header>
      <LH></LH>
      <Vip></Vip>
      <Ekhtsasi></Ekhtsasi>
      <Actors></Actors> 
      <Free></Free>
      <Director></Director>
      <Link></Link>
      <Footer></Footer>
    </div>
  );
}

export default App;
