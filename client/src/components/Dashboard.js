 import {useEffect} from 'react'

function Dashboard() {
     useEffect(() => {
       const options = {
         method: 'GET',
         headers: {
           'X-RapidAPI-Key': '38368f629fmsh117a78cdc45ef42p1e9694jsn8c07e52f4c3c',
           'X-RapidAPI-Host': 'mlb-data.p.rapidapi.com'
         }
       };
    
       fetch('https://mlb-data.p.rapidapi.com/json/named.roster_team_alltime.bam?start_season=1994&team_id=121&end_season=2022&sort_order=name_asc.col_in=name_first_last', options)
         .then(response => response.json())
         .then(response => console.log(response))
         .catch(err => console.error(err));
    }, []);

 

    return(
        <div>

        </div>
)}
export default Dashboard