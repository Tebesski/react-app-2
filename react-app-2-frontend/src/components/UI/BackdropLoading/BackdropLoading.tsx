type BackdropLoadingProps = {
   isOpen: boolean
}

export default function BackdropLoading({ isOpen }: BackdropLoadingProps) {
   return (
      isOpen && (
         <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-sm">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-green-700"></div>
         </div>
      )
   )
}
