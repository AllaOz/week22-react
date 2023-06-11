
import './Heroes.css';

function Heroes(props) {
    return (
        <div className="hero-card">
            <h2>{props.name}</h2>
            <div>Альтер эго: {props.alterego}</div>
            <div>Занятия: {props.occupation}</div>
            <div>Друзья: {props.friends}</div>
            <div>Суперсила: {props.superpowers}</div>
            <img className="image" src={props.url} alt="комикс фильма" />
        </div>
    );
}
export default Heroes;
  