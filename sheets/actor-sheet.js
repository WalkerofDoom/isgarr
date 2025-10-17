export class GuismiActorSheet extends ActorSheet {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["guismi", "sheet", "actor"],
      template: "systems/guismi/sheets/actor-sheet.html",
      width: 600,
      height: 600,
      tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "attributes" }]
    });
  }

  activateListeners(html) {
    super.activateListeners(html);

    // Everything you read here will be executed after the sheet is rendered
  }
}