// components/ui/spline.js

const { Suspense, lazy, Component, memo } = React;
const Spline = lazy(() => import('@splinetool/react-spline'));

class SplineErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.warn("Spline component error caught (likely removeChild):", error);
    }

    render() {
        if (this.state.hasError) {
            return null;
        }
        return this.props.children;
    }
}

const SplineScene = memo(function SplineScene({ scene, className }) {
    return (
        <div className={className} style={{ position: 'relative', width: '100%', height: '100%' }}>
            <SplineErrorBoundary>
                <Suspense
                    fallback={
                        <div className="w-full h-full flex items-center justify-center">
                            <span className="loader"></span>
                        </div>
                    }
                >
                    <Spline scene={scene} />
                </Suspense>
            </SplineErrorBoundary>
        </div>
    );
});
