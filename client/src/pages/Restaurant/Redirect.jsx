import React from 'react';
import { useEffect } from 'react';
import {useNavigate,useParams} from 'react-router-dom';

function Redirect() {
    const history = useNavigate();
    const {id} = useParams();

    useEffect(()=>{
        history.push(`/restaurant/${id}/overview`);
    });
    return (
        <div>
            
        </div>
    )
}

export default Redirect
