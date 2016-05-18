'use strict'

exports.register = function (server, options, next) {

  server.route({
    method: 'GET',
    path: '/account',
    handler: (request, reply) => {
      reply.view('account')
    }
  })

  next()
}

exports.register.attributes = {
  pkg: {
    name: 'account'
  }
}