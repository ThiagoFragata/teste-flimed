import { Control } from 'react-hook-form'
import { questionsType } from '../../model/questionsModel'
import { Checkbox } from '../atoms/checkbox-question'
import { QuestionGroup } from '../molecules/question-group'
import { ResponseItem } from './response-item'

interface QuestionItemProps {
  text1: string
  text2: string
  text3?: string
  number: number
  labelNone: string
  checkboxName: keyof questionsType

  inputNameA: keyof questionsType
  labelInputA: string
  radiosNameA1: keyof questionsType
  radiosNameA2: keyof questionsType

  inputNameB: keyof questionsType
  labelInputB: string
  radiosNameB1: keyof questionsType
  radiosNameB2: keyof questionsType

  inputNameC: keyof questionsType
  labelInputC: string
  radiosNameC1: keyof questionsType
  radiosNameC2: keyof questionsType

  control: Control<questionsType>
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
    <div className="mb-8">
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
    </div>
  )
}
