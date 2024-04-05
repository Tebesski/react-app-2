import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit } from "@fortawesome/free-regular-svg-icons"

type EditCardModalButtonProps = { onClick: () => void }

export default function EditCardModalButton({
   onClick,
}: EditCardModalButtonProps) {
   return (
      <button
         onClick={onClick}
         className="btn small-btn icon-btn outlined-dashed-btn"
      >
         <FontAwesomeIcon size="xs" icon={faEdit} />
         <span>Edit task</span>
      </button>
   )
}
