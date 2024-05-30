import { Control } from 'react-hook-form'
import { questionsType } from '../../model/questionsModel'
import { Input } from '../atoms/input-question'
import { RadioGroup } from '../molecules/radio-group'

interface ResponseItemProps {
  control: Control<questionsType>
  inputName: keyof questionsType
  labelInput: string
  radiosName1: keyof questionsType
  radiosName2: keyof questionsType
  text3?: string
}

export function ResponseItem({
  control,
  inputName,
  labelInput,
  radiosName1,
  radiosName2,
  text3,
}: ResponseItemProps) {
  return (
    <div className="flex items-center gap-16">
      <Input control={control} name={inputName} label={labelInput} />
      <RadioGroup control={control} name={radiosName1} />

      {text3 && <RadioGroup control={control} name={radiosName2} />}
    </div>
  )
}
