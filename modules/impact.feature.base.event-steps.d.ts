// requires impact.base.utils
// requires impact.base.event
// requires impact.base.action

export {};

declare global {
  namespace ig {
    namespace EVENT_STEP {
      interface TELEPORT extends ig.EventStepBase {
        map: string;
        marker?: string;
      }
      interface TELEPORTConstructor extends ImpactClass<TELEPORT> {
        new (settings: { map: string; marker?: string }): TELEPORT;
      }
      var TELEPORT: TELEPORTConstructor;

      namespace ChangeVarBase {
        type ChangeType = 'set' | 'add' | 'sub' | 'mul' | 'div' | 'mod' | 'and' | 'or' | 'xor';
        interface Settings<T extends ig.VarValue> {
          varName: ig.Event.VarExpression<T>;
          changeType: ChangeVarBase.ChangeType;
          value: T;
        }
      }
      interface ChangeVarBase<T extends ig.VarValue> {
        varName: ig.Event.VarExpression<T>;
        changeType: ChangeVarBase.ChangeType;
        value: T;
      }
      interface ChangeVarBaseConstructor<Instance, Type extends ig.VarValue>
        extends ImpactClass<Instance> {
        new (settings: ChangeVarBase.Settings<Type>): Instance;
      }

      interface CHANGE_VAR_STRING extends ig.EventStepBase, ChangeVarBase<string> {}
      interface CHANGE_VAR_STRING_CONSTRUCTOR
        extends ChangeVarBaseConstructor<CHANGE_VAR_STRING, string> {}
      var CHANGE_VAR_STRING: CHANGE_VAR_STRING_CONSTRUCTOR;

      interface CHANGE_VAR_BOOL extends ig.EventStepBase, ChangeVarBase<boolean> {}
      interface CHANGE_VAR_BOOL_CONSTRUCTOR
        extends ChangeVarBaseConstructor<CHANGE_VAR_BOOL, boolean> {}
      var CHANGE_VAR_BOOL: CHANGE_VAR_BOOL_CONSTRUCTOR;

      interface CHANGE_VAR_NUMBER extends ig.EventStepBase, ChangeVarBase<number> {}
      interface CHANGE_VAR_NUMBER_CONSTRUCTOR
        extends ChangeVarBaseConstructor<CHANGE_VAR_NUMBER, number> {}
      var CHANGE_VAR_NUMBER: CHANGE_VAR_NUMBER_CONSTRUCTOR;

      interface CHANGE_VAR_VEC2 extends ig.EventStepBase, ChangeVarBase<Vec2> {}
      interface CHANGE_VAR_VEC2_CONSTRUCTOR
        extends ChangeVarBaseConstructor<CHANGE_VAR_VEC2, Vec2> {}
      var CHANGE_VAR_VEC2: CHANGE_VAR_VEC2_CONSTRUCTOR;

      interface CHANGE_VAR_VEC3 extends ig.EventStepBase, ChangeVarBase<Vec3> {}
      interface CHANGE_VAR_VEC3_CONSTRUCTOR
        extends ChangeVarBaseConstructor<CHANGE_VAR_VEC3, Vec3> {}
      var CHANGE_VAR_VEC3: CHANGE_VAR_VEC3_CONSTRUCTOR;

      interface CHANGE_VAR_LANG extends ig.EventStepBase, ChangeVarBase<ig.LangLabel.Data> {}
      interface CHANGE_VAR_LANG_CONSTRUCTOR
        extends ChangeVarBaseConstructor<CHANGE_VAR_LANG, ig.LangLabel.Data> {}
      var CHANGE_VAR_LANG: CHANGE_VAR_LANG_CONSTRUCTOR;

      interface PLAY_SOUND extends ig.EventStepBase {
        sound: ig.Sound;
        position: Vec2;
        loop: boolean;
        settings: { offset: number; startTime: number; speed: number };
        name: string;
        speed: null;
      }
      interface PLAY_SOUNDConstructor extends ImpactClass<PLAY_SOUND> {
        new (settings: {
          sound: string;
          volume?: number;
          variance?: number;
          position?: Vec2;
          name?: string;
          loop?: boolean;
          offset?: number;
          startTime?: number;
          speed?: number;
        }): PLAY_SOUND;
      }
      var PLAY_SOUND: PLAY_SOUNDConstructor;
    }
  }
}
