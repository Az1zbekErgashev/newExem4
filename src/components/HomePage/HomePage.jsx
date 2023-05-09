import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import "./HomePage.css";
import HomeImg from "./img/HomeImg.png";
import axios from "axios";
import img1 from './img/icon1.png'
import img3 from './img/icon3.png'
import img4 from './img/icon4.png'
import img5 from './img/icon5.png'
import img6 from './img/icon6.png'
import img7 from './img/icon7.png'
import img8 from './img/row1icon1.png'
import img9 from './img/row1icon2.png'
import img10 from './img/row1icon3.png'
import img11 from './img/row1icon4.png'
import img12 from './img/row1icon5.png'
import img13 from './img/row1icon6.png'
import img14 from './img/row3icon1.png'
import img15 from './img/row3icon2.png'
import img16 from './img/row3icon3.png'
import img17 from './img/row3icon4.png'
import img18 from './img/row3icon5.png'
import img19 from './img/row3icon6.png'
import { useDispatch, useSelector } from "react-redux";
import Searchpage from "./searchpage";
const HomePage = () => {
  const select = useSelector(store => store)
  const dispatch = useDispatch()
  const [slider, setSlider] = React.useState([]);
  const [categoriyRow2, setCategoriyRow2] = React.useState([
    {
        url: img1,
        name: 'Пуловер'
    },
    {
        url: img3,
        name: 'Комбинезоны'
    },
    {
        url: img4,
        name:'Домашная одежда '
    },
    {
        url: img5,
        name: 'Водолазка'
    },
    {
        url: img6,
        name: 'Нижнее бельё'
    },
    {
        url: img7,
        name: 'Носки и гетры'
    },
  ]);
  const [categoriyRow1, setCategoriyRow1] = React.useState([
        {
            icon: img8,
          name: 'Брюки'  
        },
        {
            icon: img9,
          name: 'Верхняя одежда'  
        },
        {
            icon: img10,
          name: 'Джемпер'  
        },
        {
            icon: img11,
          name: 'Свитер'  
        },
        {
            icon: img12,
          name: 'Кардиган'  
        },
        {
            icon: img13 ,
          name: 'Водолазка'  
        },
  ]);
  const [categoriyRow3, setCategoriyRow3] = React.useState([
    {
        name: 'Одежда больших размеров',
        url: img14
    },
    {
        name: 'Пиджаки',
        url: img15
    },
    {
        name: 'Костюмы',
        url: img16
    },
    {
        name: 'Жилеты',
        url: img17
    },
    {
        name: 'Плавки и шорты для плавания',
        url: img18
    },
    {
        name: 'Рубашки',
        url: img19
    },
  ])
  const [card1 , setCard1] = React.useState([])
  React.useEffect(() => {
    axios.get("https://api.npoint.io/9656f5d72c076b79e607").then((res) => {
      setSlider(res.data);
    });
  }, []);
  React.useEffect(() => {
    axios.get(" https://api.npoint.io/98792f12dbae96b6a9ff").then((res) => {
        setCard1(res.data);
    });
  }, []);
  function shoping(i){
    dispatch({type: 'add_Card', payload: card1[i]})
  }
  
  return (
    <div>
      {
        (select.nullS.val2) ? <Searchpage/> : <div>
  <div>   
      </div>
      <ScrollContainer className="scroll-container container">
        <div className="slider">
        
          {slider
            ? slider.map((iteam, index) => {
                return (
                  <div key={index}>
                    <img src={iteam.url} alt="foto" />
                  </div>
                );
              })
            : "Loading..."}
        </div>
      </ScrollContainer>
      {/* slider end */}

      {/* header */}
      <div className="headerImg container">
        <img src={HomeImg} alt="Foto" />
      </div>
      {/* header end

       categoriy */}
      <div className="container mt-5 Categories">
        <h3 className="text-success fw-bolder text-center">Категории</h3>
        <div className="categogies_row container">
          <div className="row">
            {
                (categoriyRow1) ? categoriyRow1.map((iteam, index)=>{
                    return(
                        <div key={index} className="col-12 categoriesName">
                            <img src={iteam.icon} alt="icon" />
                            <h4>{iteam.name}</h4></div>
                    )
                }): 'Loading..'
            }
          </div>
          <div className="row">
            {
                              (categoriyRow2) ? categoriyRow2.map((iteam, index)=>{
                                return(
                                    <div key={index} className="col-12 categoriesName">
                                        <img src={iteam.url} alt="icon" />
                                        <h4>{iteam.name}</h4></div>
                                )
                            }): 'Loading..'
            }
          </div>
          <div className="row">
            {
                (categoriyRow3) ? categoriyRow3.map((iteam , index)=>{
                    return(
                        <div key={index} className="col-12 categoriesName">
                        <img src={iteam.url} alt="icon" />
                        <h4>{iteam.name}</h4></div>
                    )
                }): 'Loading...'
            }
          </div>
        </div>
      </div>
      {/* categories end */}
      {/* Card  Page*/}
      <div className="container CardPage">
            <div>
            
                <h3 className="fw-bolder text-success text1">Oбуви</h3>
                <h3 className="fw-bolder text-success text2">Одежды</h3>
                <h3 className="fw-bolder text-success text3">Aксессуары</h3>
                <div className="sneakerPage">
                    {
                        (card1)? card1.map((iteam, index)=>{
                            return(
                                <div key={index} className="bigCard">
                                     <div className="sneakerCard">
                                    <div  className="sneakerCardHeader"><img src={iteam.url} alt="fot" /></div>
                                    <div   className="sneakerCardBody"><p>${iteam.narxi}</p><img src={iteam.nike} alt="" /></div>
                                    <div className="sneakerCardFooter"><h6>{iteam.name}</h6></div>
                                     </div>
                                     <button onClick={()=>shoping(index)}>{iteam.button}</button>
                                </div>
                            )
                        }):'Loading..'
                    }
                </div>
            </div> 
      </div>
        </div>
      }
    </div>
  );
                  };

export default HomePage;