const {
  createResponse
} = require('./getForms').test

const { handler } = require('./getForms')

describe('createResponse should...', () => {
  test('return an object with statusCode and body properties.', () => {
    expect(
      Object.keys(
        createResponse(200, {})
      )
    ).toMatchObject(
      ['statusCode', 'headers', 'body']
    )
  })

  test('return an object with right values in its own right keys.', () => {
    expect(
      createResponse(200, {})
    ).toMatchObject({
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: {}
    })
  })
})

describe('getForms handler should...', () => {
  test('return callback with forms.', () => {
    const callback = jest.fn((err, response) => {
      if (err) return
      return response
    })

    expect(handler({}, {}, callback)).toMatchObject({
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: '{"_embedded":{"request_fields":[{"name":"Qual será o serviço?","label":"Qual será o serviço?","placeholder":"Qual será o serviço?","mask":"tipo de serviço","type":"enumerable","required":true,"values":{"Coloração":"Coloração","Corte":"Corte","Escova ":"Escova ","Escova progressiva/definitiva":"Escova progressiva/definitiva","Luzes":"Luzes","Manicure":"Manicure","Pedicure":"Pedicure","Penteado":"Penteado"}},{"name":"Para quem será o serviço?","label":"Para quem será o serviço?","placeholder":"Para quem será o serviço?","mask":"indique para quem será o serviço","type":"enumerable","required":false,"values":{"Criança":"Criança","Homem":"Homem","Mulher":"Mulher"}},{"name":"O serviço será para quantas pessoas?","label":"O serviço será para quantas pessoas?","placeholder":"O serviço será para quantas pessoas?","mask":"indique o número de pessoas","type":"enumerable","required":false,"values":{"1":"1","2":"2","Mais de 3":"Mais de 3"}},{"name":"Para quando você precisa deste serviço?","label":"Para quando você precisa deste serviço?","placeholder":"Para quando você precisa deste serviço?","mask":"Indique o prazo do serviço","type":"enumerable","required":true,"values":{"Hoje ou nos próximos dias":"Hoje ou nos próximos dias","Nos próximos 30 dias":"Nos próximos 30 dias","Nos próximos 3 meses":"Nos próximos 3 meses","Ainda não tenho previsão":"Ainda não tenho previsão"}},{"name":"Informações Adicionais","label":"Informações Adicionais","type":"big_text","placeholder":"Descreva o que você precisa","required":false}],"user_fields":[{"name":"cep","label":"CEP","type":"cep","placeholder":"","required":true},{"name":"name","label":"Nome","type":"small_text","placeholder":"","required":true},{"name":"email","label":"Email","type":"email","placeholder":"Ex: nome@email.com","required":true},{"name":"phone","label":"Celular","type":"phone","placeholder":"","required":true}]}}'
    })
  })
})
