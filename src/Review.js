
function Review(){
    return(
        <div>
            <table> 
                <tr>
                    <td><img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Example" height="100" /></td>
      <td>
      <dl>
      <dt>sravani:</dt>
      <dd>good</dd>
      </dl>
      </td>
          </tr>  
          <tr>
                    <td><img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Example"  height="100"/></td>
      <td>
      <dl>
      <dt>mouna:</dt>
      <dd>nice</dd>
      </dl>
      </td>
          </tr>   
</table>
            
        </div>
    )
}
export default Review;