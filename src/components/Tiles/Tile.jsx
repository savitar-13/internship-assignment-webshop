import React from 'react'
import Button from '../Buttons/Button'
import "./tiles.css"

export default function Tile(props) {
   return (
      <div className="tile">
         <div className="tileText">
            <h2 className="tileTitle">{props.title}</h2>
            <p className="tilePara">{props.para}</p>
            <Button
               className="tileBtn"
               content="PURCHASE NOW"
               background="transparent"
               outline="none"
               border="1px solid #111"
               borderRadius="20px"
               color="#111"
               backgroundImage="none"
               fontWeight="bold"

            />
         </div>
         <div className="tileImageContainer">
            <img src={props.image} alt="" className="tileImage" />
         </div>
      </div>
   )
}
