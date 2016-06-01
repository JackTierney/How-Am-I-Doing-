'use strict'

exports.register = function (server, options, next) {

  server.route({
    method: 'GET',
    path: '/visualise',
    handler: (request, reply) => {
      reply.view('visualise', {
        heading: 'Visualise',
        scripts: [
          'http://d3js.org/d3.v3.min.js',
          '/js/visualise.js'
        ]
      })
    }
  })
  next()
}

exports.register.attributes = {
  pkg: {
    name: 'visualise'
  }
}
