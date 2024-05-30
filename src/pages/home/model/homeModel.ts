import * as yup from 'yup'

export const options = ['Menos', 'Igual', 'Mais', 'Não sei']

// Schema para uma única pergunta
export const questionSchema = yup.object({
  isNenhum: yup.boolean(),

  respostaA: yup.string(),
  radioGroupA1: yup
    .string()
    .oneOf(options, 'Selecione uma opção')
    .when('respostaA', {
      is: (value: string) => value && value.length > 0,
      then: (schema) => schema.required('Selecione uma opção'),
      otherwise: (schema) => schema.notRequired(),
    }),
  radioGroupA2: yup
    .string()
    .oneOf(options, 'Selecione uma opção')
    .when('respostaA', {
      is: (value: string) => value && value.length > 0,
      then: (schema) => schema.required('Selecione uma opção'),
      otherwise: (schema) => schema.notRequired(),
    }),

  respostaB: yup.string(),
  radioGroupB1: yup
    .string()
    .oneOf(options, 'Selecione uma opção')
    .when('respostaB', {
      is: (value: string) => value && value.length > 0,
      then: (schema) => schema.required('Selecione uma opção'),
      otherwise: (schema) => schema.notRequired(),
    }),
  radioGroupB2: yup
    .string()
    .oneOf(options, 'Selecione uma opção')
    .when('respostaB', {
      is: (value: string) => value && value.length > 0,
      then: (schema) => schema.required('Selecione uma opção'),
      otherwise: (schema) => schema.notRequired(),
    }),

  respostaC: yup.string(),
  radioGroupC1: yup
    .string()
    .oneOf(options, 'Selecione uma opção')
    .when('respostaC', {
      is: (value: string) => value && value.length > 0,
      then: (schema) => schema.required('Selecione uma opção'),
      otherwise: (schema) => schema.notRequired(),
    }),
  radioGroupC2: yup
    .string()
    .oneOf(options, 'Selecione uma opção')
    .when('respostaC', {
      is: (value: string) => value && value.length > 0,
      then: (schema) => schema.required('Selecione uma opção'),
      otherwise: (schema) => schema.notRequired(),
    }),
})

export type questionType = yup.InferType<typeof questionSchema>
