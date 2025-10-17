import { GuismiActor } from "./documents/actor.js";
import { GuismiItem } from "./documents/item.js";
import { ActorModel } from "./data/models/actor-model.js";
import { ItemModel, SpeciesData, PathData, WeaponData, ArmorData, EstadoData } from "./data/models/item-model.js";
import { GuismiActorSheet } from "./sheets/actor-sheet.js";
import { GuismiItemSheet } from "./sheets/item-sheet.js";

Hooks.once("init", () => {
  console.log("guismi | Initializing Survival Guide in an Improvised World");

  // Assign custom classes
  CONFIG.Actor.documentClass = GuismiActor;
  CONFIG.Item.documentClass = GuismiItem;

  // Assign custom data models
  CONFIG.Actor.dataModels.character = ActorModel;
  CONFIG.Item.dataModels.item = ItemModel;
  CONFIG.Item.dataModels.species = SpeciesData;
  CONFIG.Item.dataModels.path = PathData;
  CONFIG.Item.dataModels.weapon = WeaponData;
  CONFIG.Item.dataModels.armor = ArmorData;
  CONFIG.Item.dataModels.estado = EstadoData;

  // Register sheet application classes
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("guismi", GuismiActorSheet, { makeDefault: true });
  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("guismi", GuismiItemSheet, { makeDefault: true });
});