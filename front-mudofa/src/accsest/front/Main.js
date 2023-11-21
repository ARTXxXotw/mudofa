import React, { useEffect,useState } from 'react'
import '../CSS/main.css'
import logo1 from '../IMG/6-1-removebg-preview.png'
import axios from 'axios'

export default function Main() {
  const [time,setTime]=useState(new Date())
  const [state,setState]=useState(6)
  const [key,setKey]=useState(0)
  const [data, dataKey] = useState([])
  const [date,setDate]=useState([])

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

  useEffect(()=>{
    // setInterval(()=>setTime(new Date()),1000)
    axios.get(`https://new-uzbek.onrender.com/api/v1/new/`).then(res =>{
      console.log(res.data);
      dataKey(res.data)  
      axios.get(`https://new-uzbek.onrender.com/api/v1/company/`).then(res2 =>{
      setDate(res2.data);  
    console.log(res2.data);
    })
      console.log(res.data)
    })
  
  },[])
  const slice = data.slice(key, state);
  console.log(slice, "<------- abzal");

  function PaginationRight(){
    if (slice.length==6) {
      setKey(key+6)
    setState(state+6)
    }
  }
  function PaginationLeft(){
   if(key!==0){
    setKey(key-6)
    setState(state-6)
   }
  }

  const videoURLs = [
    "https://www.youtube.com/embed/0PUW2OpLJw4?si=FXdq361AZLyN-RBM",
    "https://www.youtube.com/embed/GsqAh9Sn2nY?si=ZYEJwUpeVaT9zhTg",
    "https://www.youtube.com/embed/iJzESxE3pI8?si=gWz1F4qGA7xsL99f",

  ];
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);


  const keyingiVideo = () => {
    setCurrentVideoIndex(prevIndex => (prevIndex + 1) % videoURLs.length);
  };

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
    document.querySelector("body").style=` overflow: hidden;`
  }
function closeModal(){
  document.querySelector(".big-navbar-modal-media").style=` right: 100%;`
  document.querySelector("body").style=` overflow: scroll;`
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
            {/* <p>Payshanba, Noyabr 16, 2023</p> */}
            <p>   {time.toLocaleDateString()}    <span> {formattedTime}</span> </p>
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
        <div className="nav-video">
        <div id="player" className="player-container"></div>
        </div>
        <div className="nav-beck-fon"></div>
        <div className="nav-top-menu">
          <div className="nav-logo">
           {date.map((item)=>{
            return(
              <>
              <img src={item.image} alt="" />
              </>
            )
           })}
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
            {date.map((item)=>{
              return(
                <>
                <a href={item.facebook}><i class='bx bxl-facebook' id='facebook' ></i></a>
                <a href={item.instagram}><i class='bx bxl-instagram' id='instagram' ></i></a>
                <a href=""><i class='bx bx-envelope'  ></i></a>
                <a href={item.telegram}><i class='bx bxl-telegram' id='telegram'  ></i></a>
                <a href={item.twitter}> <i class='bx bxl-twitter' id='twitter' ></i></a>
                <a href={item.youtobe}>  <i class='bx bxl-youtube' id='youtube' ></i></a>
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

              {slice.map((item,index)=>{
                return(
                  <div className="grid-card-1"  >
                  <div className="grid-card-img">
                    <img src={item.image} alt="No image" />
                  </div>
                  <div className="grid-card-text">
                    <div className="yangiliklar">
                      <span>YANGILIKLAR</span>
                    </div>
                    <div className="grid-card-text-info">
                    <h2>{item.title}</h2>
                    <p>{item.time_create.slice(0,10)}</p>
                    </div>
                  </div>
                </div>
                )
              })}

            </div>
            <div className="pagination-btn">
            <button onClick={()=>PaginationLeft()} ><i class='bx bx-chevron-left' ></i></button>
              <button onClick={()=>PaginationRight()} ><i class='bx bx-chevron-right' ></i></button>
            </div>
          </div>

          <div className="icon-position-absalute">
            <div className="kvadrat-icon">
          {date.map((item)=>{
            return(
              <>
               <a href={item.facebook}> <i class='bx bxl-facebook' ></i></a>
              </>
            )
          })}
            </div>
            <div className="kvadrat-icon-2">
            {date.map((item)=>{
            return(
              <>
               <a href={item.instagram}> <i class='bx bxl-instagram' ></i></a>
              </>
            )
          })}
            </div>
            <div className="kvadrat-icon-3">
            {date.map((item)=>{
            return(
              <>
               <a href={item.instagram}> <i class='bx bxl-telegram' ></i></a>
              </>
            )
          })}
            </div>
            <div className="kvadrat-icon-4">
            {date.map((item)=>{
            return(
              <>
               <a href={item.youtobe}> <i class='bx bxl-youtube' ></i></a>
              </>
            )
          })}
            </div>
            <div className="kvadrat-icon-5">
            {date.map((item)=>{
            return(
              <>
               <a href={item.play_market}> <i class='bx bxl-play-store' ></i></a>
              </>
            )
          })}
            </div>
            <div className="kvadrat-icon-6">
            {date.map((item)=>{
            return(
              <>
               <a href={item.twitter}> <i class='bx bxl-twitter' ></i></a>
              </>
            )
          })}
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
            <div className="pagination-btn">
            <button ><i class='bx bx-chevron-left' ></i></button>
              <button ><i class='bx bx-chevron-right' ></i></button>
            </div>
          </div>
          
        </div>
        <div className="main-block-2-ich">
          <div className="main-info-yangiliklar">
            <div className="main-info-btn">
              <button>MULTIMEDIA</button>
            </div>
            <div className="youtube-iframe" id='videoPlayerContainer'>
              <div className="videoWrapper">
              <iframe
            className="videoIframe"
            width="560"
            height="315"
            src={videoURLs[currentVideoIndex]}
            frameBorder="0"
            allowFullScreen
          ></iframe>
              </div>
            </div>
            <div className="youtube-iframe-map">
              <div className="siniy-block">
                <div className="youtube-dagi-name-joy">
                  <h3>Multimedia</h3>
                </div>
                <div className="btn-keying">
                <button onClick={()=>keyingiVideo()}>Next Video <i class='bx bx-left-arrow-alt bx-rotate-180' ></i></button>
                </div>
              </div>
            </div>
          </div>



          <div className="main-info-kop-oqilganlar">
            <div className="main-info-btn-2">
              <button>OKRUGLAR</button>
            </div>
            <div className="okruglar-block">
              <div className="ookrug-img">
                <img src={logo1} alt="" />
              </div>
              <div className="ookrug-text">
                <h2>Toshkent harbiy okrug</h2>
              </div>
              <div className="animation-butn">
                <button>yangiliklar</button>
              </div>
            </div>
            <div className="okruglar-block">
              <div className="ookrug-img">
                <img src={logo1} alt="" />
              </div>
              <div className="ookrug-text">
                <h2>janubiy-garbiy maxsus harbiy okrug </h2>
              </div>
              <div className="animation-butn">
                <button>yangiliklar</button>
              </div>
            </div>
            <div className="okruglar-block">
              <div className="ookrug-img">
                <img src={logo1} alt="" />
              </div>
              <div className="ookrug-text">
                <h2>MArkaziy jarbiy okrug</h2>
              </div>
              <div className="animation-butn">
                <button>yangiliklar</button>
              </div>
            </div>
            <div className="okruglar-block">
              <div className="ookrug-img">
                <img src={logo1} alt="" />
              </div>
              <div className="ookrug-text">
                <h2>shimoliy-garbiy harbiy okrug</h2>
              </div>
              <div className="animation-butn">
                <button>yangiliklar</button>
              </div>
            </div>
          </div>
          
        </div>
        <div className="main-info-kop-oqilganlar-media">
            <div className="main-info-btn-2">
              <button>OKRUGLAR</button>
            </div>
            <div className="okruglar-block">
              <div className="ookrug-img">
                <img src={logo1} alt="" />
              </div>
              <div className="ookrug-text">
                <h2>Toshkent harbiy okrug</h2>
              </div>
              <div className="animation-butn">
                <button>yangiliklar</button>
              </div>
            </div>
            <div className="okruglar-block">
              <div className="ookrug-img">
                <img src={logo1} alt="" />
              </div>
              <div className="ookrug-text">
                <h2>janubiy-garbiy maxsus harbiy okrug </h2>
              </div>
              <div className="animation-butn">
                <button>yangiliklar</button>
              </div>
            </div>
            <div className="okruglar-block">
              <div className="ookrug-img">
                <img src={logo1} alt="" />
              </div>
              <div className="ookrug-text">
                <h2>MArkaziy jarbiy okrug</h2>
              </div>
              <div className="animation-butn">
                <button>yangiliklar</button>
              </div>
            </div>
            <div className="okruglar-block">
              <div className="ookrug-img">
                <img src={logo1} alt="" />
              </div>
              <div className="ookrug-text">
                <h2>shimoliy-garbiy harbiy okrug</h2>
              </div>
              <div className="animation-butn">
                <button>yangiliklar</button>
              </div>
            </div>
          </div>



          <div className="main-info-kop-oqilganlar-2-media">
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
            <div className="pagination-btn">
            <button ><i class='bx bx-chevron-left' ></i></button>
              <button ><i class='bx bx-chevron-right' ></i></button>
            </div>
          </div>
      </div>


      <div className="main-block-indo-rasmlar">
        <div className="main-info-block-big">
          <div className="ulani-ucshab-turadi">
          <div className="line-animatin"></div>
          <div className="line-animatin-2"></div>
          </div>
          <div className="ulani-ucshab-turadi" id='pasga'>
            <div className="rigth-animatin"></div>
            <div className="rigth-animatin-2"></div>
          </div>
          <div className="main-info-ich">
            <div className="frid-rasm">
              <img src="https://mudofaa.uz/wp-content/uploads/2023/07/qurolli-kuchlar.png" alt="" />
            </div>
            <div className="frid-rasm">
              <img src="https://mudofaa.uz/wp-content/uploads/2023/07/tibbiyot.png" alt="" />
            </div>
            <div className="frid-rasm">
              <img src="https://mudofaa.uz/wp-content/uploads/2023/07/gosptal.png" alt="" />
            </div>
            <div className="frid-rasm">
              <img src="https://mudofaa.uz/wp-content/uploads/2023/07/harbiy-meros-.png" alt="" />
            </div>
            <div className="frid-rasm">
              <img src="https://mudofaa.uz/wp-content/uploads/2023/07/korrupsiya.png" alt="" />
            </div>
            <div className="frid-rasm">
              <img src="https://mudofaa.uz/wp-content/uploads/2023/07/jamoat.png" alt="" />
            </div>
            <div className="frid-rasm">
              <img src="https://mudofaa.uz/wp-content/uploads/2023/07/maslahat.png" alt="" />
            </div>
            <div className="frid-rasm">
              <img src="https://mudofaa.uz/wp-content/uploads/2023/07/himoya.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="map-iframe-google">
        <div className="ifrmae-google">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6172031.574941159!2d54.5855437398662!3d40.944520168533174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b20a5d676b1%3A0xca0a6dad7e841e20!2z0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1700277345797!5m2!1sru!2s"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <div className="map-pasida-btn">
        <button>foydali havolalar</button>
      </div>
       <div className="main-info-cardrs">
        <div className="card-nomer-1">
          <div className="fon-a-card"></div>
        </div>
        <div className="card-nomer-2">
          <div className="fon-a-card"></div>
        </div>
        <div className="card-nomer-3">
          <div className="fon-a-card-1"></div>
        </div>
        <div className="card-nomer-4">
          <div className="fon-a-card-2"></div>
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
            <h3>{time.toLocaleDateString()}</h3>
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
