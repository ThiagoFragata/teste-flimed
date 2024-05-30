import { questionType } from '@/pages/home/model/homeModel'
import { Control, Controller } from 'react-hook-form'

interface InputQuestionProps {
  label: string
  name: keyof questionType
  control: Control<questionType>
}
export function Input({ control, label, name }: InputQuestionProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <label className="flex items-center flex-1">
          <span className="mr-2 text-lg text-gray-700">{label}</span>
          <input
            value={value?.toString()}
            onChange={onChange}
            onBlur={onBlur}
            type="text"
            className="flex-1 p-4 bg-white rounded-lg dark:bg-slate-800 min-h-16"
          />
          <p className="text-red-500">{error?.message}</p>
        </label>
      )}
    />
  )
}
