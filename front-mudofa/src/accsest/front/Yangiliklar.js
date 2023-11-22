import React, { useEffect, useState } from 'react'
import '../CSS/Yangiliklar.css'
import axios from 'axios';

export default function Yangiliklar() {
  const [time,setTime]=useState(new Date());  
  const [date,setDate]=useState([]);
  const [data,setData]=useState([]);
  const [data1,setData1]=useState([]);
  useEffect(()=>{
    axios.get(`https://new-uzbek.onrender.com/api/v1/company/`).then(res =>{
      setDate(res.data); 
      console.log(res.data);
    })
  },[])
  

  useEffect((id)=>{

       axios.get(`https://new-uzbek.onrender.com/api/v1/new/`).then(res=>{
        const Filter=res.data.filter(item=>item.id==localStorage.getItem("newsid"))
        setData1(Filter)
        console.log(Filter,"Salom1");
       
      })
    
    },[])

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
  
  
      return () => {
        clearInterval(timer);
      };
    }, []);
  
    const formatTime = (time) => {
      return time < 10 ? `0${time}` : time;
    };
    const formattedTime = `${formatTime(currentTime.getHours())}:${formatTime(
      currentTime.getMinutes()
    )}:${formatTime(currentTime.getSeconds())}`;
  
    const formattedDate = `${formatTime(currentTime.getDate())}/${formatTime(
      currentTime.getMonth() + 1
    )}/${currentTime.getFullYear()}`;
  
  

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
            {/* <p>Payshanba, Noyabr 16, 2023</p> */}
            <p>  {formattedTime }     <span> {time.toDateString()} </span> </p>
            <p style={{cursor:'pointer'}} className='nav-hover-link'>Maxsus imkoniyatlar</p>
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
        <div className="nav-top-menu-1" onClick={()=>window.location="/"}>
          <div className="nav-logo" id='left-balki'>
          {date.map((item)=>{
              return(
                <>
                <img src={item.image} alt="logo" />
                </>
              )
            })}
          </div>
          <div className="nav-text-link">
            <div className="nav-link-home">
              <i class='bx bxs-home'></i>
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
          <div className="menu-on-x">
          <i class='bx bx-x' onClick={()=>closeModal()} ></i>
          </div>
        </div>
        <div className="menu-nav-on-text">
          <div className="menu-icon-home-onn">
             <i class='bx bxs-home' onClick={()=>window.location="/"}></i>
          </div>
          <div className="navbar-modal-ich-menu-text">
            <a href="#">Yangiliklar</a>
          </div>
        </div>
      </div>
      </div>


      <div className="main-ikkinchi-tarab-yangilikar">
        <div className="qiyshayib">
        <div className="home-belgisi-yol">
            <p>Home <span><i class='bx bx-chevron-right' ></i></span>  Yangiliklar <span><i class='bx bx-chevron-right' ></i></span> {data1.map(item=>{return item.title})}</p>
        </div>
        {data1.map(data=>{
        return  <>
         <div className="sozlaga-yangiliklar-tepa">
            <h2>{data.title}</h2>
            <div className="qancha-oqilgan-joy">
                <div className="sana-data">
                    <p>
                        {data.time_create.slice(0,10)}</p>
                </div>
                <div className="prasmtor">
                    <div className="galz">
                    <i class='bx bx-show'></i> <span>323</span>
                    </div>
                    <div className="komment">
                    <i class='bx bxs-chat'></i> <span>0</span>
                    </div>
                </div>
            </div>
            <div className="icon-kotta-yangiliklar">
                <div className="facebok">
                    <a href={data.facebook}><i class='bx bxl-facebook' ></i></a>
                </div>
                <div className="telegram">
                    <a href={data.telegram}><i class='bx bxl-telegram' ></i></a>
                </div>
            </div>
          {data.actions.map(item=>{
            return(
             <>
            <div className="yangiliklar-block-info">
                <div className="yangiliklar-img">
                  <img src={item.image} alt="logo" />
                </div>
                <div className="yangiliklar-text">
                    <p>{item.desc}</p>
                </div>
            </div>
            </>
            )
          })}
        </div>
          </>
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
            <h3>{time.toDateString()} </h3>
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
