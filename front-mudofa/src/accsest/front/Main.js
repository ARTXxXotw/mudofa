import React, { useEffect } from 'react'
import '../CSS/main.css'

export default function Main() {
  const videoId = "xCxWId-0Qtw";
  let player;

  function navbarMenu(){
    //  var y= document.querySelector(".menu-nav-on").style.right;
    // if(y==" right: 100%;"){
    // document.querySelector(".menu-nav-on").style.right="0";
    // }else{
    //    document.querySelector(".menu-nav-on").style.right="100%";
    // }
    document.querySelector(".big-navbar-modal-media").style=` right: 0%;`
  }
function closeModal(){
  document.querySelector(".big-navbar-modal-media").style=` right: 100%;`
}
  useEffect(() => {
    const loadYouTubeAPI = () => {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
    };

    const onYouTubeIframeAPIReady = () => {
      player = new window.YT.Player('player', {
        width: '100%',
        height: '100%',
        videoId: videoId,
        playerVars: {
          autoplay: 2,
          loop: 1,
          controls: 0,
          modestbranding: 1,
          rel: 0,
          showinfo: 0
        },
        events: {
          'onReady': onPlayerReady
        }
      });
    };

    const onPlayerReady = (event) => {
      event.target.mute();
      event.target.playVideo();
    };

    loadYouTubeAPI();

    return () => {
      if (player) {
        player.destroy();
      }
    };
  }, [videoId]);

  return (
    <div>
      {/* navbar bilen vidion jer */}
      <div className="main-block">
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
        <div className="nav-video">
        <div id="player" className="player-container"></div>
        </div>
        <div className="nav-beck-fon"></div>
        <div className="nav-top-menu">
          <div className="nav-logo">
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
      {/* navbar bilen vidion jer */}

      {/* navbar modal */}
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
      {/* navbar modal */}

      <div className="main-block-2">
        <div className="main-block-2-ich">
          <div className="main-info-yangiliklar">
            <div className="main-info-btn">
              <button>YANGILIKLAR</button>
            </div>
            <div className="grid-card">


              <div className="grid-card-1" >
                <div className="grid-card-img">
                  <img src="https://mudofaa.uz/wp-content/uploads/2023/11/photo_2023-11-17_11-04-15.jpg" alt="" />
                </div>
                <div className="grid-card-text">
                  <div className="yangiliklar">
                    <span>YANGILIKLAR</span>
                  </div>
                  <div className="grid-card-text-info">
                  <h2>Muqaddasdir Vatan bayrogʻi</h2>
                  <p>17.11.2023</p>
                  </div>
                </div>
              </div>


              <div className="grid-card-1" >
                <div className="grid-card-img">
                  <img src="https://mudofaa.uz/wp-content/uploads/2023/11/photo_2023-11-17_10-03-10.jpg" alt="" />
                </div>
                <div className="grid-card-text">
                  <div className="yangiliklar">
                    <span>YANGILIKLAR</span>
                  </div>
                  <div className="grid-card-text-info">
                  <h2>“Yashil makon” loyihasida harbiylarning faol ishtiroki ta’minlanmoqda</h2>
                  <p>17.11.2023</p>
                  </div>
                </div>
              </div>


              <div className="grid-card-1" >
                <div className="grid-card-img">
                  <img src="https://mudofaa.uz/wp-content/uploads/2023/11/photo_2023-11-16_18-53-37.jpg" alt="" />
                </div>
                <div className="grid-card-text">
                  <div className="yangiliklar">
                    <span>YANGILIKLAR</span>
                  </div>
                  <div className="grid-card-text-info">
                  <h2>Chirchiq oliy tank qoʻmondonlik-muhandislik bilim yurti 105 yoshda</h2>
                  <p>17.11.2023</p>
                  </div>
                </div>
              </div>


              <div className="grid-card-1" >
                <div className="grid-card-img">
                  <img src="https://mudofaa.uz/wp-content/uploads/2023/11/photo_2023-11-16_16-39-46-2.jpg" alt="" />
                </div>
                <div className="grid-card-text">
                  <div className="yangiliklar">
                    <span>YANGILIKLAR</span>
                  </div>
                  <div className="grid-card-text-info">
                  <h2>“Keksalar uchun turizm oyligi”da harbiy xizmatchilar faol ishtirok etmoqda</h2>
                  <p>17.11.2023</p>
                  </div>
                </div>
              </div>


              <div className="grid-card-1" >
                <div className="grid-card-img">
                  <img src="https://mudofaa.uz/wp-content/uploads/2023/11/photo_2023-11-16_15-21-01.jpg" alt="" />
                </div>
                <div className="grid-card-text">
                  <div className="yangiliklar">
                    <span>YANGILIKLAR</span>
                  </div>
                  <div className="grid-card-text-info">
                  <h2>Qashqadaryoning olis garnizonidagi harbiy qismda keng qamrovli tibbiy koʻrik tashil etildi</h2>
                  <p>17.11.2023</p>
                  </div>
                </div>
              </div>


              <div className="grid-card-1" >
                <div className="grid-card-img">
                  <img src="https://mudofaa.uz/wp-content/uploads/2023/11/photo_2023-11-16_11-59-25.jpg" alt="" />
                </div>
                <div className="grid-card-text">
                  <div className="yangiliklar">
                    <span>YANGILIKLAR</span>
                  </div>
                  <div className="grid-card-text-info">
                  <h2>Harbiy xizmatchilarning tibbiyot boʻyicha bilimlari mustahkamlanmoqda</h2>
                  <p>17.11.2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>



          <div className="main-info-kop-oqilganlar">
            <div className="main-info-btn-2">
              <button>KO‘P O‘QILGAN</button>
            </div>
            <div className="grid-card-info-2-joy">
              <div className="grid-info-2-img">
                <div className="grid-nedacansa">
                  <img src="https://mudofaa.uz/wp-content/uploads/2023/10/psixologik-scaled.jpg" alt="" />
                </div>
              </div>
              <div className="grid-card-text-info-2">
                  <h2>Muqaddasdir Vatan bayrogʻi</h2>
                  <p>17.11.2023</p>
                  </div>
                  <div className="grid-card-text-info-2">
                  <h2>Qashqadaryoning olis garnizonidagi harbiy qismda keng qamrovli tibbiy koʻrik tashil etildi</h2>
                  <p>17.11.2023</p>
                  </div>
                  <div className="grid-card-text-info-2">
                  <h2>Elektr uskunalari va isitish moslamalaridan foydalanishda yong‘in xavfsizligi talablariga rioya qiling</h2>
                  <p>17.11.2023</p>
                  </div>
                  <div className="grid-card-text-info-2">
                  <h2>Joylarda “Maʼnaviyat marafoni” yuqori kayfiyatda oʻtkazildi</h2>
                  <p>17.11.2023</p>
                  </div>
                  <div className="grid-card-text-info-2">
                  <h2>Mudofaa vazirligi qo‘shinlarida “Yong‘in xavfsizligi oyligi” boshlandi</h2>
                  <p>17.11.2023</p>
                  </div>
                  <div className="grid-card-text-info-2">
                  <h2>Jizzaxda “Eng ilg‘or divizion” ko‘rik tanlovi o‘tkazildi</h2>
                  <p>17.11.2023</p>
                  </div>
                  <div className="grid-card-text-info-2">
                  <h2>Qo‘mondon Toshkent viloyati yoshlari bilan onlayn muloqot qildi</h2>
                  <p>17.11.2023</p>
                  </div>
                  <div className="grid-card-text-info-2">
                  <h2>Ta’lim maskanida “Rahbar va yoshlar” uchrashuvi o‘tkazildi</h2>
                  <p>17.11.2023</p>
                  </div>
                  <div className="grid-card-text-info-2">
                  <h2>Harbiy xizmatchilar “Yashil makon” umummilliy loyihasida faol ishtirok etmoqda</h2>
                  <p>17.11.2023</p>
                  </div>
                  <div className="grid-card-text-info-2">
                  <h2>Harbiy xizmatchilar imkoniyati cheklangan bolalarni bayram bilan qutladi</h2>
                  <p>17.11.2023</p>
                  </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
