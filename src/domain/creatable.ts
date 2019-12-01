export interface Creatable<Entity> {
  create(entity: Entity): void
}
