import { ItemDetail } from "../ItemDetail/itemDetail";
import React, {useState, useEffect} from "react";

const game = { id:1, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA0_XsnlCCp5Lz0yU36HNPWPJdrBkNHQEYkw&usqp=CAU", tittle:"Playstation4"};

export const ItemDetailContainer = () =>{
    const [data, setData] = useState({});

    useEffect(() =>{
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(game);
            }, 3000);
        });

        getData.then(res => setData(res));
    },[])


    return(
        <ItemDetail data={data} />
    );
}