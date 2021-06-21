
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
let resultsP=document.getElementById('resultsul');
let resultButton=document.getElementById('result-button');
let counter=0;
let results=[];



function Item(name,src,view){
    this.name=name;
    this.src=`img/${src}`;
    this.view=0;
    this.clicked=0;
    Item.product.push(this);
    Item.nameS.push(name)
   
}
Item.totalViews=[]
Item.totalClicks=[]
Item.nameS=[]
Item.product = []
console.log(Item.product)

for( let i = 0; i < imgArray.length; i++ ) {

new Item(imgArray[i].split('.')[0],imgArray[i])

}






let oldLeftIndex=0;
    let oldMiddleIndex=0;
    let oldRightIndex=0;


 function render() {
    let leftIndex = randomNumber(0, imgArray.length - 1);
    let middleIndex;
    let rightIndex;
   
    do {
      rightIndex = randomNumber(0, imgArray.length - 1);
       middleIndex=randomNumber(0, imgArray.length - 1);
    } while( leftIndex === rightIndex ||leftIndex === middleIndex
       ||middleIndex === rightIndex );

      if (leftIndex===oldLeftIndex ||leftIndex === oldMiddleIndex
        ||leftIndex === oldRightIndex||rightIndex===oldLeftIndex ||rightIndex === oldMiddleIndex
        ||rightIndex === oldRightIndex||middleIndex===oldLeftIndex ||middleIndex === oldMiddleIndex
        ||middleIndex === oldRightIndex){
          console.log(' need')
          do {
            leftIndex= randomNumber(0, imgArray.length - 1);
            rightIndex = randomNumber(0, imgArray.length - 1);
             middleIndex=randomNumber(0, imgArray.length - 1);
          } while( leftIndex===oldLeftIndex ||leftIndex === oldMiddleIndex
            ||leftIndex === oldRightIndex||rightIndex===oldLeftIndex ||rightIndex === oldMiddleIndex
            ||rightIndex === oldRightIndex||middleIndex===oldLeftIndex ||middleIndex === oldMiddleIndex
            ||middleIndex === oldRightIndex ||leftIndex === rightIndex ||leftIndex === middleIndex
            ||middleIndex === rightIndex);
        }else{
          console.log('no need')
        }

       console.log(leftIndex)
       console.log(oldLeftIndex)
        oldLeftIndex=leftIndex;
        oldMiddleIndex=middleIndex;
        oldRightIndex=rightIndex;




        

        

        
      //  console.log(Item.product[middleIndex].src)

       leftImage.src=Item.product[leftIndex].src;
       middleImage.src=Item.product[middleIndex].src;
       rightImage.src=Item.product[rightIndex].src;
     

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
 if (e.target.src.split('00/')[1]==Item.product[j].src){
     
   Item.product[j].clicked++
  //  console.log(Item.product[j].clicked)
 }
 
  }

}


function result(){
  
  if(counter===25){
    for( let i = 0; i < imgArray.length; i++ ) {
    //  console.log(`${Item.product[i].name} had ${Item.product[i].clicked} votes
    //  and was viewed ${Item.product[i].view} times `)

    //  results.push(`${Item.product[i].name} had ${Item.product[i].clicked} votes
    //  and was viewed ${Item.product[i].view} times `)
      Item.totalViews.push(Item.product[i].view);
      Item.totalClicks.push(Item.product[i].clicked);
      
      let listItem=document.createElement('li');
      listItem.textContent=`${Item.product[i].name} had ${Item.product[i].clicked} votes
      and was viewed ${Item.product[i].view} times `;
      
      resultsP.appendChild(listItem);
     


  }
  // resultsP.textContent=results;

  
}
chart();
  }

  



  function chart(){
    
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: Item.nameS,
                datasets: [{
                    label: '# of Viwes',
                    data: Item.totalViews,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                },{
                  label: '# of Viwes',
                  data: Item.totalClicks,
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(153, 102, 255, 0.2)',
                      'rgba(255, 159, 64, 0.2)'
                  ],
                  borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)'
                  ],
                  borderWidth: 1
              }
              ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        
  }