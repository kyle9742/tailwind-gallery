import { useEffect, useState } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

function App() {
  const [images, setImages] = useState([]);
  const [term, setTerm] = useState("dog");

  useEffect(() => {
    // fetch : data 를 받아오는 함수
    // .then : 전에 거를 실행하고 나서
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo`
    )
      .then((res) => res.json())
      .then((data) => setImages(data.hits))
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <>
      <div className="container mx-auto my-7">
        <ImageSearch setTerm={setTerm} />
        {images.length === 0 && (
          <h1 className="text-5xl text-center mt-32">이미지가 없습니다.</h1>
        )}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
