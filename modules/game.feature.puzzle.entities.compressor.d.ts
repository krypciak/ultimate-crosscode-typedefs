// requires impact.base.entity
// requires impact.base.actor-entity
// requires impact.feature.effect.effect-sheet

export {};

declare global {
  namespace ig {
    namespace ENTITY {
      namespace Compressor {
        interface Settings extends sc.MapModel.MapEntity.Settings {
          followCamera: boolean;
          basllSpeed?: number;
          fastMode?: boolean;
        }
      }
      namespace AntiCompressor {
        interface Settings extends sc.MapModel.MapEntity.Settings { }
      }
    }
  }
}
    namespace sc {
        namespace CompressedBaseEntity {
            interface Settings extends ig.Entity.Settings {}
        }
        interface CompressedBaseEntity extends ig.AnimatedEntity {
            nudgeTimer: number;
            killTimer: number;
            globalCount: number;
            speedFactor: number;
            combatant: ig.ENTITY.Combatant;
            attackInfo: sc.AttackInfo;
            fastMode: boolean;

            getElement(this: this): sc.ELEMENT;
        }
        interface CompressedBaseEntityConstructor extends ImpactClass<CompressedBaseEntity> {
            new(x: number, y: number, z: number, settings: CompressedBaseEntity.Settings): CompressedBaseEntity
        }
        let CompressedBaseEntity: CompressedBaseEntityConstructor;

        namespace CompressedWaveEntity {
            interface Settings extends CompressedBaseEntity.Settings {}
        }
        interface CompressedWaveEntity extends CompressedBaseEntity {
        }
        interface CompressedWaveEntityConstructor extends ImpactClass<CompressedWaveEntity> {
            new (x: number, y: number, z: number, settings: CompressedWaveEntity.Settings): CompressedWaveEntity
        }
        let CompressedWaveEntity: CompressedWaveEntityConstructor;

        namespace CompressedShockEntity {
            interface Settings extends CompressedBaseEntity.Settings {}
        }
        interface CompressedShockEntity extends CompressedBaseEntity {
        }
        interface CompressedShockEntityConstructor extends ImpactClass<CompressedShockEntity> {
            new (x: number, y: number, z: number, settings: CompressedWaveEntity.Settings): CompressedShockEntity
        }
        let CompressedShockEntity: CompressedShockEntityConstructor;
    }
}
