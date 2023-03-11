import React,{ useState,useContext, createContext} from 'react'
import {Topic} from '../topicMenu/topics'
import {Box,} from '@material-ui/core'
import {NearbyPlaceCard, ResultState} from '../nearbyPlaceComponents/card/nearbyPlaceCardIndex'
import {Filter} from '../nearbyPlaceComponents/filters/filterIndex'
import {TopicContext} from '../../popup'
import { FoodAPI } from '../../../api/food/foodIndex'


const FoodPopup: React.FC<{
}> = () => {
  const [topic,setTopic] = useContext(TopicContext)
  
  return (
    <div>
      {topic == Topic.Food &&
        <Box data-testid="food-popup">
            <Filter api={new FoodAPI()}/>
            <NearbyPlaceCard />

       </Box>
      }
    </div>
  )
}

export default FoodPopup