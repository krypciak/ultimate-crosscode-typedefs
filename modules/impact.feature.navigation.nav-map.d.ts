// requires impact.base.map
// requires impact.base.image
// requires game.config

export {};

declare global {
  namespace ig.MAP {
    interface Navigation extends ig.Map {
      initialized: boolean;
      _wm: ig.Config;
    }
    interface NavigationConstructor extends ImpactClass<Navigation> {
      new (data: sc.MapModel.MapLayer, zHeight: number): Navigation;

      levelKey: 'navigation'
    }
  }
}
