declare module "*.css" {
  interface ClassNames {
    [className: string]: string;
  }
  const classNames: ClassNames;
  export = classNames;
}
declare module "*.module.css" {
  interface ClassNames {
    [className: string]: string;
  }
  const classNames: ClassNames;
  export = classNames;
}
declare module "*.svg";
declare module "*.png";
declare module "*.jpg";

declare module "*.png" {
  const value: any;
  export = value;
}
