function Array(){
    const ar=[1,2,3];
    const arr=["apple","orange","banana"];
    return(
        <div>
            <h1>{ar[0]}</h1>
            <h1>{ar[1]}</h1>
            <h1>{ar[2]}</h1>
            <ul>{arr.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
      </ul>
        </div>
    )
}
export default Array;