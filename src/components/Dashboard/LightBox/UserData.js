import React,{ useState, useEffect} from "react"
import {Form, Col, Button} from "react-bootstrap"
import iconUserNotImg from "../../../assets/images/icons/i_userNotImage.svg"
import CameraAltIcon from "@material-ui/icons/CameraAlt"
import MailIcon from "@material-ui/icons/Mail"
import UserIcon from "../../../assets/images/icons/i_user.svg"
import SearchIcon from "@material-ui/icons/Search"
import LanguageIcon from "@material-ui/icons/Language"
import PhoneIcon from "@material-ui/icons/Phone"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import TwitterIcon from "@material-ui/icons/Twitter";
import { FancyAutocomplete, FancyTextInput } from '../../FancyComponents';
import InputAdornment from "@material-ui/core/InputAdornment/InputAdornment"
import TextField from "@material-ui/core/TextField/TextField";
//Form-hook
import {useForm, Controller} from "react-hook-form"
import * as yup from "yup"
//redux
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { getRegions, getCountries, getCities } from '../../../redux/Actions/LocationsActions'
import { showDialogEdit, dismissDialogEdit } from '../../../redux/Actions/DialogActions'
//service
import { editUser} from '../../../services/UserService'
import { getCountry, getCity } from '../../../services/LocationService';
//app
import {PhoneMaskCustom} from '../../../utils/InputMask'



const schema = yup.object().shape({
  first_name: yup.string(), //wait for validation length
  last_name: yup.string(), //wait for validation length
  email: yup.string(), //wait for validation length
  email_confirm: yup.string(), //wait for validation length
  username: yup.string(), //wait for validation length
  ubication: yup.string(), //wait for validation length
  about_me: yup.string(), //wait for validation length
  web_site: yup.string(), //wait for validation length
  phone: yup.string(), //wait for validation length
  facebook: yup.string(), //wait for validation length
  instragram: yup.string(), //wait for validation length
  twitter: yup.string(), //wait for validation length
})

export default function UserData(props:any) {
  const [previewImage, setPreviewImage] = React.useState(iconUserNotImg)
  const dispatch = useDispatch();
  const user= useSelector((state:RootState)=> state.user)
  const regions = useSelector((state:RootState)=> state.regions)
  const countries = useSelector((state:RootState)=> state.country)
  const cities = useSelector((state:RootState)=> state.city)
  const [country, setCountry] = useState([' ']);
  const [region, setRegion] = useState([' ']);
  const [city, setCity ] = useState(['']);
  const [countryValue, setCountryValue] = useState('');
  const [regionValue, setRegionValue] = useState('');
  const [regionId, setRegionId] = useState('');
  const [countryId, setCountryId] = useState('');
  const [cityId, setCityId] = useState('');
  const [cityValue, setCityValue ] = useState('');
  const [selectedCountries, setSelectedCountries] = useState(true)
  const [selectedCities, setSelectedCities] = useState(true)
  const methods = useForm({
    validationSchema: schema
  });
  const {handleSubmit, control, watch, errors, register} = methods

  useEffect(() => {
    // fetchRegion();
    getOptionFilter();
  },[]);

  async function fetchCountry(id: any) {
    getCountry(id).then(response=>{
      dispatch(getCountries(response? response: []));
      setSelectedCountries(false)
    })
  }
  console.log(user.continental_region ? user.continental_region.name: '')
  console.log(user.country? user.country.name:'')
  console.log(user.city? user.city.name:'')



  async function fetchCity(id: any) {
    getCity(id).then(response=>{
      console.log(response)
      dispatch(getCities(response? response: []));
      setSelectedCities(false);
    })
  }

  const getOptionFilter= () => {
    setRegion(Object.keys(regions.regions).map((key:any) => regions.regions[key]));
  }



  const onSubmit = (userData: any) => {
    const EditData ={
      ...userData,
      continental_region: regionId,
      country: countryId,
      city: cityId,
    }
    console.log("hola bebe")
    // console.log(userData)
    console.log(EditData)
    editUser(user.username, EditData )
    dispatch(dismissDialogEdit())
    props.fetchInfoUser()
  }
  const handleChange = (e:any) => {
    e.preventDefault()
    setPreviewImage(URL.createObjectURL(e.target.files[0]))
  }
  const getOpObj = (option: any, element:any) => {
    if (typeof option == 'number') option = element.find((op:any) => op === option);
    return option;
  };
  return (
    <form
    onSubmit={handleSubmit(onSubmit)}
    id="formProfile">
      <div className="form-row align-items-center">
        <div className="col-lg-9">
          <div className="form-row">
            <div className="col-lg-6">
              <div className="form-group py-2 mb-0">
                <span className="labelInput">Nombres</span>
                  <Controller
                    as={FancyTextInput}
                    type="text"
                    control={control}
                    defaultValue={user.first_name}
                    className="form-control"
                    id="first_name"
                    name="first_name"
                    aria-describedby="first_name"
                    placeholder="Nombres"
                  />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group py-2 mb-0">
                <span className="labelInput">Apellidos</span>
                  <Controller
                    as={FancyTextInput}
                    control={control}
                    type="text"
                    ref={register}
                    defaultValue={user.last_name}
                    className="form-control"
                    id="last_name"
                    name="last_name"
                    aria-describedby="last_name"
                    placeholder="Apellidos"
                  />
              </div>
            </div>
            <div className="clearfix"></div>
            <div className="col-lg-8">
              <span className="labelInput">Correo</span>
                <Controller
                  as={FancyTextInput}
                  control={control}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailIcon fontSize={'small'}/>
                      </InputAdornment>
                    ),
                  }}
                  type="email"
                  ref={register}
                  defaultValue={user.email}
                  className="form-control"
                  id="email"
                  name="email"
                  aria-describedby="email"
                  placeholder="Correo electrónico"
                />
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="form-group mb-0 uploadFile">
            <input
              type="file"
              ref={register}
              defaultValue={user.avatar}
              onChange={handleChange}
              accept="image/gif, image/jpeg, image/png"
              name="upImage"
              id="upImage"
            />
            <label>
              <CameraAltIcon />
            </label>
            <img id="previewImage" src={previewImage} alt="your image" />
          </div>
        </div>
      </div>
      <div className="form-row align-items-center">
        <div className="col-12 col-lg-6">
          <div className="form-group py-2 mb-0">
            <span className="labelInput">Confirma el correo</span>
              <Controller
                as={FancyTextInput}
                control={control}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailIcon fontSize={'small'}/>
                    </InputAdornment>
                  ),
                }}
                type="email"
                ref={register}
                defaultValue={user.email}
                className="form-control"
                id="email_confirm"
                name="email_confirm"
                aria-describedby="email_confirm"
                placeholder="Confirmar correo electrónico"
              />
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="form-group py-2 mb-0">
            <span className="labelInput">Usuario</span>

              <Controller
                as={FancyTextInput}
                control={control}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src={UserIcon} alt="" />
                    </InputAdornment>
                  ),
                }}
                type="text"
                ref={register}
                defaultValue={user.username}
                className="form-control"
                id="username"
                name="username"
                aria-describedby="username"
                placeholder="@TuUsuario"
              />
          </div>
        </div>
      </div>
      <div className="form-row align-items-center">
        <div className="col-lg-4">
          <div className="form-group py-2 mb-0">
          <span className="labelInput">Región</span>
          <Controller
            as={
                <FancyAutocomplete
                  select={regions.regions} selection={regionValue}
                  // label={"Región"}
                  // defaultValue={'CAMBUR'}
                  LabelOption={(option: any) => getOpObj(option, regions.regions).name}
                  change={(event: any, newValue: any | null) => {
                    const id= newValue? newValue.id:null;
                    console.log(id)
                    console.log(newValue)
                    setCountryValue('');
                    setCityValue('');
                    setRegionValue(newValue);
                    setRegionId(id);
                    fetchCountry(id);
                    getOptionFilter()
                  }}
                />
            }
            // value={register}
            error={errors.status}
            helperText= {errors.status && errors.status.message}
            control={control}
            type="input"
            name="state_event"
            label= "Región"

            placeholder="Ingrese el estado del evento"
          />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="form-group py-2 mb-0">
          <span className="labelInput">País</span>
          <Controller
            as={
                <FancyAutocomplete
                  disabled={selectedCountries}
                  select={countries.countries} selection={countryValue}
                  label={"Pais"}
                  defaultValue={countryValue}
                  LabelOption={(option: any) => getOpObj(option, countries.countries).name}
                  change={(event: any, newValue: any | any) => {
                    const id= newValue? newValue.id:null;
                    setCountryValue(newValue);
                    setCountryId(id);
                    setCityValue('');
                    fetchCity(id);
                }}
                />
            }
            error={errors.status}
            helperText= {errors.status && errors.status.message}
            control={control}
            type="input"
            name="state_event"
            label= "Pais"
            placeholder="Ingrese el estado del evento"
          />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="form-group py-2 mb-0">
          <span className="labelInput">Ciudad</span>
          <Controller
            as={
                <FancyAutocomplete
                disabled={selectedCities}
                select={cities.cities} selection={cityValue}
                label={"Ciudad"}
                LabelOption={(option: any) => getOpObj(option, cities.cities).name}
                change={(event: any, newValue: any | null) => {
                  const id= newValue? newValue.id:null;
                  setCityValue(newValue);
                  setCityId(id)
                }}
                />
            }
            error={errors.status}
            helperText= {errors.status && errors.status.message}
            control={control}
            type="input"
            name="state_event"
            label= "Ciudad"
            placeholder="Ingrese el estado del evento"
          />
          </div>
        </div>
      </div>
      <div className="form-row align-items-center">
        <div className="col-12">
          <div className="form-group py-2 mb-0">
            <span className="labelInput">Ubicacion actual</span>
              <Controller
                as={FancyTextInput}
                control={control}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon fontSize={'small'}/>
                    </InputAdornment>
                  ),
                }}
                type="input"
                ref={register}
                defaultValue={user.ubication}
                className="form-control"
                id="ubication"
                name="ubication"
                placeholder="1234 calle principal"
              />
          </div>
        </div>
      </div>
      <div className="form-group">
        <span className="labelInput">Sobre mi</span>
        <Controller
          as={FancyTextInput}
          control={control}
          id="standard-multiline-static"
          multiline
          rowsMax={4}
          name="about_me"
          ref={register}
          defaultValue={user.about_me}
          placeholder="Cuéntanos más sobre ti para que toda la comunidad te conozca."
          aria-describedby="about_me"
          helperText={<span >160 caracteres máximo</span>}
        />
      </div>
      <div className="form-row align-items-center">
        <div className="col-12 col-lg-6">
          <div className="form-group">
            <span className="labelInput">Sitio web o blog</span>
              <Controller
                as={FancyTextInput}
                control={control}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LanguageIcon fontSize={'small'}/>
                    </InputAdornment>
                  ),
                }}
                type="url"
                ref={register}
                defaultValue={user.web_site}
                className="form-control"
                id="web_site"
                name="web_site"
                aria-describedby="link web o blog"
                placeholder="https://www.misitioweb.com"
              />

          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="form-group updatePhone">
            <span className="d-block labelInput">Teléfono</span>
              <Controller
                as={FancyTextInput}
                control={control}
                InputProps={{
                  inputComponent: PhoneMaskCustom,
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneIcon fontSize={'small'}/>
                    </InputAdornment>
                  ),
                  }}
                type="tel"
                ref={register}
                defaultValue={user.phone}
                id="phone"
                name="phone"
                className="form-control"
                aria-describedby="phone"
                placeholder="+12 345 6789012"
              />
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="col-12 col-lg-4">
          <div className="form-group">
            <span className="d-block labelInput">Facebook</span>
              <Controller
                as={FancyTextInput}
                control={control}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FacebookIcon fontSize={'small'}/>
                    </InputAdornment>
                  ),
                }}
                type="url"
                ref={register}
                defaultValue={user.facebook}
                id="facebook"
                name="facebook"
                className="form-control"
                aria-describedby="facebook"
                placeholder={'https://www.miFacebook.com'}
              />
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <div className="form-group">
            <span className="d-block labelInput">Instagram</span>
              <Controller
                as={FancyTextInput}
                control={control}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <InstagramIcon fontSize={'small'}/>
                    </InputAdornment>
                  ),
                  }}
                type="url"
                ref={register}
                defaultValue={user.instagram}
                id="instagram"
                name="instagram"
                className="form-control"
                aria-describedby="instagram"
                placeholder={'https://www.miInstagram.com'}

              />
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <div className="form-group">
            <span className="d-block labelInput">Twitter</span>
              <Controller
                as={FancyTextInput}
                control={control}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <TwitterIcon fontSize={'small'}/>
                    </InputAdornment>
                  ),
                  }}
                type="url"
                ref={register}
                defaultValue={user.twitter}
                id="twitter"
                name="twitter"
                className="form-control"
                aria-describedby="twitter"
                placeholder={'https://www.miTwitter.com'}
              />
          </div>
        </div>
      </div>
      <div className="SaveButtons d-flex align-items-center justify-content-center flex-md-row-reverse justify-content-md-start">
        <Button
        type="submit"
        id="postProfile"
        className="DawBtn"
        disabled={ (watch('email') != watch('email_confirm')) }>
          Hecho
        </Button>
        <Button type="button" className="BtnCancel" onClick={()=>dispatch(dismissDialogEdit())}>
          Descartar
        </Button>
      </div>
    </form>
  )
}
