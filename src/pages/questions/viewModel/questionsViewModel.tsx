import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { questionsSchema, questionsType } from '../model/questionsModel'

export function useQuestionsViewModel() {
  const form = useForm<questionsType>({
    resolver: yupResolver(questionsSchema),
  })

  const onSubmit = (data: questionsType) => {
    console.log(data)
  }

  return { form, onSubmit }
}
