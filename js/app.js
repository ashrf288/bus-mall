
'use strict';

function randomNumber( min, max ) {
    min = Math.ceil( min );
    max = Math.floor( max );
    return Math.floor( Math.random() * ( max - min + 1 ) + min );
}

let imgArray=[
    'bag.jpg','banana.jpg','bathroom.jpg','boots.jpg',
    'breakfast.jpg','bubblegum.jpg','chair.jpg','cthulhu.jpg','dog-duck.jpg','dragon.jpg',
    'pen.jpg','pet-sweep.jpg','scissors.jpg','shark.jpg','sweep.png','tauntaun.jpg','unicorn.jpg',
    'usb.gif','water-can.jpg','wine-glass.jpg']
let imageSection=document.getElementById('imageSection')
let leftImage=document.getElementById('leftImage');
let middleImage=document.getElementById('middleImage');
let rightImage=document.getElementById('rightImage');
let resultsP=document.getElementById('resultsP');
let resultButton=document.getElementById('result-button');
let counter=0;
let results=[];



function Item(name,src,view){
    this.name=name;
    this.src=`img/${src}`;
    this.view=0;
    this.clicked=0;
    Item.product.push(this);
}


Item.product = []
console.log(Item.product)

for( let i = 0; i < imgArray.length; i++ ) {

new Item(imgArray[i].split('.')[0],imgArray[i])

}







 function render() {
    let leftIndex = randomNumber(0, imgArray.length - 1);
    let middleIndex;
    let rightIndex;
  
    do {
      rightIndex = randomNumber(0, imgArray.length - 1);
       middleIndex=randomNumber(0, imgArray.length - 1);
    } while( leftIndex === rightIndex ||leftIndex === middleIndex
       ||middleIndex === rightIndex );

      //  console.log(Item.product[middleIndex].src)

       leftImage.setAttribute('src',Item.product[leftIndex].src);
       middleImage.setAttribute('src',Item.product[middleIndex].src);
       rightImage.setAttribute('src',Item.product[rightIndex].src);
     

       ///views counter
       Item.product[rightIndex].view++;
       Item.product[middleIndex].view++;
       Item.product[middleIndex].view++;
      
    
       

     

     
     
}


function eventHandler(e) {
    // console.log(e.target.id);
    if((e.target.id === 'rightImage' || e.target.id === 'leftImage'||event.target.id==='middleImage') && counter < 25){
      render();
      
      counter++;
  
    } else if (counter===25){
      alert('press on the button to see the results')
      resultButton.addEventListener('click',result)
    
     
     


      
      
        
      
    }
    
  
  }
imageSection.addEventListener('click',eventHandler);





render();

///// clicked counter 
leftImage.addEventListener('click',somthing)
middleImage.addEventListener('click',somthing)
rightImage.addEventListener('click',somthing)

function somthing(e){
  for(let j=0;j<imgArray.length;j++){

 if (e.target.src.split('00/')[1]===Item.product[j].src){
   Item.product[j].clicked++
   console.log(Item.product[j].clicked)
 }
 
  }

}


function result(){
  
  if(counter===25){
    for( let i = 0; i < imgArray.length; i++ ) {
    

     results.push(`${Item.product[i].name} had ${Item.product[i].clicked} votes
     and was viewed ${Item.product[i].view} times `)

  }
  resultsP.textContent=results;
  
}
  }


