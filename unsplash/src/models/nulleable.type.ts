export type TNulleable<T, K extends keyof T = keyof T> = {
  [P in keyof T]: P extends K ? T[P] | null : never;
};
