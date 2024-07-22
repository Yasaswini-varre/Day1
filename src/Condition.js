function Condition(){
    const bool=true;
    if(bool===true){
        return(
        <div>
            {bool?<h1>be happy</h1>:<h1>be safe</h1>}
          <h1>BE HAPPY</h1>
        </div>
        );
    }
    else{
        return(
            <div>
                <h1>BE SAFE</h1>
            </div>
        );
    }
}
export default Condition;