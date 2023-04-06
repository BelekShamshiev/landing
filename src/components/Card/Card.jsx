import React from 'react';
import "./Card.css"
import { Button, Space } from 'antd';
import girl from "../../assets/girl.png"
import machin from "../../assets/machin.png"
import spon from "../../assets/spon.png"
import eplise from "../../assets/Ellipse .png"
const Card = () => {
    return (
        <div className='container_Card'>
            <div className='card_home'>
                <div className='card_1'>
                    <img src={girl} alt="" />
                    <h1>New Coffee Flavours</h1>
                    <Button  ghost>Read More</Button>              
                      </div>
                <div className='card__1'>
                <div className='card_2'>
                    <img src={machin} alt="" />
                    <h1>This friday  25%  off</h1>
                    <div className='eplise'>
                    <img src={eplise} alt="" />
                    </div>
                </div>
                <div className='card_3'>
                <img src={spon} alt="" />
                </div>
                </div>
            </div>
        </div>
    );
};

export default Card;