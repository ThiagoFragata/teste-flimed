import { Control, Controller } from 'react-hook-form'
import { questionsType } from '../../model/questionsModel'

interface RadioGroupProps {
  name: keyof questionsType
  control: Control<questionsType>
}
export function RadioGroup({ name, control }: RadioGroupProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className="flex-1">
          <div className="flex justify-between gap-4">
            <label className="flex flex-col items-center">
              <span className="mb-2 text-gray-700">Menos</span>
              <input
                {...field}
                type="radio"
                value="Menos"
                className="w-16 h-16 bg-white border rounded-lg appearance-none border-slate-300 dark:bg-slate-800 dark:checked:bg-teal-500 checked:bg-teal-500 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>

            <label className="flex flex-col items-center">
              <span className="mb-2 text-gray-700">Igual</span>
              <input
                {...field}
                type="radio"
                value="Igual"
                className="w-16 h-16 bg-white border rounded-lg appearance-none border-slate-300 dark:bg-slate-800 dark:checked:bg-teal-500 checked:bg-teal-500 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>

            <label className="flex flex-col items-center">
              <span className="mb-2 text-gray-700">Mais</span>
              <input
                {...field}
                type="Radio"
                value="Mais"
                className="w-16 h-16 bg-white border rounded-lg appearance-none border-slate-300 dark:bg-slate-800 dark:checked:bg-teal-500 checked:bg-teal-500 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>

            <label className="flex flex-col items-center">
              <span className="mb-2 text-gray-700">Não sei</span>
              <input
                {...field}
                type="radio"
                value="Não sei"
                className="w-16 h-16 bg-white border rounded-lg appearance-none border-slate-300 dark:bg-slate-800 dark:checked:bg-teal-500 checked:bg-teal-500 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>
          </div>

          <p className="mt-2 text-red-500 min-h-6">{error && error.message}</p>
        </div>
      )}
    />
  )
}

//
