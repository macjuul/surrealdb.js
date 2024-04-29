export { Surreal } from "./surreal.js";
export {
	ConnectionStatus,
	Engine,
	type EngineEvents,
} from "./library/engine.js";
export {
	Emitter,
	type Listener,
	type UnknownEvents,
} from "./library/emitter.js";
export * from "./library/cbor/index.js";
export { surql, surrealql } from "./library/tagged-template.js";
export { PreparedQuery } from "./library/PreparedQuery.js";
export * from "./errors.js";
export * from "./types.js";
