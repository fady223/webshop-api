/* tslint:disable */
/* eslint-disable */

// ######################################## THIS FILE WAS GENERATED BY MONGOOSE-TSGEN ######################################## //

// NOTE: ANY CHANGES MADE WILL BE OVERWRITTEN ON SUBSEQUENT EXECUTIONS OF MONGOOSE-TSGEN.

/**
 * Lean version of CounterDocument
 *
 * This has all Mongoose getters & functions removed. This type will be returned from `CounterDocument.toObject()`. To avoid conflicts with model names, use the type alias `CounterObject`.
 * ```
 * const counterObject = counter.toObject();
 * ```
 */
export type Counter = {
  counterType: string;
  sequence_nr: number;
  _id: string;
};

/**
 * Lean version of OrderDetailsDocument
 *
 * This has all Mongoose getters & functions removed. This type will be returned from `OrderDetailsDocument.toObject()`. To avoid conflicts with model names, use the type alias `OrderDetailsObject`.
 * ```
 * const orderdetailsObject = orderdetails.toObject();
 * ```
 */
export type OrderDetails = {
  _id: string;
  deleted_at?: Date;
  createdAt?: Date;
  updatedAt?: Date;
};

/**
 * Lean version of ProductDocument
 *
 * This has all Mongoose getters & functions removed. This type will be returned from `ProductDocument.toObject()`. To avoid conflicts with model names, use the type alias `ProductObject`.
 * ```
 * const productObject = product.toObject();
 * ```
 */
export type Product = {
  name: string;
  productCategories: string[];
  price: number;
  _id: string;
};

/**
 * Lean version of ProductCategoryDocument
 *
 * This has all Mongoose getters & functions removed. This type will be returned from `ProductCategoryDocument.toObject()`. To avoid conflicts with model names, use the type alias `ProductCategoryObject`.
 * ```
 * const productcategoryObject = productcategory.toObject();
 * ```
 */
export type ProductCategory = {
  name: string;
  deleted_at?: Date;
  _id: string;
  createdAt?: Date;
  updatedAt?: Date;
};

/**
 * Lean version of UserDocument
 *
 * This has all Mongoose getters & functions removed. This type will be returned from `UserDocument.toObject()`. To avoid conflicts with model names, use the type alias `UserObject`.
 * ```
 * const userObject = user.toObject();
 * ```
 */
export type User = {
  username: string;
  password: string;
  token?: string;
  email: {
    emailStr: string;
    verified: string;
  };
  _id: string;
  createdAt?: Date;
  updatedAt?: Date;
};

/**
 * Lean version of UserAddressDocument
 *
 * This has all Mongoose getters & functions removed. This type will be returned from `UserAddressDocument.toObject()`. To avoid conflicts with model names, use the type alias `UserAddressObject`.
 * ```
 * const useraddressObject = useraddress.toObject();
 * ```
 */
export type UserAddress = {
  userId: string;
  first_name: string;
  last_name: string;
  city: string;
  postal_code: string;
  country: string;
  mobile: string;
  _id: string;
};
