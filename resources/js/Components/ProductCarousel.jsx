import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function ProductCarousel({ children }) {
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
                // infinite
                // itemClass="h-full"
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
                        items: 6,
                        partialVisibilityGutter: 0,
                    },
                    desktop2: {
                        breakpoint: {
                            max: 1208,
                            min: 1024,
                        },
                        items: 4.5,
                        partialVisibilityGutter: 0,
                    },
                    mobile: {
                        breakpoint: {
                            max: 1024,
                            min: 0,
                        },
                        items: 1.8,
                        partialVisibilityGutter: 0,
                    },
                    tablet: {
                        breakpoint: {
                            max: 1023,
                            min: 464,
                        },
                        items: 3.5,
                        partialVisibilityGutter: 0,
                    },
                    tablet2: {
                        breakpoint: {
                            max: 719,
                            min: 464,
                        },
                        items: 3,
                        partialVisibilityGutter: 0,
                    },
                    tablet3: {
                        breakpoint: {
                            max: 618,
                            min: 464,
                        },
                        items: 2.7,
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
                autoPlay={false}
            >
                {children}
            </Carousel>
        </div>
    );
}
