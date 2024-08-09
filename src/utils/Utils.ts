export const isClient = () => typeof window !== 'undefined';

export const body = (isClient() && document.body) as HTMLElement;

// Return truthy classes
export const clx = (...classes: any[]) => {
	return classes.filter(Boolean).join(' ');
};

/**
 * Returns the HTTPS version of any URL.
 * If the URL already starts with "https://", it is returned as is.
 * Otherwise, "https://" is prepended to the URL.
 * @param url The URL to convert to HTTPS.
 * @returns The HTTPS version of the URL.
 */
export const withHttps = (url: string) => {
	return url.replace(
		/^(?:(.*:)?\/\/)?(.*)/i,
		(match, schema, nonSchemaUrl) =>
			schema ? match : `https://${nonSchemaUrl}`
	);
};

/**
 * Generate a unique id.
 * @returns {string} The generated unique id.
 */
export const uid = () => {
	// Way 1: return Date.now().toString(36) + Math.random().toString(36).substr(5);
	return crypto.randomUUID();
};