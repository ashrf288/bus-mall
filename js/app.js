
'use strict';

function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let imgArray = [
  'bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg',
  'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg',
  'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg',
  'usb.gif', 'water-can.jpg', 'wine-glass.jpg']
let imageSection = document.getElementById('imageSection')
let leftImage = document.getElementById('leftImage');
let middleImage = document.getElementById('middleImage');
let rightImage = document.getElementById('rightImage');
let resultsP = document.getElementById('resultsul');
let resultButton = document.getElementById('result-button');
let counter = 0;
let results = [];
//////
let bok=0
let nok=0
///////
let oldViews=[];
let oldVotes=[];
let grandTotalViews=[]
     let grandTotalClicks=[]
   
for(let m=0;m<imgArray.length;m++){
  oldViews.push(bok);
  oldVotes.push(nok)
}

function Item(name, src, view) {
  this.name = name;
  this.src = `img/${src}`;
  this.view = 0;
  this.clicked = 0;
  Item.product.push(this);
  Item.nameS.push(name)

}
Item.totalViews = []
Item.totalClicks = []
Item.nameS = []
Item.product = []
console.log(Item.product)

for (let i = 0; i < imgArray.length; i++) {

  new Item(imgArray[i].split('.')[0], imgArray[i])

}






let oldLeftIndex = 0;
let oldMiddleIndex = 0;
let oldRightIndex = 0;


function render() {
  let leftIndex = randomNumber(0, imgArray.length - 1);
  let middleIndex;
  let rightIndex;

  do {
    rightIndex = randomNumber(0, imgArray.length - 1);
    middleIndex = randomNumber(0, imgArray.length - 1);
  } while (leftIndex === rightIndex || leftIndex === middleIndex
    || middleIndex === rightIndex);

  if (leftIndex === oldLeftIndex || leftIndex === oldMiddleIndex
    || leftIndex === oldRightIndex || rightIndex === oldLeftIndex || rightIndex === oldMiddleIndex
    || rightIndex === oldRightIndex || middleIndex === oldLeftIndex || middleIndex === oldMiddleIndex
    || middleIndex === oldRightIndex) {
    console.log(' need')
    do {
      leftIndex = randomNumber(0, imgArray.length - 1);
      rightIndex = randomNumber(0, imgArray.length - 1);
      middleIndex = randomNumber(0, imgArray.length - 1);
    } while (leftIndex === oldLeftIndex || leftIndex === oldMiddleIndex
    || leftIndex === oldRightIndex || rightIndex === oldLeftIndex || rightIndex === oldMiddleIndex
    || rightIndex === oldRightIndex || middleIndex === oldLeftIndex || middleIndex === oldMiddleIndex
    || middleIndex === oldRightIndex || leftIndex === rightIndex || leftIndex === middleIndex
      || middleIndex === rightIndex);
  } else {
    console.log('no need')
  }

  console.log(leftIndex)
  console.log(oldLeftIndex)
  oldLeftIndex = leftIndex;
  oldMiddleIndex = middleIndex;
  oldRightIndex = rightIndex;









  //  

  leftImage.src = Item.product[leftIndex].src;
  middleImage.src = Item.product[middleIndex].src;
  rightImage.src = Item.product[rightIndex].src;


  ///views counter
  Item.product[rightIndex].view++;
  Item.product[middleIndex].view++;
  Item.product[middleIndex].view++;


}


function eventHandler(e) {
  // console.log(e.target.id);
  if ((e.target.id === 'rightImage' || e.target.id === 'leftImage' || event.target.id === 'middleImage') && counter < 25) {
    render();

    counter++;

  } else if (counter === 25) {
    alert('press on the button to see the results')
    resultButton.addEventListener('click', result)









  }


}
imageSection.addEventListener('click', eventHandler);





render();

///// clicked counter 
leftImage.addEventListener('click', clickCounter)
middleImage.addEventListener('click', clickCounter)
rightImage.addEventListener('click', clickCounter)

function clickCounter(e) {
  for (let j = 0; j < imgArray.length; j++) {
    if (e.target.src.split('00/')[1] == Item.product[j].src) {

      Item.product[j].clicked++
    
    }

  }

}


function result() {

  if (counter === 25) {
    for (let i = 0; i < imgArray.length; i++) {
      Item.totalViews.push(Item.product[i].view);
      Item.totalClicks.push(Item.product[i].clicked);

      // localStorage.removeItem(`oldViwes${i}`)
      // localStorage.removeItem(`oldVotes${i}`)

  
      // ///////////////////////////////////////////////////////////////////
      


    }

     
  
    for (let j = 0; j < imgArray.length; j++) {

    

       bok=Item.product[j].view+JSON.parse( localStorage.getItem(`oldViwes${j}`));
       nok=Item.product[j].clicked+JSON.parse( localStorage.getItem(`oldVotes${j}`));
     
      localStorage.setItem(`oldViwes${j}`,JSON.stringify(bok))
      localStorage.setItem(`oldVotes${j}`,JSON.stringify(nok))
        
      
      let listItem = document.createElement('li');
      listItem.textContent = `${Item.product[j].name} had ${bok} votes
      and was viewed ${nok} times `;
      grandTotalViews.push(bok);
      grandTotalClicks.push(nok);

      resultsP.appendChild(listItem);

      
     
    

      }
      chart();

  }
  
  
}



function chart() {

  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: Item.nameS,
      datasets: [{
        label: '# of Viwes',
        data: grandTotalViews,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',

        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',

        ],
        borderWidth: 1
      }, {
        label: '# of clicks',
        data: grandTotalClicks,
        backgroundColor: [

          'rgba(54, 162, 235, 0.2)',

        ],
        borderColor: [

          'rgba(54, 162, 235, 1)',

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

