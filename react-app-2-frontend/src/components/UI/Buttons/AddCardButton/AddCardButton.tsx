type AddCardButtonProps = { onClick: () => void }

export default function AddCardButton({ onClick }: AddCardButtonProps) {
   return (
      <button
         onClick={onClick}
         className="btn large-btn outlined-dashed-btn"
         data-testid="add-card-button"
      >
         Add new card
      </button>
   )
}
