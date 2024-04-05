import { useState } from "react"
import SubmitButton from "../UI/Buttons/SubmitButton/SubmitButton"
import FormInput from "../UI/Form/FormInput/FormInput"
import Modal from "../UI/Modal/Modal"
import { Dialog } from "@material-tailwind/react"

type ModalAddTableProps = { isOpened: boolean }

export default function ModalAddTable({ isOpened }: ModalAddTableProps) {
   const [tableName, setTableName] = useState("")

   function handleListSubmit() {
      console.log("Table name: ", tableName)
   }

   function handleListNameChange<T extends HTMLInputElement>(
      e: React.ChangeEvent<T>
   ) {
      setTableName(e.target.value)
   }

   const listNameInput = (
      <div className="flex flex-col gap-6">
         <FormInput
            inputLabel={"Enter table name"}
            value={tableName}
            changeHandler={handleListNameChange}
            required={true}
            variant="standard"
         />
         <SubmitButton
            onClick={() => handleListSubmit()}
            hasIcon={false}
            text="Add"
            disabled={!tableName.trim()}
            disabledText="Please, enter table name"
         />
      </div>
   )

   return (
      <Dialog open={isOpened} handler={() => {}} size="xs">
         <Modal mainContent={listNameInput} title={""} contentCentered={true} />
      </Dialog>
   )
}
