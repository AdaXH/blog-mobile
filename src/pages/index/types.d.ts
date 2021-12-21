export interface Img {
  _id: string;
  img: string;
}

type Config = { config?: { bgImg?: Img[]; blogTitle?: string } };

interface MomentItemModel {
  title: string;
  date: string;
  content: string;
  _id: string;
}

type MomentModel = { data: MomentItemModel[] };
