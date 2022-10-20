import React, { useState, useEffect } from "react";

import "./ItemListContainer.css"
import { ItemList } from "../ItemList/itemList";
import { useParams } from "react-router-dom";

export const products = [
    { id: 1, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ6fEdbl5MFEuCrsJvOyivIEQgGttpvKqdVQ&usqp=CAU", category: "PS4", price: "U$D10" , tittle: "Horizon" },
    { id: 2, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp5EOkK46hbU6aqP2yg9DJabTskBDuIoclDA&usqp=CAU", category: "PS4", price: "U$D50" , tittle: "Assassins Creed" },
    { id: 3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0-H9grwiH-zHO452zFvz1qYiwcCAPWEnWnw&usqp=CAU", category: "PS4", price: "U$D70" , tittle: "God of War" },
    { id: 4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnrV8iJyzwebFRPCgvQ-gKRoRdmie-1oKSxg&usqp=CAU", category: "PS5", price: "U$D30" , tittle: "Spiderman M-M" },
    { id: 5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKG8tbdvB5GN7THRd-G-YQTPOD3dcGnf2u6w&usqp=CAU", category: "PS5", price: "U$D50" , tittle: "GTAV" },
    { id: 5, image: "https://www.atajo.com.ar/images/PS5-UNCHARTEDLEGACY28290PS-LATAM-ULOTC-FRONT.jpg", category: "PS5", price: "U$D80" , tittle: "Uncharted" },


];



export const ItemListContainer = ({ tittle }) => {
    const [data, setData] = useState([]);

    const { categoriaId } = useParams();




    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(products);
            }, 1000);
        });
        if (categoriaId) {
            getData.then(res => setData(res.filter(products => products.category === categoriaId)));
        } else {

            getData.then(res => setData(res));
        }

    }, [categoriaId]);

    return (
        <div className="contenedor">
            {tittle}

            <ItemList data={data} />
        </div>
    )
}