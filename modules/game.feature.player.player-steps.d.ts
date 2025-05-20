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
      namespace SAVE_PLAYER_MODEL_VALUE {
        interface Settings {
          modelType: unknown;
        }
      }
      interface SAVE_PLAYER_MODEL_VALUE extends ig.EventStepBase {
        modelType: unknown;
        _wm: ig.Config;
      }
      interface SAVE_PLAYER_MODEL_VALUE_CONSTRUCTOR extends ImpactClass<SAVE_PLAYER_MODEL_VALUE> {
        new (settings: ig.EVENT_STEP.SAVE_PLAYER_MODEL_VALUE.Settings): SAVE_PLAYER_MODEL_VALUE;
      }
      var SAVE_PLAYER_MODEL_VALUE: SAVE_PLAYER_MODEL_VALUE_CONSTRUCTOR;

      namespace ADD_PLAYER_CAMERA_TARGET {
        interface Settings {
          entity: ig.Event.GetEntity;
          speed?: ig.Camera.SPEED_OPTIONS | keyof typeof ig.Camera.SPEED_OPTIONS;
        }
      }
      interface ADD_PLAYER_CAMERA_TARGET extends ig.EventStepBase {
        entity: ig.Event.GetEntity;
        _wm: ig.Config;
      }
      interface ADD_PLAYER_CAMERA_TARGET_CONSTRUCTOR extends ImpactClass<ADD_PLAYER_CAMERA_TARGET> {
        new (settings: ig.EVENT_STEP.ADD_PLAYER_CAMERA_TARGET.Settings): ADD_PLAYER_CAMERA_TARGET;
      }
      var ADD_PLAYER_CAMERA_TARGET: ADD_PLAYER_CAMERA_TARGET_CONSTRUCTOR;

      namespace REMOVE_PLAYER_CAMERA_TARGET {
        interface Settings {
          entity: ig.Event.GetEntity;
          speed?: ig.Camera.SPEED_OPTIONS | keyof typeof ig.Camera.SPEED_OPTIONS;
        }
      }
      interface REMOVE_PLAYER_CAMERA_TARGET extends ig.EventStepBase {
        entity: ig.Event.GetEntity;
        _wm: ig.Config;
        speed?: ig.Camera.SPEED_OPTIONS | keyof typeof ig.Camera.SPEED_OPTIONS;
      }
      interface REMOVE_PLAYER_CAMERA_TARGET_CONSTRUCTOR
        extends ImpactClass<REMOVE_PLAYER_CAMERA_TARGET> {
        new (
          settings: ig.EVENT_STEP.REMOVE_PLAYER_CAMERA_TARGET.Settings,
        ): REMOVE_PLAYER_CAMERA_TARGET;
      }
      var REMOVE_PLAYER_CAMERA_TARGET: REMOVE_PLAYER_CAMERA_TARGET_CONSTRUCTOR;

      namespace REMOVE_ALL_PLAYER_CAMERAS {
        interface Settings {
          speed?: ig.Camera.SPEED_OPTIONS | keyof typeof ig.Camera.SPEED_OPTIONS;
        }
      }
      interface REMOVE_ALL_PLAYER_CAMERAS extends ig.EventStepBase {
        speed?: ig.Camera.SPEED_OPTIONS | keyof typeof ig.Camera.SPEED_OPTIONS;
        _wm: ig.Config;
      }
      interface REMOVE_ALL_PLAYER_CAMERAS_CONSTRUCTOR
        extends ImpactClass<REMOVE_ALL_PLAYER_CAMERAS> {
        new (settings: ig.EVENT_STEP.REMOVE_ALL_PLAYER_CAMERAS.Settings): REMOVE_ALL_PLAYER_CAMERAS;
      }
      var REMOVE_ALL_PLAYER_CAMERAS: REMOVE_ALL_PLAYER_CAMERAS_CONSTRUCTOR;

      namespace LEARN_SKILL {
        interface Settings {
          skill: number;
        }
      }
      interface LEARN_SKILL extends ig.EventStepBase {
        skill: number;
        _wm: ig.Config;
      }
      interface LEARN_SKILL_CONSTRUCTOR extends ImpactClass<LEARN_SKILL> {
        new (settings: ig.EVENT_STEP.LEARN_SKILL.Settings): LEARN_SKILL;
      }
      var LEARN_SKILL: LEARN_SKILL_CONSTRUCTOR;

      namespace DO_INLINE_LEVELUP {
        interface Settings {}
      }
      interface DO_INLINE_LEVELUP extends ig.EventStepBase {
        skill: unknown;
        _wm: ig.Config;
      }
      interface DO_INLINE_LEVELUP_CONSTRUCTOR extends ImpactClass<DO_INLINE_LEVELUP> {
        new (settings: ig.EVENT_STEP.DO_INLINE_LEVELUP.Settings): DO_INLINE_LEVELUP;
      }
      var DO_INLINE_LEVELUP: DO_INLINE_LEVELUP_CONSTRUCTOR;

      namespace RESET_SKILL_TREE {
        interface Settings {
          element?: keyof typeof sc.ELEMENT | 'ALL_AVAILABLE';
        }
      }
      interface RESET_SKILL_TREE extends ig.EventStepBase {
        element: sc.ELEMENT | 5;
        _wm: ig.Config;
      }
      interface RESET_SKILL_TREE_CONSTRUCTOR extends ImpactClass<RESET_SKILL_TREE> {
        new (settings: ig.EVENT_STEP.RESET_SKILL_TREE.Settings): RESET_SKILL_TREE;
      }
      var RESET_SKILL_TREE: RESET_SKILL_TREE_CONSTRUCTOR;

      namespace SET_ELEMENT_LOAD {
        interface Settings {
          value: number;
        }
      }
      interface SET_ELEMENT_LOAD extends ig.EventStepBase {
        value: number;
        _wm: ig.Config;
      }
      interface SET_ELEMENT_LOAD_CONSTRUCTOR extends ImpactClass<SET_ELEMENT_LOAD> {
        new (settings: ig.EVENT_STEP.SET_ELEMENT_LOAD.Settings): SET_ELEMENT_LOAD;
      }
      var SET_ELEMENT_LOAD: SET_ELEMENT_LOAD_CONSTRUCTOR;

      namespace SWITCH_PLAYER_CONFIG {
        interface Settings {
          name: keyof typeof sc.PARTY_OPTIONS;
        }
      }
      interface SWITCH_PLAYER_CONFIG extends ig.EventStepBase {
        name: keyof typeof sc.PARTY_OPTIONS;
        config: sc.PlayerConfig;
        _wm: ig.Config;

        clearCached(this: this): void;
      }
      interface SWITCH_PLAYER_CONFIG_CONSTRUCTOR extends ImpactClass<SWITCH_PLAYER_CONFIG> {
        new (settings: ig.EVENT_STEP.SWITCH_PLAYER_CONFIG.Settings): SWITCH_PLAYER_CONFIG;
      }
      var SWITCH_PLAYER_CONFIG: SWITCH_PLAYER_CONFIG_CONSTRUCTOR;

      namespace WAIT_UNTIL_PLAYER_CHARGED {
        interface Settings {
          level: number;
        }
      }
      interface WAIT_UNTIL_PLAYER_CHARGED extends ig.EventStepBase {
        level: number;
        _wm: ig.Config;
      }
      interface WAIT_UNTIL_PLAYER_CHARGED_CONSTRUCTOR
        extends ImpactClass<WAIT_UNTIL_PLAYER_CHARGED> {
        new (settings: ig.EVENT_STEP.WAIT_UNTIL_PLAYER_CHARGED.Settings): WAIT_UNTIL_PLAYER_CHARGED;
      }
      var WAIT_UNTIL_PLAYER_CHARGED: WAIT_UNTIL_PLAYER_CHARGED_CONSTRUCTOR;

      namespace SWITCH_ELEMENT_MODE {
        interface Settings {
          element: keyof typeof sc.ELEMENT;
          skipEffect: boolean;
        }
      }
      interface SWITCH_ELEMENT_MODE extends ig.EventStepBase {
        element: sc.ELEMENT;
        _wm: ig.Config;
        skipEffect: boolean;
      }
      interface SWITCH_ELEMENT_MODE_CONSTRUCTOR extends ImpactClass<SWITCH_ELEMENT_MODE> {
        new (settings: ig.EVENT_STEP.SWITCH_ELEMENT_MODE.Settings): SWITCH_ELEMENT_MODE;
      }
      var SWITCH_ELEMENT_MODE: SWITCH_ELEMENT_MODE_CONSTRUCTOR;

      namespace SWITCH_TO_ELEMENT_WITH_COMBAT_ART {
        interface Settings {
          artType?: unknown;
          level: number;
          skipEffect: boolean;
        }
      }
      interface SWITCH_TO_ELEMENT_WITH_COMBAT_ART extends ig.EventStepBase {
        _wm: ig.Config;
        artType: Nullable<unknown>;
        level: number;
        skipEffect: boolean;
      }
      interface SWITCH_TO_ELEMENT_WITH_COMBAT_ART_CONSTRUCTOR
        extends ImpactClass<SWITCH_TO_ELEMENT_WITH_COMBAT_ART> {
        new (
          settings: ig.EVENT_STEP.SWITCH_TO_ELEMENT_WITH_COMBAT_ART.Settings,
        ): SWITCH_TO_ELEMENT_WITH_COMBAT_ART;
      }
      var SWITCH_TO_ELEMENT_WITH_COMBAT_ART: SWITCH_TO_ELEMENT_WITH_COMBAT_ART_CONSTRUCTOR;

      namespace SET_VAR_COMBAT_ART_TYPE_WITH_MIN_LEVEL {
        interface Settings {
          varName: string;
          level: number;
        }
      }
      interface SET_VAR_COMBAT_ART_TYPE_WITH_MIN_LEVEL extends ig.EventStepBase {
        _wm: ig.Config;
        varName: Nullable<string>;
        level: number;
      }
      interface SET_VAR_COMBAT_ART_TYPE_WITH_MIN_LEVEL_CONSTRUCTOR
        extends ImpactClass<SET_VAR_COMBAT_ART_TYPE_WITH_MIN_LEVEL> {
        new (
          settings: ig.EVENT_STEP.SET_VAR_COMBAT_ART_TYPE_WITH_MIN_LEVEL.Settings,
        ): SET_VAR_COMBAT_ART_TYPE_WITH_MIN_LEVEL;
      }
      var SET_VAR_COMBAT_ART_TYPE_WITH_MIN_LEVEL: SET_VAR_COMBAT_ART_TYPE_WITH_MIN_LEVEL_CONSTRUCTOR;

      namespace HIDE_PETS {
        interface Settings {
          hide: boolean;
        }
      }
      interface HIDE_PETS extends ig.EventStepBase {
        _wm: ig.Config;
        hide: boolean;
      }
      interface HIDE_PETS_CONSTRUCTOR extends ImpactClass<HIDE_PETS> {
        new (settings: ig.EVENT_STEP.HIDE_PETS.Settings): HIDE_PETS;
      }
      var HIDE_PETS: HIDE_PETS_CONSTRUCTOR;
    }
    namespace ACTION_STEP {
      namespace SHOOT_PROXY_PLAYER {
        interface Settings {
          proxy?: sc.ProxyTools.PrepareSrcProxySetting;
          elementProxy?: unknown;
          align?: keyof typeof ig.ENTITY_ALIGN;
          startDist?: number;
        }
      }
      interface SHOOT_PROXY_PLAYER extends ig.ActionStepBase {
        proxySrc: unknown;
        elementProxy: unknown;
        align: unknown;
        startDist: number;
        _wm: ig.Config;
      }
      interface SHOOT_PROXY_PLAYER_CONSTRUCTOR extends ImpactClass<SHOOT_PROXY_PLAYER> {
        new (settings: ig.ACTION_STEP.SHOOT_PROXY_PLAYER.Settings): SHOOT_PROXY_PLAYER;
      }
      var SHOOT_PROXY_PLAYER: SHOOT_PROXY_PLAYER_CONSTRUCTOR;

      namespace SET_PLAYER_ACTION_BLOCK {
        interface BlockData {
          action: number;
          dash: number;
          charge: number;
          reaim: number;
          move: number;
        }

        interface Settings {
          blockData: ig.ACTION_STEP.SET_PLAYER_ACTION_BLOCK.BlockData;
        }
      }
      interface SET_PLAYER_ACTION_BLOCK extends ig.ActionStepBase {
        blockTypes: unknown;
        _wm: ig.Config;
        blockData: ig.ACTION_STEP.SET_PLAYER_ACTION_BLOCK.BlockData;
      }
      interface SET_PLAYER_ACTION_BLOCK_CONSTRUCTOR extends ImpactClass<SET_PLAYER_ACTION_BLOCK> {
        new (settings: ig.ACTION_STEP.SET_PLAYER_ACTION_BLOCK.Settings): SET_PLAYER_ACTION_BLOCK;
      }
      var SET_PLAYER_ACTION_BLOCK: SET_PLAYER_ACTION_BLOCK_CONSTRUCTOR;

      namespace SET_PLAYER_ANIM_SHEET {
        interface Settings {
          animSheet: string | ig.AnimationSheet.Settings;
        }
      }
      interface SET_PLAYER_ANIM_SHEET extends ig.ActionStepBase {
        animSheet: ig.AnimationSheet;
        _wm: ig.Config;

        clearCached(this: this): void;
      }
      interface SET_PLAYER_ANIM_SHEET_CONSTRUCTOR extends ImpactClass<SET_PLAYER_ANIM_SHEET> {
        new (settings: ig.ACTION_STEP.SET_PLAYER_ANIM_SHEET.Settings): SET_PLAYER_ANIM_SHEET;
      }
      var SET_PLAYER_ANIM_SHEET: SET_PLAYER_ANIM_SHEET_CONSTRUCTOR;

      namespace CLEAR_PLAYER_ANIM_SHEET {
        interface Settings {}
      }
      interface CLEAR_PLAYER_ANIM_SHEET extends ig.ActionStepBase {
        _wm: ig.Config;
      }
      interface CLEAR_PLAYER_ANIM_SHEET_CONSTRUCTOR extends ImpactClass<CLEAR_PLAYER_ANIM_SHEET> {
        new (settings: ig.ACTION_STEP.CLEAR_PLAYER_ANIM_SHEET.Settings): CLEAR_PLAYER_ANIM_SHEET;
      }
      var CLEAR_PLAYER_ANIM_SHEET: CLEAR_PLAYER_ANIM_SHEET_CONSTRUCTOR;

      namespace SET_PLAYER_INVINCIBLE {
        interface Settings {
          factor?: number;
        }
      }
      interface SET_PLAYER_INVINCIBLE extends ig.ActionStepBase {
        factor: number;
        _wm: ig.Config;

        run(this: this, target: ig.ENTITY.Player): boolean;
      }
      interface SET_PLAYER_INVINCIBLE_CONSTRUCTOR extends ImpactClass<SET_PLAYER_INVINCIBLE> {
        new (settings: ig.ACTION_STEP.SET_PLAYER_INVINCIBLE.Settings): SET_PLAYER_INVINCIBLE;
      }
      var SET_PLAYER_INVINCIBLE: SET_PLAYER_INVINCIBLE_CONSTRUCTOR;

      namespace PLAYER_ADJUST_FACE {
        interface Settings {
          time: number;
        }
      }
      interface PLAYER_ADJUST_FACE extends ig.ActionStepBase {
        time: number;
        _wm: ig.Config;
      }
      interface PLAYER_ADJUST_FACE_CONSTRUCTOR extends ImpactClass<PLAYER_ADJUST_FACE> {
        new (settings: ig.ACTION_STEP.PLAYER_ADJUST_FACE.Settings): PLAYER_ADJUST_FACE;
      }
      var PLAYER_ADJUST_FACE: PLAYER_ADJUST_FACE_CONSTRUCTOR;

      namespace PLAYER_ADJUST_MOVE_DIR {
        interface Settings {}
      }
      interface PLAYER_ADJUST_MOVE_DIR extends ig.ActionStepBase {
        _wm: ig.Config;
      }
      interface PLAYER_ADJUST_MOVE_DIR_CONSTRUCTOR extends ImpactClass<PLAYER_ADJUST_MOVE_DIR> {
        new (settings: ig.ACTION_STEP.PLAYER_ADJUST_MOVE_DIR.Settings): PLAYER_ADJUST_MOVE_DIR;
      }
      var PLAYER_ADJUST_MOVE_DIR: PLAYER_ADJUST_MOVE_DIR_CONSTRUCTOR;

      namespace PLAYER_MOVE_TO_DIR {
        interface Settings {
          time: number;
          rotateSpeed?: number;
          stopBeforeEdge: boolean;
          allowStop: boolean;
        }
      }
      interface PLAYER_MOVE_TO_DIR extends ig.ActionStepBase {
        _wm: ig.Config;
        time: number;
        rotateSpeed: number;
        stopBeforeEdge: boolean;
        allowStop: boolean;
      }
      interface PLAYER_MOVE_TO_DIR_CONSTRUCTOR extends ImpactClass<PLAYER_MOVE_TO_DIR> {
        new (settings: ig.ACTION_STEP.PLAYER_MOVE_TO_DIR.Settings): PLAYER_MOVE_TO_DIR;
      }
      var PLAYER_MOVE_TO_DIR: PLAYER_MOVE_TO_DIR_CONSTRUCTOR;

      namespace ADD_PLAYER_CAMERA_TARGET {
        interface Settings {
          speed?: ig.Camera.SPEED_OPTIONS | keyof typeof ig.Camera.SPEED_OPTIONS;
          actionDetached?: boolean;
          onlyAfterRemove?: boolean;
        }
      }
      interface ADD_PLAYER_CAMERA_TARGET extends ig.ActionStepBase {
        _wm: ig.Config;
        speed?: ig.Camera.SPEED_OPTIONS | keyof typeof ig.Camera.SPEED_OPTIONS;
        actionDetached: boolean;
        onlyAfterRemove: boolean;
      }
      interface ADD_PLAYER_CAMERA_TARGET_CONSTRUCTOR extends ImpactClass<ADD_PLAYER_CAMERA_TARGET> {
        new (settings: ig.ACTION_STEP.ADD_PLAYER_CAMERA_TARGET.Settings): ADD_PLAYER_CAMERA_TARGET;
      }
      var ADD_PLAYER_CAMERA_TARGET: ADD_PLAYER_CAMERA_TARGET_CONSTRUCTOR;

      namespace REMOVE_PLAYER_CAMERA_TARGET {
        interface Settings {
          speed?: ig.Camera.SPEED_OPTIONS | keyof typeof ig.Camera.SPEED_OPTIONS;
          actionDetached: boolean;
        }
      }
      interface REMOVE_PLAYER_CAMERA_TARGET extends ig.ActionStepBase {
        _wm: ig.Config;
        speed?: ig.Camera.SPEED_OPTIONS | keyof typeof ig.Camera.SPEED_OPTIONS;
        actionDetached: boolean;
      }
      interface REMOVE_PLAYER_CAMERA_TARGET_CONSTRUCTOR
        extends ImpactClass<REMOVE_PLAYER_CAMERA_TARGET> {
        new (
          settings: ig.ACTION_STEP.REMOVE_PLAYER_CAMERA_TARGET.Settings,
        ): REMOVE_PLAYER_CAMERA_TARGET;
      }
      var REMOVE_PLAYER_CAMERA_TARGET: REMOVE_PLAYER_CAMERA_TARGET_CONSTRUCTOR;

      namespace ADD_PLAYER_SHIELD {
        interface Settings {
          perfectGuard: boolean;
        }
      }
      interface ADD_PLAYER_SHIELD extends ig.ActionStepBase {
        _wm: ig.Config;
        shield: sc.CombatShield;
        perfectGuard: Nullable<boolean>;

        clearCached(this: this): void;
      }
      interface ADD_PLAYER_SHIELD_CONSTRUCTOR extends ImpactClass<ADD_PLAYER_SHIELD> {
        new (settings: ig.ACTION_STEP.ADD_PLAYER_SHIELD.Settings): ADD_PLAYER_SHIELD;
      }
      var ADD_PLAYER_SHIELD: ADD_PLAYER_SHIELD_CONSTRUCTOR;

      namespace START_ITEM_CONSUME {
        interface Settings {}
      }
      interface START_ITEM_CONSUME extends ig.ActionStepBase {
        item: unknown;
        _wm: ig.Config;
      }
      interface START_ITEM_CONSUME_CONSTRUCTOR extends ImpactClass<START_ITEM_CONSUME> {
        new (settings: ig.ACTION_STEP.START_ITEM_CONSUME.Settings): START_ITEM_CONSUME;
      }
      var START_ITEM_CONSUME: START_ITEM_CONSUME_CONSTRUCTOR;

      namespace SHOW_FOOD_ICON {
        interface Settings {
          icon: keyof typeof sc.FOOD_SPRITE;
          offset?: Vec2;
        }
      }
      interface SHOW_FOOD_ICON extends ig.ActionStepBase {
        icon: (typeof sc.FOOD_SPRITE)[keyof typeof sc.FOOD_SPRITE];
        _wm: ig.Config;
        offset?: Nullable<Vec2>;
      }
      interface SHOW_FOOD_ICON_CONSTRUCTOR extends ImpactClass<SHOW_FOOD_ICON> {
        new (settings: ig.ACTION_STEP.SHOW_FOOD_ICON.Settings): SHOW_FOOD_ICON;
      }
      var SHOW_FOOD_ICON: SHOW_FOOD_ICON_CONSTRUCTOR;

      namespace CHANGE_FOOD_ICON {
        interface Settings {
          state: keyof typeof sc.FOOD_ICON_STATE;
          offset?: Vec2;
        }
      }
      interface CHANGE_FOOD_ICON extends ig.ActionStepBase {
        state: sc.FOOD_ICON_STATE;
        _wm: ig.Config;
        offset: Nullable<Vec2>;
      }
      interface CHANGE_FOOD_ICON_CONSTRUCTOR extends ImpactClass<CHANGE_FOOD_ICON> {
        new (settings: ig.ACTION_STEP.CHANGE_FOOD_ICON.Settings): CHANGE_FOOD_ICON;
      }
      var CHANGE_FOOD_ICON: CHANGE_FOOD_ICON_CONSTRUCTOR;

      namespace CONSUME_ITEM {
        interface Settings {
          item: sc.ItemID;
        }
      }
      interface CONSUME_ITEM extends ig.ActionStepBase {
        item: sc.ItemID;
        _wm: ig.Config;
      }
      interface CONSUME_ITEM_CONSTRUCTOR extends ImpactClass<CONSUME_ITEM> {
        new (settings: ig.ACTION_STEP.CONSUME_ITEM.Settings): CONSUME_ITEM;
      }
      var CONSUME_ITEM: CONSUME_ITEM_CONSTRUCTOR;

      namespace PLAY_PET_SOUND {
        interface Settings {}
      }
      interface PLAY_PET_SOUND extends ig.ActionStepBase {
        item: unknown;
        _wm: ig.Config;
      }
      interface PLAY_PET_SOUND_CONSTRUCTOR extends ImpactClass<PLAY_PET_SOUND> {
        new (settings: ig.ACTION_STEP.PLAY_PET_SOUND.Settings): PLAY_PET_SOUND;
      }
      var PLAY_PET_SOUND: PLAY_PET_SOUND_CONSTRUCTOR;
    }
  }
}
