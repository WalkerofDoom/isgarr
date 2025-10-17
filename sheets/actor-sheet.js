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

    // Edit Item
    html.find('.item-edit').click(ev => {
      const li = $(ev.currentTarget).parents(".item");
      const item = this.actor.items.get(li.data("itemId"));
      item.sheet.render(true);
    });

    // Delete Item
    html.find('.item-delete').click(ev => {
      const li = $(ev.currentTarget).parents(".item");
      this.actor.deleteEmbeddedDocuments("Item", [li.data("itemId")]);
    });
  }
}