export type Example = () => void;

declare module 'kaplay' {
  interface KAPLAYCtx {
    example: Example;
  }
}
