export type DomainRegistrar = {
  check(domains: string[]): Promise<Array<{ domain: string; available: boolean | null; note?: string }>>;
};

export function getRegistrar(): DomainRegistrar {
  return {
    async check(domains: string[]) {
      if (!process.env.DOMAIN_PROVIDER) {
        return domains.map((domain) => ({ domain, available: null, note: "registrar not connected" }));
      }

      return domains.map((domain) => ({
        domain,
        available: true,
        note: "provider connected",
      }));
    },
  };
}
