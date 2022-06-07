import './App.css';
import Menu from './components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes,} from 'react-router-dom';
import Index from './pages/Index';
import Plataforma from './pages/Plataforma';
import Jogo from './pages/Jogo';
import Cliente from './pages/Cliente';
import Funcionario from './pages/Funcionario';
import Equipamento from './pages/Equipamento';
import PlataformaLista from './pages/PlataformaLista';
import JogoLista from './pages/JogoLista';
import ClienteLista from './pages/ClienteLista';
import FuncionarioLista from './pages/FuncionarioLista';
import EquipamentoLista from './pages/EquipamentoLista';


function App() {
  return (
    <div>
      
  <BrowserRouter>
    
    <Menu/>

    <Routes>
    <Route path="/" element={<Index/>} />
    <Route path="/index" element={<Index/>}/>
    <Route path="/plataforma" element={<Plataforma/>}/>
    <Route path="/jogo" element={<Jogo/>}/>
    <Route path="/cliente" element={<Cliente/>}/>
    <Route path="/funcionario" element={<Funcionario/>}/>
    <Route path="/equipamento" element={<Equipamento/>}/>
    <Route path="/plataformalista" element={<PlataformaLista/>}/>
    <Route path="/plataforma/:id" element={<Plataforma/>}/> 
    <Route path="/jogolista" element={<JogoLista/>}/>
    <Route path="/jogo/:id" element={<Jogo/>}/>
    <Route path="/clientelista" element={<ClienteLista/>}/>
    <Route path="/cliente/:id" element={<Cliente/>}/>
    <Route path="/funcionariolista" element={<FuncionarioLista/>}/>
    <Route path="/funcionario/:id" element={<Funcionario/>}/>
    <Route path="/equipamentolista" element={<EquipamentoLista/>}/>   
    <Route path="/equipamento/:id" element={<Equipamento/>}/> 
    </Routes>
  </BrowserRouter>

    </div>
  );
}

export default App;