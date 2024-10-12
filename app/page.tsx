// 동적 주소 처리 방식
// 1. query string / search params 주소?key=value&key2=value2 (url encoded / encoded url)
// 2. url params

import dayjs from "dayjs";
import { PrevButton } from "./PrevButton";

// locahost:3000/?targetDt=20241009

type Props = {
  searchParams: {
    targetDt?: string;
  }
}

const today = dayjs().subtract(1, 'day').format('YYYYMMDD'); // 오늘 보다 1일 이전 날짜를 YYYYMMDD 형식으로 출력

export default async function Home({ searchParams: { targetDt = today } }:Props) {
  // 데이터 로드
  const key = '3801c7437930ca3e5a37fd86b59383ea';
  // const targetDt = '20241011';
  const baseUrl = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json';
  const url = `${baseUrl}?key=${key}&targetDt=${targetDt}`;

  // 요청
  const response = await fetch(url);
  // json 파싱
  const json = await response.json();

  console.log( JSON.stringify( json, null, 2 ) );

  const char = "a"; // string
  // const char = "a" "b"; // 문법적으로 안됨
  const chars = ["a", "b", "c"]; // string[]

  // return 할 수 있는 유형
  // 1. Primitive 타입 데이터 (number, string, boolean)
  // 2. JSX Node
  // 3. 1 혹은 2로 구성된 배열
  // Array.map
  return [
    <div className="w-[500px] mx-auto">
      <div className="flex justify-between">
        {/* <a href={'?targetDt=' + dayjs(targetDt).subtract(1, 'day').format('YYYYMMDD')}>이전</a> */}
        {/* <Link></Link> */}
        {/* <button>이전</button> */}
        <PrevButton targetDt={targetDt}/>
        {dayjs(targetDt).format('YYYY년 MM월 DD일')}
        <button>다음</button>
      </div>
      <ol className="divide-y *:py-4 mt-4">
        {
          json.boxOfficeResult.dailyBoxOfficeList.map((item: any) => (
            <li key={item.rank}>{item.rank}위 - {item.movieNm}</li>
          ))
          // [
          //   <li>{json.boxOfficeResult.dailyBoxOfficeList[0].movieNm}</li>,
          //   <li>{json.boxOfficeResult.dailyBoxOfficeList[1].movieNm}</li>,
          //   <li>{json.boxOfficeResult.dailyBoxOfficeList[2].movieNm}</li>
          // ]
        }
      </ol>
      {/* <pre><code>{JSON.stringify(json, null, 2)}</code></pre> */}
    </div>
  ];
}