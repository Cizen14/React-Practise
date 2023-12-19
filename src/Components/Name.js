
//props means the properties that means components get some property which will come in object.
//object => key value pair
function Name(props){
    //destructuring
    
    const {myName, myAddress, myNumber, hobbies}= props
    
    
    return(
        <div> Hi it's me {myName ? myName : "Prem"}.
        I live in {myAddress}
        My number is {myNumber ? myNumber: 239049}
       
            
    {/* conditions */}
       {hobbies && (
            //display something here 
            <div>
            
            My hobbies are 
                <ul>
                   
                   {hobbies.map((element , index) => 
                    {
                        return (
                        // key should be always unique
                            <li key={element + index}>
                                {element}
                                    <span> - hobby </span>
                            </li>
                        )
                    })

                   }
                
                </ul>
            </div>
        )}
        {!hobbies && (
            <p> I don't have hobbies</p>
        )

        }
       

        </div>
    )
}

export default Name