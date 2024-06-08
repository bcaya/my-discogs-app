import React from 'react'
import {Link, useParams, useLocation} from 'react-router-dom'
import { getRecords } from '../api'
export default function RecordDetailPage(){
  const {id, recordObj} = useParams()

  const [error, setError] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  const [record, setRecord] = React.useState([])
  const location = useLocation()
  const [recordData, setRecordData] = React.useState([location.state.recordObj])
 
  React.useEffect(() => {
    async function loadRecords(){
      setLoading(true)
      try{
        
        const fetchData = await getRecords(id)
        setRecord(fetchData.images)
        
      } catch(err){
        setError(err)
      }finally {
        setLoading(false)
      }
    }
    loadRecords()
  },[id]) 


const recordElements = recordData.map((record) => {
    return( <stack-l key={record.id}>
      <h1>{record.artists[0].name} - {record.title}</h1>
      <h6>Added to my collection on {record.date_added}</h6>
      <box-l padding="var(--s3)"><frame-l ratio="1:1"><img src={record.cover_image}/></frame-l></box-l>
      <h5>Release year: {record.year}</h5>
      <box-l>
        <h3>Labels: </h3> 
          <cluster-l>
          {record.labels.map((label) => {
        return(<button key={label.id}>{label.name}</button>)  
        })}
          </cluster-l>
      </box-l>
      <box-l>
         <h3>Genres</h3>
         <cluster-l>
         {record.genres.map((genre) => {
          return (<button>{genre}</button>)
         })}
        </cluster-l>
      </box-l>
      <box-l>
         <h3>Styles</h3>
         <cluster-l>
          {record.styles.map((style) => {
            return (<button>{style}</button>)
          })}
         </cluster-l>
      </box-l>
      <box-l>
         <h3>Formats</h3>
      <cluster-l>
      {record.formats[0].descriptions.map((description) => {
        return( <button>{description}</button>)
      })}
      </cluster-l>
      </box-l>
      <box-l>
        <h3>Album Notes</h3>
        
      </box-l>
    </stack-l>)
  })


  
  if(loading){
    return <h1>Loading...</h1>
  }

  if(error){
    return <h1>There was an error: {error.message}</h1>
  }
  return(
    <box-l >
     {recordElements}
    <reel-l itemWidth="20rem">
      
    </reel-l>
    </box-l>)
}