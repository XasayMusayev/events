

function num(x,y){
    if (isNaN(x) || isNaN(y)) {
        console.log('NaN')
    }
    else{

    
        sum=0
        
        if (x>y) {
            while (x>=y) {
                sum=sum+x
                x--
                
            }
            console.log(sum)
            
        }
        else{
            while (y>=x) {
                sum=sum+y
                y--
                
            }
            console.log(sum)
        }
    }

}

num(4,'1')



let btn =document.getElementById('bigger')


btn.onclick = function click() {

    let Widths = document.getElementById('element').offsetWidth
    let Heights = document.getElementById('element').offsetHeight


    let newwidth = Widths + 50
    let newheight = Heights + 20

    document.getElementById('element').style.width=`${newwidth}px`
    document.getElementById('element').style.height=`${newheight}px`
    
    
}

