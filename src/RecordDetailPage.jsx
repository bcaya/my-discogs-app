import React from 'react'
import {Link, useParams, useLocation} from 'react-router-dom'
import { getRecords } from '../api'
export default function RecordDetailPage(){
  const {id, recordObj} = useParams()
  const [error, setError] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  const [record, setRecord] = React.useState(null)
  const location = useLocation()
  const data = location.state.recordObj

  React.useEffect(() => {
    async function loadRecords(){
      setLoading(true)
      try{
        const fetchData = await getRecords(id)
        setRecord(fetchData)
       
        
      } catch(err){
        setError(err)
      }finally {
        setLoading(false)
      }
    }
    loadRecords()
  },[id])

  
  if(loading){
    return <h1>Loading...</h1>
  }

  if(error){
    return <h1>There was an error: {error.message}</h1>
  }
  return(
    <box-l>
      <stack-l>
        <h1>{data.artists[0].name} - {data.title}</h1>
        <h6>Release year: {data.year}</h6>
        <h5>Added to my collection on {data.date_added}</h5>
        <box-l>
          <h3>Labels: </h3>
        </box-l>
        <box-l>
           <h3>Genres</h3>
           <cluster-l>
           {data.genres.map((genre) => {
            return (<button>{genre}</button>)
           })}
          </cluster-l>
        </box-l>
        <box-l>
           <h3>Styles</h3>
           <cluster-l>
            {data.styles.map((style) => {
              return (<button>{style}</button>)
            })}
           </cluster-l>
        </box-l>
        <box-l>
           <h3>Formats</h3>
        <cluster-l>
        {data.formats[0].descriptions.map((description) => {
          return( <button>{description}</button>)
        })}
        </cluster-l>
        </box-l>
        <box-l>
          <h3>Album Notes</h3>
          <p>{record}</p>
        </box-l>
      </stack-l>
    </box-l>)
}