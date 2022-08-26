document.addEventListener('DOMContentLoaded',() =>{
    const gridDisplay = document.querySelector('.grid')
    const scoreDisplay = document.getElementById('score')
    const resultDisplay = document.getElementById('result')
    const width = 4
    let squares = []
    let score = 0 

    //creating a board 
    function createBoard(){
        for(let i = 0 ; i<width*width;i++){
            square = document.createElement('div')
            square.innerHTML=0
            gridDisplay.appendChild(square)
            squares.push(square)
        }
        // random initial numbers generated
        generate()
        generate()
        generate()
        generate()
    }
    createBoard()

    // random first two elements 
    function generate(){
        randomNumber = Math.floor(Math.random() * squares.length)
        //making sure the element is empty when assinging a new number in the grid
        if(squares[randomNumber].innerHTML==0){
            squares[randomNumber].innerHTML=2
            checkForGameover()
        }
        else generate()

    }

    // function for when right key is pressed 
    function moveRight(){
        for(let i = 0 ; i< width*width ; i++){
            // making sure it is a row 
            if(i%width === 0){
                // making ammends in a full row
                let totalOne = squares[i].innerHTML
                let totalTwo = squares[i+1].innerHTML
                let totalThree = squares[i+2].innerHTML
                let totalFour = squares[i+3].innerHTML
                // let totalFive = squares[i+4].innerHTML
                // let totalSix = squares[i+5].innerHTML
                // let totalSeven = squares[i+6].innerHTML
                // let totalEight = squares[i+7].innerHTML
                // finding the layout of our rows in present time and storing in a new variable 
                let row = [parseInt(totalOne),parseInt(totalTwo),parseInt(totalThree),parseInt(totalFour)]
                    // parseInt(totalFive),parseInt(totalSix),parseInt(totalSeven),parseInt(totalEight)]
                
                // filtering out only the zeros out of our rows 
                let filterRow = row.filter(num => num )
                // making a new array with only zeros for filling the empty spaces after the right swipe 
                let missing = width - filterRow.length 
                let zeros = Array(missing).fill(0)
                // joing together the zeros and filtered rows giving zeros first and then filtered in order of right swap 
                let newROW = zeros.concat(filterRow)
                // console.log(newROW)
                // making changes in real time inner html in our game 
                squares[i].innerHTML = newROW[0]
                squares[i+1].innerHTML = newROW[1]
                squares[i+2].innerHTML = newROW[2]
                squares[i+3].innerHTML = newROW[3]
                // squares[i+4].innerHTML = newROW[4]
                // squares[i+5].innerHTML = newROW[5]
                // squares[i+6].innerHTML = newROW[6]
                // squares[i+7].innerHTML = newROW[7]

            }
        }
    }


    // function for when left key is pressed 
    function moveLeft(){
        for(let i = 0 ; i< width*width ; i++){
            // making sure it is a row 
            if(i%width === 0){
                // making ammends in a full row
                let totalOne = squares[i].innerHTML
                let totalTwo = squares[i+1].innerHTML
                let totalThree = squares[i+2].innerHTML
                let totalFour = squares[i+3].innerHTML
                // let totalFive = squares[i+4].innerHTML
                // let totalSix = squares[i+5].innerHTML
                // let totalSeven = squares[i+6].innerHTML
                // let totalEight = squares[i+7].innerHTML
                // finding the layout of our rows in present time and storing in a new variable 
                let row = [parseInt(totalOne),parseInt(totalTwo),parseInt(totalThree),parseInt(totalFour)]
                // ,parseInt(totalFive),parseInt(totalSix),parseInt(totalSeven),parseInt(totalEight)]
                
                // filtering out only the zeros out of our rows 
                let filterRow = row.filter(num => num )
                // making a new array with only zeros for filling the empty spaces after the right swipe 
                let missing = width - filterRow.length 
                let zeros = Array(missing).fill(0)
                // joing together the zeros and filtered rows giving zeros first and then filtered in order of left swap 
                let newROW = (filterRow).concat(zeros)
                // console.log(newROW)
                // making changes in real time inner html in our game 
                squares[i].innerHTML = newROW[0]
                squares[i+1].innerHTML = newROW[1]
                squares[i+2].innerHTML = newROW[2]
                squares[i+3].innerHTML = newROW[3]
                // squares[i+4].innerHTML = newROW[4]
                // squares[i+5].innerHTML = newROW[5]
                // squares[i+6].innerHTML = newROW[6]
                // squares[i+7].innerHTML = newROW[7]
                
            }
        }
    }


    function moveDown(){
        for(let i = 0 ; i<4 ; i++){
            let totalOne = squares[i].innerHTML
                let totalTwo = squares[i+width].innerHTML
                let totalThree = squares[i+(2*width)].innerHTML
                let totalFour = squares[i+(3*width)].innerHTML
                // let totalFive = squares[i+(4*width)].innerHTML
                // let totalSix = squares[i+(5*width)].innerHTML
                // let totalSeven = squares[i+(6*width)].innerHTML
                // let totalEight = squares[i+(7*width)].innerHTML
                let column = [parseInt(totalOne),parseInt(totalTwo),parseInt(totalThree),parseInt(totalFour)]
                // ,parseInt(totalFive),parseInt(totalSix),parseInt(totalSeven),parseInt(totalEight)]

                let filteredColumn  = column.filter(num => num)
                let missing = width - filteredColumn.length
                let zeros = Array(missing).fill(0)
                let newColumn = zeros.concat(filteredColumn)
                squares[i].innerHTML = newColumn[0]
                squares[i+(width)].innerHTML = newColumn[1]
                squares[i+(2*width)].innerHTML = newColumn[2]
                squares[i+(3*width)].innerHTML = newColumn[3]
                // squares[i+(4*width)].innerHTML = newColumn[4]
                // squares[i+(5*width)].innerHTML = newColumn[5]
                // squares[i+(6*width)].innerHTML = newColumn[6]
                // squares[i+(7*width)].innerHTML = newColumn[7]
        }
    }


    function moveUp(){
        for(let i = 0 ; i<4 ; i++){
            let totalOne = squares[i].innerHTML
                let totalTwo = squares[i+width].innerHTML
                let totalThree = squares[i+(2*width)].innerHTML
                let totalFour = squares[i+(3*width)].innerHTML
                // let totalFive = squares[i+(4*width)].innerHTML
                // let totalSix = squares[i+(5*width)].innerHTML
                // let totalSeven = squares[i+(6*width)].innerHTML
                // let totalEight = squares[i+(7*width)].innerHTML
                let column = [parseInt(totalOne),parseInt(totalTwo),parseInt(totalThree),parseInt(totalFour)]
                // ,parseInt(totalFive),parseInt(totalSix),parseInt(totalSeven),parseInt(totalEight)]

                let filteredColumn  = column.filter(num => num)
                let missing = width - filteredColumn.length
                let zeros = Array(missing).fill(0)
                let newColumn = (filteredColumn).concat(zeros)
                squares[i].innerHTML = newColumn[0]
                squares[i+(width)].innerHTML = newColumn[1]
                squares[i+(2*width)].innerHTML = newColumn[2]
                squares[i+(3*width)].innerHTML = newColumn[3]
                // squares[i+(4*width)].innerHTML = newColumn[4]
                // squares[i+(5*width)].innerHTML = newColumn[5]
                // squares[i+(6*width)].innerHTML = newColumn[6]
                // squares[i+(7*width)].innerHTML = newColumn[7]
        }
    }


    // combining in rows 
    function combineRow(){
        for(let i = 0 ; i <((width*width)-1) ;i++ ){
            if(squares[i].innerHTML === squares[i+1].innerHTML){
                let combinedTotal = parseInt(squares[i].innerHTML)+parseInt(squares[i+1].innerHTML)
                squares[i].innerHTML = combinedTotal
                squares[i+1].innerHTML = 0 
                score += combinedTotal
                scoreDisplay.innerHTML = score
            }
        }
        checkForWin()
    }

    function combineColumn(){
        for(let i = 0 ; i <((width*width)-width) ;i++ ){
            if(squares[i].innerHTML === squares[i+width].innerHTML){
                let combinedTotal = parseInt(squares[i].innerHTML)+parseInt(squares[i+width].innerHTML)
                squares[i].innerHTML = combinedTotal
                squares[i+width].innerHTML = 0 
                score += combinedTotal
                scoreDisplay.innerHTML = score
            }
        }
        checkForWin()
    }

    //assign keycodes
    function control(e){
        if(e.keyCode == 39){
            keyRIght()
        }
        else if(e.keyCode == 37){
            keyLeft()
        }
        else if(e.keyCode == 40){
            keyDown()
        }
        else if(e.keyCode == 38){
            keyUp()
        }
    }
    document.addEventListener('keyup',control)
    
    function keyRIght(){
        moveRight()
        combineRow()
        moveRight()
        generate()
        generate()
    }
    function keyLeft(){
        moveLeft()
        combineRow()
        moveLeft()
        generate()
        generate()
    }
    function keyDown(){
        moveDown()
        combineColumn()
        moveDown()
        generate()
        generate()
    }
    function keyUp(){
        moveUp()
        combineColumn()
        moveUp()
        generate()
        generate()
    }

    // function to check if the no 2048 is achieved or not 
    function checkForWin(){
        for(let i = 0; i<squares.length ; i++){
            if(squares.innerHTML == 2048){
                resultDisplay.innerHTML = 'You WIN'
                document.removeEventListener('keyup',control)
            }
        }
    }

    // checking for game over 
    function checkForGameover(){
        let zeros = 0 ;
        for(let i = 0 ; i<squares.length; i++){
            if(squares[i].innerHTML == 0){
                zeros++
            }
        }
        if(zeros===0){
            resultDisplay.innerHTML = 'You Lose'
            document.removeEventListener('keyup',control)
        }
    }

})