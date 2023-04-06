import ren from "../../assets/ren.png"
import React from "react";
import "./Blog.css";
import { Card } from 'antd';
const { Meta } = Card;
// import May from "../../assets/May.png"
// import May_2 from "../../assets/May_2.png"
// import June from "../../assets/June.png"
const Blog = () => {
  return (
    <div className="container_Blog">
      <div className="Blog_h">
        <h1>Feature Blog</h1>
      </div>
      <div className="Blog_p">
        <p>Read Latest Delicious Posts And News</p>
      </div>
      <div className="ren">
        <img src={ren} alt="" />
        <img src={ren} alt="" />

        
      </div>
      <div className="Card">
      <Card
    hoverable
    style={{
      width: 300,
    }}
    cover={<img alt="example" src="https://img3.stockfresh.com/files/g/grafvision/m/58/6429830_stock-photo-coffee.jpg" />}
  >
    <Meta title="Make it Simple" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, erat in malesuada aliquam, est…" />
  </Card>
  <Card
    hoverable
    style={{
      width: 300,
    }}
    cover={<img alt="example" src="https://i007.fotocdn.net/s115/7e62c57271e786bb/public_pin_m/2622438362.jpg" />}
  >
    <Meta title="Make it Simple" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, erat in malesuada aliquam, est…" />
  </Card>
  <Card
    hoverable
    style={{
      width: 300,
    }}
    cover={<img alt="example" src="https://s1.1zoom.me/prev/596/Coffee_Many_coffee_Grain_Word_Lettering_English_595326_600x400.jpg" />}
  >
    <Meta title="Make it Simple" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, erat in malesuada aliquam, est…" />
  </Card>
  </div>
    </div>
  );
};

export default Blog;
