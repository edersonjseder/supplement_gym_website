import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalValues: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { product, quantity } = action.payload;
      console.log("addToCart - product: ", product);
      console.log("addToCart - quantity: ", quantity);
      const indexProductId = state.items.findIndex(
        (item) => item.product.id === product.id
      );
      console.log("indexProductId: ", indexProductId);
      if (indexProductId >= 0) {
        state.items[indexProductId].quantity += quantity;
      } else {
        state.items.push({ product, quantity });
      }
      state.items.forEach((item) => {
        console.log("Item =====> ", item);
      });
    },
    changeQuantity(state, action) {
      const { product, quantity } = action.payload;
      const indexProductId = state.items.findIndex(
        (item) => item.product.id === product.id
      );
      state.items.forEach((item) => {
        console.log("changeQuantity - Item =====> ", item.product);
      });
      console.log("changeQuantity - product: ", product);
      if (quantity > 0) {
        state.items[indexProductId].quantity = quantity;
      } else {
        // delete state.items[indexProductId];
        console.log("changeQuantity - ELSE - product: ", product);
        const removedItem = state.items.filter(
          (item) => item.product.id !== product.id
        );
        console.log("changeQuantity - ELSE - removedItem: ", removedItem);
        state.items = removedItem;
      }
    },
    removeItemFromCart(state, action) {
      const product = action.payload;

      console.log("removeItemFromCart - product: ", action.payload);

      const removedItem = state.items.filter(
        (item) => item.product.id !== product.id
      );

      // console.log("changeQuantity - removeItem - removedItem: ", removedItem);
      state.items = removedItem;
    },
    CALC_TOTAL_VALUE(state, action) {
      const products = action.payload;
      console.log("CALC_VALUE - productSlice: ", products);
      const array = [];
      products.map((item) => {
        const { product, quantity } = item;
        const productValue = Number(product.newPrice) * quantity;
        return array.push(productValue);
      });
      const totalValue = array.reduce((a, b) => {
        return a + b;
      }, 0);
      state.totalValues = totalValue;
    },
  },
});

export const {
  addToCart,
  changeQuantity,
  removeItemFromCart,
  CALC_TOTAL_VALUE,
} = cartSlice.actions;
export default cartSlice.reducer;
