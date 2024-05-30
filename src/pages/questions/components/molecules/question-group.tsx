interface QuestionGroup {
  number: number
  text1: string
  text2: string
  text3?: string
}

export function QuestionGroup({ number, text1, text2, text3 }: QuestionGroup) {
  return (
    <div className="flex gap-16">
      <p className="w-full text-lg font-semibold ">
        {number} - {text1}
      </p>
      <p className="w-full text-base ">{text2}</p>
      {text3 && <p className="w-full text-base ">{text3}</p>}
    </div>
  )
}
