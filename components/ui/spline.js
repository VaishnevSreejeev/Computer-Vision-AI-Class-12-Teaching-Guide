// components/ui/spline.js

const { Suspense, lazy } = React;
const Spline = lazy(() => import('@splinetool/react-spline'));

function SplineScene({ scene, className }) {
    return (
        <Suspense
            fallback={
                <div className="w-full h-full flex items-center justify-center">
                    <span className="loader"></span>
                </div>
            }
        >
            <Spline
                scene={scene}
                className={className}
            />
        </Suspense>
    );
}
