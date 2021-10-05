import "./Nav.css";


export default function Nav(props)
{
   return(
       <div className="Nav">
           <div className="logo">
           <li> John</li>
           <li> Doe</li>
           </div>
           <li> Home</li>
           <li>About</li>
           <li>Services</li>
           <li>Clients</li>
       </div>
   )    
}