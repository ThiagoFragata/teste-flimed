import { questionType } from '@/pages/home/model/homeModel'
import { Control } from 'react-hook-form'
import { Input } from '../atoms/input-question'
import { RadioGroup } from '../molecules/radio-group'

interface ResponseItemProps {
  control: Control<questionType>
  inputName: keyof questionType
  labelInput: string
  radiosName1: keyof questionType
  radiosName2: keyof questionType
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
    <div className="flex items-center justify-between gap-16">
      <Input control={control} name={inputName} label={labelInput} />
      <RadioGroup control={control} name={radiosName1} />

      {text3 && <RadioGroup control={control} name={radiosName2} />}
    </div>
  )
}
