import { createSlice } from "@reduxjs/toolkit";

const initialExpenseState = {
  expenseItems: [],
};

const expenseSlice = createSlice({
  name: "expense",
  initialState: initialExpenseState,
  reducers: {
    setExpenses(state, action) {
      state.expenseItems = action.payload;
    },
    addExpense(state, action) {
      state.expenseItems.push(action.payload);
    },
    removeExpense(state, action) {
      state.expenseItems = state.expenseItems.filter(
        (item) => item.id !== action.payload
      );
    },
    updateExpense(state, action) {
      const updatedData = action.payload;
      const item = state.expenseItems.find((i) => i.id === updatedData.id);
      if (item) {
        item.description = updatedData.description;
        item.amount = updatedData.amount;
        item.category = updatedData.category;
      }
    },
  },
});

export const { setExpenses, addExpense, removeExpense, updateExpense } =
  expenseSlice.actions;
export default expenseSlice.reducer;
