import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function CustomCarousel() {
    return (
        <div className="flex justify-between ">
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                containerClass="w-full h-full"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass="h-full"
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024,
                        },
                        items: 1,
                        partialVisibilityGutter: 0,
                    },
                    mobile: {
                        breakpoint: {
                            max: 1024,
                            min: 0,
                        },
                        items: 1,
                        partialVisibilityGutter: 0,
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464,
                        },
                        items: 1,
                        partialVisibilityGutter: 0,
                    },
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={true}
                sliderClass="h-full"
                slidesToSlide={1}
                swipeable
                autoPlay={true}
            >
                <img
                    src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2024/6/13/233a4d3e-c11b-4a1e-bb23-8a323d625d3b.jpg.webp?ect=4g"
                    alt="image 2"
                    className="h-full w-full object-cover rounded-xl"
                />
                <img
                    src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2024/6/3/26b0a311-394c-4bb9-98ed-533868bf15db.jpg.webp?ect=4g"
                    alt="image 3"
                    className="h-full w-full object-cover rounded-xl"
                />
                <img
                    src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2024/6/11/02eb8372-0d89-481c-9b52-e988624552ab.jpg.webp?ect=4g"
                    alt="image 2"
                    className="h-full w-full object-cover rounded-xl"
                />
                <img
                    src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2024/6/3/26b0a311-394c-4bb9-98ed-533868bf15db.jpg.webp?ect=4g"
                    alt="image 3"
                    className="h-full w-full object-cover rounded-xl"
                />
            </Carousel>
        </div>
    );
}
