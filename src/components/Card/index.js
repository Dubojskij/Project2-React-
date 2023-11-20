
import styles from './Card.module.scss';
import { useState } from 'react';

function Card(props){
const [isAdded,setIsAdded] = useState(false);
const onClickPlus = () => {
  setIsAdded(!isAdded);
};
const [isFavorite,setIsFavorite] = useState(false);
const onClickFavorite = () => {
  setIsFavorite(!isFavorite);
};


return(
    <div className={styles.card}>
<img className={styles.favorite} onClick={onClickFavorite} src={isFavorite ? "/img/like1.svg" : "/img/like.svg" } alt="Unliked"/>

<img className={styles.imgCard} width={133} height={112} src={props.imageUrl} alt="sneakers"/>
<h5>{props.title}</h5>
<div className="d-flex justify-between align-center">
  <div className="d-flex flex-column  ">
   <span>Цена :</span>
   <b>{props.price}$</b>
  </div>
  <img className={styles.plus} onClick={onClickPlus} src={isAdded ? "/img/buttoncheck.svg" :"/img/cardButton.svg"} alt="Plus"/>
</div>
</div>
);
}


export default Card;