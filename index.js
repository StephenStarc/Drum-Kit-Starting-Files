window.addEventListener('keydown',(e) => {
    Keypressed(e.key)
})

// var as = document.querySelectorAll('.drum').length
// for( var i = 0; i<=as;i++){
//     document.querySelectorAll('.drum')[i].addEventListener('keydown', function (){
//       console.log(this.innerText);
    
       
//     })
// }


function Keypressed(key){
    switch (key){
        case 's':
            var audio = new Audio('./sounds/crash.mp3')
            audio.play()
            break
        case 't':
            var audio = new Audio('./sounds/kick-bass.mp3')
            audio.play()
            break
        case 'e':
            var audio = new Audio('./sounds/snare.mp3')
            audio.play()
            break
        case 'p':
            var audio = new Audio('./sounds/tom-1.mp3')
            audio.play()
            break
        case 'h':
            var audio = new Audio('./sounds/tom-2.mp3')
            audio.play()
            break
        case '0':
            var audio = new Audio('./sounds/tom-3.mp3')
            audio.play()
            break
        case 'n':
            var audio = new Audio('./sounds/tom-4.mp3')
            audio.play()
            break 
        default:
            console.log('You Pressed Default Key');
       }
}