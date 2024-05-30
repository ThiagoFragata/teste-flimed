import { questionType } from '@/pages/home/model/homeModel'
import { Control, Controller } from 'react-hook-form'

interface CheckboxQuestionProps {
  label: string
  name: keyof questionType
  control: Control<questionType>
}
export function Checkbox({ control, label, name }: CheckboxQuestionProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <label className="flex flex-col items-center">
          <span className="mb-2 text-gray-700">{label}</span>
          <input
            value={value?.toString()}
            onChange={onChange}
            onBlur={onBlur}
            type="checkbox"
            className="w-16 h-16 bg-white border rounded-lg appearance-none border-slate-300 dark:bg-slate-800 dark:checked:bg-teal-500 checked:bg-teal-500 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
      )}
    />
  )
}
