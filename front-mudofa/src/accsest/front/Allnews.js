import React, { useEffect,useState } from 'react'
import axios from 'axios'
import '../CSS/Allnews.css'

export default function Allnews() {
    const [data, dataKey] = useState([]);
    const [date,setDate]=useState([]);
    useEffect(()=>{
        axios.get(`https://new-uzbek.onrender.com/api/v1/new_action`).then(res =>{
          console.log(res.data);
          dataKey(res.data)
        })
        axios.get(`https://new-uzbek.onrender.com/api/v1/company/`).then(res =>{
          setDate(res.data);  
        console.log(res.data);
        })
      },[])
    function navbarMenu(){
        //  var y= document.querySelector(".menu-nav-on").style.right;
        // if(y==" right: 100%;"){
        // document.querySelector(".menu-nav-on").style.right="0";
        // }else{
        //    document.querySelector(".menu-nav-on").style.right="100%";
        // }
        document.querySelector(".big-navbar-modal-media").style=` right: 0%;`
        document.querySelector("body").style=` overflow: hidden;`
      }
    function closeModal(){
      document.querySelector(".big-navbar-modal-media").style=` right: 100%;`
      document.querySelector("body").style=` overflow: scroll;`
    }
  return (
    <div>
             <div className="main-block" id='margin-button'>
        <nav>
          <div className="navbar-text">
            <p>Payshanba, Noyabr 16, 2023</p>
            <p className='nav-hover-link'>Maxsus imkoniyatlar</p>
            <div className="nav-icon">
            {date.map((item)=>{
              return(
                <>
                <a href={item.facebook}><i class='bx bxl-facebook' id='facebook' ></i></a>
                <a href={item.instagram}><i class='bx bxl-instagram' id='instagram' ></i></a>
                <a href={item.email}><i class='bx bx-envelope'  ></i></a>
               <a href={item.telegram}> <i class='bx bxl-telegram' id='telegram'  ></i></a>
               <a href={item.twitter}>  <i class='bx bxl-twitter' id='twitter' ></i></a>
               <a href={item.youtobe}> <i class='bx bxl-youtube' id='youtube' ></i></a>
                </>
              )
            })}
            </div>
          </div>
        </nav>
        <div className="nav-top-menu-1">
          <div className="nav-logo" id='left-balki'>
            <img src="https://mudofaa.uz/wp-content/uploads/2023/06/1-MO-EMB.png" alt="logo" />
          </div>
          <div className="nav-text-link">
            <div className="nav-link-home">
              <i class='bx bxs-home'></i>
            </div>
            <div className="nav-link-text-a">
              <a href="#">Vazirlik haqida</a> {/* <span><i class='bx bx-chevron-down' ></i></span> */}
            </div> 
            <div className="nav-link-text-a">
              <a href="#">Yangiliklar</a> {/* <span><i class='bx bx-chevron-down' ></i></span> */}
            </div>  
          </div>
        </div>

        <div className="nav-media-menu" id='pasadssad'>
          <div className="nav-media-menu-ich">
          <div className="menu-nav">
             <i class='bx bx-menu' onClick={()=>navbarMenu()}></i>
          </div>
          <div className="menu-img">
            <img src="https://mudofaa.uz/wp-content/uploads/2023/06/1-MO-EMB.png" alt="" />
          </div>
          <div className="menu-search">
             <i class='bx bx-search' ></i>
          </div>
          </div>
        </div>
      </div>
      <div className="big-navbar-modal-media">
      <div className="menu-nav-on">
        <div className="menu-nav-on-icon">
          <div className="menu-on-icon">
          <i class='bx bxl-facebook' id='facebook' ></i>
            <i class='bx bxl-instagram' id='instagram' ></i>
            <i class='bx bx-envelope'  ></i>
            <i class='bx bxl-telegram' id='telegram'  ></i>
            <i class='bx bxl-twitter' id='twitter' ></i>
            <i class='bx bxl-youtube' id='youtube' ></i>
          </div>
          <div className="menu-on-x">
          <i class='bx bx-x' onClick={()=>closeModal()} ></i>
          </div>
        </div>
        <div className="menu-nav-on-text">
          <div className="menu-icon-home-onn">
             <i class='bx bxs-home'></i>
          </div>
          <div className="navbar-modal-ich-menu-text">
            <a href="#">Vazirlik haqida</a>
          </div>
          <div className="navbar-modal-ich-menu-text">
            <a href="#">Yangiliklar</a>
          </div>
        </div>
      </div>
      </div>

      <div className="pastarab-all-news-grid">
        <div className="grid-news-all">
        {data.map((item,index)=>{
                return(
                  <div className="grid-card-1" >
                  <div className="grid-card-img">
                    <img src={item.image} alt="No image" />
                  </div>
                  <div className="grid-card-text">
                    <div className="yangiliklar">
                      <span>YANGILIKLAR</span>
                    </div>
                    <div className="grid-card-text-info">
                    <h2>{item.desc}</h2>
                    <p>{item.time_create.slice(0,10)}</p>
                    </div>
                  </div>
                </div>
                )
              })}
        </div>
      </div>
      <footer className='footer'>
        <div className="footer-fon">
          <div className="alisher-navoiy">
            <div className="alisher-img">
             {date.map((item)=>{
              return(
                <>
                <img src={item.image} alt="" />
                </>
              )
             })}
            </div>
            <div className="alisher-icon">
              <div className="icon-hover-al">
                 {date.map((item)=>{
                  return(
                    <>
                    <a href={item.facebook}><i class='bx bxl-facebook' id='facebook1' ></i></a>
                    </>
                  )
                 })}
              </div>
              <div className="icon-hover-al">
              {date.map((item)=>{
                  return(
                    <>
                    <a href={item.instagram}><i class='bx bxl-instagram' id='instagram1' ></i></a>
                    </>
                  )
                 })}
              </div>
              <div className="icon-hover-al">
              {date.map((item)=>{
                  return(
                    <>
                    <a href={item.telegram}><i class='bx bxl-telegram' id='telegram1' ></i></a>
                    </>
                  )
                 })}
              </div>
              <div className="icon-hover-al">
              {date.map((item)=>{
                  return(
                    <>
                    <a href={item.youtobe}><i class='bx bxl-youtube' id='youtube1' ></i></a>
                    </>
                  )
                 })}
              </div>
            </div>
          </div>
          <div className="call-me">
            <h3>Shanba, Noyabr 18, 2023</h3>
            <div className="call-me-tel">
              <div className="tel-icon">
                <i class='bx bxs-phone'></i>
              </div>
              <div className="tel-p">
                {date.map((item)=>{
                  return(
                    <>
                    <p>{item.phone1}</p>
                    <p>{item.phone2}</p>
                    </>
                  )
                })}
              </div>
            </div>
            <div className="call-me-input-btn">
             <form action="">
             <input type="text" required /><button type='no'><i class='bx bx-search'></i></button>
             </form>
            </div>
            <div className="play-mark">
              <div className="img-paly-mark">
                <img src="https://mudofaa.uz/wp-content/uploads/2022/05/IOS-2-300x88.png" alt="" />
              </div>
              <div className="img-paly-mark">
                <img src="https://mudofaa.uz/wp-content/uploads/2022/05/GOOGLE-PLAY-300x88.png" alt="" />
              </div>
            </div>
          </div>
        </div>
       </footer>
    </div>
  )
}
