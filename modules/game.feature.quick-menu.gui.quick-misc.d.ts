// requires impact.base.image
// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.gui.base.numbers
// requires game.feature.combat.combat
// requires game.feature.menu.gui.enemies.enemy-pages
// requires game.feature.quick-menu.gui.quick-item-menu

export { };

declare global {
    namespace sc {
        interface QuickFocusScreen extends ig.GuiElementBase {
            subGuis: ig.GuiElementBase[]

            addSubGui(this: this, gui: ig.GuiElementBase): void
            resetSubGuis(this: this): void
            reset(this: this): void
        }
        interface QuickFocusScreenConstructor extends ImpactClass<QuickFocusScreen> { new(): QuickFocusScreen }
        var QuickFocusScreen: QuickFocusScreenConstructor

        interface QuickArrowBox extends ig.GuiElementBase {
            name: sc.TextGui
            arrowOff: Vec2
        }
        interface QuickArrowBoxConstructor extends ImpactClass<QuickArrowBox> {
            new(text: string, notFixedHeight: boolean, maxWidth: number): QuickArrowBox
        }
        var QuickArrowBox: QuickArrowBoxConstructor

        interface QuickBorderArrowLevelBox extends ig.GuiElementBase {
            ninepatch: ig.NinePatch;
            levelNumber: sc.NumberGui;
            displayColor: number;
            sizeTransition: ig.GuiHook.SizeTransition;
            nameVisible: boolean;

            doSizeTransition(
                this: this,
                width: Optional<number>,
                height: Optional<number>,
                time: number,
                timeFunction: KeySpline,
                delay: Optional<number>,
            ): void;
            getLevelColor(enemyLevel: number): sc.GUI_NUMBER_COLOR;
        }
        interface QuickBorderArrowLevelBoxConstructor extends ImpactClass<QuickBorderArrowLevelBox> {
            new(enemyName: string, entity: ig.ENTITY.Enemy): QuickBorderArrowLevelBox;
        }
        var QuickBorderArrowLevelBox: QuickBorderArrowLevelBoxConstructor;
    }
}
