export default function cloudinaryLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  const params = ["f_auto", "c_limit", `w_${width}`, `q_${quality || "auto"}`];
  const serverUrl = "https://react-pdl-01.vercel.app";
  return `${serverUrl}/${src}`;
}