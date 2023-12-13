import React from 'react'

function Card() {

    const productdata=[
        {image:"mahendraCarImages/mahendraCar1.jpeg",text1:"Mahendra Scorpio",text2:"color-black",value:"20.50 Lakh"},
        {image:"../mahendraCarImages/mahendraCar2.jpeg",text1:"Mahendra Thar",text2:"color-red",value:"14.50 Lakh"},
        {image:"../mahendraCarImages/mahendraCar3.jpeg",text1:"Mahendra KUV100NXT",text2:"color-red",value:"8.50 Lakh"},
        {image:"../mahendraCarImages/mahendraCar9.jpeg",text1:"Mahendra XUV-400",text2:"color-red",value:"10 Lakh"},
        {image:"../mahendraCarImages/mahendraCar10.jpeg",text1:"Mahendra XUV-700",text2:"color-ash",value:"12 Lakh"},
        {image:"../mahendraCarImages/mahendraCar11.jpeg",text1:"Mahendra XUV-300",text2:"color-black",value:"12.76 Lakh"},
        {image:"../mahendraCarImages/mahendraCar7.jpeg",text1:"Mahendra Blero",text2:"color-black",value:"10.50 Lakh"},
        {image:"../mahendraCarImages/mahendraCar8.jpeg",text1:"Mahendra Alturas G4",text2:"color-ashgray",value:"22.40 Lakh"},
        
    ]
return(
    <div className='container1'>
    {productdata.map((mh)=>{
        return(
            <div className='card' >
<img src={mh.image}/>
<h3 className='mtext'>{mh.text1}</h3>
<p>{mh.text2}</p>
<p1> price:{mh.value}</p1>
<div className='star'>

   
{[...Array(5)].map((star)=>{
   return(
<div >

<i class="fa fa-star" aria-hidden="true"></i>
</div>
   ) 
})}
 </div>
<button type='submit'>more details</button>
            </div>
        )

    })}
    
    </div>
)
  
}

export default Card
