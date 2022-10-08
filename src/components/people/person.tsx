export function Person({ name, pic }:any) {
    return (
      <li>
        {name}
        <ul>
          <li><img src={pic} style={{width:"100px",height:"50px",margin:"10px"}} alt="" /></li>
        </ul>
      </li>
    )
  }