interface PageLoaderProps {
    show: Boolean;
}

const PageLoader = (props: PageLoaderProps) => {
    return (
        <div className={`bg-bgContent absolute top-0 left-0 right-0 bottom-0 z-50 transition-all duration-500 ease-in-out animate__animated pageLoader animate__fadeOut ${props.show ? 'visible' : 'invisible'}`}>
            <div className="loaderTranslate relative m-auto top-2/4 w-28 h-28 before:content[''] before:block before:pt-full">
                <svg className="circleLoader m-auto right-0 left-0 bottom-0 top-0 absolute w-full h-full" viewBox="25 25 50 50">
                    <circle className="rotatePath" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" />
                </svg>
            </div>
        </div>
    );
}

export default PageLoader;