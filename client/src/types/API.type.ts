export type registerType = {
  //   name: string;
  email: string;
  password: string;
  username:string
};

export type loginType = { email: string; password: string };

export type emailSignupType = { email: string };

export type LoginResponseType = {
  message: string;
  user: {
    _id: string;
    username: string;
    email: string;
    role: string;
    verified: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
    resetPasswordExpiryDate: string;
    resetPasswordToken: string;
  };
};

export type ProductResponseType = {
  _id: string;
  name: string;
  description: string;
  price: string;
  imgUrl: string[];
  tags: string[];
  updatedAt: string;
  createdAt: string;
  __v: number;
 
};

type OrderItem ={
  _id:string,
  quantity:number
}

export type OrderRequestType = {
 paymentMethod : string,
 phoneNumber: string,
 items: OrderItem[],
 
};
