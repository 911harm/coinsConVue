const BASE_URL = 'https://api.coincap.io/v2'
export function getAssets () {
    // Usando template strings de ES2015 armamos la url del endpoint con
    // el formato esperado por la API.
    const url = `${BASE_URL}/assets`
  
    // Retornamos la llamada de fetch (recuerden que devuelve una Promise).
    // Fetch recibe como primer parametro la url y luego un objeto
    // con configuracion donde pasamos el tipo de metodo HTTP
    return fetch(url, { method: 'GET' })
      .then(res => {
        // En el caso de que hay un error disparamos una excepción
        // para luego manejarla en nuestro componente
        if (res.status !== 200) {
          throw res.statusText
        }
  
        // Casteamos la respuesta y la devolvemos para
        // usarla luego en el componente
        return res.json()
      })
  }