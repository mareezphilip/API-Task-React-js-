import './Card.css'
function Card (props){
    return (
        <div class="card" >
        <img src={props.product.image}/>
        <h1> {props.product.title}</h1>
        <div class="description"> <p> {props.product.description}</p></div>
        
        <p> <span>Price :</span> {props.product.price}  L.E</p>

    </div>
    )
}
export default Card;