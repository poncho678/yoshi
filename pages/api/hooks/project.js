import { SIGNATURE_HEADER_NAME, isValidSignature } from "@sanity/webhook";

const handler = async (req, res) => {
  try {
    const signature = req.headers[SIGNATURE_HEADER_NAME].toString();
    if (
      !isValidSignature(
        JSON.stringify(req.body),
        signature,
        process.env.NEXT_PUBLIC_SANITY_WEBHOOK_SECRET
      )
    ) {
      return res.status(401).json({ msg: "Invalid Request" });
    }
    const { slug } = req.body;
    await res.revalidate(`/projects/${slug}`);
    await res.revalidate("/");
    return res.status(200).json({ msg: "Project Revalidated" });
  } catch (error) {
    res.status(500).json({ err: "Something broke.." });
  }
};

export default handler;
