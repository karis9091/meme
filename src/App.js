import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {
  const[linea1, setlinea1]= useState();
  const[linea2, setlinea2]= useState();
  const[imagen, setImagen]= useState();

  const onChangeLinea1= function(evento) {
    setlinea1(evento.target.value);
  }
  const onChangeLinea2= function(evento) {
    setlinea2(evento.target.value);
  }
  const onChangeImagen= function(evento) {
  setImagen(evento.target.value);
}

const onClickExportar = function (evento) {
  alert('Exportar')
  html2canvas(document.querySelector("#app")).then(canvas => {
    //document.body.appendChild(canvas);
    var img = canvas.toDataURL("image/png");
    var link = document.createElement('a');
    link.download = 'meme.png';
    link.href = img;
    link.click();
  
  });
}

  return (
    <div className="App">
      <select onChange={onChangeImagen}>
      
        <option value='sebas.jpg'> Sebas</option>
        <option value='vitor.png'> Migob</option>
        <option value='code.jpg'> Code</option>
      </select>
      <br/>
      <input onChange={onChangeLinea1} type='text' placeholder='primera oracion'/>
      <br/>
      <input onChange={onChangeLinea2} type='text' placeholder='segunda oracion'/>
      <br/>
      <button onClick={onClickExportar}> Exportar </button>
      <div className='app' id='app'>
        <span className='text1'>{linea1}</span> 
        <br/>
        <img className='image' src={"/image/"+imagen}/>
        <span className='text2'>{linea2}</span>
      </div>
    </div>
  );
}

export default App;
