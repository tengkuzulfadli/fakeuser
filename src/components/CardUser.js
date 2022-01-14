import React, { useState, useEffect, useRef } from 'react';
import './Card.css';
import LoadingUi from './LoadingUi';
import { BsCalendar2Date, BsPhoneVibrate } from 'react-icons/bs';
import { MdOutlineAttachEmail } from 'react-icons/md';
import Moment from 'react-moment';


//Create function expression of an anonymous function
// and url as a parameter
const getData = url => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  

  useEffect(async () => {
      
      //get response from api
      const res = await fetch(url);
      
      console.log(res);
      //convert a response to JSON
      const data = await res.json();
      console.log(data);
      
      // declare destructuring assignment
      // to define data from "results"
      const [item] = data.results;

      setData(item);
      
      setTimeout(() => setLoading(false), 5000)
      //setLoading(timeOut);
  }, []);

    
  // Returning an object literal of data & loading
  return { data, loading };

};

function CardUser(){
    const { data, loading } = getData("https://randomuser.me/api/");
    
    function getDate(date) {
        return date.split(' ')[0]
    }

    return(
        <>
            {
                loading ? 
                <LoadingUi />
                : 
                <div className="container">
                    <div className="card">
                        <div className="img">
                            <img src={data.picture.large} alt="Profile Picture" className="main-img" />
                        </div>
                        
                        <div className="content">
                            <h2 className="content-name">{data.name.title} {data.name.first} {data.name.last}</h2>

                            <p className="content-gen"><MdOutlineAttachEmail className="icon-1" /> {data.email}</p>

                            <p className="content-age"><BsCalendar2Date className="icon-2" /><Moment date={data.dob.date} /></p>

                            <p className="content-country"><BsPhoneVibrate className="icon-3" /> {data.phone}</p>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default CardUser;