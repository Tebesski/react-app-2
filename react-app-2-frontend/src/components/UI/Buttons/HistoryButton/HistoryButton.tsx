import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRotateBack } from "@fortawesome/free-solid-svg-icons"

type HistoryButtonProps = { onClick: () => void }

export default function HistoryButton({ onClick }: HistoryButtonProps) {
   return (
      <button onClick={onClick} className="btn medium-btn icon-btn history-btn">
         <FontAwesomeIcon size="xs" icon={faRotateBack} />
         <span>HISTORY</span>
      </button>
   )
}
