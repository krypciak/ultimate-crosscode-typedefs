// requires impact.base.game
// requires impact.feature.storage.storage
// requires game.feature.model.base-model
// requires impact.feature.interact.interact
// requires impact.feature.interact.button-interact

export {};

declare global {
  namespace sc {
    namespace MessageModel {
      namespace Data {
        interface SideMessage {
          char: string;
          expression: string;
          message: ig.LangLabel.Data | string;
          main: boolean;
        }
      }
      interface Data {
        autoScript: boolean;
        sideMessages: sc.MessageModel.Data.SideMessage[];
        sideMessageStack: sc.MessageModel.Data.SideMessage[];
        displayedSideMessages: number;
      }

      interface SideMessage {
        charExpression: sc.CharacterExpression;
        message: ig.LangLabel.Data | string;
        main: boolean;
      }

      interface Person {
        side: sc.MESSAGE_SIDES;
        order: number;
        charExpression: sc.CharacterExpression;
        displayName: Nullable<sc.TextLike>;
      }

      interface OptionConfig {
        label: ig.LangLabel.Data;
        activeCondition?: string;
        showCondition?: string;
        stretch?: boolean;
        center?: boolean;
      }
      interface Option {
        label: ig.LangLabel;
        activeCondition: ig.VarCondition;
        showCondition: ig.VarCondition;
        stretch: boolean;
        center: boolean;
      }
    }
    interface MessageModel
      extends ig.GameAddon,
        sc.Model,
        ig.Vars.Accessor,
        ig.Storage.ListenerSave,
        ig.Storage.ListenerPreLoad {
      sideMessages: sc.MessageModel.SideMessage[];
      sideMessageStack: sc.MessageModel.SideMessage[];
      sideMessageDelayedStack: sc.MessageModel.SideMessage[];
      sideMessageQueuing: boolean;
      displayedSideMessages: number;
      currentPeople: sc.MessageModel.Person[];
      stashedPeople: sc.MessageModel.Person[];
      blocking: boolean;
      currentChoiceOptions: Nullable<sc.MessageModel.Option>;
      lastSelectedChoice: Nullable<number>;
      autoContinue: boolean;
      autoScript: boolean;
      autoScriptTimer: number;
      loaded: boolean;
      screenInteract: sc.ScreenInteractEntry;
      privateMode: number;
      boardVisible: boolean;
      boardSide: sc.MESSAGE_SIDES;
      menuMode: boolean;
      bottomGap: number;

      isBlocking(this: this): boolean;
      clearBlocking(this: this): void;
      clearDreamMessage(this: this): void;
      onSkipClearBlocking(this: this): void;
      ringPrivateMessage(this: this, isOutgoing?: boolean): void;
      isPrivateRing(this: this): boolean;
      isPrivateActive(this: this): boolean;
      startPrivateMessage(this: this): void;
      endPrivateMessage(this: this, silent?: boolean): void;
      setMenuMode(this: this, menuMode: boolean): void;
      setBottomGap(this: this, bottomGap: number): void;
      isMenuMode(this: this): boolean;
      showMessage(this: this, personName: string, message: string, autoContinue: boolean): void;
      getMessageTime(this: this, message: sc.TextLike): number;
      showOffScreenMessage(
        this: this,
        left: boolean,
        text: ig.LangLabel,
        autoContinue: boolean,
      ): void;
      showBoardMessage(
        this: this,
        text: sc.TextLike,
        center: boolean,
        side: sc.MESSAGE_SIDES,
        autoContinue: boolean,
      ): void;
      hasBoardMessage(this: this): boolean;
      showChoice(
        this: this,
        person: string,
        options: sc.MessageModel.Option[],
        columns: number,
        forceWidth: number,
      ): void;
      _isSideMessageDelayed(this: this): boolean;
      showSideMessage(
        this: this,
        charExpression: sc.CharacterExpression,
        message: string | ig.LangLabel,
        main?: boolean,
      ): void;
      _showSideMessage(this: this, sideMsg: sc.MessageModel.SideMessage): void;
      selectChoice(this: this, index: number): void;
      clearSideMessages(this: this): void;
      addPerson(
        this: this,
        charExpression: sc.CharacterExpression,
        side: sc.MESSAGE_SIDES,
        order: number,
        name: Nullable<sc.TextLike>,
      ): void;
      setExpression(this: this, personName: string, expression: sc.CharacterExpression): void;
      removePerson(this: this, personName: string): void;
      clearSide(this: this, side: sc.MESSAGE_SIDES_OR_ALL): void;
      clearAll(this: this): void;
      clearBoardMsg(this: this): void;
      onSceneEnd(this: this, silent?: boolean): void;
      stashPersons(this: this): void;
      showStashedPersons(this: this): void;
      hasPerson(this: this): boolean;
      clear(this: this): void;
      getCharExpression(this: this, personName: string): Nullable<sc.CharacterExpression>;
      getCharacter(this: this, personName: string): sc.Character;
      getExpression(this: this, personName: string): string;
      getSide(this: this, personName: string): sc.MESSAGE_SIDES | 0;
      getOrder(this: this, personName: string): number;
      getDisplayName(this: this, personName: string): Nullable<sc.TextLike>;
      getNextSideMessage(this: this): sc.MessageModel.SideMessage;
      hasStackedSideMessages(this: this): boolean;
      isSideMessageVisible(this: this): boolean;
      onInteraction(this: this): void;
      onLevelLoadStart(this: this): void;
      onLevelLoaded(this: this): void;
      onReset(this: this): void;
      onPreUpdate(this: this): void;
      _convertSideMessagesToJson(
        this: this,
        sideMsg: sc.MessageModel.SideMessage,
      ): sc.MessageModel.Data.SideMessage;
      _convertJsonToSideMessage(
        this: this,
        data: sc.MessageModel.Data.SideMessage,
      ): sc.MessageModel.SideMessage;
      hasChoice(this: this): boolean;
      _checkActivePerson(this: this, personName: string): void;
    }
    interface MessageModelConstructor extends ImpactClass<MessageModel> {}
    var MessageModel: MessageModelConstructor;
    var message: sc.MessageModel;

    enum MESSAGE_SIDES {
      RIGHT = 1,
      LEFT = 2,
    }
    enum MESSAGE_SIDES_OR_ALL {
      RIGHT = 1,
      LEFT = 2,
      ALL = 0,
    }
  }
}
