import React from 'react'
import {TagsFilter, TextFilter} from '../Miscellaneous/Filters'
import {CardListExperts} from '../Miscellaneous/CardExperts'
import '../Styles/Dashboard/PublicationsComponent.css'
import {DataExperts} from '../../utils/Experts.json'
import {DataTagsFilter, DataFirstFilter} from '../../utils/Filters.json'

export default function Publications() {
  return (
    <React.Fragment>
      <TextFilter className="firts" listFilter={DataFirstFilter}/>
      <TagsFilter listTagsFilter={DataTagsFilter}/>
      <div className="row">
        <div className="col-12">
          <div id="publicationsItems">
            <CardListExperts DatalistExpert={DataExperts}/>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
