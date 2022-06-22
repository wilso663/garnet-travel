import React from 'react'
import { Place } from '../models/place';
import Card from '../../shared/components/UIElements/Card';
import './PlaceItem.css';

export interface PlaceItemProps {
  place: Place;
}

const PlaceItem: React.FC<PlaceItemProps> = ({place}) => {
  return (
    <li className="place-item">
      <Card className="place-item__content">
        <div className="place-item__image">
          <img src={place.imageURL} alt={place.title} />
        </div>
        <div className="place-item__info">
          <h2>{place.title}</h2>
          <h3>{place.address}</h3>
          <p>{place.description}</p>
        </div>
        <div className="place-items__actions">
          <button>VIEW ON MAP</button>
          <button>EDIT</button>
          <button>DELETE</button>
        </div>
      </Card>
    </li>
  )
  
}

export default PlaceItem