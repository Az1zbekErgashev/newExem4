import React from 'react';
import './shoppage.css'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const ShopPage = () => {
    const select = useSelector(store => store)
    const dispatch = useDispatch()
    let shopArr = select.DataCard
    function dec(i){
      dispatch({type:'Min', pay:shopArr[i]})
      console.log('ds');
    } 
   
    return (
        <div className='container my-5'>
            <Link  className='left' to='/'><div className='left'><i className='bi bi-arrow-left'></i> Назад</div></Link>
            <div>
        <h1>

        </h1>
            </div>
            <div>
                {
                    (shopArr) ? shopArr.map((iteam, index)=>{
                        return(
                            <div className='boxCard' key={index}>
                                <div  className='boxCardImg'>
                                    <img src={iteam.url} alt="foto" />
                                </div>
                                <div>
                                    <div   className='boxCardText'>
                                        <h6>{iteam.narxi}</h6>
                                        <h6>{iteam.name}</h6>
                                        <div className='boxCardDlPl'><button onClick={()=>dec(index)}>-</button><h6>{iteam.count}</h6><button>+</button></div>
                                    </div>
                                </div>
                                <div   className='boxCardDel'><button><i className="bi bi-trash3"></i></button></div>
                            </div>
                        )
                    }): ''
                }
            </div>
        </div>
    );
}

export default ShopPage;
