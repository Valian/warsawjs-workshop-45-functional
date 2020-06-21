type Func = (...args: any[]) => any;

export const bind = (_this: any, func: Func): Func => (...args) => func.apply(_this, args)
