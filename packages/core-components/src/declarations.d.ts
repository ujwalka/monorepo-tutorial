declare module "*.module.scss" {
  const css: { readonly [key: string]: string };
  export default css;
}