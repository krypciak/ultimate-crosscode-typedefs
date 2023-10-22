// requires game.feature.character.abstract-face

export {};

declare global {
  namespace sc {
    interface Character extends ig.JsonLoadable {}
    interface CharacterConstructor extends ImpactClass<Character> {}
    let Character: Character;

    interface CharacterExpression extends ig.Cacheable {
      cacheType: 'CHAR_EXPRESSION'
      character: sc.Character
      expression: string
      expressionImages: Record<string, ig.Image>
    }
    interface CharacterExpressionConstructor extends ImpactClass<CharacterExpression> {
      new (character: string, expression: string): CharacterExpression
    }
    var CharacterExpression: CharacterExpressionConstructor;
  }
}
