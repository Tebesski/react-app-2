import { Card, Typography } from "@material-tailwind/react"
import ModalButton from "../Buttons/ModalButton/ModalButton"

type TableProps = {
   tableHead: string[]
   tableRows: { name: string; date: string }[]
}

export default function Table({ tableHead, tableRows }: TableProps) {
   return (
      <Card className="h-full w-full overflow-auto shadow-none border-0 rounded-none max-h-96">
         <table className="w-full text-left">
            <thead>
               <tr>
                  {tableHead.map((head) => (
                     <th
                        key={head}
                        className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                     >
                        <Typography
                           variant="paragraph"
                           color="blue-gray"
                           className="font-normal leading-none"
                        >
                           {head}
                        </Typography>
                     </th>
                  ))}
               </tr>
            </thead>
            <tbody>
               {tableRows.map(({ name, date }, index) => {
                  const isLast = index === tableRows.length - 1
                  const classes = isLast
                     ? "p-4"
                     : "p-4 border-b border-blue-gray-50"

                  return (
                     <tr key={name}>
                        <td className={classes}>
                           <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                           >
                              {name}
                           </Typography>
                        </td>
                        <td className={classes}>
                           <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                           >
                              {date}
                           </Typography>
                        </td>
                        <td className={classes}>
                           <ModalButton
                              text={"Edit"}
                              icon={"file-edit"}
                              color="main"
                           />
                        </td>
                        <td className={classes}>
                           <ModalButton
                              text={"Delete"}
                              icon={"trash"}
                              color="red-600"
                           />
                        </td>
                     </tr>
                  )
               })}
            </tbody>
         </table>
      </Card>
   )
}
