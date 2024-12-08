export {};

declare global {
  namespace sc {
    enum ENEMY_COLLAB_BREAK {
      ALL = 1,
      INITIATOR = 2,
      ANY = 3,
    }
    namespace EnemyCollab {
      interface ParticipantSettings {
        collabKey: string;
        label: string;
        min: number;
        max?: number;
        acceptStunned?: boolean;
      }
      interface CollabSettings {
        breakType: keyof typeof sc.ENEMY_COLLAB_BREAK;
        initiatorLabel: string;
        partiipants: sc.EnemyCollab.ParticipantSettings[];
      }

      interface CollabAttribs {
        label: string;
        collabKey: string;
        point: Nullable<Vec3>;
        entity: Nullable<ig.Entity>;
      }
    }
    interface EnemyCollab extends ig.Class, ig.Vars.Accessor, sc.Combat.ActionAttached {
      initiator: ig.ENTITY.Combatant;
      participants: ig.ENTITY.Enemy[];
      vars: Record<string, number>;
      breakType: sc.ENEMY_COLLAB_BREAK;
      success: boolean;
      attached: sc.CombatProxyEntity[];

      getVar(this: this, key: string): number;
      setVar(this: this, key: string, value: number): void;
      addCollabAttached(this: this, proxy: sc.CombatProxyEntity): void;
      removeCollabAttached(this: this, proxy: sc.CombatProxyEntity): boolean;
      setParticipantsEntity(this: this, entity: ig.Entity, labels?: string[]): void;
      setParticipantsPoint(this: this, point: Vec3, labels?: string[]): void;
      getLabeledParticipant(this: this, label: string): void | sc.CombatProxyEntity;
      getLabeledParticipants(this: this, labels?: string[]): sc.CombatProxyEntity[];
      start(this: this): void;
      doReaction(this: this, collabKey: string, labels: string[]): void;
      getCenterPos(this: this, res: Vec3, aligment: ig.ENTITY_ALIGN, labels?: string[]): Vec3;
      addParticipant(
        this: this,
        participant: ig.ENTITY.Enemy,
        collabKey: string,
        label: string,
      ): boolean;
      removeParticipant(this: this, participant: ig.ENTITY.Enemy): void;
      cancel(this: this): void;
    }
    interface EnemyCollabConstructor extends ImpactClass<EnemyCollab> {
      new (initiator: ig.ENTITY.Combatant, settings: sc.EnemyCollab.CollabSettings): EnemyCollab;
    }
    var EnemyCollab: EnemyCollabConstructor;
  }
}
