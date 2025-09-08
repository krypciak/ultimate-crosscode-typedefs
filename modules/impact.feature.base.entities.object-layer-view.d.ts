// requires impact.base.actor-entity

export {};

declare global {
  namespace ig {
    interface EntityHideManager extends ig.Class {
      hideCondition: ig.VarCondition;
      hideTimer: number;
      hidden: boolean;
      efficentMode: boolean;

      update(this: this, entity: ig.Entity): void;
      isBusy(this: this): number;
      varsChanged(this: this, entity: ig.Entity): void;
    }
    interface EntityHideManagerConstructor extends ImpactClass<EntityHideManager> {
      new (condition: string): EntityHideManager;
    }
    var EntityHideManager: EntityHideManagerConstructor;

    namespace ENTITY {
      namespace ObjectLayerView {
        type ObjectLayerNames = 'object1' | 'object2' | 'object3';

        interface Settings extends ig.AnimatedEntity.Settings {}
      }
      interface ObjectLayerView extends ig.AnimatedEntity, ig.EffectSheet.EventCallback {
        maps: ig.MAP.Background[];
        spritesInitialized: boolean;
        hideManager: Nullable<ig.EntityHideManager>;
        wallY: number;
        fx: {
          show: Nullable<ig.EffectHandle>;
          hide: Nullable<ig.EffectHandle>;
          handle: Nullable<ig.ENTITY.Effect>;
          isHiding: boolean;
        };
        _wm: ig.Config;

        onHideRequest(this: this): void;
      }
      interface ObjectLayerViewConstructor extends ImpactClass<ObjectLayerView> {
        new (
          x: number,
          y: number,
          z: number,
          settings: ig.ENTITY.ObjectLayerView.Settings,
        ): ObjectLayerView;

        staticNavBlock: boolean;
      }
      var ObjectLayerView: ObjectLayerViewConstructor;
    }
  }
}
