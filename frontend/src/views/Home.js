import React, { useEffect, useState } from "react";
import axios from 'axios';
import Client from "../components/Client";
import "./Home.css";
import { Navigate } from "react-router-dom";


const Home = (props) => {

    const [clients, setClients] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8001/client/')
            .then(res => setClients(res.data))
            .catch(err => {console.error(err);
            });
    }, []);

    return (
        <div className="home">
            <h1>Lista Klientów</h1>
            {!props.token && <Navigate to='/login' />}
            <div className="clientsList">
                <Client clients={clients}/>
            </div>
        </div>
    )
}

export default Home;