// requires impact.base.animation
// requires impact.base.action
// requires impact.base.entity
// requires game.feature.player.player-config
// requires game.feature.combat.model.combat-params
// requires impact.feature.camera.camera
// requires game.feature.combat.entities.food-icon
// requires game.feature.party.party

export {};

declare global {
  namespace ig {
    namespace EVENT_STEP {
      namespace RESET_SKILL_TREE {
        interface Settings {
          element?: keyof typeof sc.ELEMENT;
        }
      }
      interface RESET_SKILL_TREE extends ig.EventStepBase {
        element: sc.ELEMENT;
        _wm: ig.Config;
      }
      interface RESET_SKILL_TREEConstructor extends ImpactClass<RESET_SKILL_TREE> {
        new (settings: ig.EVENT_STEP.RESET_SKILL_TREE.Settings): RESET_SKILL_TREE;
      }
      var RESET_SKILL_TREE: RESET_SKILL_TREEConstructor;
    }
    namespace ACTION_STEP {
      interface SET_PLAYER_INVINCIBLE extends ActionStepBase {
        factor: number;

        run(this: this, target: ig.ENTITY.Player): boolean;
      }
      interface SET_PLAYER_INVINCIBLE_CONSTRUCTOR extends ImpactClass<SET_PLAYER_INVINCIBLE> {}
      var SET_PLAYER_INVINCIBLE: SET_PLAYER_INVINCIBLE_CONSTRUCTOR;

      namespace SHOW_FOOD_ICON {
        interface Settings {
          icon: keyof typeof sc.FOOD_SPRITE;
          offset?: Nullable<Vec2>;
        }
      }
      interface SHOW_FOOD_ICON extends ActionStepBase {
        icon: number;
        offset?: Nullable<Vec2>;

        start(this: this, target: ig.ENTITY.Combatant): void;
      }
      interface SHOW_FOOD_ICON_CONSTRUCTOR extends ImpactClass<SHOW_FOOD_ICON> {
        new (settings: SHOW_FOOD_ICON.Settings): SHOW_FOOD_ICON;
      }
      var SHOW_FOOD_ICON: SHOW_FOOD_ICON_CONSTRUCTOR;

      namespace SET_PLAYER_ACTION_BLOCK {
        interface BlockData {
          action: number;
          dash: number;
          charge: number;
          reaim: number;
          move: number;
        }
      }
    }
  }
}
