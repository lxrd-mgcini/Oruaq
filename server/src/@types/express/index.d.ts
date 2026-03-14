
declare global {
  namespace Express {
    export interface Request {
      user?: {
        username: string;
        email: string;
        password: string;
        role: RoleEnum;
        verified: boolean;
        _id?: any;
      };
    }
  }
}

export {};
