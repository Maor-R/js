const boomGame = (n) => {

let temp, flagContinue;
    for(let i = 1 ; i<= n ; i++)
    {
        temp = i;
        flagContinue = true ;
        while(temp >= 7 && flagContinue)
        {
            if(temp % 10 == 7)
            { flagContinue = false;}
            else
            {
                temp = temp/10;
            }
        }//while


        if(temp % 7 == 0 && i % 7 == 0)
        {
            console.log('BOOM-BOOM');

        }
        else if(i % 7 == 0)
        {
            console.log('BOOM');

        }

        else{
            console.log(i);
        }
        

    }//for
}


//test
console.log('Test 1:\n\n');
boomGame(21);

console.log('Test 2:\n\n');
boomGame(50);

console.log('Test 3:\n\n');
boomGame(97);