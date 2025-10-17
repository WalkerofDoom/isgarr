export class GuismiActor extends Actor {
  _preCreateEmbeddedDocuments(embeddedName, documents, result, options, userId) {
    if (embeddedName === "Item") {
      const updates = [];
      for (let doc of documents) {
        if (doc.type === "species") {
          // Prevent adding more than one species
          const hasSpecies = this.items.some(item => item.type === "species");
          if (hasSpecies) {
            ui.notifications.error("A character can only have one species.");
            return false; // Prevent creation
          }

          const custoPontos = doc.system.custoPontos || 0;
          const valorRacialSangue = doc.system.valorRacialSangue || 0;

          this.update({
            "system.progression.creationPoints": this.system.progression.creationPoints - custoPontos,
            "system.resources.sangue.value": this.system.resources.sangue.value + valorRacialSangue,
            "system.resources.sangue.max": this.system.resources.sangue.max + valorRacialSangue,
          });
        }
      }
    }
    return super._preCreateEmbeddedDocuments(embeddedName, documents, result, options, userId);
  }

  prepareDerivedData() {
    super.prepareDerivedData();

    const systemData = this.system;
    const attributes = systemData.attributes;

    // Calculate modifiers
    for (let attr of Object.values(attributes)) {
      attr.m2 = Math.floor(attr.value / 2);
      attr.m5 = Math.floor(attr.value / 5);
      attr.m10 = Math.floor(attr.value / 10);
    }

    // Calculate defenses
    systemData.defenses = {
      reflexos: Math.floor((attributes.agi.value + attributes.des.value) / 2),
      fortitude: Math.floor((attributes.for.value + attributes.con.value) / 2),
      vontade: Math.floor((attributes.int.value + attributes.sab.value) / 2)
    };

    // Calculate maximum resources
    systemData.resources.sangue.max = attributes.con.value * 2;
    systemData.resources.mana.max = attributes.int.value * 2;
    systemData.resources.fe.max = attributes.sab.value * 2;

    // Calculate action points
    systemData.actionPoints.max = 2 + attributes.agi.m5;

    // Calculate Damage Reduction
    systemData.dr = this.items
      .filter(item => item.type === 'armor' && item.system.equipped)
      .reduce((total, armor) => total + armor.system.dr, 0);
  }

  async levelUp() {
    const currentLevel = this.system.progression.level;
    const newLevel = currentLevel + 1;
    const newXpMax = newLevel * 100; // Example formula

    await this.update({
      "system.progression.level": newLevel,
      "system.progression.xp": 0,
      "system.progression.xpMax": newXpMax
    });

    ui.notifications.info(`${this.name} has reached level ${newLevel}!`);
  }
}