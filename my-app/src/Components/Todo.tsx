import classes from "./Todo.module.css";
import Card from "../Layout/Card";

const Todo: React.FC<{ text: string; onRemove: () => void }> = (props) => {
  return (
    <Card>
      <p className={classes.text}>{props.text}</p>
      <div className={classes.action}>
        <button className={classes.btn} onClick={props.onRemove}>
          Done
        </button>
      </div>
    </Card>
  );
};

export default Todo;
