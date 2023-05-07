import React from 'react'
import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './SajatModal.css'

Modal.setAppElement('#root')

const ButtonGroup = ({ buttons, datum }) => {
  
  const [mutatModal , setmutatModal] = useState(false)
  const [mutatIdModal , setmutatIdModal] = useState(false)
  const [azonosito, setAzonosito] = useState('')
  const [szolgaltatasok, setSzolgaltatasok] = useState([])
  const idopontok = ["08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","13:00","13:30","14:00","14:30","15:00","15:30","16:30","17:00","17:30","18:00","18:30"]
  let url = 'http://127.0.0.1:8000/api/szolgaltatasok/'

  useEffect(()=>{
    fetch(url, {
      method: 'GET',
    })
    .then((response) => response.json())
    .then((data) => {
      setSzolgaltatasok(data)
      })
  },[])

  function adatokKuldese(){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let nev = document.getElementById("nev").value
    let email = document.getElementById("email").value
    let tel = document.getElementById("tel").value
    let idopontora = document.getElementById("idopontok").value
    let szolgaltatas = document.getElementById("szolgtatasok").value
    let idopont = datum + ":" + idopontora

    var raw = JSON.stringify({
      "nev": nev,
      "email": email,
      "tel": tel,
      "idopont": idopont,
      "tev": szolgaltatas
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
    };
    
    fetch("http://localhost:8000/api/idopontfelvetel/", requestOptions)
      .then(response => response.json())
      .then((result) => {
        console.log(result.id)
        setAzonosito(result.id)
      })
      .catch(error => console.log('error', error));
    
    setmutatModal(false)
    setmutatIdModal(true)
    
  }
  return (
    <>
      {buttons.map((buttonLabel, i) => (
        <button key={i} id={buttonLabel} value={buttonLabel} name={buttonLabel} className='Idogomb' onClick={()=>{setmutatModal(true), () => this.console.log(item.id)}}>
          {buttonLabel}
        </button>
      ))}
        <div id='ModalHatter'>
      <Modal isOpen={mutatModal} onRequestClose={()=>{setmutatModal(false)}} shouldCloseOnOverlayClick={false} id='Modal'>
      <div id='ModalTarolo'>
        <button className='Bezar' onClick={()=>{setmutatModal(false)}}>X</button>
        <h1><center>Időpont foglalás</center></h1>
        <br />
        <p>Név: <input type="text" name="nev" id="nev" ></input></p>         
        <p>Email: <input type="text" name="email" id="email" size="30"></input></p>          
        <p>Tel.: <input type="text" name="tel" id="tel" ></input></p>
        <select name="idopontok" id="idopontok" title='Időpontok'>
          {
            idopontok.map((opcio, i)=>{
              return(
                <option value={opcio} key={i} name={opcio}>{opcio}</option>
              )
            })
          }
        </select>
        <br />
        <label htmlFor="szolgtatasok"></label>
        <select name="szolgtatasok" id="szolgtatasok">
          {szolgaltatasok.map((opcio, i)=>{
            return(
              <option value={opcio.id} name={opcio.Megnevezes} key={i}>{opcio.Megnevezes}</option>
            )
          })}
        </select>
        <div className='footer'>
          <button onClick={()=>{setmutatModal(false)}}>Mégse</button>
          <button onClick={()=>{adatokKuldese()}}>Leadás</button>
        </div>  
      </div>
      </Modal>
      <Modal isOpen={mutatIdModal} onRequestClose={()=>{setmutatIdModal(false)}} shouldCloseOnOverlayClick={false} id='IdModal'>
        <div id='IdModalTarolo'>
          <button className='Bezar' onClick={()=>{setmutatIdModal(false)}}>X</button>
          <div className='modalTest'>
          <h2>A foglalása sikeresen létre jött!</h2>
          <p>Az időpontja az alábbi azonosítóval jött létre a rendszerünkben. Kérjük ez jegyezze fel mert a későbbiekben ezzel az azonosítóval mondhatja le az időpontját!</p>
          <h1><center>{azonosito}</center></h1>
          </div>
        </div>
      </Modal>
    </div>
    </>
  );
};
export default ButtonGroup 