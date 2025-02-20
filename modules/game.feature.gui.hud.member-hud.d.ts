// requires impact.feature.gui.gui
// requires impact.feature.gui.base.box

export {};

declare global {
  namespace sc {
    interface PartyHudGui extends ig.GuiElementBase, sc.Model.Observer {
      model: null;
      memberGuis: sc.MemberHudGui[];

      updateVisibility(this: this): void;
      updatePartySubGui(this: this): void;
    }
    interface PartyHudGuiConstructor extends ImpactClass<PartyHudGui> {
      new (): PartyHudGui;
    }
    var PartyHudGui: PartyHudGuiConstructor;

    interface MemberHudGui extends ig.GuiElementBase, sc.Model.Observer {
      gfx: ig.Image;
      heads: ig.TileSheet;
      model: sc.PartyMemberModel;
      hpExpSpGui: sc.MemberHpExpSpGui;

      remove(this: this, skipTransition?: boolean): void;
    }
    interface MemberHudGuiConstructor extends ImpactClass<MemberHudGui> {
      new (model: sc.PartyMemberModel): MemberHudGui;
    }
    var MemberHudGui: MemberHudGuiConstructor;

    interface MemberHpExpSpGui extends ig.GuiElementBase, sc.Model.Observer {
      gfx: ig.Image;
      model: sc.PartyMemberModel;
      hpBar: sc.HpHudBarGui;
      spBar: sc.SpMiniHudGui;
    }
    interface MemberHpExpSpGuiConstructor extends ImpactClass<MemberHpExpSpGui> {
      new (model: sc.PartyMemberModel): MemberHpExpSpGui;
    }
    var MemberHpExpSpGui: MemberHpExpSpGuiConstructor;
  }
}
