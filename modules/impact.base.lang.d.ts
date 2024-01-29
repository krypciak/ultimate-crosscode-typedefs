// requires impact.base.loader

export {};

declare global {
  namespace ig {
    interface Lang extends ig.SingleLoadable {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      labels: any;

      loadInternal(this: this): void;
      get<T = string>(this: this, path: string): T;
      onerror(this: this, error: unknown): void;
      onload(this: this, labels: any): void;
      grammarReplace(
        template: string,
        substitution: sc.TextLike,
        unknownValue?: Optional<any>, // TODO
      ): string;
      _doCallback(this: this): void;
    }
    interface LangConstructor extends ImpactClass<Lang> {}
    var Lang: LangConstructor;
    var lang: ig.Lang;

    namespace LangLabel {
      type Data = {
        en_US?: string,
        de_DE?: string,
        ja_JP?: string,
        zh_CN?: string,
        ko_KR?: string,
        zh_TW?: string,
        langUid?: number,
      } | string
    }
    interface LangLabel extends ig.Class {
      value: string;
      data: Optional<ig.LangLabel.Data>;
      langUid: number;
      originFile: Optional<string>;

      toString(this: this): string;
    }
    interface LangLabelConstructor extends ImpactClass<LangLabel> {
      new (data: Optional<ig.LangLabel.Data>): LangLabel;

      setOriginFile(file: Optional<string>): void;
      getOriginFile(): Optional<string>;
      getText(data: ig.LangLabel.Data, allowEmpty?: Optional<boolean>): string;
      bakeVars<T extends string | Optional<ig.LangLabel>>(value: T): T;
    }
    var LangLabel: LangLabelConstructor;
  }
}
