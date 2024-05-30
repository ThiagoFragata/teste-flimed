import { questionType } from '@/pages/home/model/homeModel'
import { Control } from 'react-hook-form'
import { Checkbox } from '../atoms/checkbox-question'
import { QuestionGroup } from '../molecules/question-group'
import { Button } from '../ui/button'
import { ResponseItem } from './response-item'

interface QuestionItemProps {
  text1: string
  text2: string
  text3?: string
  number: number
  labelNone: string
  checkboxName: keyof questionType

  inputNameA: keyof questionType
  labelInputA: string
  radiosNameA1: keyof questionType
  radiosNameA2: keyof questionType

  inputNameB: keyof questionType
  labelInputB: string
  radiosNameB1: keyof questionType
  radiosNameB2: keyof questionType

  inputNameC: keyof questionType
  labelInputC: string
  radiosNameC1: keyof questionType
  radiosNameC2: keyof questionType

  control: Control<questionType>
}

export function QuestionItem({
  text1,
  text2,
  text3,
  number,
  control,
  labelNone,
  checkboxName,
  inputNameA,
  labelInputA,
  radiosNameA1,
  radiosNameA2,

  inputNameB,
  labelInputB,
  radiosNameB1,
  radiosNameB2,

  inputNameC,
  labelInputC,
  radiosNameC1,
  radiosNameC2,
}: QuestionItemProps) {
  return (
    <div>
      <QuestionGroup
        number={number}
        text1={text1}
        text2={text2}
        text3={text3}
      />

      <div className="flex m-4">
        <Checkbox control={control} name={checkboxName} label={labelNone} />
      </div>

      <div>
        <ResponseItem
          control={control}
          labelInput={labelInputA}
          inputName={inputNameA}
          radiosName1={radiosNameA1}
          radiosName2={radiosNameA2}
          text3={text3}
        />

        <ResponseItem
          control={control}
          labelInput={labelInputB}
          inputName={inputNameB}
          radiosName1={radiosNameB1}
          radiosName2={radiosNameB2}
          text3={text3}
        />

        <ResponseItem
          control={control}
          labelInput={labelInputC}
          inputName={inputNameC}
          radiosName1={radiosNameC1}
          radiosName2={radiosNameC2}
          text3={text3}
        />
      </div>

      <div className="flex justify-end mt-16 mb-8">
        <Button type="submit">Salvar</Button>
      </div>
    </div>
  )
}
