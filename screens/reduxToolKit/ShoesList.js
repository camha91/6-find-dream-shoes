import {createAsyncThunk} from '@reduxjs/toolkit';

export const getProduct = createAsyncThunk(
  'product/getProduct',
  async params => {
    const res = await fetch('http://svcy3.myclass.vn/api/Product');
    const json = await res.json();
    return json.content;
  },
);
