import React,{useState,useEffect} from "react";

import "./ItemListContainer.css"
import { ItemCount } from "../ItemCount/ItemCount";
import { ItemList } from "../ItemList/itemList";

export const products = [
    {id:1, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ6fEdbl5MFEuCrsJvOyivIEQgGttpvKqdVQ&usqp=CAU", tittle:"Horizon"},
    {id:2, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp5EOkK46hbU6aqP2yg9DJabTskBDuIoclDA&usqp=CAU", tittle:"Assassins Creed"},
    {id:3, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0-H9grwiH-zHO452zFvz1qYiwcCAPWEnWnw&usqp=CAU",   tittle:"God of War"},
];



export const ItemListContainer = ({tittle})=>{
    const [data, setData] = useState([]);

    useEffect(() =>{
        const getData = new Promise(resolve =>{
            setTimeout(() => {
                resolve(products);
            }, 3000);
        });
        getData.then(res => setData(res));

    }, []);

    return(
        <div className="contenedor">
            {tittle}
            <ItemCount/>
            <ItemList data={data}/>
        </div>
    )
}