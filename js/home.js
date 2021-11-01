let Homedata = {
    "HomeDataArray" : [
        {
            "title" : "User Resarch For User Experience Design" ,
            "subTitle" : "The Museum of Modern Art",
            "photo" : "./img/2.png",
            "subphoto" : "./img/green.png"
        },
        {
            "title" : "Buddhism and Modern Technology" ,
            "subTitle" : "The Museum of Modern Art",
            "photo" : "./img/3.png",
            "subphoto" : "./img/red.png"
        },
        {
            "title" : "Introduction to Philosophy" ,
            "subTitle" : "Duke University",
            "photo" : "./img/4.png",
            "subphoto" : "./img/blue.png"
        },
        {
            "title" : "Advance on seeing through Photographs" ,
            "subTitle" : "Duke University",
            "photo" : "./img/5.png",
            "subphoto" : "./img/green.png"
        },
        {
            "title" : "Think Again 1 : How to Understand Arguments" ,
            "subTitle" : "The Museum of Modern Art",
            "photo" : "./img/6.png",
            "subphoto" : "./img/blue.png"
        },
        {
            "title" : "User Resarch of User Experience Design" ,
            "subTitle" : "The Museum of Modern Art",
            "photo" : "./img/7.png",
            "subphoto" : "./img/red.png"
        },
        {
            "title" : "User Resarch For User Experience Design" ,
            "subTitle" : "The Museum of Modern Art",
            "photo" : "./img/7.png",
            "subphoto" : "./img/green.png"
        },
        {
            "title" : "Intoduction to Logic and Critical Thinking" ,
            "subTitle" : "Duke University",
            "photo" : "./img/9.png",
            "subphoto" : "./img/green.png"
        },
        {
            "title" : "Modern and Contemporary Art and Design" ,
            "subTitle" : "The Museum of Modern Art",
            "photo" : "./img/10.png",
            "subphoto" : "./img/blue.png"
        },
    ]
}

let card_loop = document.getElementById('card_loop');
let HomeallData = Homedata.HomeDataArray;

// console.log(card_loop)

HomeallData.map(function(el, index) {
    card_loop.innerHTML += `
    <div class="col-lg-4 card_width mb-4">
    <div class="card card_height wow animate__fadeInDown delay">
        
            <img src=" ${el.photo} ">
        
        <div class="subPhoto ">
            <img src=" ${el.subphoto} " class=" img-fluid w-75 border border-5 border-white" alt="">
        </div>
        <div class="card-body d-flex flex-column justify-content-between">
            
                <a class="fw-bold  mt-4 text-dark" href="file:///D:/Projects/Final-Project/project/about.html" target="_blank"> ${el.title} </a>
            
                <p class="mb-0 fontsize"> ${el.subTitle} </p>
            
        </div>
    </div>
</div>
    ` ;
});

// ScrollReveal({
//     origin : 'top',
//     distance : '30px',
//     duration : 2000,
//     reset : true,
//
// }).reveal('.content' , {
//     interval : 200
// });

// Modal Sign Up box
let signUp = document.getElementById('sign-up');
let modal = document.getElementById('modal');
let close = document.getElementById('close');

signUp.addEventListener('click' , () => {
    modal.classList.add('showModal');
})

close.addEventListener('click' , () => {
    modal.classList.remove('showModal');
})

// Counter up
// function animateValue(obj, start, end, duration) {
//     let startTimestamp = 0;
//     const step = (timestamp) => {
//       if (!startTimestamp) startTimestamp = timestamp;
//       const progress = Math.min((timestamp - startTimestamp) / duration, 1);
//       obj.innerHTML = Math.floor(progress * (end - start) + start);
//       if (progress < 1) {
//         window.requestAnimationFrame(step);
//       }
//     };
//     window.requestAnimationFrame(step);
//   }
  
  // var waypoints = $('#countingNum').waypoint(function () {
  //     console.log('hello')
  // })

$('.counter').counterUp({
    delay: 10,
    time: 1000
});

let waypoint = new Waypoint({
    element: document.getElementById('countingNum'),
    handler: function(direction) {

        if(direction == "up"){
            console.log("aa")
        }

        if(direction == "down"){
            console.log("cc")
        }
        // console.log('Scrolled to waypoint!')
    }
})




  // animateValue(document.getElementById("rotate0"), 0, 768, 5000);
  // animateValue(document.getElementById("rotate1"), 0, 120, 5000);
  // animateValue(document.getElementById("rotate2"), 0, 8300, 5000);
  // animateValue(document.getElementById("rotate3"), 0, 32, 5000);



