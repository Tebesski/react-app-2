import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ModalState } from "@/types/reducer.types"

export const initialState: ModalState = {
   addTaskModal: false,
   addTaskListModal: false,
   addBoardModal: false,
   logHistoryModal: false,
   boardManagerModal: false,
   taskDetailsModal: false,
   cardPopover: false,
   listPopover: false,
}

const modalSlice = createSlice({
   name: "modalReducer",
   initialState,
   reducers: {
      openModal(state, action: PayloadAction<keyof ModalState>) {
         state[action.payload] = true
      },

      closeModal(state, action: PayloadAction<keyof ModalState>) {
         state[action.payload] = false
      },
   },
})

export const { openModal, closeModal } = modalSlice.actions
export default modalSlice.reducer
