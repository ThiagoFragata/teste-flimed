import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import { QuestionsView } from '../../view/questionsView'

export function DialogQuestions() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Questionário</Button>
      </DialogTrigger>
      <DialogContent className="p-0 sm:max-w-7xl bg-teal-50 dark:bg-gray-950">
        <ScrollArea className="w-full rounded-md h-[90svh]">
          <QuestionsView />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
