// requires impact.feature.map-content.entities.door

export {};

declare global {
  namespace ig {
    enum DOOR_TYPE {
      DEFAULT,
      COLD_DUNGEON,
      HEAT_DUNGEON_ENTRANCE,
      HEAT_DUNGEON_MASTER_DOOR,
      SHOCKWAVE_DNG_DOOR,
      FINAL_DNG_DOOR,
      FINAL_DNG_DOOR_SAPPHIRE,
    }
  }
}
