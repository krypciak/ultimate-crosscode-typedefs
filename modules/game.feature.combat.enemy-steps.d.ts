// requires impact.base.animation
// requires impact.base.action
// requires impact.base.entity
// requires game.feature.combat.entities.enemy

export {};

declare global {
  namespace ig {
    namespace ACTION_STEP {
      namespace CHANGE_ENEMY_ANNOTATION {
        interface Settings {
          active?: keyof typeof sc.ENEMY_ANNO_ACTIVE;
          passive?: keyof typeof sc.ENEMY_ANNO_PASSIVE;
          weapon?: keyof typeof sc.ENEMY_ANNO_WEAPON;
          extra?: string[];
          element?: keyof typeof sc.ENEMY_ANNO_ELEMENT;
        }
      }
      interface CHANGE_ENEMY_ANNOTATION extends ig.ActionStepBase {
        _wm: ig.Config;
      }
      interface CHANGE_ENEMY_ANNOTATION_CONSTRUCTOR extends ImpactClass<CHANGE_ENEMY_ANNOTATION> {
        new (settings: ig.ACTION_STEP.CHANGE_ENEMY_ANNOTATION.Settings): CHANGE_ENEMY_ANNOTATION;
      }
      var CHANGE_ENEMY_ANNOTATION: CHANGE_ENEMY_ANNOTATION_CONSTRUCTOR;

      namespace DO_ENEMY_ACTION {
        interface Settings {
          actionName: string;
          noStateReset: boolean;
        }
      }
      interface DO_ENEMY_ACTION extends ig.ActionStepBase {
        actionName: string;
        _wm: ig.Config;
        noStateReset: boolean;
      }
      interface DO_ENEMY_ACTION_CONSTRUCTOR extends ImpactClass<DO_ENEMY_ACTION> {
        new (settings: ig.ACTION_STEP.DO_ENEMY_ACTION.Settings): DO_ENEMY_ACTION;
      }
      var DO_ENEMY_ACTION: DO_ENEMY_ACTION_CONSTRUCTOR;

      namespace DO_ENEMY_ACTION_INLINE {
        interface Settings {
          actionName: string;
          stateReset: boolean;
        }
      }
      interface DO_ENEMY_ACTION_INLINE extends ig.ActionStepBase {
        actionName: string;
        _wm: ig.Config;
        stateReset: boolean;
      }
      interface DO_ENEMY_ACTION_INLINE_CONSTRUCTOR extends ImpactClass<DO_ENEMY_ACTION_INLINE> {
        new (settings: ig.ACTION_STEP.DO_ENEMY_ACTION_INLINE.Settings): DO_ENEMY_ACTION_INLINE;
      }
      var DO_ENEMY_ACTION_INLINE: DO_ENEMY_ACTION_INLINE_CONSTRUCTOR;

      namespace SET_AGGRESSION {
        interface Settings {
          value: keyof typeof sc.ENEMY_AGGRESSION;
        }
      }
      interface SET_AGGRESSION extends ig.ActionStepBase {
        value: sc.ENEMY_AGGRESSION;
        _wm: ig.Config;
      }
      interface SET_AGGRESSION_CONSTRUCTOR extends ImpactClass<SET_AGGRESSION> {
        new (settings: ig.ACTION_STEP.SET_AGGRESSION.Settings): SET_AGGRESSION;
      }
      var SET_AGGRESSION: SET_AGGRESSION_CONSTRUCTOR;

      namespace SET_ENEMY_ELEMENT_MODE {
        interface Settings {
          element: keyof typeof sc.ELEMENT;
          skipEffect: boolean;
        }
      }
      interface SET_ENEMY_ELEMENT_MODE extends ig.ActionStepBase {
        _wm: ig.Config;
        element: sc.ELEMENT;
        skipEffect: boolean;
      }
      interface SET_ENEMY_ELEMENT_MODE_CONSTRUCTOR extends ImpactClass<SET_ENEMY_ELEMENT_MODE> {
        new (settings: ig.ACTION_STEP.SET_ENEMY_ELEMENT_MODE.Settings): SET_ENEMY_ELEMENT_MODE;
      }
      var SET_ENEMY_ELEMENT_MODE: SET_ENEMY_ELEMENT_MODE_CONSTRUCTOR;
    }
  }
}
