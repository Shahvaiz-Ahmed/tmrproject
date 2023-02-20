import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

function Profile() {
    const [arr, setarr] = useState([]);
    const username = 'MUHAMMAD ALI';
    const password = 'ZjpHC2TE16qjPqo6iUraaJrIg2gps4xHSdTmA9FVNd8=';
    useEffect(() => {
    
      return () => {
        axios.get('https://api.businesscentral.dynamics.com/v2.0/0cd74c11-7d97-4748-a720-ebbd5100b4e9/Sandbox1/api/TMRC/TMRC_Group/v2.0/companies(b290c1c3-11ab-ec11-bb8f-000d3a398a56)/CustomerRelative', {
        auth:{
          username,
          password
        }
      }).then(res=> setarr(res.data.value) )
    
      }
    }, [])

    

  return (
    <>
    {
        arr.find((i)=>{
            return(
                <p>{i.CustNo}</p>
            )
        })
    }
    </>
  )
}

export default Profile