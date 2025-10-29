// requires impact.base.game

export {};

declare global {
  namespace sc {
    interface NpcRunnerGroup {
      characters: { name: string; prob: number }[];
      npcsPerMinute: number;
      maxParty: number;
      runProb: number;
    }
    interface NPC_RUNNER_GROUP {
      CROSSCENTRAL: sc.NpcRunnerGroup;
      RHOMBUS_SQUARE: sc.NpcRunnerGroup;
      CROWDED: sc.NpcRunnerGroup;
      LIVELY: sc.NpcRunnerGroup;
      REGULAR: sc.NpcRunnerGroup;
      FEW: sc.NpcRunnerGroup;
    }
    var NPC_RUNNER_GROUP: NPC_RUNNER_GROUP;

    enum NPC_RUNNER_DEST_TYPE {
      ENTER = 1,
      EXIT = 2,
      ENTER_EXIT = 3,
    }
    enum NPC_RUNNER_DEST_POS_TYPE {
      CENTER = 1,
      SIDE = 2,
    }

    namespace NpcRunnerSpawner {
      interface Character {
        character: sc.Character;
        animSheet: Nullable<ig.AnimationSheet>;
        prob: number;
        maxSpeed: number;
      }
      interface GroupData {
        characters: sc.NpcRunnerSpawner.Character[];
        fullProb: number;
        maxTimer: number;
      }

      interface RunnerDestinationEntry {
        entity: ig.Entity;
        dir: keyof typeof ig.ActorEntity.FACE4;
        type: sc.NPC_RUNNER_DEST_TYPE;
        posType: sc.NPC_RUNNER_DEST_POS_TYPE;
      }
      interface RunnerDestination {
        entries: sc.NpcRunnerSpawner.RunnerDestinationEntry[];
        enterProb: number;
        exitProb: number;
        map: string;
        type?: sc.NPC_RUNNER_DEST_TYPE;
        entity?: RunnerDestinationEntity;
      }

      interface WPConnectEntity extends ig.Entity {
        getWPConnect(this: this): Nullable<sc.WPConnection>;
      }

      interface RunnerDestinationEntity extends ig.Entity {
        getRunnerDestination(this: this): RunnerDestination;
      }
    }
    interface NpcRunnerSpawner extends ig.GameAddon, ig.Loadable.LoadListener<sc.Character> {
      mapGroup: Nullable<sc.NpcRunnerGroup>;
      currentGroup: Nullable<sc.NpcRunnerGroup>;
      groupData: Nullable<sc.NpcRunnerSpawner.GroupData>;
      lastChars: sc.NpcRunnerSpawner.Character[];
      active: boolean;
      destinations: {
        enter: [];
        enterFullProb: number;
        exit: [];
        exitFullProb: number;
      };
      timer: number;
      spawnTeamCount: number;
      currentPartySize: number;
      spawnEntrance: Nullable<sc.NpcRunnerSpawner.RunnerDestinationEntry>;
      waypoints: ig.Entity[];
      spawnExit: Nullable<sc.NpcRunnerSpawner.RunnerDestinationEntry>;
      spawnSpeed: number;
      preUpdateOrder: number;
      levelLoadStartOrder: number;
      levelLoadedOrder: number;

      cancelSpawning(this: this): void;
      setGroup(this: this, group: sc.NpcRunnerGroup): void;
      hasGroup(this: this): boolean;
      resetToMapGroup(this: this): void;
      clearGroup(this: this): void;
      initWayPoints(this: this): void;
      searchDestinations(this: this): void;
      spawnNpcGroup(this: this): void;
      spawnNpcRunner(this: this): void;
      getRandomDestination(
        this: this,
        toExit: boolean,
        ignore?: Nullable<sc.NpcRunnerSpawner.RunnerDestination>,
      ): sc.NpcRunnerSpawner.RunnerDestinationEntry;
      getWayPoints(
        this: this,
        entrance: sc.NpcRunnerSpawner.WPConnectEntity,
        exit: sc.NpcRunnerSpawner.WPConnectEntity,
      ): Nullable<ig.Entity[]>;
      getRandomCharacter(this: this): sc.NpcRunnerSpawner.Character;
      onPreUpdate(this: this): void;
      onLevelLoadStart(this: this, data: sc.MapModel.Map): void;
      onLevelLoaded(this: this): void;
      onReset(this: this): void;
    }
    interface NpcRunnerSpawnerConstructor extends ImpactClass<NpcRunnerSpawner> {
      new (): NpcRunnerSpawner;
    }
    var NpcRunnerSpawner: NpcRunnerSpawnerConstructor;
    var npcRunner: NpcRunnerSpawner;
  }
}
