import React from 'react';
import axios from 'axios';
import "./HomePage.css";
import { useDispatch, useSelector } from "react-redux";
const Searchpage = () => {
    const dispatch = useDispatch()
    const [card1 , setCard1] = React.useState([])
    const select = useSelector(store => store)
    React.useEffect(() => {
        axios.get(" https://api.npoint.io/98792f12dbae96b6a9ff").then((res) => {
            setCard1(res.data);
        });
      }, []);
      function shoping(i){
        dispatch({type: 'add_Card', payload: card1[i]})
      }
    return (
        <div className='container'>
                <div className="sneakerPage">
                    {
                        (select.DataVal.val)? select.DataVal.val.map((iteam, index)=>{
                            return(
                                <div key={index} className="bigCard">
                                     <div className="sneakerCard">
                                    <div  className="sneakerCardHeader"><img src={iteam.url} alt="fot" /></div>
                                    <div   className="sneakerCardBody"><p>{iteam.narxi}</p><img src={iteam.nike} alt="" /></div>
                                    <div className="sneakerCardFooter"><h6>{iteam.name}</h6></div>
                                     </div>
                                     <button onClick={()=>shoping(index)}>{iteam.button}</button>
                                </div>
                            )
                        }):'Loading..'
                    }
                </div>
        </div>
    );
}

export default Searchpage;
