import React from 'react'
import {Link} from 'react-router-dom'
import './assets/StylesMain.jsx'

export default function Records(){
  const [records, setRecords] = React.useState([]);
  const [filteredRecords, setFilteredRecords] = React.useState([]);
  const [masterId, setMasterId] = React.useState(null)
  const [pagination, setPagination] = React.useState({});
  const [query, setQuery] = React.useState('');
  React.useEffect(() => {
    const fetchRecords = async () => {
      const response = await fetch('https://api.discogs.com/users/ghostly64/collection/folders/7261507/releases?sort=added&page=1&per_page=100&sort_order=desc', {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded', 
          'User-Agent': 'PostmanDiscogs/1.0', 
          'Authorization': 'OAuth oauth_consumer_key="bwcIEfydSSfolgDTrYVs",oauth_token="oBskqeOIwChEGfMterEcgJbqDeehUwHJtIBclcBO",oauth_signature_method="PLAINTEXT",oauth_timestamp="1714405046",oauth_nonce="3ab2ecbd-7acc-4441-9389-29688543862f",oauth_version="1.0",oauth_signature="HLVDfYNOfRrUfsuELZgOxPyIXPPCNyJE%26nUhFDkdvUDelDsvSHhFKQgwHdosAoPrNfKhoNnqv"'
    
        }
      });
      const data = await response.json();
      setRecords(data.releases);
     
      setFilteredRecords(data.releases)
    
      setPagination(data.pagination)
    }

    fetchRecords();
  }, []);
  
  
  function handleChange(e) {
    setQuery(e.target.value);

          // Filter items based on search query
          const filtered = records.filter((record) =>
            record.basic_information.title.toLowerCase().includes(query.toLowerCase()) ||
          record.basic_information.artists[0].name.toLowerCase().includes(query.toLowerCase())
          );
          setFilteredRecords(filtered);
        };
    
  return(
  <box-l>
    <cluster-l justify="space-evenly" align="center">
    <h1>My Record Collection</h1>
    <div className="search">
<input
    type="text"
    placeholder="Search..."
    value={query}
    onChange={handleChange}
  />
  
    </div>
    </cluster-l>

<grid-l>
{filteredRecords.map((record) => (
  
<box-l padding="var(--s0)" key={record.id}>
  
 <div>
<<<<<<< HEAD
  <Link to={`${record.basic_information.master_id}`} state={
    
    {recordObj: record.basic_information.master_id}
  }>
=======
  <Link to={`/records/${record.basic_information.master_id}`}
        state={{recordData: record.basic_information}}>
>>>>>>> f1107e9d9418ba6c8475794619d061c4b7b6bd09
  <frame-l ratio="1:1"><img src={record.basic_information.cover_image} alt={record.basic_information.title}/></frame-l>
  </Link>

</div> 
</box-l>  
))}
</grid-l>

  </box-l>

  )
}