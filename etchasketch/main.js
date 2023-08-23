function display(size){
let board = document.querySelector('.board');
board.style.gridTemplateColumns=  `repeat(${size} ,1fr)`;
board.style.gridTemplateRows = `repeat(${size} ,1fr)`;

for (let i=1; i<257; i++)
{
    let square =document.createElement('div')
    square.style.backgroundColor ='red';
    board.insertAdjacentElement("beforeend",square);

}
}
display(16)

