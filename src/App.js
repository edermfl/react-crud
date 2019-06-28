import React,{ Component } from 'react';
import './css/pure-min.css';
import './css/side-menu.css';
import AutorBox from './Autor';

class App extends Component {

   
    render(){
        return (
            <div id="layout">
                <a href="#menu" id="menuLink" className="menu-link">
                    <span></span>
                </a>

                <div id="menu">
                    <div className="pure-menu">
                        <span className="pure-menu-heading" href="#">Autores</span>

                        <ul className="pure-menu-list">
                            <li className="pure-menu-item"><span href="#" className="pure-menu-link">Home</span></li>
                            <li className="pure-menu-item"><span href="#" className="pure-menu-link">Autor</span></li>
                            <li className="pure-menu-item"><span href="#" className="pure-menu-link">Livro</span></li>
                        </ul>
                    </div>
                </div>
                <div id="main">
                    <div className="header">
                      <h1>Cadastro de Autores</h1>
                    </div>
                    <div className="content" id="content">
                        <AutorBox/>    
                    </div>
                </div>            
            </div>
        );
    }
}

export default App;

