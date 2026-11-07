// requires impact.base.entity
// requires impact.feature.effect.effect-sheet
// requires game.feature.combat.entities.ball
// requires game.feature.menu.map-model

export {};

declare global {
  namespace ig.ENTITY {
    namespace KeyPanel {
      interface Settings extends ig.Entity.Settings {
        keyType: 'REGULAR' | 'MASTER';
      }

      interface KeyTypeConfig {
        item: sc.AREA_ITEM_TYPE;
        panel: { size: Vec3; sprite: Vec2 & { w: number; h: number } };
        fx: { active: string; charged: string };
        ballInfo: sc.BallInfo;
      }
    }

    interface KeyPanel extends ig.AnimatedEntity {
      _wm: ig.Config;
      effects: {
        key: ig.EffectSheet;
        activeHandle: Nullable<ig.EffectHandle>;
        chargedHandle: Nullable<ig.EffectHandle>;
      };
      throwerEntity: Nullable<ig.ENTITY.Player>;
      active: boolean;
      keyType: ig.ENTITY.KeyPanel.KeyTypeConfig;

      setThrower(this: this, thrower: Nullable<ig.ENTITY.Player>): void;
      setActive(this: this, active: boolean): void;
      hasKeys(this: this): number;
    }
    interface KeyPanelConstructor extends ImpactClass<KeyPanel> {
      new (x: number, y: number, z: number, settings: ig.ENTITY.KeyPanel.Settings): KeyPanel;
    }
    var KeyPanel: KeyPanelConstructor;
  }
}
