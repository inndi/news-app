import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ModalData {
  id: string;
  props?: { [key: string]: any };
}

export const MODAL_IDS = {
  login: 'login',
  register: 'register',
};

const initialState: ModalData[] = [];

export const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    openModal: {
      reducer: (
        state,
        action: PayloadAction<ModalData>, // action.payload =  {id, props}
      ) => {
        state.push(action.payload);
      },
      prepare: (id: string, props: { [key: string]: unknown }) => {
        return { payload: { id, props } };
      },
    },
    closeModal(
      state,
      action: PayloadAction<string | undefined>, // action.payload = id
    ) {
      action.payload && state.length > 1
        ? state.filter((modal) => modal.id !== action.payload)
        : state.pop();
    },
  },
});

export const { openModal, closeModal } = modalsSlice.actions;
export default modalsSlice.reducer;
