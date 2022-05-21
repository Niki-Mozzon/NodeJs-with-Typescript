export class PageModel {
  titlePage: string;
  path: string;
  model: any = null;
  style: string = '';
  constructor(titlePage: string, path: string) {
    this.titlePage = titlePage;
    this.path = path;
  }

  setStyle(style: string) {
    this.style = style;
    return this;
  }

  setModel(model: any) {
    this.model = model;
    return this;
  }
}
