import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface IHeaderDropdownLinks {
  href: string;
  text: string;
  key: number;
  icon: any | IconDefinition;
  type: string;
  onClickHandler: () => void | null;
}

export interface IUsers {
  id: number;
  firstName: string;
  lastName: string;
  subject: string;
  img: string;
  rating?: number;
}

export interface IBanner {
  img?: string;
  title?: string;
  text?: string;
  bgSize?: string;
}

export interface IPosts {
  uid: string;
  id: number;
  title: string;
  date: string;
  views: number;
  img?: string;
  content?: string;
  adderId?: string;
  organizationId?: string;
  postType: string;
}
