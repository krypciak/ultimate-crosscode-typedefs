// requires impact.base.game

export {};

declare global {
  namespace sc {
    var SPARKLING_SHOES_ID: number;
    var CHRISTMAS_HAD_ID: number;
    var CHRISTMAS_BOOTS_ID: number;

    interface GameGimmik {
      text: string;
      textDisable?: string;
      setKey?: string;
      addItem: sc.ItemID;

      onToggle(): void;
    }
    interface GAME_GIMMIKS {
      SPARKLING_SHOES: sc.GameGimmik;
      HOLIDAY_QUEST: sc.GameGimmik;
      VOICE_ACTING: sc.GameGimmik;
      CARAMELLDANSEN: sc.GameGimmik;
      REGULAR_TREES: sc.GameGimmik;
      SPEEDLINES: sc.GameGimmik;
    }
    var GAME_GIMMIKS: GAME_GIMMIKS;

    interface GAME_CODES {
      'WoN-Boots': sc.GAME_GIMMIKS['SPARKLING_SHOES'];
      'Holiday-Man': sc.GAME_GIMMIKS['HOLIDAY_QUEST'];
      'Best-VA': sc.GAME_GIMMIKS['VOICE_ACTING'];
      Caramelldansen: sc.GAME_GIMMIKS['CARAMELLDANSEN'];
      'Regular-Trees': sc.GAME_GIMMIKS['REGULAR_TREES'];
      Speedlines: sc.GAME_GIMMIKS['SPEEDLINES'];
    }
    var GAME_CODES: GAME_CODES;

    type GAME_CODE = keyof GAME_CODES;

    interface GameCode extends ig.GameAddon, ig.Vars.Accessor {
      enabled: sc.GameGimmik[];
      keys: Record<string, boolean>;
      levelLoadedOrder: number;

      enterCode(this: this, code: LiteralUnion<GAME_CODE>, noShowDialog?: boolean): boolean;
      isEnabled(this: this, code: GAME_CODES): boolean;
      onLevelLoaded(this: this): void;
    }
    interface GameCodeConstructor extends ImpactClass<GameCode> {
      new (): GameCode;
    }
    var GameCode: GameCodeConstructor;
    var gameCode: GameCode;

    function submitGameCode(code: LiteralUnion<GAME_CODE>): void;
  }
}
