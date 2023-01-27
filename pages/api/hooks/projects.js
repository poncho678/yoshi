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
    console.log("query", req.query);
    console.log("newslug", slug);
    await res.revalidate(req.query.path);
    await res.revalidate(`/`);
    return res.status(200).json({ msg: "Project Revalidated" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ err: "Something broke.." });
  }
};

export default handler;
