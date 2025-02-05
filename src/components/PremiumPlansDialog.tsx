import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { CommonDialogProps } from "@/types/dialogTypes"
import { PremiumPlansTable } from "./PremiumPlansTable"

export function PremiumPlansDialog(props: CommonDialogProps) {
  return (
    <Dialog open={props.open} onOpenChange={props.onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Premium Plans</DialogTitle>
        </DialogHeader>
        <PremiumPlansTable />
        <DialogFooter className="sm:justify-start">
            <Button type="button" variant="secondary" onClick={props.onClose}>
              Close
            </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
