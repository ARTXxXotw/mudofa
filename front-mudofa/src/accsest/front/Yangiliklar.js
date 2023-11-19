import React from 'react'
import '../CSS/Yangiliklar.css'

export default function Yangiliklar() {
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
            <i class='bx bxl-facebook' id='facebook' ></i>
            <i class='bx bxl-instagram' id='instagram' ></i>
            <i class='bx bx-envelope'  ></i>
            <i class='bx bxl-telegram' id='telegram'  ></i>
            <i class='bx bxl-twitter' id='twitter' ></i>
            <i class='bx bxl-youtube' id='youtube' ></i>
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

        <div className="nav-media-menu">
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



      <div className="main-ikkinchi-tarab-yangilikar">
        <div className="qiyshayib">
        <div className="home-belgisi-yol">
            <p>Home <span><i class='bx bx-chevron-right' ></i></span>  Yangiliklar <span><i class='bx bx-chevron-right' ></i></span>  “Yangi nafas” xalqaro marafoni o‘tkazildi — fotoreportaj</p>
        </div>
        <div className="sozlaga-yangiliklar-tepa">
            <h2>“Yangi nafas” xalqaro marafoni o‘tkazildi — fotoreportaj</h2>
            <div className="qancha-oqilgan-joy">
                <div className="sana-data">
                    <p>19.11.2023</p>
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
                <i class='bx bxl-facebook' ></i>
                </div>
                <div className="telegram">
                <i class='bx bxl-telegram' ></i>
                </div>
            </div>
            <div className="yangiliklar-block-info">
                <div className="yangiliklar-img">
                   <img src="https://mudofaa.uz/wp-content/uploads/2023/11/photo_2023-11-19_15-21-02-768x464.jpg" alt="" />
                </div>
                <div className="yangiliklar-text">
                    <p>Bugun poytaxtimiz koʻchalari boʻylab Oʻzbekiston Respublikasi davlat bayrogʻi qabul qilingan kun munosabati bilan “Yangi nafas” xalqaro marafoni oʻtkazildi. Erta tongda boshlangan yugurish musobaqasida turli yoshdagi hamyurtlarimiz, Qozogʻiston, Qirgʻiziston, Tojikiston va Turkmaniston Respublikalaridan kelgan yengil atletika klubi vakillari, Rossiya, Hindiston davlatlarining mamlakatimizda taʼlim olayotgan talabalari va oʻttizga yaqin xorijiy davlatlar fuqarolari sovrinli oʻrinlar uchun kurash olib bordi.</p>
                </div>
            </div>
        </div>

        </div>
      </div>
    </div>
  )
}
