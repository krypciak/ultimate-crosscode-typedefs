// requires impact.base.game
// requires game.feature.skills.skills

import { OrBranch, SkillNode, SkillTreeFileData } from '../file-types/skilltree';

export {};

declare global {
  namespace sc {
    var SKILLS_DISTANCE_MULTIPLIER: number;
    enum SKILLS_DIRECTION {
      STRAIGHT = 0,
      CW_45 = 1,
      CW_90 = 2,
      CW_135 = 3,
      CCW_45 = 4,
      CCW_90 = 5,
      CCW_135 = 6,
    }

    namespace SkillTree {
      interface Stats {
        id: number;
        level: number;
        element: sc.ELEMENT;
        type?: sc.SKILL_STATES;
      }
      interface AutoSkill {
        skill: sc.BaseSkill;
        children?: SkillNode[];

        branchObj?: OrBranch;
        branch?: 'left' | 'right';
        step?: number;
      }
    }
    interface SkillTree extends ig.SingleLoadable {
      version: number;
      _trees: Record<sc.ELEMENT, SkillNode[]>;
      skills: sc.BaseSkill[];
      UID: number;

      onerror(this: this, error: any): void;
      onload(this: this, data: SkillTreeFileData): void;
      _createSkills(this: this): void;
      _createElementTreeSkills(
        this: this,
        nodes: SkillNode[],
        elemnet: sc.ELEMENT,
        stats: sc.SkillTree.Stats,
      ): void;
      _createSkill(this: this, type: string, stats: sc.SkillTree.Stats): sc.BaseSkill;
      isEmpty(this: this, skill: SkillNode): boolean;
      autoSkill(this: this, into: sc.BaseSkill[], level: number, skillRanking: string[]): void;
      _autoSkillElement(
        this: this,
        into: sc.BaseSkill[],
        level: number,
        tree: SkillNode[],
        skillRanking: string[],
      ): void;
      _addAutoSkillOptions(this: this, into: sc.SkillTree.AutoSkill[], tree: SkillNode[]): void;
      _learnSkillOption(
        this: this,
        into: sc.BaseSkill[],
        autoSkill: sc.SkillTree.AutoSkill,
        autoSkills: sc.SkillTree.AutoSkill[],
      ): void;
      getTree(this: this, element: sc.ELEMENT): SkillNode[];
      getSkill(this: this, id: number): sc.BaseSkill;
    }
    interface SkillTreeConstructor extends ImpactClass<SkillTree> {
      new (): SkillTree;
    }
    var SkillTree: SkillTreeConstructor;
    var skilltree: SkillTree;
  }
}
