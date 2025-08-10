export {};

declare global {
  namespace ig {
    type VarValue = number | boolean | string | LangLabel.Data | Vec2 | Vec3 | undefined | null;

    interface KnownVars {
      'arena.active': boolean;
      'plot.line': number;
      'plot.metaSpace': boolean;
    }

    interface VarPathResolver {
      path: Nullable<string>;
      index: number;

      resolve(path: string): Nullable<string>;
      _recResolve(isRoot: boolean): Nullable<string>;
    }
    var VarPathResolver: VarPathResolver;

    namespace Vars {
      interface Accessor {
        onVarAccess(this: this, path: string, keys: string[]): VarValue | void;
      }

      interface AccessorValue {
        accessor: ig.Vars.Accessor;
        domain: string;
        editor?: Nullable<string>;
      }

      type Storage = any;

      interface VarAccessObject {
        obj: Record<string, any>;
        key: string;
      }
    }

    interface Vars extends ig.Class {
      currentLevelName: string;
      varAccessors: ig.Vars.AccessorValue[];
      entityAccessors: ig.Entity[];
      storage: ig.Vars.Storage;

      get<K extends keyof ig.KnownVars>(this: this, path: K): ig.KnownVars[K];
      get<T = ig.VarValue>(this: this, path: string): T;
      _get(this: this, path: string): Nullable<VarValue>;
      _getAccessObject(this: this, path: string): Nullable<ig.Vars.VarAccessObject>;
      setDefault<K extends keyof ig.KnownVars>(this: this, path: K, value: ig.KnownVars[K]): void;
      setDefault<T = ig.VarValue>(this: this, path: string, value: T): void;
      set<K extends keyof ig.KnownVars>(this: this, path: K, value: ig.KnownVars[K]): void;
      set<T = ig.VarValue>(this: this, path: string, value: T): void;
      add<K extends keyof ig.KnownVars>(this: this, path: K, value: ig.KnownVars[K]): void;
      add<T = ig.VarValue>(this: this, path: string, value: T): void;
      sub<K extends keyof ig.KnownVars>(this: this, path: K, value: ig.KnownVars[K]): void;
      sub<T = ig.VarValue>(this: this, path: string, value: T): void;
      mul<K extends keyof ig.KnownVars>(this: this, path: K, value: ig.KnownVars[K]): void;
      mul<T = ig.VarValue>(this: this, path: string, value: T): void;
      div<K extends keyof ig.KnownVars>(this: this, path: K, value: ig.KnownVars[K]): void;
      div<T = ig.VarValue>(this: this, path: string, value: T): void;
      mod<K extends keyof ig.KnownVars>(this: this, path: K, value: ig.KnownVars[K]): void;
      mod<T = ig.VarValue>(this: this, path: string, value: T): void;
      and<K extends keyof ig.KnownVars>(this: this, path: K, value: ig.KnownVars[K]): void;
      and<T = ig.VarValue>(this: this, path: string, value: T): void;
      or<K extends keyof ig.KnownVars>(this: this, path: K, value: ig.KnownVars[K]): void;
      or<T = ig.VarValue>(this: this, path: string, value: T): void;
      xor<K extends keyof ig.KnownVars>(this: this, path: K, value: ig.KnownVars[K]): void;
      xor<T = ig.VarValue>(this: this, path: string, value: T): void;
      append<K extends keyof ig.KnownVars>(this: this, path: K, value: ig.KnownVars[K]): void;
      append<T = ig.VarValue>(this: this, path: string, value: T): void;
      prepend<K extends keyof ig.KnownVars>(this: this, path: K, value: ig.KnownVars[K]): void;
      prepend<T = ig.VarValue>(this: this, path: string, value: T): void;
      setupCallScope(this: this, call: Nullable<ig.Event.Vars>): void;
      clear(this: this): void;
      getVarAccessor(this: this, path: string): Nullable<ig.Vars.Accessor>;
      forwardEntityVarAccess(
        this: this,
        entity: ig.Entity,
        keys: string[],
        keysOffset: number,
      ): Nullable<VarValue>;
      resolveObjectAccess(this: this, object: object, keys: string[], keysOffset: number): VarValue;
      registerVarAccessor(
        this: this,
        domain: string,
        accessor: ig.Vars.Accessor,
        editor?: string,
      ): void;
      pushEntityAccessor(this: this, accessor: ig.Vars.Accessor): void;
      popEntityAccessor(this: this, accessor: ig.Vars.Accessor): void;
      _getVariable(
        this: this,
        path: string,
        emptyObjectAsDefault?: boolean,
      ): Nullable<ig.Vars.VarAccessObject>;
      onLevelChange(this: this, mapName: string): void;
      getJson(this: this): ig.SaveSlot.Data.Vars;
      clearTemp(this: this): void;
      restoreFromJson(this: this, json: ig.SaveSlot.Data.Vars): void;
    }
    interface VarsConstructor extends ImpactClass<Vars> {
      new (): Vars;
    }
    var Vars: VarsConstructor;
    var vars: Vars;

    interface VarCondition extends ig.Class {
      code: string;
      pretty: string;
      vars: string[];
      condition: () => boolean;

      setCondition(this: this, condition: string): void;
      evaluate(this: this): boolean;
      toString(this: this): string;
    }
    interface VarConditionConstructor extends ImpactClass<VarCondition> {
      new (condition: string | undefined): ig.VarCondition;
    }
    var VarCondition: ig.VarConditionConstructor;
  }
}
