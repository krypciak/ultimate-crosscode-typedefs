// requires impact.base.game

export {};

declare global {
  namespace ig {
    namespace MAP_SOUNDS {
      interface Loop {
        path: string;
        volume: number;
      }
      type Segment =
        | {
            wait: number;
          }
        | {
            path: string;
            volume: number;
          };

      interface Entry {
        loop: Loop[];
        segments: Segment[];
      }
    }
    interface MAP_SOUNDS {
      CARGO_SHIP_OUTSIDE: ig.MAP_SOUNDS.Entry;
      CARGO_SHIP_OUTSIDE_RAIN: ig.MAP_SOUNDS.Entry;
      CARGO_SHIP_INSIDE: ig.MAP_SOUNDS.Entry;
      STRONG_RAIN: ig.MAP_SOUNDS.Entry;
      LIGHT_WIND: ig.MAP_SOUNDS.Entry;
      CARGO_SHIP_AMBIENT_A: ig.MAP_SOUNDS.Entry;
      CARGO_SHIP_AMBIENT_B: ig.MAP_SOUNDS.Entry;
      CARGO_SHIP_AMBIENT_C: ig.MAP_SOUNDS.Entry;
      CARGO_SHIP_AMBIENT_D: ig.MAP_SOUNDS.Entry;
      CARGO_SHIP_AMBIENT_E: ig.MAP_SOUNDS.Entry;
      CARGO_SHIP_AMBIENT_F: ig.MAP_SOUNDS.Entry;
      CARGO_SHIP_AMBIENT_G: ig.MAP_SOUNDS.Entry;
      CARGO_SHIP_AMBIENT_H: ig.MAP_SOUNDS.Entry;
      HIDEOUT_AMBIENT: ig.MAP_SOUNDS.Entry;
      HIDEOUT_INNER_AMBIENT: ig.MAP_SOUNDS.Entry;
      SAPPHIRE_RIDGE_AMBIENT: ig.MAP_SOUNDS.Entry;
      HIDEOUT_OFFICE_AMBIENT: ig.MAP_SOUNDS.Entry;
      CROSS_CENTRAL_INNER: ig.MAP_SOUNDS.Entry;
      NEWCOMERS_BRIDGE: ig.MAP_SOUNDS.Entry;
      BERGEN_TRAIL_WIND: ig.MAP_SOUNDS.Entry;
      BERGEN_TRAIL_WIND_SUBTLE: ig.MAP_SOUNDS.Entry;
      ROOKIE_HARBOR_TELEPORTER: ig.MAP_SOUNDS.Entry;
      ROOKIE_HARBOR_OCEAN: ig.MAP_SOUNDS.Entry;
      CROWD: ig.MAP_SOUNDS.Entry;
      ROOKIE_HARBOR_CROWD: ig.MAP_SOUNDS.Entry;
      HEAT_AREA_DESERT: ig.MAP_SOUNDS.Entry;
      HEAT_AREA_WIND: ig.MAP_SOUNDS.Entry;
      HEAT_AREA_OASIS: ig.MAP_SOUNDS.Entry;
      CAVE: ig.MAP_SOUNDS.Entry;
      CAVE_WATER_DROPS: ig.MAP_SOUNDS.Entry;
      'BAKI-KUM': ig.MAP_SOUNDS.Entry;
      HEAT_DUNGEON_OUTSIDE: ig.MAP_SOUNDS.Entry;
      DREAM: ig.MAP_SOUNDS.Entry;
      JUNGLE: ig.MAP_SOUNDS.Entry;
      JUNGLE_INFESTED: ig.MAP_SOUNDS.Entry;
      JUNGLE_CITY_INNER: ig.MAP_SOUNDS.Entry;
      JUNGLE_CITY_OUTER: ig.MAP_SOUNDS.Entry;
      COLD_DUNGEON: ig.MAP_SOUNDS.Entry;
      HEAT_DUNGEON: ig.MAP_SOUNDS.Entry;
      HEAT_DUNGEON_WATER: ig.MAP_SOUNDS.Entry;
      SHOCK_DUNGEON: ig.MAP_SOUNDS.Entry;
      WAVE_DUNGEON: ig.MAP_SOUNDS.Entry;
      TREE_DUNGEON: ig.MAP_SOUNDS.Entry;
      SPOOKY_INNER: ig.MAP_SOUNDS.Entry;
      ARID_OUTSIDE: ig.MAP_SOUNDS.Entry;
      ARID_INSIDE: ig.MAP_SOUNDS.Entry;
      SERIOUS_AMBIENT: ig.MAP_SOUNDS.Entry;
      LAB: ig.MAP_SOUNDS.Entry;
      EVO_VILLAGE: ig.MAP_SOUNDS.Entry;
      FINAL_DUNGEON_INSIDE: ig.MAP_SOUNDS.Entry;
      FINAL_DUNGEON_OUTSIDE: ig.MAP_SOUNDS.Entry;
      FINAL_DUNGEON_OUTSIDE_WINDY: ig.MAP_SOUNDS.Entry;
      BEACH_AMBIENCE: ig.MAP_SOUNDS.Entry;
      ARENA_TOP: ig.MAP_SOUNDS.Entry;
      RAID_BOSS_AMBIENCE: ig.MAP_SOUNDS.Entry;
    }
    var MAP_SOUNDS: MAP_SOUNDS;

    namespace MapSoundEntry {
      namespace Segment {
        interface Entry {
          time: number;
          sound: ig.Sound;
        }
      }
      interface Segment {
        maxTime: number;
        entries: ig.MapSoundEntry.Segment.Entry[];
      }
    }
    interface MapSoundEntry extends ig.Class {
      name: keyof typeof ig.MAP_SOUNDS;
      loopSounds: ig.Sound[];
      segments: ig.MapSoundEntry.Segment[];
      loopHandles: ig.SoundHandle[];
      currentSegment: number;
      currentEntry: number;
      timer: number;

      clearCached(this: this): void;
      start(this: this): void;
      update(this: this): void;
      stop(this: this): void;
      _createSegment(this: this, settings: ig.MAP_SOUNDS.Segment): ig.MapSoundEntry.Segment;
      _selectSegment(this: this): void;
    }

    interface MapSoundEntryConstructor extends ImpactClass<MapSoundEntry> {
      new (name: keyof typeof ig.MAP_SOUNDS): MapSoundEntry;
    }
    var MapSoundEntry: MapSoundEntryConstructor;
    interface MapSounds extends ig.GameAddon {
      onReset(this: this): void;
      onLevelLoaded(this: this): void;
      onDeferredUpdate(this: this): void;
    }
    interface MapSoundsConstructor extends ImpactClass<MapSounds> {
      new (): MapSounds;
    }
    var MapSounds: MapSoundsConstructor;
    var mapSounds: MapSounds
  }
}
