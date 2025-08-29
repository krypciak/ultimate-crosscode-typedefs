// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.menu.gui.menu-misc

export {};

declare global {
  namespace sc {
    namespace TitlePresetMenu {
      interface SaLoButton extends ig.FocusGui {
        ninepatch: ig.NinePatch;
        level: sc.NumberGui;
        location: sc.TextGui;
        mainText: sc.TextGui;
        position: null /* unset */;
        slot: number;

        focusGained(this: this): void;
        updateDrawables(this: this, b: unknown): void;
      }
      interface SaLoButtonConstructor extends ImpactClass<SaLoButton> {
        new (slot: number, data: sc.SavePresetData): SaLoButton;
      }
    }
    interface TitlePresetMenu extends sc.HeaderMenuPanel {
      buttonInteract: ig.ButtonInteractEntry;
      itemList: sc.ItemListBox;
      backButton: sc.ButtonGui;
      submitSound: ig.Sound;
      slots: sc.TitlePresetMenu.SaLoButton[];
      _loadCallback: (loadSlot: number) => void;
      _removeCallback: () => void;
      _doLoad: boolean;
      _loadSlot: number;
      _firstTime: boolean;

      setPos(this: this, b: unknown, a: unknown): void;
      activate(this: this): void;
      deactivate(this: this): void;
      createList(this: this): void;
    }
    interface TitlePresetMenuConstructor extends ImpactClass<TitlePresetMenu> {
      new (loadCallback: (loadSlot: number) => void, removeCallback: () => void): TitlePresetMenu;
      SaLoButton: sc.TitlePresetMenu.SaLoButtonConstructor;
    }
    var TitlePresetMenu: TitlePresetMenuConstructor;
  }
}
