import { useEffect } from "react";
import Detail from "../components/detail/Detail";
import type { ImageInfo } from "../interface/detail";
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function Result() {
  const { data, isLoading, error } = useQuery<ImageInfo>({
    queryKey: ['imageInfo'],
    queryFn: async () => {
      const response = await axios.get('https://picsum.photos/id/0/info');
      return response.data;
    }
  });
  useEffect(() => {
    if(data) {
      console.log("Test Data", data)
    }
  }, [data])
  if (isLoading || !data) return <div>로딩중...</div>;
  if (error) return <div>에러</div>;
  return(
    <Detail data={data}/>
  )
}