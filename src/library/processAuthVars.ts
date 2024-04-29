import { NoDatabaseSpecified, NoNamespaceSpecified } from "../errors.js";
import { AnyAuth } from "../types.js";
import { isNil } from "./isNil.js";

export function processAuthVars<T extends AnyAuth>(vars: T, fallback?: {
	namespace?: string;
	database?: string;
}) {
	if ("scope" in vars) {
		if (!vars.namespace) vars.namespace = fallback?.namespace;
		if (!vars.database) vars.database = fallback?.database;
		if (isNil(vars.namespace)) {
			throw new NoNamespaceSpecified();
		}
		if (isNil(vars.database)) throw new NoDatabaseSpecified();
	}

	return vars;
}
