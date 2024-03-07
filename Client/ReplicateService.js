import replicate from "replicate";

const ReplicateService = {
  async storeImage(uri) {
    await replicate.store(uri, { key: "image" });
  },

  async restoreImage() {
    const uri = await replicate.restore("image");
    return uri;
  },
};

export default ReplicateService;
