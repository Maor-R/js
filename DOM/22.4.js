

const player1Race = document.querySelector('#player1-race > td.active');
const player2Race = document.querySelector('#player2-race  td.active');

const extractPos = (pos) => {
	if (!pos) return 0;
	return parseInt(pos.slice(0, -2));
};


window.addEventListener('keyup', function(event){
    //player1Race.classList.add('active');
//  alert(extractPos(player1Race.style.right))
if(event.key == 'd'){
    const currLeft = extractPos(player1Race.style.left);
	player1Race.style.left = `${currLeft + 15}px`;
}

if(event.key == 'ArrowRight'){
    const currLeft = extractPos(player2Race.style.left);
	player2Race.style.left = `${currLeft + 15}px`;
}
}) 

