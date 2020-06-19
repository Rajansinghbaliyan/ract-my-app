import React from 'react';

class Hello extends React.Component {
    render () {
        const randomNumber =()=>{
            return Math.floor(Math.random()*10);
        }

        const temp = randomNumber();

        let msg;
        if (temp === 7){
            msg = 
                <div>
                    <h2>Congratulation you win the contest!!</h2>
                    <img src ="https://i.pinimg.com/236x/5d/ce/45/5dce452ae314c34b0067559118f4d7b5--congratulations-card-order-and.jpg" />
                    <h3>You got the lucky number.</h3>

                </div>            
        } else {
            msg = <div>
                <h1>Sorry, Better luck next time.</h1>
            </div>
        }
        return(
            <div>
            <h1>The random number of the user is {temp} </h1>
            {msg}
            </div>
        );
    }
}

export default Hello;