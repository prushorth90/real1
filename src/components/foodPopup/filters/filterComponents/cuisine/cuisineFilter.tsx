import React,{ useEffect, useContext } from 'react'
import {Cuisine} from './Cuisine'
import {CommonForm} from '../partials/commonForm'
import {APIContext} from '../../filters'

export const CuisineFilter: React.FC<{
}> = ({ }) => {
   const [apiInput, setAPIInput] = useContext(APIContext)

   useEffect(() => {
     setAPIInput(prevState => {
       return {...prevState, keyword: "Pizza"}
    })
   }, [])

   const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
       setAPIInput(prevState => {
         return {...prevState, keyword: event.target.value as string}
      })
    }

   return (
     <CommonForm
        options={[Cuisine.Pizza, Cuisine.English, Cuisine.Chinese, Cuisine.Indian, Cuisine.Italian, Cuisine.Fast_Food]}
        keyword={apiInput.keyword}
        name='Cuisine'
        handleChange={handleChange}
     />
  )
}