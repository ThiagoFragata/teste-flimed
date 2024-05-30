import { Control, Controller } from 'react-hook-form'
import { questionsType } from '../../model/questionsModel'

interface InputQuestionProps {
  label: string
  name: keyof questionsType
  control: Control<questionsType>
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
        <div className="flex-1">
          <label className="flex items-center ">
            <span className="mr-2 text-lg text-gray-700">{label}</span>
            <input
              value={value?.toString()}
              onChange={onChange}
              onBlur={onBlur}
              type="text"
              className="flex-1 p-4 bg-white rounded-lg dark:bg-slate-800 min-h-16"
            />
          </label>
          <p className="mt-2 ml-8 text-red-500">{error?.message}</p>
        </div>
      )}
    />
  )
}
