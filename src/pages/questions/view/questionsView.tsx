import { question } from '@/assets'
import { Button } from '@/components/ui/button'
import { profile } from '@/constants/image-profile'
import { QuestionItem } from '@/pages/questions/components/organism/question-item'
import { ContainerDefault } from '@/templates/container-default'
import { useQuestionsViewModel } from '../viewModel/questionsViewModel'
export function QuestionsView() {
  const {
    onSubmit,
    form: { handleSubmit, control },
  } = useQuestionsViewModel()

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
                labelInputA={'a'}
                checkboxName="Q1isNenhum"
                inputNameA={'Q1respostaA'}
                radiosNameA1={'Q1radioGroupA1'}
                radiosNameA2={'Q1radioGroupA2'}
                labelInputB={'b'}
                inputNameB={'Q1respostaB'}
                radiosNameB1={'Q1radioGroupB1'}
                radiosNameB2={'Q1radioGroupB2'}
                labelInputC={'c'}
                inputNameC={'Q1respostaC'}
                radiosNameC1={'Q1radioGroupC1'}
                radiosNameC2={'Q1radioGroupC2'}
              />

              <QuestionItem
                control={control}
                number={2}
                text1="Por favor, cite as atividades, brincadeiras, passatempos e jogos preferidos do seu filho (excluir os esportes). Por exemplo: colecionar figurinhas, tocar violão, desenhar, soltar pipa, pular corda, carrinho, ler, boneca, cantar, vídeo-game, etc... (Incluir brincadeiras em grupo) (Não incluir rádio e TV)"
                text2="Comparando com outros da mesma idade, quanto tempo ele se dedica a cada uma destas atividades?"
                text3="Comparando com outros da mesma idade, qual o desempenho dele em cada uma destas atividades?"
                labelNone="Nenhum"
                checkboxName="Q2isNenhum"
                labelInputA={'a'}
                inputNameA={'Q2respostaA'}
                radiosNameA1={'Q2radioGroupA1'}
                radiosNameA2={'Q2radioGroupA2'}
                labelInputB={'b'}
                inputNameB={'Q2respostaB'}
                radiosNameB1={'Q2radioGroupB1'}
                radiosNameB2={'Q2radioGroupB2'}
                labelInputC={'c'}
                inputNameC={'Q2respostaC'}
                radiosNameC1={'Q2radioGroupC1'}
                radiosNameC2={'Q2radioGroupC2'}
              />

              <QuestionItem
                control={control}
                number={3}
                text1="Por favor, cite as organizações, clubes, times ou grupos aos quais seu filho pertence. Por exemplo: turma de amigos (fora da escola), grupos de igreja, teatro, música, etc."
                text2="Comparando com outros da mesma idade, como é a participação dele em cada um destes grupos?"
                labelNone="Nenhum"
                checkboxName="Q3isNenhum"
                labelInputA={'a'}
                inputNameA={'Q3respostaA'}
                radiosNameA1={'Q3radioGroupA1'}
                radiosNameA2={'Q3radioGroupA2'}
                labelInputB={'b'}
                inputNameB={'Q3respostaB'}
                radiosNameB1={'Q3radioGroupB1'}
                radiosNameB2={'Q3radioGroupB2'}
                labelInputC={'c'}
                inputNameC={'Q3respostaC'}
                radiosNameC1={'Q3radioGroupC1'}
                radiosNameC2={'Q3radioGroupC2'}
              />

              <div className="flex justify-end">
                <Button>Salvar</Button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </ContainerDefault>
  )
}
