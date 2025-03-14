import { useEffect, useState } from "react";
import Detail from "../components/detail/Detail";
import DetailSkeleton from "../components/detail/DetailSkeleton";
import type { ImageInfo } from "../interface/detail";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function Result() {
  const [loadedImage, setLoadedImage] = useState<HTMLImageElement | null>(null);
  const [imageLoading, setImageLoading] = useState(true);

  const { data, isLoading, error } = useQuery<ImageInfo>({
    queryKey: ["imageInfo"],
    queryFn: async () => {
      const response = await axios.get("https://picsum.photos/id/0/info");
      return response.data;
    },
  });
  useEffect(() => {
    if (!data) return;

    const image = new Image();
    image.src = data.download_url;

    image.onload = () => {
      setLoadedImage(image);
      setImageLoading(false);
    };

    image.onerror = () => {
      setImageLoading(true);
      setLoadedImage(null);
    };

    return () => {
      image.onload = null;
      image.onerror = null;
    };
  }, [data]);
  if (isLoading || !data || imageLoading) return <DetailSkeleton />;
  if (error) return <div>에러</div>;

  return <Detail data={data} loadedImage={loadedImage} />;
}
