import React from 'react'
import { useState, useEffect} from "react";
import Calendar from 'react-calendar'
import Gomb from '../assets/ButtonGroup';
import Modal from 'react-modal';

const Idopontok = () => {
    const [szolgaltatasok, setSzolgaltatasok] = useState([])
    let url = 'http://127.0.0.1:8000/api/szolgaltatasok/'
    const [date, setDate] = useState(new Date())
    const ma = new Date();
    const idopontok = ["Foglalás"];
    let mutatIdopontok = false

    useEffect(()=>{
      fetch(url, {
        method: 'GET',
      })
      .then((response) => response.json())
      .then((data) => {
        setSzolgaltatasok(data)
        })
    },[])
  
    //Már jó. Pont jól működik!
    if(date.getFullYear()>ma.getFullYear())
    mutatIdopontok = true;
      else if(date.getFullYear()==ma.getFullYear()){
        if(date.getMonth()>ma.getMonth())
        mutatIdopontok = true;
        else if(date.getMonth()==ma.getMonth()){
          if(date.getDate()>=ma.getDate())
          mutatIdopontok=true
        }
        else
        mutatIdopontok=false
    }
    else
    mutatIdopontok=false

  return (
    <>
        <h1 className='cim'>Időpont foglalás</h1>
        <br/>
        <Calendar onChange={setDate} value={date}></Calendar>
        <br />
        <h2>Szabad időpontok</h2>
        {!mutatIdopontok && <h2>Nincsenek szabad időpontok!</h2>}
        {mutatIdopontok && <div id='idopontposi'><div id='szabadIdopontok'><Gomb buttons={idopontok} datum={date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()}/></div></div>}
        <div className='ures'></div>
    </>
  )
}

export default Idopontok