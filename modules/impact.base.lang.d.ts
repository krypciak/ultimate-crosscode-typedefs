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
        unknownValue?: Nullable<any>, // TODO
      ): string;
      _doCallback(this: this): void;
    }
    interface LangConstructor extends ImpactClass<Lang> {
      new (): Lang;
    }
    var Lang: LangConstructor;
    var lang: ig.Lang;

    namespace LangLabel {
      type Data =
        | ({ [key in (typeof ig.SUPPORTED_LANG)[number]]?: string } & {
            langUid?: number;
          })
        | string;
    }
    interface LangLabel extends ig.Class {
      value: string;
      data: Nullable<ig.LangLabel.Data>;
      langUid: number;
      originFile: Nullable<string>;

      toString(this: this): string;
    }
    interface LangLabelConstructor extends ImpactClass<LangLabel> {
      new (data: Nullable<ig.LangLabel.Data>): LangLabel;

      setOriginFile(file: Nullable<string>): void;
      getOriginFile(): Nullable<string>;
      getText(data: ig.LangLabel.Data, allowEmpty?: Nullable<boolean>): string;
      bakeVars<T extends string | Nullable<ig.LangLabel>>(value: T): T;
    }
    var LangLabel: LangLabelConstructor;
  }
}
