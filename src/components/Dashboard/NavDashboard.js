import React from 'react'
import '../Styles/dashboard/NavDashboard.css'
import { Link } from 'react-router-dom'

export default function NavDashboard() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <nav id="navDashboard" className="nav d-flex flex-row justify-content-center mx-auto nav-pills">
            <Link className="text-center nav-link d-flex flex-column book " to='/dashboard/aboutme'>
              <figure>
                <svg xmlns="http://www.w3.org/2000/svg" width="30.341" height="24.613" viewBox="0 0 30.341 24.613"><path className="a" d="M15.171,0C6.806,0,0,5.521,0,12.306S6.806,24.613,15.171,24.613s15.171-5.521,15.171-12.306S23.536,0,15.171,0Zm.987,19.608c-.721.1-2.155.341-2.883.39a1.922,1.922,0,0,1-1.553-.656,1.3,1.3,0,0,1-.23-1.408l2.868-6.4H11.378c0-1.333,1.23-2.313,2.806-2.689a13.33,13.33,0,0,1,2.883-.388,2.5,2.5,0,0,1,1.553.656,1.3,1.3,0,0,1,.23,1.408l-2.868,6.4h2.981A2.963,2.963,0,0,1,16.157,19.608Zm.909-11.916a1.746,1.746,0,0,1-1.9-1.538,1.746,1.746,0,0,1,1.9-1.538,1.746,1.746,0,0,1,1.9,1.538A1.746,1.746,0,0,1,17.067,7.691Z" fill="#808080"></path></svg>
              </figure>
            </Link>
            <Link className="text-center d-flex flex-column book" to='/dashboard/publications'>
              <figure>
                <svg xmlns="http://www.w3.org/2000/svg" width="32.438" height="28.511" viewBox="0 0 32.438 28.511"><g transform="translate(21.034 20.907)"><path className="a" d="M337.7,360.992v6.652a.952.952,0,0,1-1.622.672l-1.228-1.229-1.228,1.229a.951.951,0,0,1-1.623-.672v-6.652Z" transform="translate(-332 -360.992)" fill="#808080"></path></g><path className="a" d="M281.454,50V31.942a.95.95,0,0,0-.95-.95h-6.652A2.854,2.854,0,0,0,271,33.843V50.965A4.722,4.722,0,0,1,273.851,50Z" transform="translate(-253.831 -30.992)" fill="#808080"></path><path className="a" d="M76,50V31.942a.95.95,0,0,1,.95-.95H83.6a2.854,2.854,0,0,1,2.851,2.851V50.965A4.722,4.722,0,0,0,83.6,50Z" transform="translate(-71.185 -30.992)" fill="#808080"></path><g transform="translate(0 1.901)"><path className="a" d="M19.133,80.141a2.846,2.846,0,0,0-1.566,1.285.951.951,0,0,1-.822.473H15.692a.951.951,0,0,1-.822-.473A2.819,2.819,0,0,0,12.418,80H3.865a.951.951,0,0,1-.95-.95V60.992H.95a.951.951,0,0,0-.95.95V82.85a.951.951,0,0,0,.95.95H19.133Z" transform="translate(0 -60.992)" fill="#808080"></path><path className="a" d="M454.851,60.992h-1.964V79.048A.95.95,0,0,1,452,80v3.8h2.851a.951.951,0,0,0,.95-.95V61.942A.951.951,0,0,0,454.851,60.992Z" transform="translate(-423.363 -60.992)" fill="#808080"></path></g></svg>
            </figure>
            </Link>

            <Link to="/dashboard/experiences" className="text-center nav-link d-flex flex-column experience">
              <figure>
                <svg xmlns="http://www.w3.org/2000/svg" width="32.438" height="32.437" viewBox="0 0 32.438 32.437"><g transform="translate(22.287 12.891)"><path className="a" d="M361.3,207.132l-9.513-3.648v16.1l8.8,3.375a.993.993,0,0,0,1.349-.927V208.059A.993.993,0,0,0,361.3,207.132Z" transform="translate(-351.783 -203.484)" fill="#808080"></path></g><g transform="translate(0 12.581)"><path className="a" d="M1.349,198.65A.993.993,0,0,0,0,199.577v13.977a.993.993,0,0,0,.637.927l9.513,3.648v-16.1Z" transform="translate(0 -198.584)" fill="#808080"></path></g><g transform="translate(12.136 18.712)"><path className="a" d="M197.634,297.53a2.979,2.979,0,0,1-3.977,0,25.023,25.023,0,0,1-2.094-2.174v13.414l8.165-3.131V295.356A25.064,25.064,0,0,1,197.634,297.53Z" transform="translate(-191.563 -295.356)" fill="#808080"></path></g><g transform="translate(9.165)"><path className="a" d="M156.909,2.52a6.636,6.636,0,0,0-10.4,0c-2.5,3.086-2.473,7.029.091,11.4a25.512,25.512,0,0,0,4.445,5.492.993.993,0,0,0,1.326,0,25.514,25.514,0,0,0,4.444-5.493C159.382,9.549,159.414,5.606,156.909,2.52Zm-2.6,8.4a3.669,3.669,0,1,1,0-5.191A3.647,3.647,0,0,1,154.306,10.918Z" transform="translate(-144.656 -0.008)" fill="#808080"></path></g></svg>
              </figure>
            </Link>
            <a className="text-center nav-link d-none d-sm-flex flex-column forum" >
              <figure>
                <svg xmlns="http://www.w3.org/2000/svg" width="37.856" height="33.473" viewBox="0 0 37.856 33.473"><path className="a" d="M644.246,336.374c-6.783,0-12.512,4.774-12.512,10.426a9.636,9.636,0,0,0,2.822,6.707.8.8,0,0,1,.2.339,6.484,6.484,0,0,1-.489,4.773,7.234,7.234,0,0,0,3.6-2.135.8.8,0,0,1,.889-.2,16.2,16.2,0,0,0,5.495.947c6.633,0,12.03-4.678,12.03-10.427C656.276,340.827,650.65,336.374,644.246,336.374Zm-6.9,8.02a.8.8,0,1,1-.8.8A.8.8,0,0,1,637.348,344.394Zm13.314,6.416H637.348a.8.8,0,0,1,0-1.6h13.314a.8.8,0,0,1,0,1.6Zm0-4.812H640.556a.8.8,0,1,1,0-1.6h10.106a.8.8,0,1,1,0,1.6Z" transform="translate(-631.734 -325.146)" fill="#808080"></path><path className="a" d="M666.768,342.279a9.641,9.641,0,0,0,2.822-6.707c0-5.652-5.73-10.426-12.512-10.426-6.331,0-11.536,4.261-12,9.647a14.967,14.967,0,0,1,5.969,1.581h12.925a.8.8,0,0,1,0,1.6H653.514a11.48,11.48,0,0,1,4.333,8,15.8,15.8,0,0,0,4.726-.926.8.8,0,0,1,.888.2,7.237,7.237,0,0,0,3.6,2.136,6.494,6.494,0,0,1-.489-4.773A.8.8,0,0,1,666.768,342.279Zm-16.106-9.113a.8.8,0,1,1,.8-.8A.8.8,0,0,1,650.662,333.166Zm13.313,0h-10.1a.8.8,0,1,1,0-1.6h10.1a.8.8,0,1,1,0,1.6Z" transform="translate(-631.734 -325.146)" fill="#808080"></path></svg>
              </figure>
            </a>
            <a className="text-center nav-link d-none d-sm-flex flex-column list ">
              <figure>
                <svg id="agregar_a_listas" data-name="agregar a listas" xmlns="http://www.w3.org/2000/svg" width="21.084" height="27.742" viewBox="0 0 21.084 27.742">
                  <path className="a" data-name="Trazado 83" d="M660.139,592.914l-9.1-5.933a1.323,1.323,0,0,0-1.431-.012l-9.484,5.96a.349.349,0,0,1-.529-.312V566.666a1.4,1.4,0,0,1,1.367-1.426h18.348a1.4,1.4,0,0,1,1.368,1.426v25.939A.35.35,0,0,1,660.139,592.914Z" transform="translate(-639.59 -565.24)" fill="#808080"></path>
                </svg>
              </figure>
            </a>
            <a className="text-center nav-link d-none d-sm-flex flex-column travelingnetwork">
              <figure>
                <svg xmlns="http://www.w3.org/2000/svg" width="32.438" height="32.438" viewBox="0 0 32.438 32.438"><path className="a" d="M29.059,25.68a3.354,3.354,0,0,0-1.229.239l-4.045-4.044a9.39,9.39,0,0,0,0-11.313L27.83,6.519a3.374,3.374,0,1,0-2.15-3.14,3.353,3.353,0,0,0,.239,1.229L21.874,8.653a9.388,9.388,0,0,0-11.31,0L6.519,4.608a3.374,3.374,0,1,0-3.14,2.15,3.354,3.354,0,0,0,1.229-.239l4.045,4.045a9.388,9.388,0,0,0,0,11.311L4.608,25.921a3.327,3.327,0,0,0-1.229-.241,3.4,3.4,0,1,0,3.14,2.15l4.045-4.045a9.388,9.388,0,0,0,11.31,0l4.045,4.045a3.341,3.341,0,0,0-.239,1.227,3.379,3.379,0,1,0,3.379-3.379ZM16.219,9.461a2.7,2.7,0,1,1-2.7,2.7A2.7,2.7,0,0,1,16.219,9.461ZM11.826,21.625a1.014,1.014,0,0,1-1.014-1.014v-.676a3.72,3.72,0,0,1,3.717-3.717h3.379a3.72,3.72,0,0,1,3.717,3.717v.676a1.014,1.014,0,0,1-1.014,1.014Z" fill="#808080"></path></svg>
              </figure>
            </a>
            <a className="text-center nav-link d-flex flex-row" role="button">
              <span></span>
              <span></span>
              <span></span>
            </a>
            <div className="dropdown-menu dropdownMoreLink" aria-labelledby="dropdownMoreLink">
              <a className="text-center nav-link d-flex d-sm-none flex-row align-items-center justify-content-start forum " href="/user_test/forum/">
                <figure>
                  <svg xmlns="http://www.w3.org/2000/svg" width="37.856" height="33.473" viewBox="0 0 37.856 33.473"><path className="a" d="M644.246,336.374c-6.783,0-12.512,4.774-12.512,10.426a9.636,9.636,0,0,0,2.822,6.707.8.8,0,0,1,.2.339,6.484,6.484,0,0,1-.489,4.773,7.234,7.234,0,0,0,3.6-2.135.8.8,0,0,1,.889-.2,16.2,16.2,0,0,0,5.495.947c6.633,0,12.03-4.678,12.03-10.427C656.276,340.827,650.65,336.374,644.246,336.374Zm-6.9,8.02a.8.8,0,1,1-.8.8A.8.8,0,0,1,637.348,344.394Zm13.314,6.416H637.348a.8.8,0,0,1,0-1.6h13.314a.8.8,0,0,1,0,1.6Zm0-4.812H640.556a.8.8,0,1,1,0-1.6h10.106a.8.8,0,1,1,0,1.6Z" transform="translate(-631.734 -325.146)" fill="#808080"></path><path className="a" d="M666.768,342.279a9.641,9.641,0,0,0,2.822-6.707c0-5.652-5.73-10.426-12.512-10.426-6.331,0-11.536,4.261-12,9.647a14.967,14.967,0,0,1,5.969,1.581h12.925a.8.8,0,0,1,0,1.6H653.514a11.48,11.48,0,0,1,4.333,8,15.8,15.8,0,0,0,4.726-.926.8.8,0,0,1,.888.2,7.237,7.237,0,0,0,3.6,2.136,6.494,6.494,0,0,1-.489-4.773A.8.8,0,0,1,666.768,342.279Zm-16.106-9.113a.8.8,0,1,1,.8-.8A.8.8,0,0,1,650.662,333.166Zm13.313,0h-10.1a.8.8,0,1,1,0-1.6h10.1a.8.8,0,1,1,0,1.6Z" transform="translate(-631.734 -325.146)" fill="#808080"></path></svg>
                </figure>
                Foro
              </a>
              <a className="text-center nav-link d-flex d-sm-none flex-row align-items-center justify-content-start list " href="/user_test/lists/">
                <figure>
                  <svg id="agregar_a_listas" data-name="agregar a listas" xmlns="http://www.w3.org/2000/svg" width="21.084" height="27.742" viewBox="0 0 21.084 27.742">
                    <path className="a" data-name="Trazado 83" d="M660.139,592.914l-9.1-5.933a1.323,1.323,0,0,0-1.431-.012l-9.484,5.96a.349.349,0,0,1-.529-.312V566.666a1.4,1.4,0,0,1,1.367-1.426h18.348a1.4,1.4,0,0,1,1.368,1.426v25.939A.35.35,0,0,1,660.139,592.914Z" transform="translate(-639.59 -565.24)" fill="#808080"></path>
                  </svg>
                </figure>
                Listas
              </a>
              <a className="text-center nav-link d-flex d-sm-none flex-row align-items-center justify-content-start travelingnetwork " href="/user_test/travelingnetwork/">
                <figure>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32.438" height="32.438" viewBox="0 0 32.438 32.438"><path className="a" d="M29.059,25.68a3.354,3.354,0,0,0-1.229.239l-4.045-4.044a9.39,9.39,0,0,0,0-11.313L27.83,6.519a3.374,3.374,0,1,0-2.15-3.14,3.353,3.353,0,0,0,.239,1.229L21.874,8.653a9.388,9.388,0,0,0-11.31,0L6.519,4.608a3.374,3.374,0,1,0-3.14,2.15,3.354,3.354,0,0,0,1.229-.239l4.045,4.045a9.388,9.388,0,0,0,0,11.311L4.608,25.921a3.327,3.327,0,0,0-1.229-.241,3.4,3.4,0,1,0,3.14,2.15l4.045-4.045a9.388,9.388,0,0,0,11.31,0l4.045,4.045a3.341,3.341,0,0,0-.239,1.227,3.379,3.379,0,1,0,3.379-3.379ZM16.219,9.461a2.7,2.7,0,1,1-2.7,2.7A2.7,2.7,0,0,1,16.219,9.461ZM11.826,21.625a1.014,1.014,0,0,1-1.014-1.014v-.676a3.72,3.72,0,0,1,3.717-3.717h3.379a3.72,3.72,0,0,1,3.717,3.717v.676a1.014,1.014,0,0,1-1.014,1.014Z" fill="#808080"></path></svg>
                </figure>
                Red Viajera
              </a>

              <a className="nav-link d-flex flex-row align-items-center justify-content-start list " href="/user_test/favorites/">

                <figure>
                  <svg id="gusta" xmlns="http://www.w3.org/2000/svg" width="28.528" height="25.174" viewBox="0 0 28.528 25.174">
                    <path className="a" d="M26.272,2.305a7.665,7.665,0,0,0-10.91,0L14.289,3.379,13.216,2.305a7.715,7.715,0,0,0-10.91,10.91L14.289,25.2,26.272,13.216a7.665,7.665,0,0,0,0-10.91" transform="translate(-0.025 -0.025)" fill="#808080" fill-rule="evenodd"></path>
                  </svg>
                </figure>
                Favoritos
              </a>
              <a className="nav-link d-flex flex-row align-items-center justify-content-start list ">
                <figure>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14.465" viewBox="0 0 18 14.465">
                    <g id="tarjeta_de_regalo" data-name="tarjeta de regalo" transform="translate(0)">
                      <path id="Trazado_293" className="a" data-name="Trazado 293" d="M138.637,185.358V186a3.832,3.832,0,0,1-2.661-1.07v3.717h10.608a.964.964,0,0,0,.964-.964v-3.215H136.423A3.194,3.194,0,0,0,138.637,185.358Zm6.661,1.361h.643v.643H145.3Zm-1.286,0h.643v.643h-.643Zm-1.286,0h.643v.643h-.643Zm-1.286,0h.643v.643h-.643Zm0,0" transform="translate(-130.512 -177.076)" fill="gray"></path>
                      <path id="Trazado_294" className="a" data-name="Trazado 294" d="M64.77,112.469a.735.735,0,0,0-.27,1.414l1.581.635-.633-1.59A.727.727,0,0,0,64.77,112.469Zm0,0" transform="translate(-61.47 -107.969)" fill="gray"></path>
                      <path id="Trazado_295" className="a" data-name="Trazado 295" d="M234.088,306.635a.851.851,0,0,0,1.138-.4l.839-1.762h-6.49Zm0,0" transform="translate(-220.349 -292.254)" fill="gray"></path>
                      <path id="Trazado_296" className="a" data-name="Trazado 296" d="M23.977,65.433v3.215H26.4L25.8,68.41a1.376,1.376,0,1,1,1.784-1.79l.246.618v-2.77H24.941a.964.964,0,0,0-.964.964Zm0,0" transform="translate(-23.013 -61.897)" fill="gray"></path>
                      <path id="Trazado_297" className="a" data-name="Trazado 297" d="M62.5.56a.851.851,0,0,0-1.138.4L60.672,2.4H66.34Zm0,0" transform="translate(-58.234 -0.476)" fill="gray"></path>
                      <path id="Trazado_298" className="a" data-name="Trazado 298" d="M25.262,185.358a3.2,3.2,0,0,0,2.215-.889h-3.5v3.215a.964.964,0,0,0,.964.964h2.893v-3.636a3.83,3.83,0,0,1-2.572.989Zm0,0" transform="translate(-23.013 -177.076)" fill="gray"></path>
                      <path id="Trazado_299" className="a" data-name="Trazado 299" d="M.319,160.71v-1.538l-.237.5A.861.861,0,0,0,.319,160.71Zm0,0" transform="translate(0.002 -152.795)" fill="gray"></path>
                      <path id="Trazado_300" className="a" data-name="Trazado 300" d="M439.977,163.484v1.538l.237-.5A.86.86,0,0,0,439.977,163.484Zm0,0" transform="translate(-422.298 -156.934)" fill="gray"></path>
                      <path id="Trazado_301" className="a" data-name="Trazado 301" d="M146.585,64.469H135.977v2.994l.336-.843a1.374,1.374,0,1,1,1.786,1.79l-.594.238H147.55V65.433a.964.964,0,0,0-.964-.964Zm-4.5,2.25h-.643V65.433h.643Zm1.286,0h-.643V65.433h.643Zm1.286,0h-.643V65.433h.643Zm1.286,0H145.3V65.433h.643Zm0,0" transform="translate(-130.513 -61.897)" fill="gray"></path>
                      <path id="Trazado_302" className="a" data-name="Trazado 302" d="M145.473,113.2a.729.729,0,0,0-1.407-.273l-.633,1.59,1.581-.636a.73.73,0,0,0,.459-.681Zm0,0" transform="translate(-137.67 -107.966)" fill="gray"></path>
                    </g>
                  </svg>
                </figure>
                Cupones
              </a>
              <a className="nav-link d-flex flex-row align-items-center justify-content-start list ">
                <figure>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14.4" height="16" viewBox="0 0 14.4 16">
                    <g id="calendario" transform="translate(-21.333)">
                      <g id="Grupo_140" data-name="Grupo 140" transform="translate(21.333)">
                        <g id="Grupo_139" data-name="Grupo 139">
                          <path id="Trazado_281" className="a" data-name="Trazado 281" d="M34.133,1.6h-.8V0h-1.6V1.6h-6.4V0h-1.6V1.6h-.8a1.593,1.593,0,0,0-1.592,1.6l-.008,11.2a1.6,1.6,0,0,0,1.6,1.6h11.2a1.6,1.6,0,0,0,1.6-1.6V3.2A1.6,1.6,0,0,0,34.133,1.6Zm0,12.8h-11.2V5.6h11.2Z" transform="translate(-21.333)" fill="gray"></path>
                          <path id="Trazado_282" className="a" data-name="Trazado 282" d="M121.653,192.974l-.725-.974-3.339,4.484-1.45-1.948-.725.974,2.176,2.922Z" transform="translate(-111.361 -185.376)" fill="gray"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </figure>
                Reservas
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}
