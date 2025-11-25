// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.menu.gui.base-menu
// requires game.feature.menu.gui.social.social-list
// requires game.feature.menu.gui.social.social-misc

export {};

declare global {
  namespace sc {
    interface SocialMenu extends sc.ListInfoMenu, ig.EventCall.EventAttached {
      list: sc.SocialList;
      info: sc.SocialInfoBox;
      party: sc.SocialPartyBox;
      options: sc.SortMenu;
      optionsContacts: sc.SortMenu;
      _keepButtonFocused: Nullable<sc.SocialEntryButton>;

      openOptionsMenu(this: this, button: sc.SocialEntryButton, isNotFriend?: boolean): void;
      contactMember(this: this, member: string): void;
      inviteMember(this: this, member: string): void;
      removeMember(this: this, member: string): void;
      onOptionsExecute(this: this, button: sc.ButtonGui): void;
      onOptionsBack(this: this): void;
    }
    interface SocialMenuConstructor extends ImpactClass<SocialMenu> {
      new (): SocialMenu;
    }
    var SocialMenu: SocialMenuConstructor;
  }
}
