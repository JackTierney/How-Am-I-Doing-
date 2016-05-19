'use strict'

module.exports = (schema) => {
  return schema.define('questionnaire', {
    questionnaire_id: { type: schema.Number },
    questionnaire_date: { type: schema.Date },
    questionnaire_answers: { type: schema.Json }
  },
  { primaryKeys: ['questionnaire_id'] })
}
