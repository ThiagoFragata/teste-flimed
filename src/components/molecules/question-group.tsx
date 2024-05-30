interface QuestionGroup {
  number: number
  text1: string
  text2: string
  text3?: string
}

export function QuestionGroup({ number, text1, text2, text3 }: QuestionGroup) {
  return (
    <div className="flex gap-16">
      <div className="flex gap-8 ">
        <p className="flex-1 text-lg font-semibold">
          {number} - {text1}
        </p>

        <p className="flex-1 text-base">{text2}</p>

        <p className="flex-1 text-base">{text3}</p>
      </div>
    </div>
  )
}
