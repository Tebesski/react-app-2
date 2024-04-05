type AddCardButtonProps = { onClick: () => void }

export default function AddCardButton({ onClick }: AddCardButtonProps) {
   return (
      <button onClick={onClick} className="btn large-btn outlined-dashed-btn">
         Add new card
      </button>
   )
}
