const contentIntroHybrids = `
<article class="intro-hybrids-article">
  <h1 class="title-h1">Introducción sobre la librería Hybrids</h1>
  <h2>¿Qué es Hybrids?</h2>
  <p>
    Hybrids es una librería de interfaz de usuario para crear componentes web
    con un fuerte enfoque declarativo y funcional basado en objetos simples y
    funciones puras. Creada por Dominik Lubański en mayo de 2018. La librería
    hybrids proporciona una forma simple y declarativa para crear elementos
    personalizados.
  </p>
  <h3>Competidores</h3>
  <p>
    Para entender en qué posición se encuentra esta librería, debemos saber
    quienes son sus competidores más cercados o mas populares.
  </p>

  <div class="table-container">
    <table 
      class="table"
      aria-describedby="Competidores de Hybrids"
    >
      <thead>
        <tr>
          <th id="react">React</th>
          <th id="stencil">Stencil</th>
          <th id="polymer">Polymer</th>
          <th id="slim">Slim</th>
          <th id="skatejs">Skatejs</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img
              alt="logo react"
              src="../../assets/icons/react.svg"
              class="table--img"
            />
          </td>
          <td>
            <img
              alt="logo stencil"
              class="table--img"
              id="img-stencil"
            />
          </td>
          <td>
            <img
              alt="logo polymer"
              src="../../assets/icons/polymer.svg"
              class="table--img"
            />
          </td>
          <td>
            <img
              alt="logo slim"
              src="../../assets/icons/slim.png"
              class="table--img"
            />
          </td>
          <td>
            <img
              alt="logo skatejs"
              src="../../assets/icons/skatejs.png"
              class="table--img"
            />
          </td>
      </tbody>
    </table>
  </div>

  <p>
    Para mayor información puedes ver el video o leer mi artículo en el
    siguiente enlace:
    <a
      class="table--link"
      href="https://dev.to/corteshvictor/introduccion-sobre-la-libreria-hybridsjs-ld2"
      target="_blank"
      rel="noopener noreferrer"
    >
      Hybrids
    </a>
  </p>
  <iframe
    title="Video introductorio sobre Hybrids"
    class="video-iframe"
    src="https://www.youtube.com/embed/CUQNJi4cB58"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</article>
`;

export default contentIntroHybrids;
