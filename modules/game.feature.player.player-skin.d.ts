// requires impact.base.game
// requires game.feature.player.player-model
// requires game.feature.model.game-model

export {};

declare global {
  namespace sc {
    namespace PlayerSkinBase {
      type Settings = ConstructorParameters<sc.PLAYER_SKIN[keyof sc.PLAYER_SKIN]>[2];
    }
    interface PlayerSkinBase extends ig.Class, ig.Loadable.LoadListener {
      skinType: keyof sc.PLAYER_SKIN;
      name: string;

      constructSkin(this: this, settings: sc.PlayerSkinBase.Settings): void;
    }
    interface PlayerSkinBaseConstructor extends ImpactClass<PlayerSkinBase> {
      new (
        type: keyof sc.PLAYER_SKIN,
        skinName: string,
        settings: sc.PlayerSkinBase.Settings,
      ): PlayerSkinBase;
    }
    var PlayerSkinBase: PlayerSkinBaseConstructor;

    namespace PLAYER_SKIN {
      namespace Appearance {
        interface Settings {
          sheet: ConstructorParameters<typeof ig.AnimationSheet>[0];
          fx: ConstructorParameters<typeof ig.EffectSheet>[0];
          guiBounds?: {
            large?: Nullable<sc.MainMenu.Bounds>;
            small?: Nullable<sc.MainMenu.Bounds>;
          };
          noHide?: boolean;
          character?: string;
          anims?: Record<string, ConstructorParameters<typeof ig.AnimationSheet>[0]>;
          img?: string;
        }
      }
      interface Appearance extends sc.PlayerSkinBase {
        animSheet: ig.AnimationSheet;
        fx: ig.EffectSheet;
        guiImage: ig.Image;
        guiImageBounds: Nullable<sc.MainMenu.Bounds>;
        noHide: boolean;
        character?: sc.Character;
        anims?: Record<string, ig.AnimationSheet>;
        imgReplace?: string;
        expressions?: Record<string, sc.CharacterExpression>;

        replaceFace(this: this, expression: sc.CharacterExpression): sc.CharacterExpression;
        replaceAnim(this: this, anim: ig.AnimationSheet): ig.AnimationSheet;
        replaceImg(this: this, img: string): string;
      }
      interface AppearanceConstructor extends ImpactClass<Appearance> {
        new (
          type: 'Appearance',
          skinName: string,
          settings: sc.PLAYER_SKIN.Appearance.Settings,
        ): Appearance;

        toggleSet: 'skins';
      }

      namespace StepEffect {
        interface Settings {}
      }
      interface StepEffect extends sc.PlayerSkinBase {}
      interface StepEffectConstructor extends ImpactClass<StepEffect> {
        new (
          type: 'StepEffect',
          skinName: string,
          settings: sc.PLAYER_SKIN.StepEffect.Settings,
        ): StepEffect;

        toggleSet: 'stepEffects';
      }

      namespace Aura {
        interface Settings {}
      }
      interface Aura extends sc.PlayerSkinBase {}
      interface AuraConstructor extends ImpactClass<Aura> {
        new (type: 'Aura', skinName: string, settings: sc.PLAYER_SKIN.Aura.Settings): Aura;

        toggleSet: 'aura';
      }

      namespace Pet {
        interface Settings {}
      }
      interface Pet extends sc.PlayerSkinBase {}
      interface PetConstructor extends ImpactClass<Pet> {
        new (type: 'Pet', skinName: string, settings: sc.PLAYER_SKIN.Pet.Settings): Pet;

        toggleSet: 'pet';
      }
    }
    interface PLAYER_SKIN {
      Appearance: sc.PLAYER_SKIN.AppearanceConstructor;
      StepEffect: sc.PLAYER_SKIN.StepEffectConstructor;
      Aura: sc.PLAYER_SKIN.AuraConstructor;
      Pet: sc.PLAYER_SKIN.PetConstructor;
    }
    var PLAYER_SKIN: PLAYER_SKIN;

    enum SKIN_EVENT {
      SKIN_UPDATE = 1,
    }

    namespace PlayerSkinLibrary {
      interface SkinConfig<T extends keyof sc.PLAYER_SKIN = keyof sc.PLAYER_SKIN> {
        item: sc.ItemID;
        autoAdd: boolean;
        type: T;
        settings: ConstructorParameters<sc.PLAYER_SKIN[T]>[2];
      }
    }
    interface PlayerSkinLibrary
      extends ig.GameAddon,
        sc.Model,
        sc.Model.Observer,
        ig.ExtensionListener {
      skins: Record<string, sc.PlayerSkinBase.Settings>;
      itemToSkin: Record<sc.ItemID, string>;
      currentSkins: PartialRecord<keyof sc.PLAYER_SKIN, sc.PlayerSkinBase>;

      registerSkin(this: this, skinName: string, config: sc.PlayerSkinLibrary.SkinConfig): void;
      updateSkins(this: this): void;
      updateSkinSet(this: this, type: keyof sc.PLAYER_SKIN): void;
      getCurrentSkin<T extends keyof sc.PLAYER_SKIN>(
        this: this,
        type: T,
      ): InstanceType<sc.PLAYER_SKIN[T]> | undefined;
      replaceFace(this: this, expression: sc.CharacterExpression): sc.CharacterExpression;
      replaceAnim(this: this, anim: Nullable<ig.AnimationSheet>): ig.AnimationSheet;
      replaceImg(this: this, img: string): string;
      _createSkin(this: this, skinName: string): PlayerSkinBase;
      _notifyLoaded(this: this, skin: sc.PlayerSkinBase): void;
      checkItems(this: this): void;
      checkItemSet(this: this, toggleSetName: string): void;
      getSkinsByType<T extends keyof sc.PLAYER_SKIN>(
        this: this,
        type: T,
      ): InstanceType<sc.PLAYER_SKIN[T]>[];
    }
    interface PlayerSkinLibraryConstructor extends ImpactClass<PlayerSkinLibrary> {
      new (): PlayerSkinLibrary;
    }
    var PlayerSkinLibrary: PlayerSkinLibraryConstructor;
    var playerSkins: PlayerSkinLibrary;
  }
}
