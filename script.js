let values = document.getElementById('value')
const increase = document.getElementsByClassName('increase')
const decrease = document.getElementsByClassName('decrease')
const reset = document.getElementsByClassName('reset')
console.log(values)


const operations = {
    increase(){
        values.innerText ++
        if (values.innerText >= 0){
            values.style.color = "black"
        }
    },
    decrease(){
        values.innerText --
        if (values.innerText < 0){
            values.style.color = "darkred"
        }
    },
    reset(){
        values.innerText = 0
        values.style.color = "black"
    }
}

