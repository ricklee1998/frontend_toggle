import { useEffect, useState } from 'react';
import Detail from '../components/detail/Detail';
import DetailSkeleton from '../components/detail/DetailSkeleton';
import { useImageStore } from '../store/useImageStore';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import '../components/detail/Detail.scss';

export default function Result() {
  const [loadedImage, setLoadedImage] = useState<HTMLImageElement | null>(null);
  const { imageInfo, setImageInfo } = useImageStore();

  const { data, isLoading, error } = useQuery({
    queryKey: ['imageInfo'],
    queryFn: async () => {
      const response = await axios.get('https://picsum.photos/id/0/info');
      const data = response.data;
      setImageInfo(data);
      return data;
    },
    enabled: !imageInfo, // 기존 데이터가 있을 시 api skip
    initialData: imageInfo, // 기존 데이터 초기값 설정
  });

  useEffect(() => {
    if (!data || !imageInfo) return;

    const image = new Image();
    image.src = data.download_url;

    image.onload = () => {
      setLoadedImage(image);
    };

    image.onerror = () => {
      setLoadedImage(null);
    };

    return () => {
      image.onload = null;
      image.onerror = null;
    };
  }, [data, imageInfo]);

  if (isLoading || !data) return <DetailSkeleton />;
  if (error) return <div>에러</div>;

  return (
  <div className="result-background">
    <Detail data={data} loadedImage={loadedImage} />
  </div>)
}
