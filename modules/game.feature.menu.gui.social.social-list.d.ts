// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.gui.base.text
// requires game.feature.menu.gui.menu-misc
// requires game.feature.menu.gui.list-boxes
// requires game.feature.menu.gui.tab-box
// requires game.feature.menu.gui.social.social-misc

export {};

declare global {
  namespace sc {
    interface SocialList extends sc.ListTabbedPane, sc.Model.Observer {
      submitSound: ig.Sound;
      favSound: ig.Sound;
      errorSound: ig.Sound;

      addObservers(this: this): void;
      removeObservers(this: this): void;
      updatePartyMembers(this: this): void;
      getCurrentSortText(this: this): string;
      getMemberList(
        this: this,
        type: sc.PARTY_MEMBER_TYPE,
        sortType?: sc.PARTY_SORT_TYPE,
      ): string[];
      sortList(this: this, names: string[], sortType: sc.PARTY_SORT_TYPE): void;
      onCreateListEntries(
        this: this,
        list: sc.ButtonListBox,
        buttonGroup: sc.ButtonGroup,
        type: sc.PARTY_MEMBER_TYPE,
        sort: sc.PARTY_SORT_TYPE,
      ): void;
      onListEntrySelected(this: this, button: sc.SocialEntryButton): void;
    }
    interface SocialListConstructor extends ImpactClass<SocialList> {
      new (): SocialList;
    }
    var SocialList: SocialListConstructor;
  }
}
