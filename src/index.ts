type Func = (...args: any[]) => any;

export const bind = (_this: any, func: Func, ...boundArgs: any[]): Func => (...args) => func.apply(_this, boundArgs.concat(args))
