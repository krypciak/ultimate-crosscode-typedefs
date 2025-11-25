// requires impact.feature.gui.base.box
// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.menu.gui.menu-misc
// requires game.feature.menu.gui.item.item-status-default
// requires game.feature.msg.gui.side-message-hud
// requires game.feature.menu.gui.enemies.enemy-pages

export {};

declare global {
  namespace sc {
    interface SocialInfoBox extends ig.BoxGui {
      ninepatch: ig.NinePatch;
      noEntry: sc.TextGui;
      base: sc.SocialBaseInfoBox;
      clazz: sc.TextGui;
      name: sc.TextGui;
      baseHp: sc.EnemyBaseParamLine;
      baseAttack: sc.EnemyBaseParamLine;
      baseDefense: sc.EnemyBaseParamLine;
      baseFocus: sc.EnemyBaseParamLine;
      equip: ig.GuiElementBase;
      content: ig.GuiElementBase;

      setCharacter(this: this, id: string): void;
      createEquipEntry(
        this: this,
        itemID: sc.ItemID,
        y: number,
        bodypart: sc.MENU_EQUIP_BODYPART_STR,
      ): number;
      getBodyPartIcon(this: this, bodyPart: sc.MENU_EQUIP_BODYPART_STR): string;
      createStatusLine(
        this: this,
        statName: string,
        iconId: number,
        x: number,
        y: number,
      ): sc.EnemyBaseParamLine;
    }
    interface SocialInfoBoxConstructor extends ImpactClass<SocialInfoBox> {
      new (): SocialInfoBox;
    }
    var SocialInfoBox: SocialInfoBoxConstructor;

    interface SocialPartyBox extends ig.GuiElementBase {
      lea: null; //it exists but is never assigned to.
      members: sc.SocialPartyMember[];

      updatePartyMembers(this: this): void;
      show(this: this, skipTransition?: Nullable<boolean>): void;
      hide(this: this, removeAfter?: Nullable<boolean>): void;
    }
    interface SocialPartyBoxConstructor extends ImpactClass<SocialPartyBox> {
      new (): SocialPartyBox;
    }
    let SocialPartyBox: SocialPartyBoxConstructor;

    interface SocialPartyMember extends sc.MenuPanel {
      gfx: ig.Image;
      headerPatch: ig.NinePatch;
      info: sc.SocialBaseInfoBox;
      name: Nullable<string>;
      isLea: boolean;
      maxValue?: sc.NumberGui;
      currentValue?: sc.NumberGui;

      show(this: this, skipTransition?: Nullable<boolean>): void;
      hide(this: this, removeAfter?: Nullable<boolean>): void;
    }
    interface SocialPartyMemberConstructor extends ImpactClass<SocialPartyMember> {
      new (
        isLea: boolean,
        model: sc.PartyMemberModel | sc.PlayerModel,
        name?: Nullable<string>,
      ): SocialPartyMember;
    }
    var SocialPartyMember: SocialPartyMemberConstructor;

    interface SocialBaseInfoBox extends ig.GuiElementBase {
      face: sc.SocialFace;
      level: sc.NumberGui;
      name: sc.TextGui;
      exp: sc.ItemStatusDefaultBar;
      hp: sc.ItemStatusDefaultBar;
      sp: sc.ItemStatusDefaultBar;

      show(this: this, modelName: string, model: sc.PartyMemberModel | sc.PlayerModel): void;
      hide(this: this, skipTransition?: boolean): void;
    }
    interface SocialBaseInfoBoxConstructor extends ImpactClass<SocialBaseInfoBox> {
      new (): SocialBaseInfoBox;
    }
    var SocialBaseInfoBox: SocialBaseInfoBoxConstructor;

    interface SocialFace extends ig.GuiElementBase {
      charExpression: sc.CharacterExpression;

      setCharacter(this: this, charExpression: sc.CharacterExpression): void;
    }
    interface SocialFaceConstructor extends ImpactClass<SocialFace> {
      new (): SocialFace;
    }
    var SocialFace: SocialFaceConstructor;

    interface SocialEntryButton extends sc.ListBoxButton {
      gfx2: ig.Image;
      head: sc.SocialHead;
      status: ig.ImageGui;
      level: sc.NumberGui;
      key: string;

      updateMemberStatus(this: this): void;
      keepButtonPressed(this: this): void;
      unPressButton(this: this): void;
      getMemberName(this: this, orDefault: string, model: sc.PartyMemberModel): string;
    }
    interface SocialEntryButtonConstructor extends ImpactClass<SocialEntryButton> {
      new (name: string, model: sc.PartyMemberModel): SocialEntryButton;
    }
    var SocialEntryButton: SocialEntryButtonConstructor;

    interface SocialHead extends ig.GuiElementBase {
      gfx: ig.Image;
      headsGfx: ig.Image;
      index: number;
      active: boolean;
      focus: boolean;
      keepPressed: boolean;
    }
    interface SocialHeadConstructor extends ImpactClass<SocialHead> {
      new (headIndex: number): SocialHead;
    }
    var SocialHead: SocialHeadConstructor;
  }
}
