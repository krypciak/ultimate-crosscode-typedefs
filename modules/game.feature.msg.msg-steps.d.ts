// requires impact.base.action
// requires impact.base.event
// requires game.feature.msg.message-model
// requires game.feature.character.character
// requires game.feature.gui.widget.demo-stats
// requires game.feature.gui.widget.demo-highscore
// requires game.feature.msg.gui.dream-msg

export {};

declare global {
  namespace ig.EVENT_STEP.SHOW_MODAL_CHOICE {
    interface ModalChoiceOption {
      label: ig.LangLabel.Data;
    }
  }
}
