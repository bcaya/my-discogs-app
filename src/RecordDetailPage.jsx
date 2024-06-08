import React from 'react'
import {Link, useParams, useLocation} from 'react-router-dom'
import { getRecords } from '../api'
export default function RecordDetailPage(){
  const { master_id } = useParams();
  const [error, setError] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  let location = useLocation();
  const [record, setRecord] = React.useState(null)
  const [recordData, setRecordData] = React.useState(location.state.recordData)
 
  React.useEffect(() => {
    
    async function loadRecords(){
      let ignore = false;
      setLoading(true)
      try{
        if(!ignore){
          const fetchData = await getRecords(master_id)
          setRecord(fetchData)
  
        }
      } catch(err){
        setError(err)
      }finally {
        setLoading(false)
        return () => {
          ignore = true;
        };
      }
    }
    loadRecords()

  
  },[master_id]) 
console.log(record)

function RecordEl(){
  return <box-l className={recordData.id}>
          <Link 
      to=".." //this is a link back to the relative path aka so you can go back to what you weere prev looking at. 
      relative="path"
      className="back-button"
      >&larr; <span>Back to collection</span></Link>
  <h1>{recordData.artists[0].name} - {recordData.title}</h1>
  <h6>Added to my collection on {recordData.date_added}</h6>
  <box-l padding="var(--s3)"><frame-l ratio="1:1"><img src={recordData.cover_image}/></frame-l></box-l>
  <h5>Release year: {recordData.year}</h5>
  <box-l>
    <h3>Labels: </h3> 
      <cluster-l>
      {recordData.labels.map((label) => {
    return(<button key={label.id}>{label.name}</button>)  
    })}
      </cluster-l>
  </box-l>
  <box-l>
     <h3>Genres</h3>
     <cluster-l>
     {recordData.genres.map((genre) => {
      return (<button>{genre}</button>)
     })}
    </cluster-l>
  </box-l>
  <box-l>
     <h3>Styles</h3>
     <cluster-l>
      {recordData.styles.map((style) => {
        return (<button>{style}</button>)
      })}
     </cluster-l>
  </box-l>
  <box-l>
     <h3>Formats</h3>
  <cluster-l>
  {recordData.formats[0].descriptions.map((description) => {
    return( <button>{description}</button>)
  })}
  </cluster-l>
  </box-l>
  <reel-l itemWidth="20rem">
  
    </reel-l>
  </box-l>
}

function ImageEl(){
  if (!record || !record.images) {
    return <div>No images to display</div>;
  }
  return record.images.map((image) => {
    return(
        <box-l key={image.id}>
          <img  src={image.resource_url}/>
        </box-l>
     ) 
    
  })
}
  
  if(loading){
    return <h1>Loading...</h1>
  }
  

  if(error){
    return <h1>There was an error: {error.message}</h1>
  }


  return(
    <box-l >

     <RecordEl/>
    <box-l>
    <reel-l itemWidth="20rem">
        <ImageEl/>
      </reel-l>
    </box-l>
    </box-l>)
}