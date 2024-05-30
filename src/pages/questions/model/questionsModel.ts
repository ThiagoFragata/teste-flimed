import * as yup from 'yup'

export const options = ['Menos', 'Igual', 'Mais', 'Não sei']

// Questão 01
export const questionSchemaQ1 = yup.object({
  Q1isNenhum: yup.boolean(),

  Q1respostaA: yup
    .string()
    .when('Q1isNenhum', {
      is: (value: boolean) => value === false,
      then: (schema) => schema.required('Este campo é obrigatório'),
      otherwise: (schema) => schema.notRequired(),
    })
    .test(
      'checkbox-validation',
      'Desmarque "Nenhum" para preencher este campo',
      function (value) {
        const isNenhum = this.parent.Q1isNenhum
        return !(isNenhum && value && value.length > 0)
      }
    ),

  Q1radioGroupA1: yup
    .string()
    .oneOf(options, 'Selecione uma opção')
    .when('Q1respostaA', {
      is: (value: string) => value && value.length > 0,
      then: (schema) => schema.required('Selecione uma opção'),
      otherwise: (schema) => schema.notRequired(),
    })
    .test(
      'checkbox-validation',
      'Desmarque "Nenhum" para preencher este campo',
      function (value) {
        const isNenhum = this.parent.Q1isNenhum
        return !(isNenhum && value && value.length > 0)
      }
    ),
  Q1radioGroupA2: yup
    .string()
    .oneOf(options, 'Selecione uma opção')
    .when('Q1respostaA', {
      is: (value: string) => value && value.length > 0,
      then: (schema) => schema.required('Selecione uma opção'),
      otherwise: (schema) => schema.notRequired(),
    }),

  Q1respostaB: yup
    .string()
    .when('Q1isNenhum', {
      is: (value: boolean) => value === false,
      then: (schema) => schema.required('Este campo é obrigatório'),
      otherwise: (schema) => schema.notRequired(),
    })
    .test(
      'checkbox-validation',
      'Desmarque "Nenhum" para preencher este campo',
      function (value) {
        const isNenhum = this.parent.Q1isNenhum
        return !(isNenhum && value && value.length > 0)
      }
    ),

  Q1radioGroupB1: yup
    .string()
    .oneOf(options, 'Selecione uma opção')
    .when('Q1respostaB', {
      is: (value: string) => value && value.length > 0,
      then: (schema) => schema.required('Selecione uma opção'),
      otherwise: (schema) => schema.notRequired(),
    }),
  Q1radioGroupB2: yup
    .string()
    .oneOf(options, 'Selecione uma opção')
    .when('Q1respostaB', {
      is: (value: string) => value && value.length > 0,
      then: (schema) => schema.required('Selecione uma opção'),
      otherwise: (schema) => schema.notRequired(),
    }),

  Q1respostaC: yup
    .string()
    .when('Q1isNenhum', {
      is: (value: boolean) => value === false,
      then: (schema) => schema.required('Este campo é obrigatório'),
      otherwise: (schema) => schema.notRequired(),
    })
    .test(
      'checkbox-validation',
      'Desmarque "Nenhum" para preencher este campo',
      function (value) {
        const isNenhum = this.parent.Q1isNenhum
        return !(isNenhum && value && value.length > 0)
      }
    ),
  Q1radioGroupC1: yup
    .string()
    .oneOf(options, 'Selecione uma opção')
    .when('Q1respostaC', {
      is: (value: string) => value && value.length > 0,
      then: (schema) => schema.required('Selecione uma opção'),
      otherwise: (schema) => schema.notRequired(),
    }),
  Q1radioGroupC2: yup
    .string()
    .oneOf(options, 'Selecione uma opção')
    .when('Q1respostaC', {
      is: (value: string) => value && value.length > 0,
      then: (schema) => schema.required('Selecione uma opção'),
      otherwise: (schema) => schema.notRequired(),
    }),
})

// Questão 02
export const questionSchemaQ2 = yup.object({
  Q2isNenhum: yup.boolean(),

  Q2respostaA: yup
    .string()
    .when('Q2isNenhum', {
      is: (value: boolean) => value === false,
      then: (schema) => schema.required('Este campo é obrigatório'),
      otherwise: (schema) => schema.notRequired(),
    })
    .test(
      'checkbox-validation',
      'Desmarque "Nenhum" para preencher este campo',
      function (value) {
        const isNenhum = this.parent.Q2isNenhum
        return !(isNenhum && value && value.length > 0)
      }
    ),

  Q2radioGroupA1: yup
    .string()
    .oneOf(options, 'Selecione uma opção')
    .when('Q2respostaA', {
      is: (value: string) => value && value.length > 0,
      then: (schema) => schema.required('Selecione uma opção'),
      otherwise: (schema) => schema.notRequired(),
    }),
  Q2radioGroupA2: yup
    .string()
    .oneOf(options, 'Selecione uma opção')
    .when('Q2respostaA', {
      is: (value: string) => value && value.length > 0,
      then: (schema) => schema.required('Selecione uma opção'),
      otherwise: (schema) => schema.notRequired(),
    }),

  Q2respostaB: yup
    .string()
    .when('Q2isNenhum', {
      is: (value: boolean) => value === false,
      then: (schema) => schema.required('Este campo é obrigatório'),
      otherwise: (schema) => schema.notRequired(),
    })
    .test(
      'checkbox-validation',
      'Desmarque "Nenhum" para preencher este campo',
      function (value) {
        const isNenhum = this.parent.Q2isNenhum
        return !(isNenhum && value && value.length > 0)
      }
    ),

  Q2radioGroupB1: yup
    .string()
    .oneOf(options, 'Selecione uma opção')
    .when('Q2respostaB', {
      is: (value: string) => value && value.length > 0,
      then: (schema) => schema.required('Selecione uma opção'),
      otherwise: (schema) => schema.notRequired(),
    }),
  Q2radioGroupB2: yup
    .string()
    .oneOf(options, 'Selecione uma opção')
    .when('Q2respostaB', {
      is: (value: string) => value && value.length > 0,
      then: (schema) => schema.required('Selecione uma opção'),
      otherwise: (schema) => schema.notRequired(),
    }),

  Q2respostaC: yup
    .string()
    .when('Q2isNenhum', {
      is: (value: boolean) => value === false,
      then: (schema) => schema.required('Este campo é obrigatório'),
      otherwise: (schema) => schema.notRequired(),
    })
    .test(
      'checkbox-validation',
      'Desmarque "Nenhum" para preencher este campo',
      function (value) {
        const isNenhum = this.parent.Q2isNenhum
        return !(isNenhum && value && value.length > 0)
      }
    ),
  Q2radioGroupC1: yup
    .string()
    .oneOf(options, 'Selecione uma opção')
    .when('Q2respostaC', {
      is: (value: string) => value && value.length > 0,
      then: (schema) => schema.required('Selecione uma opção'),
      otherwise: (schema) => schema.notRequired(),
    }),
  Q2radioGroupC2: yup
    .string()
    .oneOf(options, 'Selecione uma opção')
    .when('Q2respostaC', {
      is: (value: string) => value && value.length > 0,
      then: (schema) => schema.required('Selecione uma opção'),
      otherwise: (schema) => schema.notRequired(),
    }),
})

// Questão 03
export const questionSchemaQ3 = yup.object({
  Q3isNenhum: yup.boolean(),

  Q3respostaA: yup
    .string()
    .when('Q3isNenhum', {
      is: (value: boolean) => value === false,
      then: (schema) => schema.required('Este campo é obrigatório'),
      otherwise: (schema) => schema.notRequired(),
    })
    .test(
      'checkbox-validation',
      'Desmarque "Nenhum" para preencher este campo',
      function (value) {
        const isNenhum = this.parent.Q3isNenhum
        return !(isNenhum && value && value.length > 0)
      }
    ),

  Q3radioGroupA1: yup
    .string()
    .oneOf(options, 'Selecione uma opção')
    .when('Q3respostaA', {
      is: (value: string) => value && value.length > 0,
      then: (schema) => schema.required('Selecione uma opção'),
      otherwise: (schema) => schema.notRequired(),
    }),
  Q3radioGroupA2: yup
    .string()
    .oneOf(options, 'Selecione uma opção')
    .when('Q3respostaA', {
      is: (value: string) => value && value.length > 0,
      then: (schema) => schema.required('Selecione uma opção'),
      otherwise: (schema) => schema.notRequired(),
    }),

  Q3respostaB: yup
    .string()
    .when('Q3isNenhum', {
      is: (value: boolean) => value === false,
      then: (schema) => schema.required('Este campo é obrigatório'),
      otherwise: (schema) => schema.notRequired(),
    })
    .test(
      'checkbox-validation',
      'Desmarque "Nenhum" para preencher este campo',
      function (value) {
        const isNenhum = this.parent.Q3isNenhum
        return !(isNenhum && value && value.length > 0)
      }
    ),

  Q3radioGroupB1: yup
    .string()
    .oneOf(options, 'Selecione uma opção')
    .when('Q3respostaB', {
      is: (value: string) => value && value.length > 0,
      then: (schema) => schema.required('Selecione uma opção'),
      otherwise: (schema) => schema.notRequired(),
    }),
  Q3radioGroupB2: yup
    .string()
    .oneOf(options, 'Selecione uma opção')
    .when('Q3respostaB', {
      is: (value: string) => value && value.length > 0,
      then: (schema) => schema.required('Selecione uma opção'),
      otherwise: (schema) => schema.notRequired(),
    }),

  Q3respostaC: yup
    .string()
    .when('Q3isNenhum', {
      is: (value: boolean) => value === false,
      then: (schema) => schema.required('Este campo é obrigatório'),
      otherwise: (schema) => schema.notRequired(),
    })
    .test(
      'checkbox-validation',
      'Desmarque "Nenhum" para preencher este campo',
      function (value) {
        const isNenhum = this.parent.Q3isNenhum
        return !(isNenhum && value && value.length > 0)
      }
    ),
  Q3radioGroupC1: yup
    .string()
    .oneOf(options, 'Selecione uma opção')
    .when('Q3respostaC', {
      is: (value: string) => value && value.length > 0,
      then: (schema) => schema.required('Selecione uma opção'),
      otherwise: (schema) => schema.notRequired(),
    }),
  Q3radioGroupC2: yup
    .string()
    .oneOf(options, 'Selecione uma opção')
    .when('Q3respostaC', {
      is: (value: string) => value && value.length > 0,
      then: (schema) => schema.required('Selecione uma opção'),
      otherwise: (schema) => schema.notRequired(),
    }),
})

export const questionsSchema = yup.object().shape({
  ...questionSchemaQ1.fields,
  ...questionSchemaQ2.fields,
  ...questionSchemaQ3.fields,
})

export type questionsType = yup.InferType<typeof questionsSchema>
