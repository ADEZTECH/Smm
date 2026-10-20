export type Provisioner = {
  createSite(opts: { name: string; plan: string }): Promise<{ ok: true; id: string }>; 
};

export function getProvisioner(): Provisioner {
  return {
    async createSite({ name, plan }) {
      if (!process.env.PROVISIONING_PROVIDER) {
        throw new Error("Provisioning provider not configured");
      }

      return { ok: true, id: `site-${name}-${plan}` };
    },
  };
}
