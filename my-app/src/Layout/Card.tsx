import classes from "./Card.module.css";
const Card : React.FC = (props)=>{
return <section className={classes.card}>{props.children}</section>
}

export default Card;