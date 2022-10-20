import React from "react";
import './itemDetail.css'
import { ItemCount } from "../ItemCount/ItemCount";



export const ItemDetail = ({ data }) => {
    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
    }

    return (
        <div className="container">
            <div className="detail">
                <img className="'detail_image" src={data.image} alt="gta5" />
                <   div className="content">
                    <h1>{data.tittle}</h1>
                    <h4>{data.price}</h4>

                    <ItemCount initial={1} stock={8} onAdd={onAdd} />

                </div>
            </div>
        </div>
    )
}