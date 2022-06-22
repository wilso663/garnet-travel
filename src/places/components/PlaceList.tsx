import React from 'react'
import { JsxElement } from 'typescript';
import { Place } from '../models/place';
import Card from '../../shared/components/UIElements/Card';
import PlaceItem from './PlaceItem';
import './PlaceList.css';

export interface PlaceListProps {
  placeItems: Place[];
}

const PlaceList: React.FC<PlaceListProps> = ({placeItems}) => {
  if(placeItems.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No places found. Create one?</h2>
          <button>Share Place</button>
        </Card>
      </div>
    )  
  }
  return (
    <ul className="place-list">
      {placeItems.map(place => <PlaceItem key={place.id} place={place}/>)}
    </ul>
  )
}

export default PlaceList