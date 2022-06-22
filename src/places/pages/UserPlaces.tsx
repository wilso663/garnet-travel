import React from 'react'
import PlaceList from '../components/PlaceList';
import { useParams } from 'react-router-dom';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/800px-Empire_State_Building_%28aerial_view%29.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creatorId: 'u1'
    
  },
  {
    id: 'p2',
    title: 'Taj Mahal',
    description: 'An Islamic ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra',
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Taj_Mahal_in_India_-_Kristian_Bertel.jpg/250px-Taj_Mahal_in_India_-_Kristian_Bertel.jpg',
    address: 'Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001, India',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creatorId: 'u2'
    
  }
]


const UserPlaces = () => {

  const userId = useParams().userId;
  const matchingPlaces = DUMMY_PLACES.filter(place => place.creatorId === userId)
  return (
    <PlaceList placeItems={matchingPlaces} />
  )
}

export default UserPlaces
