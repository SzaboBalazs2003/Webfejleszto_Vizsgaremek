import React, { useState, useEffect } from 'react'
import Modal from 'react-modal';
import '../App.css'
import '../assets/SajatModal.css'

const Fooldal = () => {

  const [mutatTorlesModal, setmutatTorlesModal] = useState(false)
  const [mutatIdopontModal, setmutatIdopontModal] = useState(false)
  const [idopontadatok, setIdopontadatok] = useState([])
  const [szolgaltatasok, setSzolgaltatasok] = useState([])
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

  function Idopont(){
    let url = 'http://127.0.0.1:8000/api/idopont/' + document.getElementById("azonosito").value

    fetch(url, {
      method: 'GET',
    })
    .then((response) => response.json())
    .then((data) => {
      setIdopontadatok(data)
      setmutatIdopontModal(true)
      })

  }


  function torles(){
   
    let url = "http://localhost:8000/api/idoponttorlese/" + document.getElementById("azonosito").value

    var requestOptions = {
      method: 'DELETE',
      redirect: 'follow'
    };

    fetch(url, requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result)
        setmutatIdopontModal(false)
        setmutatTorlesModal(true)
      })
      .catch(error => console.log('error', error));
  }


  return (
    <div>
      <br />
      <div className='cim'>
        <h1>Üdvözöljük Dr. Bubó, és Dr. Fogász Flórián fogászati rendelőjében!</h1>
      </div>
      <br />
      <div className='tartalom'>
        <p><b>Elérhetőségek:</b></p>
        <ul>
          <li>Tel.: 06123456789 (Dr. Bubó)</li>
          <li>Tel.: 06213456789 (Dr. Fogász Flórián)</li>
        </ul>
      <h4>Ha már van időpontja akkor az azonosító megadásával ellenőrizheti az adatokat, vagy törölheti azt.</h4>
      <div className='idopontgomb'>
        <button onClick={()=>{Idopont()}}>Megtekintés</button><input type='number' id='azonosito' min={0}/>
      </div>
      </div>
      <Modal isOpen={mutatIdopontModal} onRequestClose={()=>{setmutatIdopontModal(false)}} shouldCloseOnOverlayClick={false} id='IdopontModal'>

          <button className='Bezar' onClick={()=>{setmutatIdopontModal(false)}}>X</button>
          <div className='modalTest'>
          <h1>Az időpontjának adatai:</h1>
            <h2>Azonosító: {idopontadatok.id}</h2>
            <p>Név: {idopontadatok.nev}</p>
            <p>Email: {idopontadatok.email}</p>
            <p>Telefon: {idopontadatok.tel}</p>
            <p>Időpont: {idopontadatok.idopont}</p>
            <p>Szolgáltatás: {szolgaltatasok[(idopontadatok.tev)-1]?.Megnevezes}</p>
          </div>
          <div className='footer'>   
            <button onClick={()=>{torles()}}>Törlés</button>
            <button onClick={()=>{setmutatIdopontModal(false)}}>Rendben</button>
          </div>
      </Modal>
      <Modal isOpen={mutatTorlesModal} onRequestClose={()=>{setmutatTorlesModal(false)}} shouldCloseOnOverlayClick={false} id='TorolModal'>
        
      <button className='Bezar' onClick={()=>{setmutatTorlesModal(false)}}>X</button>
        <div className='TorolTarolo'>
          <h1>A foglalását töröltük!</h1>
          <p>Várjuk mielőbb vissza!</p>
        </div>
      </Modal>
    </div>
  )
}

export default Fooldal