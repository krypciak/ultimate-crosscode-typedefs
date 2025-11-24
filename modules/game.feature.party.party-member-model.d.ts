// requires game.feature.model.base-model
// requires game.feature.combat.model.combat-params
// requires game.feature.combat.entities.ball
// requires game.feature.player.player-config
// requires game.feature.achievements.stats-model

export {};

declare global {
  namespace sc {
    enum PARTY_MEMBER_MSG {
      ELEMENT_MODE_CHANGE = 1,
      //skipping 2 is intentional
      EXP_CHANGE = 3,
      LEVEL_CHANGE = 4,
      STATS_CHANGED = 5,
    }
    namespace PartyMemberModel {
      interface Healing {
        sandwich: number[];
        cooldown: number;
        needRestock: boolean;
      }
      interface Data {
        level: number;
        equipLevel: number;
        exp: number;
        spLevel: number;
        allElements: boolean;
        temporary: boolean;
        noDie: boolean;
      }
    }
    interface PartyMemberModel extends ig.Class, sc.Model {
      core: {};
      config: sc.PlayerConfig;
      animSheet: ig.AnimationSheet;
      stats: sc.PlayerConfig.Stats;
      params: sc.CombatParams;
      name: string;
      clazz: keyof typeof sc.PLAYER_CLASSES;
      character: sc.Character;
      equipLevel: number;
      level: number;
      exp: number;
      combatStyle: sc.PlayerConfig.CombatStyle;
      spLevel: number;
      allElements: boolean;
      equip: sc.PlayerModel.Equip;
      baseParams: sc.CombatParams.BaseParams;
      equipParams: sc.CombatParams.BaseParams;
      equipModifiers: Record<keyof sc.MODIFIERS, number>;
      baseConfig: sc.PlayerSubConfig;
      elementConfigs: Record<sc.ELEMENT, sc.PlayerSubConfig>;
      reviveTimer: number;
      skills: sc.BaseSkill[];
      healing: sc.PartyMemberModel.Healing;
      temporary: boolean;
      noDie: boolean;
      currentElementMode: sc.ELEMENT;
      proxies: Record<string, sc.ProxySpawnerBase>;

      onLoadableComplete(this: this): void;
      getHeadIdx(this: this): number;
      setEquipment(
        this: this,
        bodypart: keyof typeof sc.MENU_EQUIP_BODYPART,
        itemID: sc.ItemID,
      ): void;
      clearEquipment(this: this): void;
      updateAutoEquip(this: this, playerLevel?: number): boolean;
      _updateAutoEquip(this: this, playerLevel?: number, ignoreConditions?: boolean): boolean;
      setElementMode(this: this, element: sc.ELEMENT): void;
      updateStats(this: this): void;
      isAlive(this: this): boolean;
      onDefeat(this: this): void;
      revive(this: this): void;
      setTemporary(this: this, temporary: boolean): void;
      setNoDie(this: this, noDie: boolean): void;
      update(this: this): void;
      getCharacterName(this: this): Nullable<string>;
      getCharacterRealName(this: this): Nullable<string>;
      getAction(this: this, action: sc.PLAYER_ACTION): ig.Action | undefined;
      getActionMaxLevel(this: this, lvl1Action: sc.PLAYER_ACTION): number;
      getCombatArtName(this: this, action: sc.PLAYER_ACTION): string | undefined;
      getBalls(this: this): Record<string, sc.ProxySpawnerBase>;
      getSaveData(this: this): sc.PartyMemberModel.Data;
      setLoadData(this: this, data: sc.PartyMemberModel | undefined): void;
      reset(this: this): void;
      setSpLevel(this: this, level: number): void;
      addExperience(
        this: this,
        exp: number,
        baseLevel: number,
        bonus: number,
        ignoreModifier: boolean,
        levelCurve: sc.LevelCurve,
      ): void;
      setLevel(
        this: this,
        level: number,
        exp: number,
        updateAutoEquip?: boolean,
        forceSet?: boolean,
        playerLevel?: number,
      ): void;
      hasSandwich(this: this): boolean;
      canEatSandwich(this: this): boolean;
      restockSandwich(this: this): void;
      getBestSandwich(this: this, startFromIndex: number): number | false;
      consumeSandwich(this: this, sandwichTier: 0 | 1 | 2, entity: sc.PartyMemberEntity): void;
      getSandwichAction(this: this, foodSpriteIndex: number): ig.Action;
    }
    interface PartyMemberModelConstructor extends ImpactClass<PartyMemberModel> {
      new (name: string): PartyMemberModel;
    }
    var PartyMemberModel: PartyMemberModelConstructor;
  }
}
