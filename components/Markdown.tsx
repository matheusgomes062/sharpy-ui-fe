import { remark } from "remark";
import html from "remark-html";

export default function Markdown({ content }: { content: string }) {
  const processedContent = remark().use(html).processSync(content).toString();
  return <div dangerouslySetInnerHTML={{ __html: processedContent }} />;
}
