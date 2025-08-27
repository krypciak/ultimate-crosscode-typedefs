export type SkillTreeFileData = Record<keyof typeof sc.ELEMENT, SkillNode[]>;

export type SkillNode = SkillNodeSkill | SkillNodeOr;

export interface SkillNodeBase {
  distance: number;
  direction: keyof typeof sc.SKILLS_DIRECTION;
  children: SkillNode[];
  id: number;
}

export interface SkillNodeSkill extends SkillNodeBase {
  level: number;
  skill: Skill;
}

export interface SkillNodeOr extends SkillNodeBase {
  orBranch: OrBranch;
}

export interface Skill {
  type: string;
}

export interface OrBranch {
  direction: keyof typeof sc.SKILLS_DIRECTION;
  levels: number[];
  left: Skill[];
  right: Skill[];
}

