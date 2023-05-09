import React from "react";
import "./shoppage.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ShopPage = () => {
  const select = useSelector((store) => store.DataCard);
  let shopArr = select;
  const [arr, setArr] = React.useState(shopArr);
  const [total, settotal] = React.useState();
  function dec(i) {
    arr.map((iteam) => {
      iteam.count = iteam.count + 1;
    });
    setArr(arr);
  }
  function dlete(i) {
    let cur = [...arr]

    cur.splice( i , 1)

    setArr(cur)
  }
  function dec(i){
    let deccur = [...arr]
    deccur[i].count = deccur[i].count - 1
    setArr(deccur)
    if(deccur[i].count ===0 ){
      deccur.splice(i,1)
    }
    setArr(deccur)
  }
  function inc(i){
    let deccur = [...arr]
    deccur[i].count = deccur[i].count + 1
    setArr(deccur)
  }
  React.useEffect(()=>{
    let summ = arr.reduce(
      (total, {count , narxi}) => count * narxi + total,
        0
    )
    settotal(summ)
  },[arr])
  return (
    <div className="container my-5">
      <Link className="left" to="/">
        <div className="left">
          <i className="bi bi-arrow-left"></i> Назад
        </div>
      </Link>
      <div className="h1 text-center">
        ${total}{
          
        }
      </div>
      <div>
        {arr
          ? arr.map((iteam, index) => {
              return (
                <div className="boxCard" key={index}>
                  <div className="boxCardImg">
                    <img src={iteam.url} alt="foto" />
                  </div>
                  <div>
                    <div className="boxCardText">
                      <h6> ${iteam.count * iteam.narxi}</h6>
                      <h6>{iteam.name}</h6>
                      <div className="boxCardDlPl">
                        <button onClick={() => dec(index)}>-</button>
                        <h6>{iteam.count}</h6>
                        <button onClick={()=> inc(index)}>+</button>
                      </div>
                    </div>
                  </div>
                  <div className="boxCardDel">
                    <button onClick={()=>dlete(index)}>
                      <i className="bi bi-trash3"></i>
                    </button>
                  </div>
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default ShopPage;
