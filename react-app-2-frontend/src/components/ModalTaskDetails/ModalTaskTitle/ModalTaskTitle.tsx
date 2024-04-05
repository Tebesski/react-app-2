import IconOnlyButton from "@/components/UI/Buttons/IconOnlyButton/IconOnlyButton"
import { Typography } from "@material-tailwind/react"

type ModalTaskTitleProps = { title: string }

export default function ModalTaskTitle({ title }: ModalTaskTitleProps) {
   return (
      <div className="flex items-center pl-4">
         <Typography variant="h3" color="blue-gray">
            {title}
         </Typography>

         <IconOnlyButton
            onClick={() => console.log("edit")}
            size={"xl"}
            icon={"file-edit"}
         />
      </div>
   )
}
