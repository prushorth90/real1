import React, { useEffect, useState, createContext } from 'react'
import ReactDOM from 'react-dom'
import { Box } from '@material-ui/core'
//import 'fontsource-roboto'
import './popup.css'
import {Topic, TopicMenu} from '../components/TopicMenu'
import FoodPopup from '../components/foodPopup'
import {Address, AddressData, AddressAPI} from '../utils/api/address/addressIndex'
// https://v4.mui.com/components/selects/
export const TopicContext = createContext([])
export const CoordContext = createContext([])

export const App: React.FC<{}> = () => {
  const [topic, setTopic] = useState<Topic>(Topic.Topics)
  const [addr, setAddr] = useState<Address>(new Address(""))
  const [coord, setCoord] = useState<AddressData>()

  console.log("1")
  // Get the url from the current tab
  useEffect(() => {
    //https://developer.chrome.com/docs/extensions/reference/tabs/
    getCurrentTab()
   
    console.log("2")
  }, [])
  async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tabs] = await chrome.tabs.query(queryOptions);
    console.log(tabs)
    let updatedAddress = getAddressFromURL(tabs)
    getLatitudeAndLongitude(updatedAddress)
  }
 
  const getAddressFromURL = (tabs) => {
    let currentTab = tabs;
    console.log("1.1")
    console.log(currentTab.url);
    //mayve if to check in manifest settings which url
    let updatedAddress = new Address(currentTab.url)
    console.log("1.15")
    setAddr(updatedAddress)
    console.log("1.2")
    return updatedAddress
    //console.log(addr.getStreet())
  }
  const getLatitudeAndLongitude = (updatedAddress) => {
    let addressApi = new AddressAPI()
    addressApi.fetchData(updatedAddress)
              .then((data) => {
                console.log("PRUSHORTH 7.1")
                setCoord(data)
                // ABOVE LINE WILL PASS THIS DATA TO RERENDER BUT WONT YET UPDATE STATE FIELDS not sure if addr pass unlike last render check weather
                console.log("PRUSHORTH 7.2")
                console.log(coord)
                console.log(data.results[0].geometry.location.lat)
              })
              .catch((err) => console.log(err))
    console.log(updatedAddress.getStreet())
    //setAddr(currentTab.url)
  }
  // case1: return if nothing card foreach api?????? 1 topic to many api and dataset
  return (
    <Box mx="8px" my="16px">
      {console.log("3")}
      <TopicContext.Provider value={[topic,setTopic]}>
        <TopicMenu />
        <CoordContext.Provider value={[coord, setCoord]}>
          <FoodPopup/>
        </CoordContext.Provider>
      </TopicContext.Provider>

    </Box>

  )
}

// const root = document.createElement('div')
// document.body.appendChild(root)
// ReactDOM.render(<App />, root)

export default App
