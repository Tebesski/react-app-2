import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type AddListButtonProps = {
   onClick: () => void
}

export default function AddListButton({ onClick }: AddListButtonProps) {
   return (
      <button className="btn large-btn icon-btn add-list-btn" onClick={onClick}>
         <FontAwesomeIcon icon={faPlus} />
         <span>CREATE NEW LIST</span>
      </button>
   )
}
