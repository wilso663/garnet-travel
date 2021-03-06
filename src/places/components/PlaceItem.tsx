import React, { useState } from 'react'
import { Place } from '../models/place';
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';
import './PlaceItem.css';

export interface PlaceItemProps {
  place: Place;
}

const PlaceItem: React.FC<PlaceItemProps> = ({place}) => {

  const [isMapShown, setIsMapShown] = useState(false);

  const openMapHandler = () => setIsMapShown(true);
  const closeMapHandler = () => setIsMapShown(false);

  return (
    <React.Fragment>
      <Modal isShown={isMapShown} 
             onCancel={closeMapHandler} 
             headerText={place.address}
             contentClassName={"place-item__modal-content"}    
             footerClassName={"place-item__modal-actions"}
             footerElement={<Button onClick={closeMapHandler}>Close</Button>}
      >
        <div className="map-container">
          <h2>Map goes here</h2>
        </div>
      </Modal>
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
          <div className="place-item__actions">
            <Button inverse onClick={openMapHandler}>VIEW ON MAP</Button>
            <Button to={`/places/${place.id}`}>EDIT</Button>
            <Button danger>DELETE</Button>
          </div>
        </Card>
      </li>
    </React.Fragment>
  )
  
}

export default PlaceItem