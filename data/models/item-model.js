class ItemModel extends foundry.abstract.DataModel {
  static defineSchema() {
    const fields = foundry.data.fields;
    return {
      description: new fields.HTMLField(),
    }
  }
}

export class SpeciesData extends ItemModel {
    static defineSchema() {
        const fields = foundry.data.fields;
        return {
            ...super.defineSchema(),
            custoPontos: new fields.NumberField({ initial: 0, integer: true }),
            valorRacialSangue: new fields.NumberField({ initial: 0, integer: true })
        };
    }
}

export class PathData extends ItemModel {
    static defineSchema() {
        const fields = foundry.data.fields;
        return {
            ...super.defineSchema(),
            // Path-specific fields go here
        };
    }
}

export class WeaponData extends ItemModel {
    static defineSchema() {
        const fields = foundry.data.fields;
        return {
            ...super.defineSchema(),
            damage: new fields.StringField({ initial: "1d6" }),
            range: new fields.StringField({ initial: "Melee" })
        };
    }
}

export class ArmorData extends ItemModel {
    static defineSchema() {
        const fields = foundry.data.fields;
        return {
            ...super.defineSchema(),
            dr: new fields.NumberField({ initial: 1, integer: true, min: 0 })
        };
    }
}

export class EstadoData extends ItemModel {
    static defineSchema() {
        const fields = foundry.data.fields;
        return {
            ...super.defineSchema(),
            // Estado-specific fields go here
        };
    }
}