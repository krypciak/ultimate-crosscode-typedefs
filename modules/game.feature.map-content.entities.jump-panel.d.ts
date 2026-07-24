// requires impact.base.entity
// requires impact.feature.effect.effect-sheet

export {}

declare global {
    namespace ig {
        namespace ENTITY {
            namespace JumpPanel {
                interface JumpHeight {
                    zVel: number
                    height: number
                    effectDuration: number
                }
                interface JUMP_HEIGHT {
                    2: JumpHeight
                    3: JumpHeight
                    4: JumpHeight
                    6: JumpHeight
                    8: JumpHeight
                }
                interface Settings {
                    jumpHeight: keyof JUMP_HEIGHT
                }
            }
            interface JumpPanel extends ig.AnimatedEntity, ig.Navigation.Influencer {
                effects: ig.EffectSheet
                jumpHeightData: ig.ENTITY.JumpPanel.JumpHeight
                condition: ig.VarCondition
                _wm: ig.Config

                onTopEntityJump(this: this, actor: ig.ActorEntity): boolean
                varsChanged(this: this): void
            }
            interface JumpPanelConstructor extends ImpactClass<JumpPanel> {
                new (x: number, y: number, z: number, settings: ig.ENTITY.JumpPanel.Settings): JumpPanel
            }
            var JumpPanel: JumpPanelConstructor

            namespace JumpPanelFar {
                interface Settings {
                    panelType?: 'NORTH' | 'EAST' | 'SOUTH' | 'WEST'
                    jumpDistance:
                        | 'FALL'
                        | 'FALL_LONG'
                        | '9'
                        | '10'
                        | '11'
                        | '12'
                        | '14'
                        | '16'
                        | '18'
                        | '20'
                        | '22'
                        | '24'
                        | '26'
                        | '28'
                        | '30'
                        | '32'
                        | '34'
                        | '36'
                        | '48'
                        | '54'
                }
            }
            interface JumpPanelFar extends ig.AnimatedEntity {
                panelType: { dir: Vec2; size: Vec2; tileOffset: number; flipX: boolean; gfxOffset: Vec2 }
                jumpHeightData: null
                jumpDistance: { zVel: number; height: number; speed: number; effectDuration: number }
                condition: ig.VarCondition
                isOn: boolean

                onTopEntityJumpFar(this: this, entity: ig.ENTITY.Combatant): boolean
            }
            interface JumpPanelFarConstructor extends ImpactClass<JumpPanelFar> {
                new (x: number, y: number, z: number, settings: ig.ENTITY.JumpPanelFar.Settings): JumpPanelFar
            }
            var JumpPanelFar: JumpPanelFarConstructor
        }
    }
}
