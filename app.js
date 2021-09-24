        
        
let image=document.querySelector('.image')
        
let imageArray=['images/mt1.jpg','images/mt2.jpeg','images/mt6.jpg','images/mt7.jpeg','images/mt9.jpeg','images/mt5.jpg']
let imageIndex=1;



function next(){
// image.style.backgroundImage=`url({imageArray[imageIndex]})`
 image.style.backgroundImage = `url(${imageArray[imageIndex]})`;

//  image.setAttribute("src",imageArray[imageIndex]);

        // console.log(imageArray[i])

        imageIndex++;

    
  }
function back(){
 image.style.backgroundImage = `url(${imageArray[imageIndex]})`;
 imageIndex--;


}
// function changeImage(){
//     image.setAttribute("src",imageArray[imageIndex]);
//     imageIndex ++;
// }

// alert(imgArray)

//   function changeImage(){
//       imageIndex ++;
//   }

