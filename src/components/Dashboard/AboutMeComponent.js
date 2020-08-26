import React, {useState, useEffect }from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import {CardCollection} from '../Miscellaneous/CardCollections'
import {CardExpert} from '../Miscellaneous/CardExperts'
import {DataMagazine} from '../../utils/Magazines.json'
import {DataExperts} from '../../utils/Experts.json'
import IconWorld from '../../assets/images/icons/i_internet.svg'
import IconInstagram from '../../assets/images/icons/i_instagram.svg'
import IconFacebook from '../../assets/images/icons/i_facebook.svg'
import IconTwitter from '../../assets/images/icons/i_twitter.svg'
import IconMail from '../../assets/images/icons/i_mail.svg'
import IconPhone from '../../assets/images/icons/i_phone.svg'
import CircularProgress from '@material-ui/core/CircularProgress';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import '../Styles/Dashboard/AboutMe.css'
//Service
import { getUser } from '../../services/UserService';
import { getRegion } from '../../services/LocationService';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { getUserSuccess, getUsername } from '../../redux/Actions/UsersActions';
import { RootState } from '../../redux/store';
import { showDialogEdit, dismissDialogEdit } from '../../redux/Actions/DialogActions'
import { getRegions } from '../../redux/Actions/LocationsActions'

import {LightBox} from '../../components/Miscellaneous/LightBox'
import UserInformations from '../../components/Dashboard/LightBox/UserInformations'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    progress: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '2rem',
        marginBottom: '2rem',

    },
    circular:{
      color: '#fbbb00',
    }
  }),
);

export default function AboutMe() {
  const classes= useStyles();
  const dispatch = useDispatch();
  const user= useSelector((state:RootState)=> state.user)
  const [loading, setLoading] = useState(true);
  const editModal= useSelector((state:RootState)=> state.dialog)
  // const [data, setData] = useState({ hits: [] });
  const city = user.city ? user.city.name: '';
  const country = user.country ? user.country.name:'';

  // useEffect(async () => {
  //   axios.get(
  //     'https://dreamaway.machette.tech/api/users/user_test/information/',
  //   )
  //   .then((response) => {
  //     setData(response)
  //     console.log(response)
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   })
  // })

  async function fetchInfoUser(){
    getUser(localStorage.getItem('username'), dispatch)
    setLoading(false)
  }
  async function fetchRegion() {
    getRegion().then(response=>{
      dispatch(getRegions(response.results? response.results: []));

    })
  }

  useEffect(() => {
    fetchInfoUser();
    fetchRegion();
    },[]);




  const dataPublication = DataMagazine[0]
  const dataExperts = DataExperts[0]

  return (
    <React.Fragment>
      {!loading &&<div>
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4 text-white">
          <div id="text_about_me">
            <p className="title">sobre mí</p>
            <p>
              {user.about_me}
            </p>
            <div className="address d-flex flex-row align-items-center text-uppercase">
              <figure className="mb-0 mr-2">
                <svg id="localizado" xmlns="http://www.w3.org/2000/svg" width="14.352" height="20" viewBox="0 0 14.352 20">
                  <g id="Grupo_219" data-name="Grupo 219">
                    <path id="Trazado_400" data-name="Trazado 400" d="M157.12,2.563a6.75,6.75,0,0,0-10.576,0c-2.548,3.14-2.516,7.151.093,11.6a25.956,25.956,0,0,0,4.521,5.587,1.01,1.01,0,0,0,1.348,0,25.952,25.952,0,0,0,4.521-5.587C159.636,9.714,159.668,5.7,157.12,2.563Zm-2.648,6.551a3.733,3.733,0,1,1,0-5.28A3.71,3.71,0,0,1,154.472,9.114Z" transform="translate(-144.656 -0.008)" fill="#ffffff"></path>
                  </g>
                </svg>
              </figure>
              {`${city} ${country}`}
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-8 text_gray">
          <div id="data_about_me">
            <div className="data_up">
              <div className="left">
                <p className="title">Temas</p>
                <p>
                  {user.expert}
                </p>
              </div>
              <div className="right">
                <p className="title">mi web o blog</p>
                <a href={user.web_site} target="_blank">
                <img src={IconWorld} alt="world" width="25" /> {user.web_site}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12">
          <h2 className="text-uppercase text_gray my-3">actividad reciente</h2>
          <div id="recent_activities">
            {/*<p>No posee actividad reciente</p>*/}
            <div className="item_activity item_publication">
              <p className="hastag"><span className="text-yellow">#</span>Publicaciones</p>
              <CardCollection
                dataListCollection={DataMagazine}
                urlImage={dataPublication.urlImage}
                titleCarousel={dataPublication.titleCarousel}
              />
            </div>
            <div className="item_activity item_experience">
              <p className="hastag"><span className="text-yellow">#</span>Experiencia</p>
              <CardExpert
                typePublication={dataExperts.style}
                galleries={dataExperts.galleries}
                authors={dataExperts.authors}
                title={dataExperts.title}
                hastags={dataExperts.hastags}
              />
            </div>
            <div className="item_activity item_publication">
              <p className="hastag"><span className="text-yellow">#</span>Publicaciones</p>
              <CardCollection
                dataListCollection={DataMagazine}
                urlImage={dataPublication.urlImage}
                titleCarousel={dataPublication.titleCarousel}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12">
          <h2 className="text-uppercase text_gray mt-3 mb-4">contactos</h2>
          <div className="contact_list text_gray">
            <div className="item_contact_list">
              <p className="text-uppercase text_gray mb-3">email</p>
              <a href="mailto:proyectosjenni@gmail.com" target="_blank">
                <img src={IconMail} alt="mail" />
                {user.email}
              </a>
            </div>
            <div className="item_contact_list">
              <p className="text-uppercase text_gray mb-3">teléfonos</p>
              <a href="tel:5468215132" target="_blank">
                <img src={IconPhone} alt="phone" />
                {user.phone}
              </a>
            </div>
            <div className="item_contact_list">
              <p className="text-uppercase text_gray mb-3">redes sociales</p>
              <ul className="d-flex flex-row align-items-center justify-content-start">
                <li>
                  <a href={user.twitter} target="_blank">
                    <img src={IconTwitter} alt="twitter" />
                  </a>
                </li>
                <li>
                  <a href={`https://${user.instagram}`} target="_blank">
                    <img src={IconInstagram} alt="instagram" />
                  </a>
                </li>
                <li>
                  <a href={user.facebook} target="_blank">
                    <img src={IconFacebook} alt="facebook" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>}
      {loading &&
      <div className={classes.progress}>
            <CircularProgress className={classes.circular} size={68} />
      </div>}

      <LightBox
        show={editModal.openEdit}
        onHide={() => dispatch(dismissDialogEdit())}
        children={
          <UserInformations fetchInfoUser={fetchInfoUser}/>
        }
      />
    </React.Fragment>
  )
}
