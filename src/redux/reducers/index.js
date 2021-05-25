/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import { combineReducers } from 'redux';

import user from "./user";
import loading from "./loading";
import categories from "./categories";
import discountCodes from "./discountCodes";
import products from "./products";
import productsSearched from "./productsSearched";
import personalDiscountCodes from "./personalDiscountCodes";

const rootReducer = combineReducers({
    user,
    loading,
    categories,
    discountCodes,
    products,
    productsSearched,
    personalDiscountCodes
});

export default rootReducer;