import { question } from '@/assets'
import { QuestionItem } from '@/components/organism/question-item'
import { profile } from '@/constants/image-profile'
import { ContainerDefault } from '@/templates/container-default'
import { useHomeViewModel } from '../viewModel/homeViewModel'

export function HomeView() {
  const {
    onSubmit,
    form: { handleSubmit, control },
  } = useHomeViewModel()

  return (
    <ContainerDefault>
      <div className="h-full">
        <section className="p-8 mb-40 bg-teal-500 dark:bg-teal-600">
          <div className="max-w-screen-xl mx-auto">
            <div className="relative inline-flex flex-col items-center justify-center p-6 px-16 border-4 border-teal-400 rounded-lg dark:border-teal-300 -bottom-32 bg-slate-50 dark:bg-slate-950">
              <img src={question} className="p-4 mb-4 bg-teal-500 rounded-md" />
              <h1>Questionário</h1>
            </div>
          </div>
        </section>

        <div className="max-w-screen-xl mx-auto">
          <section className="max-w-3xl px-4 mx-auto text-center">
            <h1 className="mb-4 text-xl">
              INVENTÁRIO DE COMPORTAMENTOS PARA CRIANÇAS E ADOLESCENTES DE 6 A
              18 ANOS VERSÃO BRASILEIRA DO “CHILD BEHAVIOR CHECKLIST FOR AGES
              6-18
            </h1>
            <p>(CBCL/6-18)</p>
          </section>

          <section className="p-8 m-8 bg-gray-100 rounded-lg dark:bg-gray-900">
            <div className="flex gap-2 mb-16">
              <img
                src={profile}
                className="object-cover w-20 h-20 border-4 border-teal-500 rounded-full dark:border-teal-300"
              />

              <div className="text-slate-600 dark:text-slate-50">
                <h1 className="text-2xl font-bold">Natália Costa Almeida</h1>
                <p className="text-xl">Feminino</p>
                <p className="text-lg">458.782.785-59 </p>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <QuestionItem
                control={control}
                number={1}
                text1="Por favor cite os esportes que seu filho mais gosta de
                participar. Por exemplo: natação, futebol, voleibol, patins,
                skate, bicicleta, pescar, etc..."
                text2="Comparando com outros da mesma idade, quanto tempo ele se dedica
                a cada um destes esportes?"
                text3="Comparando com outros da mesma idade, qual o desempenho dele em
                cada um destes esportes?"
                labelNone="Nenhum"
                checkboxName="isNenhum"
                labelInputA={'a'}
                inputNameA={'respostaA'}
                radiosNameA1={'radioGroupA1'}
                radiosNameA2={'radioGroupA2'}
                labelInputB={'b'}
                inputNameB={'respostaB'}
                radiosNameB1={'radioGroupB1'}
                radiosNameB2={'radioGroupB2'}
                labelInputC={'c'}
                inputNameC={'respostaC'}
                radiosNameC1={'radioGroupC1'}
                radiosNameC2={'radioGroupC2'}
              />
            </form>
          </section>
        </div>
      </div>
    </ContainerDefault>
  )
}
