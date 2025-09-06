// requires game.feature.npc.entities.sc-actor
// requires game.feature.character.character
// requires game.feature.interact.map-interact
// requires game.feature.trade.gui.trade-menu

export {};

declare global {
  namespace sc {
    namespace NPCRunnerEntity {
      interface Settings extends ig.Entity.Settings {
        character: sc.Character;
        animSheet: ig.AnimationSheet;
        speed: number;
        enter: sc.NpcRunnerSpawner.RunnerDestinationEntry;
        exit: sc.NpcRunnerSpawner.RunnerDestinationEntry;
        waypoints: ig.Entity[];
        partyIdx: number;
      }

      interface EnterableEntity {
        enterEntity(this: this, entity: ig.Entity): void;
        leaveEntity(this: this, entity: ig.Entity): void;
      }
    }
    interface NPCRunnerEntity extends sc.ActorEntity {
      npcEffects: ig.EffectSheet;
      characterName: null;
      character: sc.Character;
      configs: sc.Character.Data['configs'];
      pushTimer: number;
      effects: { water: ig.EffectSheet };

      initAction(
        this: this,
        enter: sc.NpcRunnerSpawner.RunnerDestinationEntry,
        exit: sc.NpcRunnerSpawner.RunnerDestinationEntry,
        waypoints: ig.Entity[],
        partyIdx: number,
      ): void;
      getDestinationEntryAndPos(
        this: this,
        entry: sc.NpcRunnerSpawner.RunnerDestinationEntry,
        destType: sc.NPC_RUNNER_DEST_TYPE,
        partyIdx: number,
        dest: Vec3,
      ): sc.NpcRunnerSpawner.RunnerDestinationEntry;
    }
    interface NPCRunnerEntityConstructor extends ImpactClass<NPCRunnerEntity> {
      new (x: number, y: number, z: number, settings: sc.NPCRunnerEntity.Settings): NPCRunnerEntity;
    }
    var NPCRunnerEntity: NPCRunnerEntityConstructor;
  }
}
