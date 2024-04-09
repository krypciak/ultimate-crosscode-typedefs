// requires game.feature.npc.entities.sc-actor

export {};

declare global {
  namespace sc {
    namespace PlayerPetEntity {
      interface Settings {
        petSkin: PetSkin;
      }
      interface PetSkin {}
    }
    interface PlayerPetEntity extends sc.ActorEntity {
      npcEffects: ig.EffectSheet;
      petSkin: sc.PlayerPetEntity.PetSkin;
      configs: unknown;
      pushTimer: number;
      posOffset: Vec2;
      state: number;
      respawnPos: Vec3;
      idleTimer: number;
      idleSpecials: number;
      tempHidden: boolean;
      effects: { water: ig.EffectSheet };
    }
    interface PlayerPetEntityConstructor extends ImpactClass<PlayerPetEntity> {
      new (x: number, y: number, z: number, settings: sc.PlayerPetEntity.Settings): PlayerPetEntity;
    }
    var PlayerPetEntity: PlayerPetEntityConstructor;
  }
}
