import "./Sidebar.css";
import home from "../../assets/home.png";
import game_icon from "../../assets/game_icon.png";
import automobiles from "../../assets/automobiles.png";
import sports from "../../assets/sports.png";
import entertainment from "../../assets/entertainment.png";
import tech from "../../assets/tech.png";
import music from "../../assets/music.png";
import blogs from "../../assets/blogs.png";
import news from "../../assets/news.png";
import f8 from "../../assets/f8.png";
import it from "../../assets/it.png";
import hoang from "../../assets/hoang.png";
import tack from "../../assets/tack.png";
import hole from "../../assets/hole.png";
const Sidebar = ({sidebar,category,setCategory}) => {
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
      <div className="shortcut-links">
        <div className={`side-link ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
          <img src={home} alt="" />
          <p>Trang chủ</p>
        </div>
        <div className={`side-link ${category===20?"active":""}`} onClick={()=>setCategory(20)}>
          <img src={game_icon} alt="" />
          <p>Game</p>
        </div>
        <div className={`side-link ${category===2?"active":""}`} onClick={()=>setCategory(2)}>
          <img src={automobiles} alt="" />
          <p>Ô tô</p>
        </div>
        <div className={`side-link ${category===17?"active":""}`} onClick={()=>setCategory(17)}>
          <img src={sports} alt="" />
          <p>Thể thao</p>
        </div>
        <div className={`side-link ${category===24?"active":""}`} onClick={()=>setCategory(24)}>
          <img src={entertainment} alt="" />
          <p>Giải trí</p>
        </div>
        <div className={`side-link ${category===28?"active":""}`} onClick={()=>setCategory(28)}>
          <img src={tech} alt="" />
          <p>Công nghệ</p>
        </div>
        <div className={`side-link ${category===10?"active":""}`} onClick={()=>setCategory(10)}>
          <img src={music} alt="" />
          <p>Âm nhạc</p>
        </div>
        <div className={`side-link ${category===22?"active":""}`} onClick={()=>setCategory(22)}>
          <img src={blogs} alt="" />
          <p>Bài viết</p>
        </div>
        <div className={`side-link ${category===25?"active":""}`} onClick={()=>setCategory(25)}>
          <img src={news} alt="" />
          <p>Mới</p>
        </div>
        <hr />
      </div>
      <div className="subscribed-list">
        <h3>Kênh đăng ký</h3>
        <div className="side-link">
          <img src={f8} alt="jack" /> <p><a href="#">F8 Official</a></p>
        </div>
        <div className="side-link">
          <img src={it} alt="jack" /> <p><a href="#">Hỏi Dân IT</a></p>
        </div>
        <div className="side-link">
          <img src={hoang} alt="jack" /> <p><a href="#">Phạm Huy Hoàng</a></p>
        </div>
        <div className="side-link">
          <img src={tack} alt="jack" /> <p><a href="#">GreatStack</a></p>
        </div>
        <div className="side-link">
          <img src={hole} alt="jack" /> <p><a href="#">HoleTex</a></p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
