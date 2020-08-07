import React from "react"
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
import TwitterIcon from "@material-ui/icons/Twitter"

export default function UserData() {
  const [previewImage, setPreviewImage] = React.useState(iconUserNotImg)

  const handleChange = (e:any) => {
    e.preventDefault()
    setPreviewImage(URL.createObjectURL(e.target.files[0]))
  }

  return (
    <form id="formProfile">
      <div className="form-row align-items-center">
        <div className="col-lg-9">
          <div className="form-row">
            <div className="col-lg-6">
              <div className="form-group py-2 mb-0">
                <span className="labelInput">Nombres</span>
                <label className="required w-100">
                  <input
                    type="text"
                    className="form-control"
                    id="first_name"
                    name="first_name"
                    aria-describedby="first_name"
                    placeholder="Nombres"
                  />
                </label>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group py-2 mb-0">
                <span className="labelInput">Apellidos</span>
                <label className="required w-100">
                  <input
                    type="text"
                    className="form-control"
                    id="last_name"
                    name="last_name"
                    aria-describedby="last_name"
                    placeholder="Apellidos"
                  />
                </label>
              </div>
            </div>
            <div className="clearfix"></div>
            <div className="col-lg-8">
              <span className="labelInput">Correo</span>
              <label className="required w-100">
                <MailIcon />
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  aria-describedby="email"
                  placeholder="Correo electrónico"
                />
              </label>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="form-group mb-0 uploadFile">
            <input
              type="file"
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
            <label className="required w-100">
              <MailIcon />
              <input
                type="email"
                className="form-control"
                id="email_confirm"
                name="email_confirm"
                aria-describedby="email_confirm"
                placeholder="Confirmar correo electrónico"
              />
            </label>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="form-group py-2 mb-0">
            <span className="labelInput">Usuario</span>
            <label className="required w-100">
              <img src={UserIcon} alt="" />
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                aria-describedby="username"
                placeholder="@TuUsuario"
              />
            </label>
          </div>
        </div>
      </div>
      <div className="form-row align-items-center">
        <div className="col-lg-4">
          <div className="form-group py-2 mb-0">
            <span className="labelInput">Pais</span>
            <label className="required w-100">
              <input
                type="text"
                className="form-control"
                id="ubication_country"
                name="ubication_country"
              />
            </label>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="form-group py-2 mb-0">
            <span className="labelInput">Ciudad</span>
            <label className="required w-100">
              <input
                type="text"
                className="form-control"
                id="ubication_city"
                name="ubication_city"
              />
            </label>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="form-group py-2 mb-0">
            <span className="labelInput">Region</span>
            <label className="required w-100">
              <input
                type="text"
                className="form-control"
                id="ubication_region"
                name="ubication_region"
              />
            </label>
          </div>
        </div>
      </div>
      <div className="form-row align-items-center">
        <div className="col-12">
          <div className="form-group py-2 mb-0">
            <span className="labelInput">Ubicacion actual</span>
            <label className="required w-100">
              <SearchIcon />
              <input
                type="email"
                className="form-control"
                id="ubication"
                name="ubication"
                placeholder="1234 calle principal"
              />
            </label>
          </div>
        </div>
      </div>
      <div className="form-group">
        <span className="labelInput">Sobre mi</span>
        <label className="w-100">
          <textarea
            name="about_me"
            id="about_me"
            aria-describedby="about_me"
            className="w-100 form-control"
            placeholder="Cuéntanos más sobre ti para que toda la comunidad te conozca."></textarea>
          <span className="small">160 caracteres máximo</span>
        </label>
      </div>
      <div className="form-row align-items-center">
        <div className="col-12 col-lg-6">
          <div className="form-group">
            <span className="labelInput">Sitio web o blog</span>
            <label className="w-100">
              <LanguageIcon />
              <input
                type="url"
                className="form-control"
                id="web_site"
                name="web_site"
                aria-describedby="link web o blog"
                placeholder="Escribe tu web o blog"
              />
            </label>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="form-group updatePhone">
            <span className="d-block labelInput">Teléfono</span>
            <label className="w-100">
              <PhoneIcon />
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form-control"
                aria-describedby="phone"
                placeholder="+12 345 6789012"
              />
            </label>
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="col-12 col-lg-4">
          <div className="form-group">
            <span className="d-block labelInput">Facebook</span>
            <label className="w-100">
              <FacebookIcon />
              <input
                type="tel"
                id="facebook"
                name="facebook"
                className="form-control"
                aria-describedby="facebook"
              />
            </label>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <div className="form-group">
            <span className="d-block labelInput">Instagram</span>
            <label className="w-100">
              <InstagramIcon/>
              <input
                type="tel"
                id="instagram"
                name="instagram"
                className="form-control"
                aria-describedby="instagram"
              />
            </label>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <div className="form-group">
            <span className="d-block labelInput">Twitter</span>
            <label className="w-100">
              <TwitterIcon/>
              <input
                type="tel"
                id="twitter"
                name="twitter"
                className="form-control"
                aria-describedby="twitter"
              />
            </label>
          </div>
        </div>
      </div>
      <div className="SaveButtons d-flex flex-column align-items-center justify-content-center flex-md-row-reverse justify-content-md-start">
        <Button type="button" id="postProfile" className="DawBtn">
          Hecho
        </Button>
        <Button type="button" className="BtnCancel">
          Descartar
        </Button>
      </div>
    </form>
  )
}
