const middleware = {}

middleware['auth'] = require('..\\middleware\\auth.js')
middleware['auth'] = middleware['auth'].default || middleware['auth']

middleware['clearExternalJS'] = require('..\\middleware\\clearExternalJS.js')
middleware['clearExternalJS'] = middleware['clearExternalJS'].default || middleware['clearExternalJS']

export default middleware
