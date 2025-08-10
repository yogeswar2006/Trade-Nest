import { Link } from "react-router-dom"

function Button(props){
  return(
    <>
          <Link type="button" className={`btn ${props.class} me-1`} to={props.url}>{props.text}</Link>
    </>
  )
}

export default Button