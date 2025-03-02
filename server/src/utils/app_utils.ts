export const AppUtils = {
  dictToArray: (dict: { [key: string]: any }): Array<any> =>
    Object.keys(dict).map((name) => dict[name]),

  generateCode: (): string => {
    return Math.floor(1000 + Math.random() * 9000).toString();
  },
};
