import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'
import { useDispatch } from 'react-redux';
import axios from 'axios';
const Navabar = () => {
    const [card1 , setCard1] = React.useState([])
    const [val, setval ] = React.useState('')
    const dispatch = useDispatch()
        dispatch({type: 'search', payload: val, pay2: card1})
        React.useEffect(() => {
            axios.get(" https://api.npoint.io/98792f12dbae96b6a9ff").then((res) => {
                setCard1(res.data);
            });
          }, []);
    return (
        <div className='navabar conatiner-fluid' >
            <div className="search container d-flex">
                <i className='bi bi-list'></i>
                <input type="text" placeholder='Поиск' onChange={(val)=>setval(val.target.value)} />
                <Link to='/shop'><button><i className='bi bi-cart4'></i><span><p></p></span></button></Link>
            </div>
        </div>
    );
}

export default Navabar;
