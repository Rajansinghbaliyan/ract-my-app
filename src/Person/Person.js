import React from 'react';

class Hello extends React.Component {
    render () {
        const randomNumber =()=>{
            return Math.floor(Math.random()*10);
        }

        const temp = randomNumber();
        return(
            <div>
            <h1>The random number of the user is {temp} </h1>
            <h2>{temp === (7 || 77) 
             ? 'Congratulation ' 
             : 'Sorry, this is not the lucky number.' }</h2>
             
                 {temp === 7
                 ? <img src = "https://i.pinimg.com/236x/5d/ce/45/5dce452ae314c34b0067559118f4d7b5--congratulations-card-order-and.jpg" />
                 : null 
                 }
            
            </div>
        );
    }
}

export default Hello;