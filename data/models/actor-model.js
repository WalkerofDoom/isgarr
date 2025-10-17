export class ActorModel extends foundry.abstract.DataModel {
  static defineSchema() {
    const fields = foundry.data.fields;
    return {
      attributes: new fields.SchemaField({
        for: new fields.SchemaField({
          value: new fields.NumberField({ initial: 10, integer: true, min: 0 })
        }),
        con: new fields.SchemaField({
          value: new fields.NumberField({ initial: 10, integer: true, min: 0 })
        }),
        agi: new fields.SchemaField({
          value: new fields.NumberField({ initial: 10, integer: true, min: 0 })
        }),
        des: new fields.SchemaField({
          value: new fields.NumberField({ initial: 10, integer: true, min: 0 })
        }),
        int: new fields.SchemaField({
          value: new fields.NumberField({ initial: 10, integer: true, min: 0 })
        }),
        sab: new fields.SchemaField({
          value: new fields.NumberField({ initial: 10, integer: true, min: 0 })
        }),
        car: new fields.SchemaField({
          value: new fields.NumberField({ initial: 10, integer: true, min: 0 })
        }),
      }),
      resources: new fields.SchemaField({
        sangue: new fields.SchemaField({
          value: new fields.NumberField({ initial: 10, integer: true, min: 0 }),
          max: new fields.NumberField({ initial: 10, integer: true, min: 0 })
        }),
        mana: new fields.SchemaField({
          value: new fields.NumberField({ initial: 10, integer: true, min: 0 }),
          max: new fields.NumberField({ initial: 10, integer: true, min: 0 })
        }),
        fe: new fields.SchemaField({
          value: new fields.NumberField({ initial: 10, integer: true, min: 0 }),
          max: new fields.NumberField({ initial: 10, integer: true, min: 0 })
        })
      }),
      actionPoints: new fields.SchemaField({
        value: new fields.NumberField({ initial: 2, integer: true, min: 0 }),
        max: new fields.NumberField({ initial: 2, integer: true, min: 0 })
      }),
      progression: new fields.SchemaField({
        xp: new fields.NumberField({ initial: 0, integer: true, min: 0 }),
        xpMax: new fields.NumberField({ initial: 100, integer: true, min: 0 }),
        level: new fields.NumberField({ initial: 1, integer: true, min: 0 }),
        creationPoints: new fields.NumberField({ initial: 10, integer: true, min: 0 })
      })
    };
  }
}