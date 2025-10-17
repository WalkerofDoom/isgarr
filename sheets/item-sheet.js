export class GuismiItemSheet extends ItemSheet {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["guismi", "sheet", "item"],
      width: 520,
      height: 480,
    });
  }

  get template() {
    return `systems/guismi/templates/item/${this.item.type}-sheet.html`;
  }
}