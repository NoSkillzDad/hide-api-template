import React, {useEffect, useState} from 'react';
import axios from "axios";


const App = () => {

    const [state, setState] = useState({});

    const getData = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/yourendpointhere`);
            // console.log(response.data);
            setState(response.data);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>

        </div>
    );
};

export default App;