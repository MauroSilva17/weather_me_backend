import TemperatureType from '@temperature/types/TemperatureType'
import {db} from '@db/implementation/mongodb/mongodb'
import TemperatureDB,{ITemperature} from '@db/implementation/mongodb/schemas/temperatureSchema'

const saveTemperature = (data: TemperatureType) =>{
  const temp = new TemperatureDB({
    id: undefined,
    location: data.location,
    date: data.date,
    temperature: data.temperature
  })
  return temp.save();
}
const readTemperature = ()=>{

}
export {
  saveTemperature,
  readTemperature
}