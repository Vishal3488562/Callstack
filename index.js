// function one(){
//   return 1;
// }

// function two(){
//     return one() + one();
// }

// function three() {
//     let ans = two() + one();
//     console.log(ans);
// }

// three();


// const url = 'https://dogapi.dog/api/v2/breeds';

// console.log(url);

// async function geturl(){

//    console.log(1);
//    const data = await fetch(url);
//    console.log(2);
//    const jsonData = await data.json();
//    console.log(jsonData);

//    console.log("Hello");

   
// }

// geturl();


const url = 'https://dog.ceo/api/breeds/image/random';


async function getData(){
   const obj = await axios.get(url);
  //  console.log(obj.data);
   return obj.data.message
}

const btn = document.querySelector('button');

btn.addEventListener('click', async() => {
  // console.log("Click")
  const randomImg = await getData();
  console.log(randomImg);
  image = document.querySelector('img');
  image.src = randomImg;
})

getData()


// let a = 2;

// function fun(){
//   return new Promise((resolve, reject) => {
//      if(a === 2)
//      {
//        setTimeout(() => {
//          console.log(2);
//          resolve();
//        },1000)
//      }
//   })
// }

// const val = fun();

// console.log(val);