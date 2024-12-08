export {};

declare global {
  namespace sc {
    enum ENEMY_AGGRESSION {
      THREAT = 0,
      TEMP_THREAT = 1,
      PEACEFUL = 2,
    }
    enum ENEMY_ANNO_ACTIVE {
      NONE = 0,
      PRE_ATTACK = 1,
      ATTACK = 2,
      WIDE_RANGE_ATTACK = 3,
      POST_ATTACK = 4,
    }
    enum ENEMY_ANNO_PASSIVE {
      NONE = 0,
      VULNERABLE = 1,
      WEAK = 2,
      IMMUNE = 3,
    }
    enum ENEMY_ANNO_WEAPON {
      ANY = 0,
      MELEE = 1,
      RANGED = 2,
    }
    enum ENEMY_ANNO_EXTRA {
      ATTACK_BACK = 1,
      ATTACK_FRONT = 2,
      LOOK_AWAY = 4,
      BE_PASSIVE = 8,
      BE_PASSIVE_IF_TARGETED = 16,
      VIRUS_SPECIAL_RULE = 32,
    }
    enum ENEMY_ANNO_ELEMENT {
      ANY = 0,
      NEUTRAL = 1,
      HEAT = 2,
      COLD = 3,
      SHOCK = 4,
      WAVE = 5,
    }

    interface EnemyAnno {
      doesRandomlyUnderstand(
        enemy: ig.ENTITY.Enemy,
        player: ig.ENTITY.Player,
        multiplier?: number,
      ): boolean;
      getUnderstandFactor(
        enemy: ig.ENTITY.Enemy,
        player: ig.ENTITY.Player,
        multiplier?: number,
      ): number;
    }
    var EnemyAnno: EnemyAnno;
  }
}
