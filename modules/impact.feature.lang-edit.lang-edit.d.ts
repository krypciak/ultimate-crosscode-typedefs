// requires impact.base.game

export {};

declare global {
  namespace ig {
    interface LangEdit extends ig.GameAddon {
      // mapEntries: unknown;
      // recentEntries: unknown;
      maskVisible: boolean;
      // mask: unknown;
      // form: unknown;
      // panels: unknown;
      // userName: unknown;
      // userpassword: unknown;
      // mapEntryList: unknown;
      // saveLabel: unknown;
      // errorLabel: unknown;

      // submitCustomFile(this: this, b: unknown, a: unknown, d: unknown, c: unknown): void;
      // submitMap(this: this, b: unknown, a: unknown): void;
      // submitRecent(this: this, b: unknown, a: unknown): void;
      // isWhatRecent(this: this, b: unknown): unknown;
      toggleMask(this: this): void;
      showMask(this: this): void;
      closeMask(this: this): void;
      _createMask(this: this): void;
      // _createEntryList(this: this, b: unknown): unknown;
      // _resetEntryList(this: this, b: unknown): void;
      _onUserSubmit(this: this): void;
      _updateUserText(this: this): void;
      _submit(this: this): void;
      // _saveResponse(this: this, b: unknown): void;
      onLevelLoadStart(this: this): void;
    }
    interface LangEditConstructor extends ImpactClass<LangEdit> {
      new (): LangEdit;
    }
    var LangEdit: LangEditConstructor;
    var langEdit: LangEdit;
  }
}
