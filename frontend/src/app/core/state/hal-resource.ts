export interface HalResourceLink {
  href:string;
  title:string;
}

/*
 * TODO: This typing is not perfect, since overriding with more specific keys that are optional
 * e.g. `project?:HalResourceLink;` is not possible. This would result in a possible undefined type.
 * I'm not sure how to fix this, but it works for now.
 */
export type HalResourceLinks = Record<string, HalResourceLink|HalResourceLink[]>;

export type CustomTextFormat = 'markdown'|'custom';

export interface CustomText {
  format:CustomTextFormat;
  raw:string;
  html:string;
}
