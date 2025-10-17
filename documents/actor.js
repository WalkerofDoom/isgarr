export class GuismiActor extends Actor {
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
  }
}