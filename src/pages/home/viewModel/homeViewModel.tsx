import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { questionSchema, questionType } from '../model/homeModel'

export function useHomeViewModel() {
  const form = useForm<questionType>({
    resolver: yupResolver(questionSchema),
  })

  const onSubmit = (data: questionType) => {
    console.log(data)
  }

  return { form, onSubmit }
}
