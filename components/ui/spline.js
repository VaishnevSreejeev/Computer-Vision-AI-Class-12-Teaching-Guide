// components/ui/spline.js

const { Suspense, lazy } = React;
const Spline = lazy(() => import('@splinetool/react-spline'));

function SplineScene({ scene, className }) {
    return (
        <div className={className} style={{ position: 'relative', width: '100%', height: '100%' }}>
            <Suspense
                fallback={
                    <div className="w-full h-full flex items-center justify-center">
                        <span className="loader"></span>
                    </div>
                }
            >
                <Spline scene={scene} />
            </Suspense>
        </div>
    );
}
