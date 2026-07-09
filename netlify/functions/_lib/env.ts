export function requireEnv<T extends readonly string[]>(
  ...names: T
): { [K in T[number]]: string } {
  const missing = names.filter((name) => !process.env[name]);

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variable${missing.length > 1 ? 's' : ''}: ${missing.join(', ')}`,
    );
  }

  return Object.fromEntries(names.map((name) => [name, process.env[name] as string])) as {
    [K in T[number]]: string;
  };
}
