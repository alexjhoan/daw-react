import React from 'react'
import {GetPublications} from '../../services/Dashboard'
import {TagsFilter, TextFilter} from '../Miscellaneous/Filters'
import {CardListExperts} from '../Miscellaneous/CardExperts'
import '../Styles/Dashboard/PublicationsComponent.css'
import {DataExperts} from '../../utils/Experts.json'
import {DataTagsFilter, DataFirstFilter} from '../../utils/Filters.json'

export default function Publications() {
  const [publications, setPubications] = React.useState([])
  React.useEffect(() => {
    GetPublications()
    .then(function (response:any) {
      setPubications(response.data.results)
    })
    .catch(function (error:any) {
      console.log(error)
    })
  },[])

  return (
    <React.Fragment>
      <TextFilter className="firts" listFilter={DataFirstFilter}/>
      <TagsFilter listTagsFilter={DataTagsFilter}/>
      <div className="row">
        <div className="col-12">
          <div id="publicationsItems">
            <CardListExperts DatalistExpert={publications}/>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
