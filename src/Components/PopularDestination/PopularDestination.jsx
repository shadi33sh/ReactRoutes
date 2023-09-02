import React from 'react'
import { useState } from 'react'
import Firstimage from './../../../public/2.jpg'
import Secimage from './../../../public/1.jpg'
import Thirdtimage from './../../../public/5.jpg'
import Fourthimage from './../../../public/8.jpg'
import './Popular.css'
import { Cont } from '../Cont/Cont'
export const PopularDestination = () => {
    const [FirstTitle] = useState("Mt.Dagulbul , Batanges")
    const [FirstInfo]  = useState(" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam suscipit veniam debitis eum possimus nisi odio atque corrupti modi, odit quo ut libero laboriosam animi. Iste, eveniet accusamus unde quos dignissimos incidunt dolore, eum praesentium pariatur similique excepturi temporibus voluptate cumque tempora molestias obcaecati ipsam culpa! Totam delectus voluptatum debitis ipsum? Fugit quas vitae nobis reiciendis dolor necessitatibus, quis natus corrupti tempore atque sunt provident aliquid quasi nihil tenetur alias repellendus quisquam ex facere. Dolorum vitae laborum, repellendus nobis sint ducimus aperiam, sed obcaecati ipsum tempora soluta libero nesciunt magnam?")
    const [sectTitle] = useState("Taal Volcano,Batangas")
    const [sectInfo]  = useState(" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam suscipit veniam debitis eum possimus nisi odio atque corrupti modi, odit quo ut libero laboriosam animi. Iste, eveniet accusamus unde quos dignissimos incidunt dolore, eum praesentium pariatur similique excepturi temporibus voluptate cumque tempora molestias obcaecati ipsam culpa! Totam delectus voluptatum debitis ipsum? Fugit quas vitae nobis reiciendis dolor necessitatibus, quis natus corrupti tempore atque sunt provident aliquid quasi nihil tenetur alias repellendus quisquam ex facere. Dolorum vitae laborum, repellendus nobis sint ducimus aperiam, sed obcaecati ipsum tempora soluta libero nesciunt magnam?")
  return (
    <div className='popular'>
        <div className="text">
       <h1>PopularDestination</h1>
       <p>Tours dive you the opportunity To see a lot , within a time frame</p>
        </div>
       <Cont 
       title = {FirstTitle}
       info = {FirstInfo}
       firstPic = {Firstimage}
       secpic  = {Secimage}
       />
       <Cont 
       title = {sectTitle}
       info = {sectInfo}
       firstPic = {Thirdtimage}
       secpic  = {Fourthimage}
       class='reverse'
       />
    </div>
    
  )
}
